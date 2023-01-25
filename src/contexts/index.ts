import { createContext, useContext } from "react";
import { Socket } from "socket.io-client";


export type MyChatSocket = Socket<
  ChatSocket.DefaultEventsMap,
  ChatSocket.DefaultEventsMap
>;

export interface ChatSocketCtxState {
  socket: MyChatSocket;
}

export const ChatSocketCtx = createContext<ChatSocketCtxState>(
  {} as ChatSocketCtxState
);

export const useChatSocketCtx = () => useContext(ChatSocketCtx);
