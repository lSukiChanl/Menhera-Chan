const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class MDShameCommand extends Command {
    constructor() {
        super({
            name: 'mdshame',
            aliases: [],
            category: 'general',
            priority: 9,
            permLvl: 0
        })
    }
    execute(msg) {
        msg.delete().catch(error =>
            msg.reply(({embed: {
                color: 15158332,
                description: "šššš ššššššššš ššššššššššššš šššššššš \nššš šššš ššššššššššššš"
            }})
            )
        );
        let embed = new MessageEmbed()
        embed.setColor('#D57DC1')
        embed.setDescription(" "+ msg.author.username +" šš¬š­š ššÆšš«š šØš§š³šš@")
        embed.setImage('https://cdn.discordapp.com/emojis/631036055092461568.png')
        return msg.channel.send(embed)
    }
}
