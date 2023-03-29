import { Button, Form, FormGroup, InputGroup, Row } from "react-bootstrap";

export function Contact() {
  return (
    <FormGroup className="mt-5d-flex justify-content-center align-items-center">
      <Form className="rounded bg-white shadow-sm p-5">
        <Form.Group className="mb-3" controlId="formFullname">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter full name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formSubject">
          <Form.Label>What is the subject of your email?</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Contents</Form.Label>
          <Form.Control
            as="textarea"
            rows="5"
            placeholder="enter body of the email here"
          />
        </Form.Group>
        <Form.Group className="mt-4 d-flex justify-content-center align-items-center">
          <Button>Submit</Button>
        </Form.Group>
      </Form>
    </FormGroup>
  );
}
