import React, { useContext } from 'react'
import EmbedContext from './youtube-embed-context'
import { Box } from 'theme-ui'

const Timestamp = ({ children }) => {
  const { secondsToSeek, updateSecondsToSeek } = useContext(EmbedContext)
  const seconds = formatTimestamp(children.toString())
  return (
    <Box
      as="button"
      className="timestamp"
      sx={{
        appearance: 'none',
        border: 0,
        p: 0,
        background: 'transparent',
        font: 'inherit',
        cursor: 'pointer',
        fontWeight: 'bold',
        textDecoration: 'underline',
        textUnderlinePosition: 'under'
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
