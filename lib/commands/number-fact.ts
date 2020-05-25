import {Message} from "https://deno.land/x/discordeno/mod.ts";

import {commands} from "../command.ts";

commands.push({
  name: "Number Fact",
  description: "Get a fact about the number you provide",
  execute: async (message: Message, args: string[]) => {
    if(args.length === 0){
      return message.channel.sendMessage("You must provide a number to get a fact about.");
    }

    message.channel.sendMessage(await fetch(`http://numbersapi.com/${args[0]}`).then((res) => res.text()));
  }
});
