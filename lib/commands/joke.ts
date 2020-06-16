import {Message, sendMessage} from "https://deno.land/x/discordeno/mod.ts";

import {commands} from "../command.ts";

commands.push({
  name: "joke",
  aliases: ["dad-joke"],
  description: "Get a dad joke",
  execute: async (message: Message, args: string[]) => {
    const joke = await fetch(`https://icanhazdadjoke.com/${args.length === 1 ? `j/${args[0]}` : ""}`, {
      headers: {
        accept: "application/json"
      }
    }).then((res) => res.json());

    sendMessage(message.channel, {
      embed: {
        color: 0x0099ff,
        description: joke.joke,
        footer: {
          text: `id: ${joke.id}`
        },
      }
    });
  }
});
