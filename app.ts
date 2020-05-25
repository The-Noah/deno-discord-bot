import {createClient, editBotsStatus, Intents, Message, StatusType, ActivityType, cache} from "https://deno.land/x/discordeno/mod.ts";
import MessageEmbed from "./lib/embed.ts";

import {commands} from "./lib/command.ts";
const config = JSON.parse(await Deno.readTextFile("config.json"));

const importDirectory = async (path: string): Promise<void> => {
  const files = Deno.readDirSync(await Deno.realPath(path));

  for(const file of files){
    if(!file.name){
      return
    }

    const currentPath = `${path}/${file.name}`;
    if(file.isDirectory){
      return importDirectory(currentPath);
    }

    await import(currentPath);
  }
};

await Promise.all(["./lib/commands"].map((path) => importDirectory(path)));

commands.push({
  name: "Help",
  aliases: ["commands"],
  description: "Get help on how to use the bot",
  execute: (message: Message, args: string[]) => {
    const embed = new MessageEmbed()
      .setColor(0x0099ff)
      .setTitle("Help")
      .setAuthor("The Noah", "https://the-noah.github.io", "https://i.imgur.com/A0p4fgs.png")
      .setDescription(`Command prefix: ${config.prefix}`);

    const command = commands.find((command) => command.name.replace(/ +/, "-").toLowerCase() === args[0] || command.aliases?.includes(args[0]));
    if(args.length === 1 && command){
      embed.addField(command.name, command.description);

      if(command.aliases){
        embed.addField("Aliases", command.aliases.join(", "));
      }
    }else{
      for(const command of commands){
        embed.addField(command.name, command.description);
      }
    }

    message.channel.sendMessage({embed});
  }
});

console.log(`${commands.length} command${commands.length === 1 ? "" : "s"}, prefix is ${config.prefix}`);
const mentionRegex = new RegExp(`<@!${config.clientId}>`);

const ready = () => {
  console.log(`invite URL: https://discord.com/oauth2/authorize?client_id=${config.clientId}&scope=bot`);

  editBotsStatus(StatusType.Online, `${config.prefix}help`, ActivityType.Listening);
};

const messageCreate = (message: Message) => {
  if(message.author.bot){
    return;
  }

  console.log(cache);

  console.log(cache.channels.get(message.channel_id));

  if(mentionRegex.test(message.content)){
    return message.channel.sendMessage(`<@!${message.author.id}> my prefix is \`${config.prefix}\`. For help, send \`${config.prefix}help\`.`);
  }

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
      command.execute(message, args);
      break;
    }
  }
};

createClient({
  token: config.token,
  botID: config.clientId,
  intents: [Intents.GUILD_MESSAGES, Intents.DIRECT_MESSAGES],
  eventHandlers: {
    ready,
    messageCreate
  }
});
