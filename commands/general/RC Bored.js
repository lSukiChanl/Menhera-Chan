const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCBoredCommand extends Command {
    constructor() {
        super({
            name: 'bored',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*40);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " ๐๐ฌ๐ญ๐ ๐๐๐ฎ๐ซ๐ซ๐ข๐@  (โช๏ฝกโช)๏ฝก๏ฝก๏ฝกzzZ " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Bored/Bored"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}