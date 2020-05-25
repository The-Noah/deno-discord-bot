import {Message} from "https://deno.land/x/discordeno/mod.ts";

import {commands} from "../command.ts";

commands.push({
  name: "Coin Flip",
  aliases: ["coin", "flip"],
  description: "Flip a coin, and it will land on either 'heads' or 'tails'",
  execute: (message: Message, args: string[]) => {
    message.channel.sendMessage(`${Math.floor(Math.random() * 2) === 0 ? "Heads" : "Tails"}.`);
  }
});
