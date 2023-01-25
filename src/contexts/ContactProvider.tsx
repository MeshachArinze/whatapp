import React, { JSXElementConstructor, ReactElement, ReactFragment, ReactNode, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

interface Props {
  children?: ReactNode | undefined;
  value: React.ProviderProps<undefined> | JSX.IntrinsicAttributes;
  contact: string;
}

const ContactsContext = React.createContext(null);

export function useContacts() {
  return useContext(ContactsContext);
}

export const ContactsProvider: React.FC<Props> = ({
  children,
  contact = "contact",
}: Props): JSX.Element => {
  const [contacts, setContacts] = useLocalStorage(contact, []);

  const createContact = (id: number, name: string) => {
    setContacts((prevContacts: Array<Props>) => {
      return [...prevContacts, { id, name }];
    });
  };

  return (
    <ContactsContext.Provider value={{ contacts, createContact }}>
      {children}
    </ContactsContext.Provider>
  );
};
