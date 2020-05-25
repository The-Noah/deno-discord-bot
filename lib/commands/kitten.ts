import {Message} from "https://deno.land/x/discordeno/mod.ts";

import {commands} from "../command.ts";

commands.push({
  name: "kitten",
  aliases: ["kitten-picture", "kitten-photo"],
  description: "Random kitten picture",
  execute: (message: Message, args: string[]) => {
    let width = Math.round(Math.random() * 1000);
    let height = Math.round(Math.random() * 1000);

    if(args.length >= 2){
      const argWidth = parseInt(args[0]);
      const argHeight = parseInt(args[1]);

      if(!isNaN(argWidth) && !isNaN(argHeight)){
        width = argWidth;
        height = argHeight;
      }
    }

    message.channel.sendMessage(`http://placekitten.com/${args.includes("g") ? "g/" : ""}${width}/${height}`);
  }
});
