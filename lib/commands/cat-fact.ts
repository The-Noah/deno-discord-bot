import {commands, Message, sendMessage} from "../../deps.ts";

commands.push({
  name: "Cat Fact",
  description: "Get a fact about cats",
  execute: async (message: Message, args: string[]) => {
    sendMessage(message.channel, (await fetch("https://cat-fact.herokuapp.com/facts/random").then((res) => res.json())).text);
  }
});
