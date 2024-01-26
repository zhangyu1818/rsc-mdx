import { MDX } from 'rsc-mdx'

const markdown = `
# h1

lorem ipsum

## h2

lorem ipsum
`
export default async function Page() {
  return (
    <main className='min-h-screen p-24'>
      <MDX source={markdown} />
    </main>
  )
}
