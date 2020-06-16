import {commands, Message, sendMessage} from "../../deps.ts";

commands.push({
  name: "Should I",
  description: "Should you?",
  execute: async (message: Message, args: string[]) => {
    const data = await fetch("https://yesno.wtf/api/").then((res) => res.json());
    sendMessage(message.channel, `${data.answer.replace(/^\w/, (c: string) => c.toUpperCase())}. ${data.image}`);
  }
});
