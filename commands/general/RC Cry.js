const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class RCCryCommand extends Command {
    constructor() {
        super({
            name: 'cry',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        let member = msg.mentions.members.first(); 
        let NumMagic = Math.floor(Math.random()*93);
        NumMagic = NumMagic + 1;
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+msg.author.username + " đđŦđ­đ đđĨđ¨đĢđđ§đđ¨ (âĨīšâĨ) " )
        embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Cry/Cry"+NumMagic+".gif");
        return msg.channel.send(embed)
    }
}