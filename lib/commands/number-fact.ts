import {Coward, Message} from "https://deno.land/x/coward/mod.ts";

import {commands} from "../command.ts";

commands.push({
  name: "Number Fact",
  description: "Get a fact about the number you provide",
  execute: async (client: Coward, message: Message, args: string[]) => {
    if(args.length === 0){
      return client.postMessage(message.channel.id, "You must provide a number to get a fact about.");
    }

    client.postMessage(message.channel.id, await fetch(`http://numbersapi.com/${args[0]}`).then((res) => res.text()));
  }
});
