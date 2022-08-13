import ReactMarkdown from 'react-markdown'
import { withLayout } from '../components/withLayout';

function Home() {
  return (
    <div className="content">
      <h1>Chris Zhu</h1>
      <div>CTO & Cofounder @ Primary.Health (We're hiring!)</div>
      <div className="my-2">
        I currently live in San Francisco, and grew up in Vancouver, Canada 🇨🇦.
        Find my writings on <a href="https://medium.com/@chriszhu12">Software</a>, <a href="https://chriszhu.substack.com/">Climate Change</a>.
        <h4 className="font-weight-light mt-5 mb-3">Career</h4>
        <p className="mt-3">
          <b>Cofounder & CTO</b>
          <div className="font-weight-light">
          Primary.Health • San Francisco<br/>
          2020 - Present
          </div>
        </p>

        <p className="mt-3">
          <b>Tech Lead - AI Labs</b>
          <div className="font-weight-light">
            Airbnb • San Francisco<br/>
            2016 - 2020 • 4 yrs 3 mos
          </div>
        </p>
        <p className="mt-3">
          <b>Software Developer - Community Support</b>
          <div className="font-weight-light">
            Instgram • Menlo Park<br/>
            2015 - 2016 • 1 yr
          </div>
        </p>
      </div>
    </div>
  )
}

export default withLayout(Home);