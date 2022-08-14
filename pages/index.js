import { withLayout } from '../components/withLayout';
const PUBLICATIONS = [
  {
    name: "Using Chatbots to Provide Faster COVID-19 Community Support",
    publisher: "Airbnb Engineering Blog",
    url: "https://medium.com/airbnb-engineering/using-chatbots-to-provide-faster-covid-19-community-support-567c97c5c1c9",
    claps: "300+",
  },
  {
    name: "Building a semantic search engine with dual space word embeddings",
    publisher: "Mage.ai Machine Learning Blog",
    url: "https://m.mage.ai/building-a-semantic-search-engine-with-dual-space-word-embeddings-f5a596eb6d90",
    claps: "1.7K",
  },
  {
    name: "Explorations in Knowledge Distillation",
    publisher: "Mage.ai Machine Learning Blog",
    url: "https://m.mage.ai/explorations-in-knowledge-distillation-df2f100384c4",
    claps: "1.3K",
  },
]

function PublicationCard({publication}) {
  return (
    <a target="_blank" className="link-unstyled" href={publication.url}>
      <div className="ccard">
        <h2><i>{publication.name}</i></h2>
        <p>{publication.publisher}</p>
        <p className="mt-3">
          {publication.claps} <i class="fa-solid fa-hands-clapping"></i>
        </p>
      </div>
    </a>
  )
}

function Home() {
  return (
    <div className="content mt-5 pt-5">
      <h1>Chris Zhu</h1>
      <div>CTO & Cofounder @ <a href="https://www.linkedin.com/company/primaryhealth">Primary.Health (We're hiring!)</a></div>
      <div className="my-2">
        I currently live in San Francisco, and grew up in Vancouver, Canada 🇨🇦.
        Find my writings on <a href="https://medium.com/@chriszhu12">Software</a> and musings on <a href="https://chriszhu.substack.com/">Climate Change</a>.
        <h4 className="font-weight-light mt-5 mb-3">Career</h4>
        <div style={{paddingLeft: "2em"}}>
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
      <h4 className="font-weight-light mt-5 mb-3">Published</h4>
      <div>
        {PUBLICATIONS.map(publication => {
          return (
            <PublicationCard publication={publication} />
          );
        })}
      </div>
    </div>
  )
}

export default withLayout(Home);