import Head from 'next/head'
import Meta from '@hackclub/meta'
import { Container, Box, Heading, Link as A } from 'theme-ui'
import { Styled as Content } from '../components/content'
import Nav from '../components/nav'
import Footer from '../components/footer'

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
          name="Meetings"
          description={
            author?.name && date ? `Run by ${author} on ${date}.` : ''
          }
          image={img}
        />
      )}
      <Nav />
      <Box
        as="header"
        sx={{
          bg: 'sheet',
          textAlign: 'center',
          px: 3,
          pb: [3, 4, 5],
          mb: [3, 4]
        }}
      >
        <Heading
          as="h1"
          variant="title"
          mb={2}
          sx={t => t.util.gxText(colors.color1, colors.color2)}
        >
          {title}
        </Heading>
        <Heading
          as="h2"
          variant="subtitle"
          sx={{
            mt: 3,
            color: 'secondary',
            maxWidth: [null, 'copyPlus'],
            mx: 'auto'
          }}
        >
          Run on {date} by {author}.
        </Heading>
      </Box>
      <Container
        as={Content}
        variant="copy"
        sx={t => ({
          pt: 3,
          pb: [4, 5],
          'a, .timestamp': {
            color: colors.color2,
            transition: '0.125s color ease-in-out',
            ':hover,:focus': {
              color: colors.color1
            }
          },
          '.dock': {
            bg: colors.color1,
            backgroundImage: t.util.gx(colors.color1, colors.color2)
          }
        })}
      >
        {children}
      </Container>
      <Footer />
    </>
  )
}

const getColors = title => {
  const data = require('../data.json')
  const meetings = Object.entries(data['meetings'])
  const meetingIndex = meetings.findIndex(meeting => meeting[1].title === title)
  const colors = Object.entries(data['colors'])
  return colors[meetingIndex % colors.length][1]
}

export default Letterhead
