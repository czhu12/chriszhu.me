import ReactMarkdown from 'react-markdown'
import { withLayout } from '../components/withLayout';
const markdown = `
# Software developer and engineering leader.
Check out some of the stuff I've worked on
`;
function Home() {
  return (
    <div className="content">
      <h1>Chris Zhu</h1>
      <div>CTO & Cofounder @ Primary.Health (We're hiring!)</div>
      <div className="text-muted my-2">
        <ReactMarkdown children={markdown}>
        </ReactMarkdown>
      </div>
    </div>
  )
}

export default withLayout(Home);