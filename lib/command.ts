import {Message, sendMessage} from "https://deno.land/x/discordeno/mod.ts";

export interface ICommand{
  name: string;
  aliases?: string[];
  description: string;
  execute: (message: Message, args: string[]) => void;
};

export const commands: ICommand[] = [];
