import {Message} from "https://deno.land/x/discordeno/mod.ts";

import {commands} from "../command.ts";

commands.push({
  name: "Should I",
  description: "Should you?",
  execute: async (message: Message, args: string[]) => {
    const data = await fetch("https://yesno.wtf/api/").then((res) => res.json());
    message.channel.sendMessage(`${data.answer.replace(/^\w/, (c: string) => c.toUpperCase())}. ${data.image}`);
  }
});
