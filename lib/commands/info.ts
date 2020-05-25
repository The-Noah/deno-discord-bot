import {Coward, Message} from "https://deno.land/x/coward/mod.ts";

import {commands} from "../command.ts";

commands.push({
  name: "info",
  description: "Info about the bot",
  execute: (client: Coward, message: Message, args: string[]) => {
    client.postMessage(message.channel.id, {
      embed: {
        color: 0x0099ff,
        title: "Deno Discord Bot",
        url: "https://github.com/The-Noah/deno-discord-bot",
        author: {
          name: "The Noah",
          icon_url: "https://i.imgur.com/A0p4fgs.png",
          url: "https://the-noah.github.io",
        },
        description: "Discord bot created with Deno.",
        thumbnail: {
          url: "https://raw.githubusercontent.com/denolib/high-res-deno-logo/master/deno_hr.png",
        },
        timestamp: new Date()
      }
    });
  }
});
