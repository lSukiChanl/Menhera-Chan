const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCSuicideCommand extends Command {
    constructor() {
        super({
            name: 'suicide',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*55);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.addField(" ๐ ๐๐๐ฅ๐จ๐ซ๐๐ญ๐ ๐๐ง๐ข๐ข-๐๐ก๐๐ง ๐ ", "๐๐ ๐ฏ๐ข๐๐ ๐๐ฌ ๐๐๐ซ๐ฆ๐จ๐ฌ๐ ๐ฒ ๐๐๐ง๐ก๐๐ซ๐-๐๐ก๐๐ง ๐๐ ๐๐ฎ๐ข๐๐ซ๐ ๐๐ฎ๐๐ก๐จ \n " + msg.author.username + " ๐๐ง ๐๐๐ฌ๐ข๐ญ๐จ ๐๐๐ซ๐ ๐๐ข \n (ไบบยด3๏ฝ)โโก ๐ฐ๐ต๐๐โฅ  ")
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Cuddle/Cuddle"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}