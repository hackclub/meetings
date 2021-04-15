import { Box } from 'theme-ui'
import Image from 'next/image'

// stolen from hackclub/v3

/*
 * Use this component inside a container with CSS:
 * `position: relative; overflow: hidden;`
 * then pass width/height/alt/src as usual
 * (you can pass `gradient` valueless to avoid gradient)
 */

const BGImg = ({
  gradient = 'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.95))',
  ...props
}) => (
  <Box
    sx={{
      position: 'absolute',
      display: 'block',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 0,
      '&:after': {
        content: '""',
        position: 'absolute',
        backgroundImage: gradient,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      },
      '> div': { height: '100%', width: '100%' },
      img: {
        objectFit: 'cover',
        objectPosition: 'center',
        filter: 'brightness(80%) blur(2px)'
      },
      '~ *': { position: 'relative' }
    }}
  >
    <Image priority={true} layout="responsive" {...props} />
  </Box>
)

export default BGImg
