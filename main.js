
const discordLib = require('discord.js');
var data = require("key-file-storage")('./data');

const discord = new discordLib.Client();

var folder = './discord/';
var cache = {
    webhooks : {},
    members  : {}
};

(require('fs')).readdirSync(folder).forEach(file => {
    var parts = file.split('.');
    if (parts.length === 2 && parts[1].toLowerCase() === 'js') {
        var callback = require(folder + file);
        
        discord.on(parts[0], (...arguments) => {
            callback(discord, data, cache, ...arguments);
        });
    }
});

discord.login('-- token here --');
