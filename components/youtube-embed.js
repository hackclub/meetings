import React, { useContext, useState, useRef } from 'react'
import { Box, Button } from 'theme-ui'
import EmbedContext from './youtube-embed-context'
import YouTubePlayer from 'react-player/youtube'
// import { CornerDownLeft } from 'react-feather'
import {Reply} from 'supercons'

const Embed = ({docked = false, ...props}) => {
  return (
    <Box
      {...props}
      sx={{
        height: 0,
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 'extra',
        ...(docked ? {
          boxShadow: 'elevated',
          left: [2, 3],
          right: [2, 'auto'],
          bottom: 3,
          position: 'fixed',
          // On mobile, video should be full width minus gutters, & the same 16/9 aspect ratio
          // Larger than mobile, the video will be in the lower left corner
          // The minimum size is 256px, which at 16/9 is 144px, which is the paddingBottom
          // The responsive size in the middle is 33vw, then max is 512px, with respective pB
          width: ['calc(100vw - 32px)',  'clamp(256px, 33vw, 512px)'],
          paddingBottom: [100 / (16 / 9) + '%',  'clamp(144px, 18.5625vw, 288px)']
        } : {
          boxShadow: 'card',
          maxWidth: 'copyPlus',
          mx: 'auto',
          mb:3,
          width: '100%',
          paddingBottom: 100 / (16 / 9) + '%',
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
    const ytPlayer = player.current.getInternalPlayer()
    ytPlayer.playVideo()
    ytPlayer.pauseVideo()
    player.current.seekTo(seconds)
    ytPlayer.playVideo()
  }

  const { secondsToSeek, updateSecondsToSeek } = useContext(EmbedContext)

  if (player?.current && secondsToSeek !== 0) {
    seekToTimestamp(secondsToSeek)
    updateSecondsToSeek(0)
  }

  return (
    <>
    <Embed docked={docked}>
      <YouTubePlayer ref={player} url={url} controls={true} pip={true} />
    </Embed>
    <Box sx={{textAlign:'center',pb:2, svg:{transform:'scaleY(-1)'}}}>
      <Button variant="outline" onClick={() => setDocked(d => !d)}>
        <Reply />
        {docked ? 'Undock' : 'Dock'} video</Button>
        </Box>
      </>
  )
}

export default YouTubeEmbed
