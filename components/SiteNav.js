import { useRouter } from 'next/router';
import { Nav } from 'react-bootstrap'

export default function SiteNav() {
  const router = useRouter();
  return (
    <Nav activeKey={router.pathname}>
      <Nav.Item as="li">
        <Nav.Link href="/"><span>About</span></Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/projects"><span>Projects</span></Nav.Link>
      </Nav.Item>
    </Nav>
  );
}