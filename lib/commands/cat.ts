import {Message} from "https://deno.land/x/discordeno/mod.ts";

import {commands} from "../command.ts";

commands.push({
  name: "cat",
  aliases: ["cat-picture", "cat-photo"],
  description: "Random cat picture",
  execute: async (message: Message, args: string[]) => {
    message.channel.sendMessage((await fetch("http://aws.random.cat/meow").then((res) => res.json())).file);
  }
});
