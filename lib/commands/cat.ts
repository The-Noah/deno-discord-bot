import {Coward, Message} from "https://deno.land/x/coward/mod.ts";

import {commands} from "../command.ts";

commands.push({
  name: "cat",
  aliases: ["cat-picture", "cat-photo"],
  description: "Random cat picture",
  execute: async (client: Coward, message: Message, args: string[]) => {
    client.postMessage(message.channel.id, (await fetch("http://aws.random.cat/meow").then((res) => res.json())).file);
  }
});
