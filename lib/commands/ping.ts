import {commands, Message, sendMessage, editMessage} from "../../deps.ts";

commands.push({
  name: "Ping",
  description: "Check if bot is alive",
  execute: async (message: Message, args: string[]) => {
    const msg = await sendMessage(message.channel, "Pong!");
    editMessage(msg, `:ping_pong: ${msg.timestamp - message.timestamp}ms.`);
  }
});
