import { useState } from "react";
import { Form, FormControl, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

//this function will take the items that the API returns so that it can render a listgroup with a link
export function Search({ items }) {
  const [searchTerm, setSearchTerm] = useState("");

  function newSearchTerm(e) {
    setSearchTerm(e.target.value);
  }

  //filtered list based on the API list that will not require to make additional API calls
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
