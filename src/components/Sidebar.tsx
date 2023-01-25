import React, { SyntheticEvent, useState } from "react";
import { Tab, Nav, Button, Modal } from "react-bootstrap";
import Conversations from "./Conversations";
import Contacts from "./Contact";
import NewContactModal from "./NewContactModal";
import NewConversationModal from "./NewConverationModal";

type SelectCallback = (
  eventKey: string | null,
  e: React.SyntheticEvent<unknown>
) => void;

type Modal = {
  closemodal: JSX.IntrinsicAttributes;
  onSelect?: SelectCallback ;
  id: any;
  closeModal: () => void; 
};




const CONVERSATIONS_KEY = "conversations";
const CONTACTS_KEY = "contacts";

 const Sidebar:React.FC<Modal> = ({closemodal, onSelect, id}) => {
  const [activeKey, setActiveKey] = useState<string>(CONVERSATIONS_KEY);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const conversationsOpen = activeKey === CONVERSATIONS_KEY;

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <div style={{ width: "250px" }} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={onSelect}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="border-right overflow-auto flex-grow-1">
          <Tab.Pane eventKey={CONVERSATIONS_KEY}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        <div className="p-2 border-top border-right small">
          Your Id: <span className="text-muted">{id}</span>
        </div>
        <Button onClick={() => setModalOpen(true)} className="rounded-0">
          New {conversationsOpen ? "Conversation" : "Contact"}
        </Button>
      </Tab.Container>

      <Modal show={modalOpen} onHide={closeModal}>
        {conversationsOpen ? (
          <NewConversationModal closeModal={closeModal} />
        ) : (
          <NewContactModal closeModal={closemodal} />
        )}
      </Modal>
    </div>
  );
}

export default Sidebar;