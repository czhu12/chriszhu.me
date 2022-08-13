import { Nav } from 'react-bootstrap'

export default function SiteNav() {
  let href = typeof window !== 'undefined' ? window.location.pathname : '/';
  console.log(href);
  return (
    <Nav>
      <Nav.Item as="li">
        <Nav.Link href="/" className={href === '/' && 'active'}>About</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/projects" className={href === '/projects' && 'active'}>Projects</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}