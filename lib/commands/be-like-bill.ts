import {Coward, Message} from "https://deno.land/x/coward/mod.ts";

import {commands} from "../command.ts";

commands.push({
  name: "Be Like Bill",
  aliases: ["bill"],
  description: "Be like bill",
  execute: (client: Coward, message: Message, args: string[]) => {
    client.postMessage(message.channel.id, `https://belikebill.ga/billgen-API.php?default=1&name=${args.length > 0 ? args[0] : "Bill"}&sex=${args.length > 1 && args[1] === "f" ? args[1] : "m"}`);
  }
});
