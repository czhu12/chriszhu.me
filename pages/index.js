import ReactMarkdown from 'react-markdown'
import { withLayout } from '../components/withLayout';
const markdown = `
I currently live in San Francisco, and grew up in Vancouver, Canada 🇨🇦.
Find my writings on [Software](https://medium.com/@chriszhu12), [Climate Change](https://chriszhu.substack.com/).
`;
function Home() {
  return (
    <div className="content">
      <h1>Chris Zhu</h1>
      <div>CTO & Cofounder @ Primary.Health (We're hiring!)</div>
      <div className="my-2">
        <ReactMarkdown children={markdown} />
      </div>
    </div>
  )
}

export default withLayout(Home);