import React from "react";
import { ListGroup } from "react-bootstrap";
import { useContacts } from "../contexts/ContactProvider";

interface Props {
  id: React.Key | null | undefined;
  name:
    | string
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
}

const Contact: React.FC = () => {
  const { contacts } = useContacts();

  return (
    <ListGroup variant="flush">
      {contacts.map((contact: Props) => (
        <ListGroup.Item key={contact.id}>{contact.name}</ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Contact;
