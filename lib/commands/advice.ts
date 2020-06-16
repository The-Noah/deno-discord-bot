import {Message, sendMessage} from "https://deno.land/x/discordeno/mod.ts";

import {commands} from "../command.ts";

commands.push({
  name: "Advice",
  description: "Get some random advice",
  execute: async (message: Message, args: string[]) => {
    sendMessage(message.channel, (await fetch("https://api.adviceslip.com/advice").then((res) => res.json())).slip.advice);
  }
});
