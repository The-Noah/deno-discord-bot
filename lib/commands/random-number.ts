import {Coward, Message} from "https://deno.land/x/coward/mod.ts";

import {commands} from "../command.ts";

commands.push({
  name: "Random Number",
  aliases: ["random", "number"],
  description: "Generate a random number between 1 and 10",
  execute: (client: Coward, message: Message, args: string[]) => {
    client.postMessage(message.channel.id, `${Math.floor(Math.random() * 10) + 1}`);
  }
});
