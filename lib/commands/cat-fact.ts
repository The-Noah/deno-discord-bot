import {Message} from "https://deno.land/x/discordeno/mod.ts";

import {commands} from "../command.ts";

commands.push({
  name: "Cat Fact",
  description: "Get a fact about cats",
  execute: async (message: Message, args: string[]) => {
    message.channel.sendMessage((await fetch("https://cat-fact.herokuapp.com/facts/random").then((res) => res.json())).text);
  }
});
