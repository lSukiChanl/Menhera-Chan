const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js'); // Si requiere embed
const { Armpit, BoobJob, Cum, Foot, Fuck, Futanari, HandJob, Hentai, Loli18, Masturbate, Shota18, Socks, Suck, Thighs, Trap18, Yaoi18, Yuri18 } = require('./NSFW');

module.exports = class SocksCommand extends Command {
    constructor() {
        super({
            name: 'socks',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
         })
    }
    execute(msg) {
        if (msg.channel.nsfw === true) {
            let member = msg.mentions.members.first(); 
            let NumMagic = Math.floor(Math.random()*61);
            let NumMagicB = Math.floor(Math.random()*33);
            if (!member){
                let embed = new MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setDescription(" " + msg.author.username + " \nššš«š š„šØš¬ ššš­š¢šš”šš¬ šš š„šš¬ šššš¢šš¬ šš°š ")
                embed.setImage(Socks[NumMagic])
                return msg.channel.send(embed)
            }else{
                let embed = new MessageEmbed()
                embed.setColor('#D57DC1')
                embed.setDescription(" " + msg.author.username + " \nššš«š šŖš®š šš®š§šš¢šØš§š šš¬š­š ššØš¦šš§ššØ š§šØ ššššš¬ ššš§šš¢šØš§šš« š šššš¢š >.< ")
                embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Baka/Bakka"+NumMagicB+".gif")
                return msg.channel.send(embed)
            }
        }else{
            return msg.reply(" ššš«š š¦šØš¬š­š«šš« šš¬š ššØš§š­šš§š¢ššØ ššššš¬ šš¬š­šš« šš§ š®š§ ššš§šš„ šššš ");
        }
    }
}