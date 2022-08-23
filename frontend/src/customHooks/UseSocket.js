import { useCallback, useEffect, useState } from "react";
import * as io from "socket.io-client";
import { SOCKET_BASE_URL } from "../constants/apiConstants";

export const useSocket = (room) => {
  const [socket, setSocket] = useState();
  const [socketResponse, setSocketResponse] = useState({
    commandName: "",
    value: "",
  });
  const [isConnected, setConnected] = useState(false);
  const sendData = useCallback(
    (payload) => {
      socket.emit("commands", {
        room: room,
        commandName: payload.commandName,
        value: payload.value,
      });
    },
    [socket, room]
  );
  useEffect(() => {
    const s = io(SOCKET_BASE_URL, {
      reconnection: false,
      query: "room=" + room,
    });
    setSocket(s);
    s.on("connect", () => setConnected(true));
    s.on("get_command", (res) => {
      setSocketResponse({
        commandName: res.commandName,
        value: res.value,
      });
    });
    return () => {
      s.disconnect();
    };
  }, [room]);

  return { socketResponse, isConnected, sendData };
};
