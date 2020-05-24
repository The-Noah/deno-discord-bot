import "https://deno.land/x/denv/mod.ts";
import {Coward, Message} from "https://deno.land/x/coward/mod.ts";

const client = new Coward(Deno.env.get("TOKEN") || "");

client.on("ready", () => {
  console.log(`invite URL: https://discord.com/oauth2/authorize?client_id=${Deno.env.get("CLIENT_ID")}&scope=bot&permissions=3136`);
});

client.on("messageCreate", (message: Message) => {
  if(message.content == "!ping"){
    client.postMessage(message.channel.id, "Pong!");
  }
});

client.connect();
