const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class MDLikeCommand extends Command {
    constructor() {
        super({
            name: 'mdlike',
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
        embed.setDescription(" š "+ msg.author.username +" šš šš š«ššš")
        embed.setImage('https://cdn.discordapp.com/emojis/631036268444123146.png')
        return msg.channel.send(embed)
    }
}
