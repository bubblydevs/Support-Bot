import { Bot } from "../../Client"
import { CommandInteraction, MessageActionRow, MessageButton, MessageSelectMenu } from 'discord.js'

module.exports = {
    name: "send",
    description: "Sends the support embed.",
    /**
    * @param {CommandInteraction} command
    * @param {Bot} client 
    */
    run: async (client: Bot, command: CommandInteraction) => {
        try {
            await command.deferReply()
            const channel = await command.guild?.channels.cache.get('1021189702331666473')

            if (channel) {
                if (channel.isText()) {
                    channel.send({
                        embeds: [
                            client.embed({
                                title: `Support`,
                                description: `Welcome to Retail Essentials support channel.\n\nTo open an support ticket you need to press the select menu under this embed and click the right category for you. When you have clicked the right category you should see a reply from our bot.\n\nOur response could take upto 24 hours please do not ping our staff if so you won't get an response from us and your ticket will get closed.`
                            }, command)
                        ],
                        components: [
                            new MessageActionRow()
                            .addComponents(
                                new MessageSelectMenu()
                                .setCustomId('sleect_support')
                                .setPlaceholder('Pick your category.')
                                .addOptions([
                                    {
                                        label: 'Bug Report',
                                        description: 'Report a bug in one of our products.',
                                        value: '1_option_support',
                                        emoji: "🪲"
                                    },
                                    {
                                        label: 'Paymant',
                                        description: 'Open this to buy a pack.',
                                        value: '2_option_support',
                                        emoji: "🦾"
                                    },
                                    {
                                        label: 'Partner Request',
                                        description: 'Parnter with us.',
                                        value: '3_option_support',
                                        emoji: "🤝"
                                    },
                                    {
                                        label: 'Other',
                                        description: 'Other reason for an support ticket',
                                        value: '4_option_support',
                                        emoji: "🆘"
                                    }
                                ])
                            )
                        ]
                    })
                }
            }
        } catch (err) {
            console.log(err)
            command.reply({
                embeds: [
                    client.embed({
                        title: `An error occurred.`,
                        description: `An error has happend we would recommend you to report the error to a staff member.\n\n**${err}**`
                    }, command)
                ]
            });
        }
    },
};