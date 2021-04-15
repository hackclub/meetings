import { Card, Image, Box, Heading, Link, Grid } from 'theme-ui'
const data = require('../data.json')

const Meeting = ({ name, img, slug, color1, color2 }) => (
  <Link as="a" href={`/${slug}`} sx={{ textDecoration: 'none' }} passHref>
    <Card
      variant="interactive"
      sx={{
        backgroundImage: t => t.util.gx(color1, color2),
        color: 'white',
        p: [0, 0],
        lineHeight: 0,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box sx={{ p: 3, lineHeight: 'body' }}>
        <Heading as="h3" sx={{ my: 1 }}>
          {name}
        </Heading>
      </Box>
      <Box
        sx={{
          width: '100%',
          mt: 'auto',
          ...(img && { height: 0, paddingBottom: '50%' }),
          '> img': { objectFit: 'cover', objectPosition: 'center' },
          '@media print': { display: 'none' }
        }}
      >
        <Image alt={`${name} demo`} src={img} loading="lazy" />
      </Box>
    </Card>
  </Link>
)

const MeetingList = () => {
  // TODO: get cycling color here
  return (
    <Grid
      gap={[3, 4]}
      columns={[null, 2, 3]}
      sx={{
        my: [3, 4],
        '@media print': { gridTemplateColumns: 'repeat(2,1fr)' }
      }}
    >
      {Object.keys(data['meetings']).map((meeting, i) => {
        const meetingData = data['meetings'][meeting]
        const colors = getColors(i)
        return (
          <Meeting
            name={meetingData.title}
            img={meetingData.img}
            slug={meetingData.slug}
            color1={colors.color1}
            color2={colors.color2}
            key={i}
          />
        )
      })}
    </Grid>
  )
}

const getColors = meetingIndex => {
  const data = require('../data.json')
  const colors = Object.entries(data['colors'])
  return colors[meetingIndex % colors.length][1]
}

export default MeetingList
