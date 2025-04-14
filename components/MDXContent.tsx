import { useMDXComponent } from 'next-contentlayer/hooks'
import { MDXComponents } from 'mdx/types'

interface MDXContentProps {
  code: string
  components?: MDXComponents
}

export function MDXContent({ code, components = {} }: MDXContentProps) {
  const Component = useMDXComponent(code)
  return <Component components={components} />
} 