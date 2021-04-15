import React, { useContext } from 'react'
import EmbedContext from './youtube-embed-context'
import { Box } from 'theme-ui'

const Timestamp = ({ children }) => {
  const { secondsToSeek, updateSecondsToSeek } = useContext(EmbedContext)
  const seconds = formatTimestamp(children.toString())
  return (
    <Box
      as="button"
      sx={{
        appearance: 'none',
        border: 0,
        p: 0,
        background: 'transparent',
        font: 'inherit',
        cursor: 'pointer',
        color: 'var(--meeting-color-2)',
        fontWeight: 'bold',
        textDecoration: 'underline',
        textUnderlinePosition: 'under',
        transition: '0.125s color ease-in-out',
        ':hover,:focus': {
          color: 'var(--meeting-color-1)'
        }
      }}
      onClick={e => {
        updateSecondsToSeek(seconds)
      }}
    >
      {children}
    </Box>
  )
}

const formatTimestamp = text => {
  // timestamps are formatted like xx:xx, for example 13:47.
  // the youtube iframe api requires it to be in seconds
  // this converts the timestamp string to seconds
  const timestampSplit = text?.split(':')
  if (!Array.isArray(timestampSplit)) return 0
  const seconds = timestampSplit[2]
    ? +timestampSplit[0] * 60 * 60 +
      +timestampSplit[1] * 60 +
      +timestampSplit[2]
    : +timestampSplit[0] * 60 + +timestampSplit[1]
  return seconds
}

export default Timestamp
