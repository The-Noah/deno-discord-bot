import {commands, Message, sendMessage} from "../../deps.ts";

commands.push({
  name: "Number Fact",
  description: "Get a fact about the number you provide",
  execute: async (message: Message, args: string[]) => {
    if(args.length === 0){
      return sendMessage(message.channel, "You must provide a number to get a fact about.");
    }

    sendMessage(message.channel, await fetch(`http://numbersapi.com/${args[0]}`).then((res) => res.text()));
  }
});
