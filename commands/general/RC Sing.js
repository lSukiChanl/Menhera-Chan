const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCSingCommand extends Command {
    constructor() {
        super({
            name: 'sing',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*48);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " ππ¬π­π πππ§π­ππ§ππ¨ (γβΰΈΊΛΞ΅ ΛβΰΈΊγ) οΎοΎοΎο½°οΎβͺ " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Sing/Sing"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}