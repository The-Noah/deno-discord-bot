import "https://deno.land/x/denv/mod.ts";
import {Coward, Message} from "https://deno.land/x/coward/mod.ts";

import {commands, ICommand} from "./lib/command.ts";
import "./lib/commands/index.ts";
const config = JSON.parse(await Deno.readTextFile("config.json"));

commands.push({
  name: "Help",
  aliases: ["commands"],
  description: "Get help on how to use the bot",
  execute: (client: Coward, message: Message, args: string[]) => {
    const embed = {
      color: 0x0099ff,
      title: "Help",
      author: {
        name: "The Noah",
        icon_url: "https://i.imgur.com/A0p4fgs.png",
        url: "https://the-noah.github.io",
      },
      description: `Command prefix: ${config.prefix}`,
      fields: [] as any[],
      timestamp: new Date()
    };

    const command = commands.find((command) => command.name.replace(/ +/, "-").toLowerCase() === args[0] || command.aliases?.includes(args[0]));
    if(args.length === 1 && command){
      embed.fields.push({
        name: command.name,
        value: command.description
      });

      if(command.aliases){
        embed.fields.push({
          name: "Aliases",
          value: command.aliases.join(", ")
        });
      }
    }else{
      for(const command of commands){
        embed.fields.push({
          name: command.name,
          value: command.description
        });
      }
    }

    client.postMessage(message.channel.id, {embed});
  }
});

console.log(`${commands.length} command${commands.length === 1 ? "" : "s"}, prefix is ${config.prefix}`);

const client = new Coward(Deno.env.get("TOKEN") || "");

client.on("ready", () => {
  console.log(`invite URL: https://discord.com/oauth2/authorize?client_id=${Deno.env.get("CLIENT_ID")}&scope=bot&permissions=3136`);

  client.modifyPresence({
    status: "online",
    game: {
      name: `${config.prefix}help`,
      type: 2
    }
  });
});

client.on("messageCreate", (message: Message) => {
  if(!message.content.startsWith(config.prefix)){
    return;
  }

  const args = message.content.slice(config.prefix.length).split(/ +/);
  const commandName = args.shift()?.toLowerCase();

  if(!commandName){
    return;
  }

  for(const command of commands){
    if(command.name.replace(/ +/, "-").toLowerCase() === commandName || command.aliases?.includes(commandName)){
      command.execute(client, message, args);
      break;
    }
  }
});

client.connect();
