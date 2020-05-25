import {Coward, Message} from "https://deno.land/x/coward/mod.ts";

export interface ICommand{
  name: string;
  aliases?: string[];
  description: string;
  execute: (client: Coward, message: Message, args: string[]) => void;
};

export const commands: ICommand[] = [];
