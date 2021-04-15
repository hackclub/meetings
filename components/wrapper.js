import EmbedContext from './youtube-embed-context'
import { useState } from 'react'

const Wrapper = ({ children }) => {
  const [timestamp, setTimestamp] = useState(0)
  return (
    <EmbedContext.Provider
      value={{ secondsToSeek: timestamp, updateSecondsToSeek: setTimestamp }}
    >
      {children}
    </EmbedContext.Provider>
  )
}

export default Wrapper
