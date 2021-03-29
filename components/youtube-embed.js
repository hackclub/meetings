import { Box, Container } from 'theme-ui'
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

const YouTubeEmbed = ({ url }) => (
  <Embed>
    <YouTubePlayer url={url} controls={true} />
  </Embed>
)

export default YouTubeEmbed