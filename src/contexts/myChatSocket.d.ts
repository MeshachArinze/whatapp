declare namespace ChatSocket {
  interface DefaultEventsMap {
    "user:login": (token: string, cb: (code: number) => void) => void;
  }
  interface DefaultEventsMap {
    "user:login": (code: number) => void;
  }
}
