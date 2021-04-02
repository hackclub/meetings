import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  Link as A,
  Card,
  Grid
} from 'theme-ui'
import MeetingList from '../components/meeting-list'
import Footer from '../components/footer'
import Nav from '../components/nav'
import BGImg from '../components/background-image'
import Intro from '../components/intro'

export default function App() {
  return (
    <>
      <Nav />
      <Box
        as="header"
        sx={{
          bg: 'dark',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <BGImg
          gradient="linear-gradient(rgba(0,0,0,0.25),rgba(0,0,0,0.625))"
          src="https://cloud-4h4lqhyqp-hack-club-bot.vercel.app/0screen_shot_2021-03-30_at_12.29.03_pm.png"
          width={2048}
          height={1170}
          alt="Screenshot of a Hack Club meeting running the Sound Galaxy workshop"
        />
        <Container
          variant="narrow"
          duration={768}
          sx={{ py: [5, 6], color: 'white', textShadow: 'card' }}
        >
          <Heading as="h1" variant="title" color="primary" mb={2}>
            Hack Club Meetings
          </Heading>
          <Container variant="copy">
            <Heading as="h2" variant="subtitle" sx={{ mt: 3, color: 'white' }}>
              A collection of real <A href="https://hackclub.com/">Hack Club</A>{' '}
              meetings, paired with everything you need to run them in your own
              club.
            </Heading>
          </Container>
        </Container>
      </Box>

      <Container variant="copy">
        <Text
          as="div"
          sx={{
            fontSize: 2,
            mt: '32px'
          }}
        >
          <Intro />
        </Text>
      </Container>

      <Container>
        <MeetingList />
      </Container>

      <Footer />
    </>
  )
}
