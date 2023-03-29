import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  FormControl,
  ListGroup,
  Row,
} from "react-bootstrap";
import { ListItem } from "../components/ListItem";
import { Search } from "../components/Search";
import { baseURL } from "../utilities/BaseURL";
export function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(baseURL)
      .then((res) => res.json())
      .then((result) => setItems(result));
  }, []);

  return (
    <>
      <h1>E-com for å handle</h1>
      <Search />
      <Row xs={1} md={2} lg={3} xl={4} className="g-3">
        {items.map((item) => (
          <Col key={item.key}>
            <ListItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
