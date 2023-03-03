import { Heading } from '@chakra-ui/react'
import { Head } from '../../components/layout/Head'

export default function Home() {
  return (
    <>
      <Head />

      <main>
        <Heading as="h2">Hello!</Heading>
        <br />
        <p>Some text.</p>
      </main>
    </>
  )
}
