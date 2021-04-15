import React, { useContext, useRef } from 'react'
import { Box, Container } from 'theme-ui'
import EmbedContext from './youtube-embed-context'
import YouTubePlayer from 'react-player/youtube'

const Embed = props => {
  return (
    <Box
      {...props}
      sx={{
        width: '100%',
        maxWidth: 'layout',
        mx: 'auto',
        height: 0,
        paddingBottom: 100 / (16 / 9) + '%',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 'extra',
        boxShadow: 'card',
        px: 3,
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
    <Embed>
      <YouTubePlayer ref={player} url={url} controls={true} pip={true} />
    </Embed>
  )
}

export default YouTubeEmbed
