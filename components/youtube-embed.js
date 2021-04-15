import React, { useContext, useRef } from 'react'
import { Box, Container } from 'theme-ui'
import EmbedContext from './youtube-embed-context'
import YouTubePlayer from 'react-player/youtube'

const Embed = props => {
  const opts = {
    width: '100%'
  }
  return (
    <Container variant="container">
      <Box
        {...props}
        sx={{
          width: '100%',
          maxWidth: 'layout',
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
    </Container>
  )
}

const YouTubeEmbed = ({ url }) => {
  const player = useRef(null)

  const seekToTimestamp = (timestamp) => {
    const formattedTimestamp = formatTimestamp(timestamp)
    player.current.seekTo(formattedTimestamp)
  }

  const { value, updateValue } = useContext(EmbedContext)

  if (player?.current && value !== '') {
    seekToTimestamp(value)
    updateValue('')
  }

  return (
    <Embed>
      <YouTubePlayer ref={player} url={url} controls={true} pip={true} />
    </Embed>
  )
}

const formatTimestamp = (timestamp) => {
  // timestamps are formatted like xx:xx, for example 13:47. but the youtube iframe api requires it to be in seconds
  // this converts the timestamp string to seconds
  const timestampSplit = timestamp.split(':')
  const seconds = timestampSplit[2]
    ? (+timestampSplit[0]) * 60 * 60 + (+timestampSplit[1]) * 60 + (+timestampSplit[2])
    : (+timestampSplit[0]) * 60 + (+timestampSplit[1])
  return seconds
}

export default YouTubeEmbed