import {commands, Message, sendMessage} from "../../deps.ts";

commands.push({
  name: "Geek Joke",
  description: "Get a joke for geeks",
  execute: async (message: Message, args: string[]) => {
    sendMessage(message.channel, (await fetch("https://geek-jokes.sameerkumar.website/api?format=json").then((res) => res.json())).joke);
  }
});
