import {commands, Message, sendMessage} from "../../deps.ts";

commands.push({
  name: "Ping",
  description: "Check if bot is alive",
  execute: (message: Message, args: string[]) => {
    sendMessage(message.channel, "Pong!");
  }
});
