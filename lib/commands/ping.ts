import {Message, sendMessage} from "https://deno.land/x/discordeno/mod.ts";

import {commands} from "../command.ts";

commands.push({
  name: "Ping",
  description: "Check if bot is alive",
  execute: (message: Message, args: string[]) => {
    sendMessage(message.channel, "Pong!");
  }
});
