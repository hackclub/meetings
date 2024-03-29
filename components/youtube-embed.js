import React, { useContext, useState, useRef } from 'react'
import { Box, Button } from 'theme-ui'
import EmbedContext from './embed-context'
import YouTubePlayer from 'react-player/youtube'
import { CornerDownLeft, CornerUpRight } from 'react-feather'

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

const YouTubeEmbed = ({ url }) => {
  const player = useRef(null)
  const [docked, setDocked] = useState(false)

  const seekToTimestamp = seconds => {
    const internalPlayer = player.current.getInternalPlayer()
    internalPlayer.playVideo()
    internalPlayer.pauseVideo()
    player.current.seekTo(seconds)
    internalPlayer.playVideo()
  }

  const { secondsToSeek, updateSecondsToSeek } = useContext(EmbedContext)

  if (player?.current && secondsToSeek !== 0) {
    seekToTimestamp(secondsToSeek)
    updateSecondsToSeek(0)
  }

  return (
    <>
      <Embed docked={docked}>
        <YouTubePlayer ref={player} url={url} controls pip />
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

export default YouTubeEmbed
