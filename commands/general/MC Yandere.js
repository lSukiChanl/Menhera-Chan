const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCYandereCommand extends Command {
    constructor() {
        super({
            name: 'yandere',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let NumMagic = Math.floor(Math.random()*42);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " ππ¬π­π ππ§ ππ¨ππ¨ πππ§πππ«π οΌΌ(ΒΊ β‘ ΒΊ l|l)/ " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Miscellaneous%20Commands/Yandere/Yandere"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}