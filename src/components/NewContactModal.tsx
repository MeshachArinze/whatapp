import React, { SyntheticEvent, useRef } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { useContacts } from '../contexts/ContactProvider'

interface Props {

}

const NewContactModal: React.FC = ({ closeModal }) => {
    const idRef = useRef<HTMLInputElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const { createContact } = useContacts()

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault()

    createContact(idRef?.current?.value, nameRef?.current?.value)
    closeModal()
  }
        return (
          <>
            <Modal.Header closeButton>Create Contact</Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>Id</Form.Label>
                  <Form.Control type="text" ref={idRef} required />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" ref={nameRef} required />
                </Form.Group>
                <Button type="submit">Create</Button>
              </Form>
            </Modal.Body>
          </>
        );
}

export default NewContactModal;