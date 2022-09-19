import { ButtonInteraction, TextChannel } from "discord.js"
import { Bot } from "../../Client";
import * as discordTranscripts from 'discord-html-transcripts';
import { Ticket } from "../../database/models/Ticket";

module.exports = {
    name: "interactionCreate",
    run: async (client: Bot, button: ButtonInteraction, channel: any) => {
        if (!button.isButton()) return;
        
        if (button.customId === 'support_end') {
            button.deferReply()
            
            const ticket = await Ticket.findOne({
                channel: button.channel?.id
            })

            if (!ticket) {
                button.reply('This ticket is invaild (not in database)')
            }

            const logChannel = await button.guild?.channels.cache.get('1021189440959418408')
            channel = button.channel
            const attachment = await discordTranscripts.createTranscript(channel);

            client.users.cache.get(ticket?.user)?.send({
                embeds: [
                    client.embed({ title: `Ticket Closed`, description: `Your ticket has been closed. We hope we helped you as best as we can. Support Transcript above this message.` }, button)
                ],
                files: [attachment]
            })
            
            if (logChannel) {
                if (logChannel.isText()) {
                    await logChannel.send({
                        embeds: [
                            client.embed({ title: `Support Ticket Closed`, description: `${button.user} has closed <@${ticket?.user}> support ticket.` }, channel)
                        ],
                        files: [attachment]
                    })
                } else {
                    return;
                }
            }

            await Ticket.findOneAndRemove({
                channel: button.channel?.id
            })

            button.channel?.delete()
            return;
        }
    }
};