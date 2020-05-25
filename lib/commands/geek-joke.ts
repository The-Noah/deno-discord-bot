import {Coward, Message} from "https://deno.land/x/coward/mod.ts";

import {commands} from "../command.ts";

commands.push({
  name: "Geek Joke",
  description: "Get a joke for geeks",
  execute: async (client: Coward, message: Message, args: string[]) => {
    client.postMessage(message.channel.id, (await fetch("https://geek-jokes.sameerkumar.website/api?format=json").then((res) => res.json())).joke);
  }
});
