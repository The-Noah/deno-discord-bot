import {commands, Message, sendMessage} from "../../deps.ts";

commands.push({
  name: "Chuck Norris",
  aliases: ["chuck-norris-fact"],
  description: "Get a fact about Chuck Norris",
  execute: async (message: Message, args: string[]) => {
    const joke = await fetch(`https://api.chucknorris.io/jokes/${args.length === 1 ? `j/${args[0]}` : "random"}`).then((res) => res.json());

    sendMessage(message.channel, {
      embed: {
        color: 0x0099ff,
        description: joke.value,
        footer: {
          text: `id: ${joke.id}`,
          iconURL: joke.icon_url
        },
      }
    });
  }
});
