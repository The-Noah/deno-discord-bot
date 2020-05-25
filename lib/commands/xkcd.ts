import {Message} from "https://deno.land/x/discordeno/mod.ts";

import {commands} from "../command.ts";

commands.push({
  name: "XKCD",
  description: "Get an XKCD comic",
  execute: async (message: Message, args: string[]) => {
    const latest = await fetch("https://xkcd.com/info.0.json").then((res) => res.json());
    let id = 0;

    if(args.length === 1){
      if(args[0] === "latest"){
        id = latest.num;
      }else{
        const newId = parseInt(args[0]);
        if(!isNaN(newId)){
          id = newId;
        }
      }
    }

    if(id === 0){
      id = Math.floor(Math.random() * (latest.num - 2) + 1);
    }

    const comic = await fetch(`https://xkcd.com/${id}/info.0.json`).then((res) => res.json());

    message.channel.sendMessage({
      embed: {
        color: 0x0099ff,
        title: comic.safe_title,
        url: `https://xkcd.com/${id}`,
        image: {
          url: comic.img,
        },
        footer: {
          text: `id: ${comic.num}`,
        }
      }
    });
  }
});
