const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCSecretCommand extends Command {
    constructor() {
        super({
            name: 'secret',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let NumMagic = Math.floor(Math.random()*8);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " ๐๐ฌ๐ญ๐ ๐๐ฎ๐๐ซ๐๐๐ง๐๐จ ๐ฎ๐ง ๐๐๐๐ซ๐๐ญ๐จ (>ไบบ<) " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Miscellaneous%20Commands/Secret/Secret"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}