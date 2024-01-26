# rsc-mdx

rsc-mdx is an ultra-lightweight library specifically designed for React Server Components, offering a minimalistic wrapper around `@mdx-js/mdx`. With rsc-mdx, you can effortlessly render MDX content on the server side, while also supporting custom components and plugin configurations to meet a variety of complex requirements.

## Key Features

- **Ultra-Lightweight**: rsc-mdx provides a minimalistic wrapper around `@mdx-js/mdx`, ensuring negligible overhead during usage.
- **Server-Side Rendering**: Leverages the advantages of React Server Components to render MDX content on the server, significantly reducing the load on the client.
- **Ease of Use**: Works seamlessly with `@mdx-js/mdx`, eliminating the need for additional configurations or complex setups.
- **Performance Enhancement**: Utilizes server components to decrease the workload on the client, resulting in faster page interactions.

## Installation

You can install rsc-mdx using npm:

```bash
npm install rsc-mdx
```

## Usage Examples

### Basic Usage

Use rsc-mdx within server components to render MDX content:

```jsx
import { MDX } from 'rsc-mdx'

const markdown = `
# h1

lorem ipsum
`

export default function Page() {
  return <MDX source={markdown} />
}
```

### Integrating Custom Components

Easily integrate custom components using the `useMDXComponents` function:

```jsx
import { lazy } from 'react'
import { MDX } from 'rsc-mdx'

const Counter = lazy(() => import('./counter'))

const markdown = `
# h1

lorem ipsum

<Counter />
`

export default function Page() {
  return <MDX source={markdown} useMDXComponents={() => ({ Counter })} />
}
```

### Configuring Plugins

Supports `remark` and `rehype` plugins to enhance MDX processing capabilities:

```jsx
<MDX
  source={markdown}
  remarkPlugins={
    [
      /*...*/
    ]
  }
  rehypePlugins={
    [
      /*...*/
    ]
  }
/>
```

For more configuration options, refer to the MDX documentation: [MDX Documentation](https://mdxjs.com/packages/mdx/#evaluateoptions).

## Contribution

We welcome all forms of contribution! If you have any questions, suggestions, or would like to contribute code, please feel free to submit an issue or pull request.

## License

This project is licensed under the MIT License. For more details, see the [LICENSE](LICENSE) file.
