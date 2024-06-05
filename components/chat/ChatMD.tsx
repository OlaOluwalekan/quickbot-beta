import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark, darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkAnnotateFollowedByList from '@/utils/markdown'
import { Element } from 'hast'

interface CodeProps {
  inline?: boolean
  className?: string
  children?: React.ReactNode
}

interface CustomProps {
  children?: React.ReactNode
  node: any
}

const CustomP: React.FC<CustomProps> = ({ children, node }) => {
  //   const parent = node?.parent || {}
  const isFollowedByList = node.data?.isFollowedByList

  console.log('NODE IS: ', isFollowedByList)
  //   console.log('CHILD IS: ', children)
  const customStyle = {
    color: 'red', // Example custom style
    fontWeight: 'bold',
  }

  return <p>{children}</p>
}

const ChatMD = ({ response }: { response: string }) => {
  return (
    <ReactMarkdown
      children={response}
      remarkPlugins={[remarkGfm]}
      components={{
        code({ inline, className, children, ...props }: CodeProps) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SyntaxHighlighter
              {...props}
              PreTag='div'
              language={match[1]}
              style={darcula}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code
              {...props}
              className={className}
              style={{ borderRadius: '5px' }}
            >
              {children}
            </code>
          )
        },
        ul({ children, ...props }) {
          return (
            <ul
              style={{
                listStyleType: 'square',
                padding: '0 10px',
              }}
              {...props}
            >
              {children}
            </ul>
          )
        },
        ol({ children, ...props }) {
          return (
            <ol
              style={{
                listStyleType: 'revert',
                padding: '0 10px',
              }}
              {...props}
            >
              {children}
            </ol>
          )
        },
        li({ children, ...props }) {
          return (
            <li style={{ margin: '-10px 0' }} {...props}>
              {children}
            </li>
          )
        },
        p({ node, children, ...props }) {
          return (
            <CustomP node={node} {...props}>
              {children}
            </CustomP>
          )
        },
      }}
    />
  )
}

export default ChatMD
