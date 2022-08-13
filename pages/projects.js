import ReactMarkdown from 'react-markdown'
import { withLayout } from "../components/withLayout"

function ProjectCard({ project }) {
  return (
    <a target="_blank" className="link-unstyled" href={project.url}>
      <div className="ccard">
        <i className={`${project.icon} mb-3`} style={{fontSize: "2em"}}></i>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <p className="mt-3">
          {project.stars} <i class="fa-solid fa-star"></i>
        </p>
      </div>
    </a>
  )
}

const PROJECTS = [
  {
    name: "React Importer",
    icon: "fa-solid fa-file-import",
    description: "A CSV importer flow for React projects",
    url: "https://czhu12.github.io/react-importer/",
    stars: 55,
  },
  {
    name: "Mockachino",
    icon: "fa-solid fa-mug-saucer",
    description: "An open source mock JSON API to bootstrap your frontend projects",
    url: "https://www.mockachino.com/",
    stars: 40,
  },
  {
    name: "Light Bulb",
    icon: "fa-solid fa-lightbulb",
    description: "Light Bulb is a tool to help you label, train, test and deploy machine learning models without any coding.",
    url: "https://m.mage.ai/light-bulb-machine-learning-made-easy-8bdc17845c0f",
    stars: 22,
  },
]
const markdown = `
I spend a lot of time building in open source. Here are some of the more popular ones.
`;
function Projects() {
  return (
    <div className="content mt-5 pt-5">
      <h1 className="text-info">Projects</h1>
      <ReactMarkdown children={markdown} />
      <h4 className="mt-5 mb-3">Featured Projects</h4>
      {PROJECTS.map(project => {
        return (
          <ProjectCard project={project} />
        );
      })}
    </div>
  )
}
export default withLayout(Projects);