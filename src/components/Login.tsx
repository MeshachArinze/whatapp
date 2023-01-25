import React, { SyntheticEvent, useRef, useEffect, forwardRef, ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";
import { Container, Form, Button } from "react-bootstrap";
import { useConversations } from "../contexts/ConversationsProvider";

interface Props {
  children?: ReactNode;
  type: "submit" | "button";
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}


const Login = ({ onIdSubmit }) => {
  const idRef = useRef<HTMLInputElement | null>(null);

  function createNewId() {
    onIdSubmit(uuidv4());
  }

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();

    onIdSubmit(idRef?.current?.value);
  }

  useEffect(() => {
    if (idRef.current) {
      idRef.current.focus();
    }
  }, []);

  const FancyButton = forwardRef(
    (
      props: Props,
      ref?: React.Ref<HTMLButtonElement> // <-- here!
    ) => (
      <button
        onClick={createNewId}
        ref={ref}
        className="MyClassName"
        type={props.type}
      >
        {props.children}
      </button>
    )
  );

  return (
    <Container
      className="align-items-center d-flex"
      style={{ height: "100vh" }}
    >
      <Form onSubmit={handleSubmit} className="w-100">
        <Form.Group>
          <Form.Label>Enter Your Id</Form.Label>
          <Form.Control type="text" ref={idRef} required />
        </Form.Group>
        <Button type="submit" className="mr-2">
          Login
        </Button>
        <FancyButton type={"submit"}>create</FancyButton>
      </Form>
    </Container>
  );
};

export default Login;
