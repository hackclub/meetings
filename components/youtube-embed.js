import { Card, Container } from 'theme-ui'
import YouTube from 'react-youtube'

const YouTubeEmbed = ({ embedId }) => {
  const opts = {
    width: '100%'
  }
  return (
    <Container variant="container">
      <YouTube videoId={embedId} opts={opts} />
    </Container>
  )
}

export default YouTubeEmbed