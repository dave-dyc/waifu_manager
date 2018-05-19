# Waifu Manager

### Introduction

A discord bot that allows anyone to make and have their own bot in chat.

![example](https://py.s-ul.eu/GnmfxszC)

### Invite

[Here](https://discordapp.com/oauth2/authorize?client_id=445085053312040970&permissions=536879104&scope=bot) is the invite link. The bot requires two permissions:

- Manage Webhooks
- Manage Messages

### Self-Host

1. Clone this repo or download the zip
2. Edit `main.js` and add your discord token from [here](https://discordapp.com/developers/applications/me)
3. `npm install`
4. `npm start`

You  can also use `pm2 start main.js --name waifu_manager` if you have pm2 avaliable.

### Dependencies

1. [Discord.js](https://discord.js.org)
2. [Key-File-Storage.js](https://www.npmjs.com/package/key-file-storage)