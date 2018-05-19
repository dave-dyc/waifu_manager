/*
    discord -> ready
*/

module.exports = (discord, data, cache) => {
    console.log('READY as ' + discord.user.tag);
    
    discord.user.setActivity('my direct messages', {
        type: 'WATCHING'
    });
};
