import fs from 'fs'
import md from '@hackclub/markdown'
import Error from 'next/error'
import Header from '../components/header'
import Authors from '../components/authors'
import Content from '../components/content'
import Footer from '../components/footer'
import { Container, Button } from 'theme-ui'

const Page = ({ slug, data, html }) => {
  if (!slug) return <Error statusCode={404} />
  return (
    <>
      <Header
        title={data.title}
        includeMeta
      >
        <Authors text={data.author} />
      </Header>
      <Container variant="copy" as="main">
        <Content html={html} />
      </Container>
      <Footer />
    </>
  )
}

export const getStaticPaths = () => {
  const slugs = fs.readdirSync('./meeting_content').filter(path => !['img', 'lib', 'README.md'].includes(path))
  //console.log(slugs)
  const paths = slugs.map(slug => {
    slug = slug.slice(0, -3)
    return { params: { slug } }
  })
  console.log(paths)
  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const { slug } = params
  const text = fs.readFileSync(`./meeting_content/${slug}.md`, 'utf-8')
  const html = await md(text, 'README.MD', '/', false)

  const meetingData = require('../data.json')
  console.log(meetingData.meetings)
  const data = meetingData.meetings[slug]
  console.log(data)

  return { props: { slug, data, html } }
}

export default Page