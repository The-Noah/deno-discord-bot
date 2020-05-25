import {Coward, Message} from "https://deno.land/x/coward/mod.ts";

import {commands} from "../command.ts";

commands.push({
  name: "Should I",
  description: "Should you?",
  execute: async (client: Coward, message: Message, args: string[]) => {
    const data = await fetch("https://yesno.wtf/api/").then((res) => res.json());
    client.postMessage(message.channel.id, `${data.answer.replace(/^\w/, (c: string) => c.toUpperCase())}. ${data.image}`);
  }
});
