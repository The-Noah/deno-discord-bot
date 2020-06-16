import {Message, sendMessage} from "https://deno.land/x/discordeno/mod.ts";

import {commands} from "../command.ts";

commands.push({
  name: "Random Number",
  aliases: ["random", "number"],
  description: "Generate a random number between 1 and 10",
  execute: (message: Message, args: string[]) => {
    sendMessage(message.channel, `${Math.floor(Math.random() * 10) + 1}`);
  }
});
