import {commands, Message, sendMessage} from "../../deps.ts";

commands.push({
  name: "Be Like Bill",
  aliases: ["bill"],
  description: "Be like bill",
  execute: (message: Message, args: string[]) => {
    sendMessage(message.channel, `https://belikebill.ga/billgen-API.php?default=1&name=${args.length > 0 ? args[0] : "Bill"}&sex=${args.length > 1 && args[1] === "f" ? args[1] : "m"}`);
  }
});
