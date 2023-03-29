import { useState, useEffect } from "react";
import { Form, FormControl, ListGroup } from "react-bootstrap";


export function Search({}) {
  return (
    <>
      <Form className="mb-4 sm={4}">
        <FormControl
              type="text"
              placeholder="Search"
              className="me-2"
        />
      </Form>
    </>
  );
}