import {Coward, Message} from "https://deno.land/x/coward/mod.ts";

import {commands} from "../command.ts";

commands.push({
  name: "Coin Flip",
  aliases: ["coin", "flip"],
  description: "Flip a coin, and it will land on either 'heads' or 'tails'",
  execute: (client: Coward, message: Message, args: string[]) => {
    client.postMessage(message.channel.id, `${Math.floor(Math.random() * 2) === 0 ? "Heads" : "Tails"}.`);
  }
});
