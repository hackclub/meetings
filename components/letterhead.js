import Head from 'next/head'
import Meta from '@hackclub/meta'
import { Container, Box, Heading, Link as A } from 'theme-ui'
import { Styled as Content } from '../components/content'
import theme from '@hackclub/theme'

const Letterhead = ({
  title,
  author,
  date,
  img,
  path,
  includeMeta = true,
  hideGitHub = false,
  children,
  ...props
}) => {
  const colors = getColors(title)
  
  return (
    <>
      {includeMeta && (
        <Meta
          as={Head}
          title={title}
          description={
            author?.name && date
              ? `Run by ${author} on ${date}.`
              : ''
          }
          image={img}
        />
      )}
      <Box
        as="header"
        sx={{
          bg: 'sheet',
          textAlign: 'center',
          px: 3,
          pb: [3, 4],
          mb: [3, 4]
        }}
      >
        <Heading as="h1" variant="title" mb={2} sx={t => t.util.gxText(colors.color1, colors.color2)}>
          {title}
        </Heading>
        <Container variant="copy">
          <Heading
            as="h2"
            variant="subtitle"
            sx={{ mt: 3, color: 'secondary' }}
          >
            By {author}. Run on {date}.
          </Heading>
        </Container>
      </Box>
      <Container as={Content} variant="copy" pt={3} pb={[4, 5]}>
        {children}
      </Container>
    </>
  )
}

const getColors = (title) => {
  const data = require('../data.json')
  const meetings = Object.entries(data['meetings'])
  const meetingIndex = meetings.findIndex(meeting => meeting[1].title === title)
  const colors = Object.entries(data['colors'])
  return colors[meetingIndex % colors.length][1]
}

export default Letterhead