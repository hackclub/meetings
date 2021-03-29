import Head from 'next/head'
import Meta from '@hackclub/meta'
import { Container, Box, Heading, Link as A } from 'theme-ui'
import { Styled as Content } from '../components/content'

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
}) => (
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
      <Heading as="h1" variant="title" color="primary" mb={2}>
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

export default Letterhead