import {Message} from "../deps.ts";

export interface ICommand{
  name: string;
  aliases?: string[];
  description: string;
  execute: (message: Message, args: string[]) => void;
};

export const commands: ICommand[] = [];
