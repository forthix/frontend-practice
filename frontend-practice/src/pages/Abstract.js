import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import '../App.scss';

export default function App() {
    return (
        <Container fluid className="abstract">
            {/* Nav row */}
            <Row className="bg-dark align-items-center text-light">
                <Col
                    xs={{ span: 6 }}
                    md={{ span: 4, offset: 1 }}
                >
                    <Stack direction="horizontal" className="fw-bold">
                        <div className="p-2">Abstract</div>
                        <div className="vr" />
                        <div className="p-2">Help Center</div>
                    </Stack>
                </Col>
                <Col
                    xs={{ span: 6 }}
                    md={{ span: 4, offset: 2 }}
                    className="d-flex justify-content-end"
                >
                    <Stack direction="horizontal">
                        <Button variant="outline-light" size="sm" className="m-1">Submit a request</Button>
                        <Button variant="primary" size="sm" className="m-1">Sign in</Button>
                    </Stack>
                </Col>
            </Row>

            {/* Help row */}
            <Row className="help-row align-items-center p-5">
                <Col className="d-flex justify-content-center" md={{ span: 6, offset: 3 }}>
                    <Stack className="mx-auto text-center">
                        <h1 className="">How can we help?</h1>
                        <Form.Control placeholder='Search' />
                    </Stack>
                </Col>
            </Row>

            {/* Main info row */}
            <Row>
                <Col className="d-flex flex-wrap p-5" md={{ span: 10, offset: 2 }}>
                    <div className="info-item w-50 p-3">
                        <h2 className="info">Branches</h2>
                        <p>
                            Abstract lets you manage, version, and document your designs in one place.
                        </p>
                        <p className="learn-more">Learn more</p>
                    </div>

                    <div className="info-item w-50 p-3">
                        <h2 className="info">Manage your account</h2>
                        <p>
                            Configure your account settings, such as your email, profile details, and password.
                        </p>
                        <p className="learn-more">Learn more</p>
                    </div>

                    <div className="info-item w-50 p-3">
                        <h2 className="info">Manage organizations, teams, and projects</h2>
                        <p>
                            Use Abstract organizations, teams, and projects to organize your people and your work.
                        </p>
                        <p className="learn-more">Learn more</p>
                    </div>

                    <div className="info-item w-50 p-3">
                        <h2 className="info">Manage billing</h2>
                        <p>
                            Change subscriptions and payment details.
                        </p>
                        <p className="learn-more">Learn more</p>
                    </div>

                    <div className="info-item w-50 p-3">
                        <h2 className="info">Authenticate to Abstract</h2>
                        <p>
                            Set up and configure SSO, SCIM, and Just-in-Time provisioning.
                        </p>
                        <p className="learn-more">Learn more</p>
                    </div>

                    <div className="info-item w-50 p-3">
                        <h2 className="info">Abstract support</h2>
                        <p>
                            Get in touch with a human.
                        </p>
                        <p className="learn-more">Learn more</p>
                    </div>
                </Col>
            </Row>

            {/* Footer row */}
            <Row className="footer bg-dark align-items-top text-light p-4">
                <Col md={{ span: 2}} className="">
                    <Stack direction="vertical" className="fw-bold">
                        <h2>Abstract</h2>
                        <p>Branches</p>
                    </Stack>
                </Col>

                <Col md={{ span: 2}}>
                    <Stack direction="vertical" className="fw-bold">
                        <h2>Resources</h2>
                        <p>Blog</p>
                        <p>Help Center</p>
                        <p>Release Notes</p>
                        <p>Status</p>
                    </Stack>
                </Col>

                <Col md={{ span: 2}}>
                    <Stack direction="vertical" className="fw-bold">
                        <h2>Community</h2>
                        <p>Twitter</p>
                        <p>LinkedIn</p>
                        <p>Facebook</p>
                        <p>Dribble</p>
                        <p>Podcast</p>
                    </Stack>
                </Col>

                <Col md={{ span: 2}}>
                    <Stack direction="vertical" className="fw-bold">
                        <h2>Company</h2>
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Legal</p>

                        <h3>Contact Us</h3>
                        <p>info@abstract.com</p>
                    </Stack>
                </Col>

                <Col md={{ span: 3, offset: 1}} className="align-self-end">
                    <Stack direction="vertical" className="fw-bold">
                        <p>&copy; Copyright 2022</p>
                        <p>Abstract Studio Design, Inc.</p>
                        <p>All rights reserved</p>
                    </Stack>
                </Col>
            </Row>

        </Container>
    );
}