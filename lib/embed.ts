import {Embed_Image, Embed_Thumbnail, Embed_Author, Embed_Field, Embed_Footer} from "../deps.ts";

export class MessageEmbed {
  image?: Embed_Image;
  thumbnail?: Embed_Thumbnail;
  title?: string;
  description?: string;
  author?: Embed_Author;
  footer?: Embed_Footer;
  timestamp?: string;
  color?: number;
  fields: Embed_Field[] = [];

  setImage(url: string){
    this.image = {url};
    return this;
  }

  setThumbnail(url: string){
    this.thumbnail = {url};
    return this;
  }

  setAuthor(name: string, url: string, icon: string){
    if(name.length > 256){
      throw new RangeError("Embed author names may not be longer than 256 characters!");
    }

    this.author = {name, url, icon_url: icon};
    return this;
  }

  setFooter(text: string, url: string){
    if(text.length > 2048){
      throw new RangeError("Embed footer texts may not be longer than 2048 characters!");
    }

    this.footer = {text, iconURL: url};
    return this;
  }

  addField(name: string, value: string, inline?: boolean){
    if(this.fields.length > 24){
      throw new RangeError("Embeds do not support more than 25 fields!");
    }else if(name.length > 256){
      throw new RangeError("Embed field names may not be longer than 256 characters!");
    }else if(value.length > 1024){
      throw new RangeError("Embed field values may not be longer than 1024 characters!");
    }

    this.fields.push({name, value, inline: inline || false});
    return this;
  }

  clearFields(){
    this.fields.splice(0, this.fields.length);
    return this;
  }

  setTitle(title: string){
    if(title.length > 256){
      throw new RangeError("Embed titles may not be longer than 256 characters!");
    }

    this.title = title;
    return this;
  }

  setDescription(text: string){
    if(text.length > 2048){
      throw new RangeError("Embed descriptions may not be longer than 2048 characters!");
    }

    this.description = text;
    return this;
  }

  setColor(color: any){
    if(typeof color === "string") {
      if(color === "RANDOM"){
        color = Math.floor(Math.random() * (0xffffff + 1));
      }else{
        color = parseInt(color.replace("#", ""), 16);
      }
    }

    if(color < 0 || color > 0xffffff){
      throw new RangeError("Color out of range (0 - FFFFFF)!");
    }else if(color && isNaN(color)){
      throw new TypeError("Could not convert to color!");
    }

    this.color = color;
    return this;
  }
}

export default MessageEmbed;
