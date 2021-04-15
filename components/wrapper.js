import EmbedContext from './youtube-embed-context'
import { useState } from 'react'

const Wrapper = ({ children }) => {
  const [timestamp, setTimestamp] = useState('00:00')
  return (
    <EmbedContext.Provider value={{ value: timestamp, updateValue: setTimestamp }}>
      {children}
    </EmbedContext.Provider>
  )
}

export default Wrapper