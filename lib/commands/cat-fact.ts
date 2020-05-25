import {Coward, Message} from "https://deno.land/x/coward/mod.ts";

import {commands} from "../command.ts";

commands.push({
  name: "Cat Fact",
  description: "Get a fact about cats",
  execute: async (client: Coward, message: Message, args: string[]) => {
    client.postMessage(message.channel.id, (await fetch("https://cat-fact.herokuapp.com/facts/random").then((res) => res.json())).text);
  }
});
