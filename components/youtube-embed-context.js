import { createContext } from 'react'

const EmbedContext = createContext({
  secondsToSeek: 0,
  updateSecondsToSeek: () => {}
})

export default EmbedContext
