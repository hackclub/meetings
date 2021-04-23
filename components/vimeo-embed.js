import React, { useContext, useState, useRef } from 'react'
import { Box, Button } from 'theme-ui'
import EmbedContext from './embed-context'
import VimeoPlayer from 'react-player/vimeo'
import { CornerDownLeft, CornerUpRight } from 'react-feather'

// YouTube's AI moderator decided that the Splatter Paint meeting recording has graphic content,
// and they automatically age-restricted it, which means I can't embed it on this site.
// ...welcome to the future. I couldn't find a way around it, so I had to upload the video
// to Vimeo. I don't expect this component to be used for anything other than the Splatter Paint Meeting,
// but it's here as a backup in case your meeting recording can't uploaded to YouTube for whatever reason.

const Embed = ({ docked = false, ...props }) => {
  return (
    <Box
      {...props}
      sx={{
        height: 0,
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 'extra',
        ...(docked
          ? {
              boxShadow: 'elevated',
              left: [2, 3],
              right: [2, 'auto'],
              bottom: 3,
              '@supports (padding: calc(env(safe-area-inset-bottom)))': {
                bottom: 'calc(16px + env(safe-area-inset-bottom))'
              },
              position: 'fixed',
              // On mobile, video should be full width minus gutters, & the same 16/9 aspect ratio
              // Larger than mobile, the video will be in the lower left corner
              // The minimum size is 256px, which at 16/9 is 144px, which is the paddingBottom
              // The responsive size in the middle is 33vw, then max is 512px, with respective pB
              width: ['calc(100vw - 32px)', 'clamp(256px, 33vw, 512px)'],
              paddingBottom: [
                100 / (16 / 9) + '%',
                'clamp(144px, 18.5625vw, 288px)'
              ]
            }
          : {
              boxShadow: 'card',
              maxWidth: 'copyPlus',
              mx: 'auto',
              mb: 3,
              width: '100%',
              paddingBottom: 100 / (16 / 9) + '%'
            }),
        iframe: {
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          bottom: 0,
          left: 0,
          border: 0
        }
      }}
    />
  )
}

const VimeoEmbed = ({ url }) => {
  const player = useRef(null)
  const [docked, setDocked] = useState(false)

  const seekToTimestamp = seconds => {
    const internalPlayer = player.current.getInternalPlayer()
    internalPlayer.play()
    player.current.seekTo(seconds)
  }

  const { secondsToSeek, updateSecondsToSeek } = useContext(EmbedContext)

  if (player?.current && secondsToSeek !== 0) {
    seekToTimestamp(secondsToSeek)
    updateSecondsToSeek(0)
  }

  return (
    <>
      <Embed docked={docked}>
        <VimeoPlayer ref={player} url={url} controls pip />
      </Embed>
      <Box sx={{ textAlign: 'center', pb: 3 }}>
        <Button
          onClick={() => setDocked(d => !d)}
          className="dock"
          sx={{ lineHeight: 'title' }}
        >
          {docked ? <CornerUpRight /> : <CornerDownLeft />}
          {docked ? 'Undock' : 'Dock'} video
        </Button>
      </Box>
    </>
  )
}

export default VimeoEmbed
