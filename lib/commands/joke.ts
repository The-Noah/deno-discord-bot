import {Coward, Message} from "https://deno.land/x/coward/mod.ts";

import {commands} from "../command.ts";

commands.push({
  name: "joke",
  description: "Get a dad joke",
  execute: async (client: Coward, message: Message, args: string[]) => {
    if(args.length === 1){
      return client.postMessage(message.channel.id, (await fetch(`https://icanhazdadjoke.com/j/${args[0]}`, {
        headers: {
          accept: "application/json"
        }
      }).then((res) => res.json())).joke);
    }

    client.postMessage(message.channel.id, (await fetch("https://icanhazdadjoke.com/", {
      headers: {
        accept: "application/json"
      }
    }).then((res) => res.json())).joke);
  }
});
