const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCLikeCommand extends Command {
    constructor() {
        super({
            name: 'like',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*36);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " ๐๐ฉ๐ซ๐ฎ๐๐๐ ๐๐ฌ๐ญ๐จ ( ยด โฝ ` ).๏ฝก๏ฝโก " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Like/Like"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}