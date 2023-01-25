import React, { useContext, useEffect, useRef, useState, createContext } from "react";
import { io } from "socket.io-client";
import { ChatSocketCtx, MyChatSocket } from "./index";

type context = {
  children: React.ReactNode;
  id: any;
};


const SocketContext = React.createContext(null);

export function useSocket() {
  return useContext(SocketContext);
}

export const SocketProvider: React.FC<context> = ({ id, children }) => {
  const socketRef = useRef<MyChatSocket>(io({ autoConnect: false }));

  useEffect(() => {
    const newSocket = io("http://localhost:5000", { query: { id } });
    console.log(newSocket);
  }, []);

  return (
    <ChatSocketCtx.Provider value={{ socket: socketRef.current }}>
      {children}
    </ChatSocketCtx.Provider>
  );
};
