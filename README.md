# Deno Discord Bot

Run with: `deno run --allow-net --allow-read=. --unstable app.ts`.

Or run without downloading: `deno run --allow-net --allow-read=. --unstable https://denopkg.com/The-Noah/deno-discord-bot/app.ts` - requires `-r` to update.

## `config.json`

You must have a Discord application for the bot. You can create a new one [here](https://discord.com/developers/applications).

| Property   | Description |
| ---------- | ----------- |
| `clientId` | Client ID of Discord application. |
| `token`    | Token of Discord application bot. |
| `prefix`   | Prefix used for commands. |
