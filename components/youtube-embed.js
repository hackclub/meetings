import { Card } from 'theme-ui'

const YouTubeEmbed = (embedId) => (
  <Card variant="primary">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded Video"
    />
  </Card>
)

export default YouTubeEmbed