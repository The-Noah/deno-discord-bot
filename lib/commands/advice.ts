import {Coward, Message} from "https://deno.land/x/coward/mod.ts";

import {commands} from "../command.ts";

commands.push({
  name: "Advice",
  description: "Get some random advice",
  execute: async (client: Coward, message: Message, args: string[]) => {
    client.postMessage(message.channel.id, (await fetch("https://api.adviceslip.com/advice").then((res) => res.json())).slip.advice);
  }
});
