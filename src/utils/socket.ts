import { io } from "socket.io-client";
// socketio 연결
export const socket = io('ws://localhost:4020');