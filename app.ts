import "https://deno.land/x/denv/mod.ts";
import {Coward, Message} from "https://deno.land/x/coward/mod.ts";

import {commands} from "./lib/command.ts";
import "./lib/commands/index.ts";
const config = JSON.parse(await Deno.readTextFile("config.json"));

commands.push({
  name: "Help",
  description: "Get help on how to use the bot",
  execute: (client: Coward, message: Message, args: string[]) => {
    let help = "**__Help__**\n";
    help += `Prefix: ${config.prefix}\n\n`;

    for(const command of commands){
      help += `**${command.name}**: ${command.description}.\n`;
    }

    client.postMessage(message.channel.id, help);
  }
});

console.log(`${commands.length} command${commands.length === 1 ? "" : "s"}, prefix is ${config.prefix}`);

const client = new Coward(Deno.env.get("TOKEN") || "");

client.on("ready", () => {
  console.log(`invite URL: https://discord.com/oauth2/authorize?client_id=${Deno.env.get("CLIENT_ID")}&scope=bot&permissions=3136`);

  client.modifyPresence({
    status: "online",
    game: {
      name: "!help",
      type: 2
    }
  })
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
    if(command.name.replace(/ +/, "-").toLowerCase() === commandName){
      command.execute(client, message, args);
      break;
    }
  }
});

client.connect();
