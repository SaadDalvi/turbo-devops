import { WebSocketServer } from "ws";
import { client } from "@repo/db/client";
const wss = new WebSocketServer({ port: 3002 });

wss.on("connection", async function connection(ws) {
  await client.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString(),
    },
  });

  ws.on("message", function message(data) {
    console.log("received: %s", data);
  });

  ws.send("something");
});
