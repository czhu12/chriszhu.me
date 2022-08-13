import Head from "next/head";
import { Col, Row } from "react-bootstrap";
import SiteNav from "./SiteNav";

export function withLayout(Component) {
  return function() {
    return (
      <div>
        <Head>
          <title>Chris Zhu</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="container">
          <SiteNav />

          <Component />
          <footer>
            <Row className="justify-content-md-center">
              <Col xs="auto">
                <a href="https://medium.com/@chriszhu12">Medium</a>
              </Col>
              <Col xs="auto">
                <a href="https://github.com/czhu12">Github</a>
              </Col>
              <Col xs="auto">
                <a href="https://twitter.com/chriszhu12">Twitter</a>
              </Col>
              <Col xs="auto">
                <a href="https://www.linkedin.com/in/chris-zhu/">LinkedIn</a>
              </Col>
              <Col xs="auto">
                <a href="https://chriszhu.substack.com/">Substack</a>
              </Col>
            </Row>
          </footer>
        </main>
      </div>
    )
  }
}