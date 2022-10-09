import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import "./Bonsai.scss"

export default function Bonsai() {
    return (<>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Bonsai</Navbar.Brand>
                {/* This is shown when the navbar is collapsed */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavDropdown title="Product" id="basic-nav-dropdown" className="me-3" >
                        </NavDropdown>
                        <NavDropdown title="Templates" id="basic-nav-dropdown" className="me-3" >
                        </NavDropdown>
                        <Nav.Link className="me-3" href="#pricing">Pricing</Nav.Link>
                        <Nav.Link className="me-5" href="#reviews">Reviews</Nav.Link>

                        <Button size="sm" variant="outline-primary" className='ms-5 fw-bold btn text-primary'>LOG IN</Button>
                        <Button size="sm" className='ms-3 fw-bold btn btn-primary text-light'>START FREE</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <Row className="mt-5 align-items-center">
            <Col md={{ offset: 3, span: 3 }}>
                <h2 className='fw-light'>Plans & Pricing</h2>
            </Col>
            <Col md={{ span: 3 }}>
                <p className="text-end">Monthly [SWITCH] YEARLY</p>
            </Col>
        </Row>

        <Row className="mt-5 mb-5 align-items-center">
            <Col md={{ offset: 3, span: 3 }}>
                <Card className="me-3 shadow p-4" >
                    <Card.Body>
                        <Card.Title>Workflow</Card.Title>
                        <Card.Text>
                            <p className='border-bottom border-primary border-2 pb-2'><span className='fs-3 align-middle'>$</span><span className='fs-1 align-top'>19</span><span className='align-bottom'>/Month</span></p>
                            <ul className='features list-unstyled'>
                                <li>All Templates</li>
                                <li>Unlimited Clients & Projects</li>
                                <li>Invoicing & Payments</li>
                                <li>Proposals & Contracts</li>
                                <li>Tasks & Time Tracking</li>
                                <li>Client CRM</li>
                                <li>Expense Tracking</li>
                                <li>Up to 5 Project Collaborators</li>
                            </ul>
                        </Card.Text>
                        <Button variant="primary" className='w-100 fw-bold text-light'>START FREE</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={{ span: 3 }}>
                <Card className="shadow me-3 overflow-hidden p-4" >
                    <div className='most-popular'>MOST POPULAR</div>
                    <Card.Body>
                        <Card.Title>Workflow Plus</Card.Title>
                        <Card.Text>
                            <p className='border-bottom border-primary border-2 pb-2'><span className='fs-3 align-middle'>$</span><span className='fs-1 align-top'>29</span><span className='align-bottom'>/Month</span></p>
                            <ul className='features list-unstyled'>
                                <li>All Templates</li>
                                <li>Unlimited Clients & Projects</li>
                                <li>Invoicing & Payments</li>
                                <li>Proposals & Contracts</li>
                                <li>Tasks & Time Tracking</li>
                                <li>Client CRM</li>
                                <li>Expense Tracking</li>
                                <li>Up to 5 Project Collaborators</li>
                            </ul>
                        </Card.Text>
                        <Button variant="primary" className='w-100 fw-bold text-light'>START FREE</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

        {/* Add-ons */}
        <h2 className='text-center mt-5 fw-light'>Supercharge your work with add-ons</h2>
        <Row>
            <Col md={{ offset: 3, span: 6 }}>
                <div className='d-flex flex-row border p-3 justify-content-between shadow-sm'>
                    <div>
                        <h3 className='fs-5'>Collaborators</h3>
                        <p>Invite other users to specific projects for limited access and functionality.</p>
                    </div>
                    <p className='text-end fs-3'>Free</p>
                </div>
            </Col>
        </Row>
        <Row className='mt-2'>
            <Col md={{ offset: 3, span: 6 }}>
                <div className='d-flex flex-row border p-3 justify-content-between shadow-sm'>
                    <div>
                        <h3 className='fs-5'>Partners</h3>
                        <p>Invite other for full account access and management.</p>
                    </div>
                    <p className='text-end fs-3'>$9/month</p>
                </div>
            </Col>
        </Row>
        <Row className='mt-2'>
            <Col md={{ offset: 3, span: 6 }}>
                <div className='d-flex flex-row border p-3 justify-content-between shadow-sm'>
                    <div>
                        <h3 className='fs-5'>Bonsai tax</h3>
                        <p>Track expenses, identify write-offs, and estimate quarterly taxes easily.</p>
                    </div>
                    <p className='text-end fs-3'>$10/month</p>
                </div>
            </Col>
        </Row>

        {/* It's your business */}
        <Row className='mt-5'>
            <Col className="" md={{ offset: 3, span: 6 }}>
                <div className='your-business-bg d-flex flex-row p-5 justify-content-between align-items-center'>
                    <div className='fs-2'>
                        <p className='mb-0'>It's <span className='text-primary'>your</span> business.</p>
                        <p>We're here to help it grow.</p>
                    </div>
                    <Button variant="primary" className='w-auto fw-bold text-light'>START FREE</Button>
                </div>
            </Col>
        </Row>

        {/* FAQs */}
        <h2 className='text-center mt-5 text-primary fw-light'>Frequently Asked Questions</h2>
        <Row className="mt-5 align-items-center">
            <Col md={{ offset: 3, span: 6 }}>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>How does the 14 day free trial work?</Accordion.Header>
                        <Accordion.Body>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Can I change plans any time?</Accordion.Header>
                        <Accordion.Body>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>How do I pause my Bonsai subscription?</Accordion.Header>
                        <Accordion.Body>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>What is your refund policy?</Accordion.Header>
                        <Accordion.Body>
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>
            </Col>
        </Row>
    </>
    );

}