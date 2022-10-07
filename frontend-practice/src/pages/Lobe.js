import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import "./Lobe.scss"

export default function Lobe() {
    return (
        <Container fluid className="lobe">
            {/* Nav */}
            <Row className='p-3'>
                <Col className='d-flex justify-content-around align-items-center'>
                    <span>Lobe</span>
                    <Stack direction="horizontal" gap={4}>
                        <span>Overview</span>
                        <span>Examples</span>
                        <span>Tour</span>
                        <span>Blog</span>
                        <span>Help</span>
                    </Stack>
                    <Button className='fw-bold btn btn-primary rounded-pill text-light'>Download</Button>
                </Col>
            </Row>

            {/* Lobe Tour */}
            <Row>
                <Col md={{span: 12}} className="text-center">
                    <div className='lobe-tour pt-4'>
                        <h1>Lobe <span>Tour</span></h1>
                        <p>Build your first machine learning model in ten minutes. No code or experience required.</p>
                    </div>
                </Col>
            </Row>

            {/* Lobe video */}
            <Row>
                <Col md={{span: 8, offset: 2}} className="tour-video rounded mt-4 mb-4">
                </Col>
            </Row>

            {/* Train app */}
            <Row>
                <Col md={{span: 12}} className="text-center">
                    <div className='lobe-train pt-4'>
                        <h1>Train your app with Lobe</h1>
                        <p><Button className='mt-3 fw-bold btn btn-primary rounded-pill text-light'>Download</Button></p>
                    </div>
                </Col>
            </Row>

            {/* Footer row */}
            <hr />
            <Row className="footer align-items-top p-3">
                <Col md={{ span: 3}} className="">
                    <Stack direction="vertical" className="fw-bold">
                        <h1>Lobe</h1>
                        <p>A product by Microsoft.</p>
                        <p>All rights reserved.</p>
                        <p>&copy; Microsoft 2022</p>
                    </Stack>
                </Col>

                <Col md={{ span: 2}}>
                    <Stack direction="vertical" className="fw-bold">
                        <h2>About</h2>
                        <p>Download</p>
                        <p>Overview</p>
                        <p>Examples</p>
                        <p>Blog</p>
                    </Stack>
                </Col>

                <Col md={{ span: 2}}>
                    <Stack direction="vertical" className="fw-bold">
                        <h2>General</h2>
                        <p>Notice</p>
                        <p>License</p>
                        <p>Press Inquiry</p>
                        <p>Press Images</p>
                    </Stack>
                </Col>

                <Col md={{ span: 2}}>
                    <Stack direction="vertical" className="fw-bold">
                        <h2>Resources</h2>
                        <p>Help</p>
                        <p>Tour</p>
                        <p>Contact</p>
                        <p>Privacy</p>
                    </Stack>
                </Col>

                <Col md={{ span: 3}} className="">
                    <Stack direction="vertical" className="fw-bold">
                        <p>IMG IMG IMG</p>
                    </Stack>
                </Col>
            </Row>

       </Container>
    );
}