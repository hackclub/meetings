import React, { useContext } from 'react'
import EmbedContext from './youtube-embed-context'

const Timestamp = ({ children }) => {
  const { value, updateValue } = useContext(EmbedContext)
  return (
    <a onClick={(e) => {
      console.log(value, children, 'clicked')
      updateValue(children)
    }}>
      <span>{children}</span>
    </a>
  )
}

export default Timestamp