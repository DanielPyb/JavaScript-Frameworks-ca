import { useState, useEffect } from "react";
import { Form, FormControl, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Search({ items }) {
  const [searchTerm, setSearchTerm] = useState("");

  function newSearchTerm(e) {
    setSearchTerm(e.target.value);
  }

  const filteredList = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Form className="mb-4 sm={4}">
        <FormControl
          type="text"
          placeholder="Search"
          className="me-2"
          onChange={newSearchTerm}
        />
      </Form>
      {searchTerm.length > 0 && (
        <ListGroup>
          {filteredList.map((item) => (
            <ListGroup.Item key={item.id}>
              <Link to={`/product/${item.id}`}>{item.title}</Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </>
  );
}
