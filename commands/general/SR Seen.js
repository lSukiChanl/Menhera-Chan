const { Command } = require('../../commands')
const { MessageEmbed } = require('discord.js');

module.exports = class SRSeenCommand extends Command {
    constructor() {
        super({
            name: 'srseen',
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
        embed.setDescription("ššš£šš«šØš§ šš§ šš¢š¬š­šØ š "+ msg.author.username +" ")
        embed.setImage('https://cdn.discordapp.com/emojis/631043902987567114.png')
        return msg.channel.send(embed)
    }
}
