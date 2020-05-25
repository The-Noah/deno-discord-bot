import {Coward, Message} from "https://deno.land/x/coward/mod.ts";

import {commands} from "../command.ts";

commands.push({
  name: "Chuck Norris",
  aliases: ["chuck-norris-fact"],
  description: "Get a fact about Chuck Norris",
  execute: async (client: Coward, message: Message, args: string[]) => {
    const joke = await fetch(`https://api.chucknorris.io/jokes/${args.length === 1 ? `j/${args[0]}` : "random"}`).then((res) => res.json());

    client.postMessage(message.channel.id, {
      embed: {
        color: 0x0099ff,
        description: joke.value,
        footer: {
          text: `id: ${joke.id}`,
          icon_url: joke.icon_url
        },
      }
    });
  }
});
