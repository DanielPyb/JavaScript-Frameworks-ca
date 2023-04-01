import { Button } from "react-bootstrap";

export function CartIcon() {
  <>
    <Button style={{ position: "relative" }}>
      Shop
      <div
        className="rounded d-flex justify-content-center align-items-center bg-danger"
        style={{
          width: "1.5rem",
          position: "absolute",
          bottom: "0",
          right: "0",
          transform: "translate(25%, 25%)",
        }}
      >
        5
      </div>
    </Button>
  </>;
}
