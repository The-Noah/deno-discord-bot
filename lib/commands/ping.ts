import {Coward, Message} from "https://deno.land/x/coward/mod.ts";

import {commands} from "../command.ts";

commands.push({
  name: "Ping",
  description: "Check if bot is alive",
  execute: (client: Coward, message: Message, args: string[]) => {
    client.postMessage(message.channel.id, "Pong!");
  }
});
