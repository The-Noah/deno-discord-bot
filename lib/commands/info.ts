import {commands, Message, sendMessage} from "../../deps.ts";

commands.push({
  name: "info",
  description: "Info about the bot",
  execute: (message: Message, args: string[]) => {
    sendMessage(message.channel, {
      embed: {
        color: 0x0099ff,
        title: "Deno Discord Bot",
        url: "https://github.com/The-Noah/deno-discord-bot",
        author: {
          name: "The Noah",
          icon_url: "https://i.imgur.com/A0p4fgs.png",
          url: "https://the-noah.github.io"
        },
        description: "Discord bot created with Deno.",
        thumbnail: {
          url: "https://raw.githubusercontent.com/denolib/high-res-deno-logo/master/deno_hr.png",
        }
      }
    });
  }
});
