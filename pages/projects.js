import ReactMarkdown from 'react-markdown'
import { withLayout } from "../components/withLayout"

const markdown = `

`;
function Projects() {
  return (
    <div className="content">
      <h1 className="text-info">Some stuff I've built</h1>
      <ReactMarkdown children={markdown} />
    </div>
  )
}
export default withLayout(Projects);