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
import Intro from '../components/intro.mdx'
import React, { useEffect, useRef, useState } from 'react';

export default function App() {
  const [boxHeight, setBoxHeight] = useState("0")
  const [boxOpened, setBoxOpened] = useState(false)
  return (
    <>
      <Nav />
      <Box
        as="header"
        sx={{
          bg: 'dark',
          textAlign: 'center',
          position: 'relative',
          overflow: '',
          maxHeight: '400px'
        }}
      >
        <BGImg
          gradient="linear-gradient(rgba(0,0,0,0.25),rgba(0,0,0,0.625))"
          src="https://cloud-4h4lqhyqp-hack-club-bot.vercel.app/0screen_shot_2021-03-30_at_12.29.03_pm.png"
          width={2048}
          height={1170}
          alt="Screenshot of a Hack Club meeting running the Sound Galaxy workshop"
        />
        <Container duration={768} variant="wide" sx={{ textShadow: 'card', mx: '8px!important', px: '100px' }}>
          <Grid gap={2} columns={['1', '1', '2fr 1fr']}>
            <Box sx={{py: [5, 6]}}>
              <Heading as="h1" variant="title" color="white" mb={2} sx={{ textAlign: 'left'}}>
                Hack Club Meetings
              </Heading>
              <Box sx={{ textAlign: 'left', maxWidth: '80%' }}>
                <Heading
                  as="h2"
                  variant="subtitle"
                  sx={{ mt: 3, color: 'white' }}
                >
                  A collection of real{' '}
                  <A href="https://hackclub.com/">Hack Club</A> meetings, paired
                  with everything you need to run them in your own club.
                </Heading>
              </Box>
            </Box>
            <Card
            onClick={()=> setBoxOpened(true)}
              sx={{
                my: [4, '78px'],
                display: ['none', 'none', 'block'],
                p: '24px!important',
                px: '24px!important',
                textShadow: 'none',
                textAlign: 'left',
                
                maxHeight: !boxOpened ? '300px' : `calc(400px + ${boxHeight}px - 78px + 32px)`,
                background: 'white',
                color: 'black',
                overflow: 'scroll',
                mx: '10px',

              }}
            >
              <Intro />
            </Card>
          </Grid>
        </Container>
      </Box>

      <Container variant="wide" sx={{px: '100px'}}>
        <MeetingList setBoxHeight={setBoxHeight} />
      </Container>

      <Footer />
    </>
  )
}
