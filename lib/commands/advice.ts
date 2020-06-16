import {commands, Message, sendMessage} from "../../deps.ts";

commands.push({
  name: "Advice",
  description: "Get some random advice",
  execute: async (message: Message, args: string[]) => {
    sendMessage(message.channel, (await fetch("https://api.adviceslip.com/advice").then((res) => res.json())).slip.advice);
  }
});
