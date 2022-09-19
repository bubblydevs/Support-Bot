import { Message, MessageActionRow, MessageButton, SelectMenuInteraction } from "discord.js"
import { Bot } from "../../Client";
import mongoose from 'mongoose'
import { config } from "../../../config";
import { Ticket } from "../../database/models/Ticket";

mongoose.connect(config.DATABASE)

module.exports = {
    name: "interactionCreate",
    run: async (client: Bot, menu: SelectMenuInteraction, commandGet: any) => {
        if (!menu.isSelectMenu()) return;
        const menuV = menu.values[0]

        if (menuV === '1_option_support') {
            await menu.deferReply({
                ephemeral: true
            })

            const findTicket = await Ticket.findOne({
                user: menu.user.id
            })

            if (findTicket) {
                return menu.editReply("You already have an ticket you can only have one ticket.")
            } else {
                try {
                    const channel = await menu.guild?.channels.create(`${menu.user.id}`, {
                        parent: "1021189444172251146",
                        topic: "**This ticket is for a Bug Report** || DO NOT PING ANY STAFF",
                        permissionOverwrites: [
                            { allow: 'VIEW_CHANNEL', id: menu.user.id },
                            { allow: 'VIEW_CHANNEL', id: "1015764902054461520" }, // support team
                            { allow: 'VIEW_CHANNEL', id: "1015764901026856990" }, // man
                            { allow: 'VIEW_CHANNEL', id: "1021186026846306358" }, // c-suite
                            { allow: 'VIEW_CHANNEL', id: "1021180926518112346" }, /// admin
                            { deny: 'VIEW_CHANNEL', id: menu.guild.id }
                        ]
                    })

                    channel?.send({
                        content: `${menu.user}`,
                        embeds: [
                            client.embed({
                                title: `Bug Report`,
                                description: `Welcome to Retail Essentials Support. Please explain a brief description. Our staff team will get back to you as soon as possible.`
                            }, menu)
                        ],
                        components: [
                            new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setCustomId('support_end')
                                        .setLabel('Close')
                                        .setEmoji("🔒")
                                        .setStyle("DANGER")
                                )
                        ]
                    })
                    menu.editReply(`We have made your support ticket ${channel}.`)

                    await Ticket.create({
                        user: menu.user.id,
                        channel: channel?.id
                    })

                    return;
                } catch {

                }
            }
        } else if (menuV === '2_option_support') {
            await menu.deferReply({
                ephemeral: true
            })

            const findTicket = await Ticket.findOne({
                user: menu.user.id
            })

            if (findTicket) {
                return menu.editReply("You already have an ticket you can only have one ticket.")
            } else {
                try {
                    const channel = await menu.guild?.channels.create(`${menu.user.id}`, {
                        parent: "1021189444172251146",
                        topic: "**This ticket is for Paymant* || DO NOT PING ANY STAFF",
                        permissionOverwrites: [
                            { allow: 'VIEW_CHANNEL', id: menu.user.id },
                            { allow: 'VIEW_CHANNEL', id: "1015764902054461520" }, // support team
                            { allow: 'VIEW_CHANNEL', id: "1015764901026856990" }, // man
                            { allow: 'VIEW_CHANNEL', id: "1021186026846306358" }, // c-suite
                            { allow: 'VIEW_CHANNEL', id: "1021180926518112346" }, /// admin
                            { deny: 'VIEW_CHANNEL', id: menu.guild.id }
                        ]
                    })

                    channel?.send({
                        content: `${menu.user}`,
                        embeds: [
                            client.embed({
                                title: `Paymant`,
                                description: `Welcome to Retail Essentials Support. Please tell us what you would like to buy. Our staff team will get back to you as soon as possible.`
                            }, menu)
                        ],
                        components: [
                            new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setCustomId('support_end')
                                        .setLabel('Close')
                                        .setEmoji("🔒")
                                        .setStyle("DANGER")
                                )
                        ]
                    })
                    menu.editReply(`We have made your support ticket ${channel}.`)

                    await Ticket.create({
                        user: menu.user.id,
                        channel: channel?.id
                    })

                    return;
                } catch {

                }
            }
        } else if (menuV === '3_option_support') {
            await menu.deferReply({
                ephemeral: true
            })

            const findTicket = await Ticket.findOne({
                user: menu.user.id
            })

            if (findTicket) {
                return menu.editReply("You already have an ticket you can only have one ticket.")
            } else {
                try {
                    const channel = await menu.guild?.channels.create(`${menu.user.id}`, {
                        parent: "1021189444172251146",
                        topic: "**This ticket is for a Partner Request** || DO NOT PING ANY STAFF",
                        permissionOverwrites: [
                            { allow: 'VIEW_CHANNEL', id: menu.user.id },
                            { allow: 'VIEW_CHANNEL', id: "1015764902054461520" }, // support team
                            { allow: 'VIEW_CHANNEL', id: "1015764901026856990" }, // man
                            { allow: 'VIEW_CHANNEL', id: "1021186026846306358" }, // c-suite
                            { allow: 'VIEW_CHANNEL', id: "1021180926518112346" }, /// admin
                            { deny: 'VIEW_CHANNEL', id: menu.guild.id }
                        ]
                    })

                    channel?.send({
                        content: `${menu.user}`,
                        embeds: [
                            client.embed({
                                title: `Partner Request.`,
                                description: `Welcome to Retail Essentials Support. Please explain a brief description. Our staff team will get back to you as soon as possible.`
                            }, menu)
                        ],
                        components: [
                            new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setCustomId('support_end')
                                        .setLabel('Close')
                                        .setEmoji("🔒")
                                        .setStyle("DANGER")
                                )
                        ]
                    })
                    menu.editReply(`We have made your support ticket ${channel}.`)

                    await Ticket.create({
                        user: menu.user.id,
                        channel: channel?.id
                    })

                    return;
                } catch {

                }
            }
        } else if (menuV === '4_option_support') {
            await menu.deferReply({
                ephemeral: true
            })

            const findTicket = await Ticket.findOne({
                user: menu.user.id
            })

            if (findTicket) {
                return menu.editReply("You already have an ticket you can only have one ticket.")
            } else {
                try {
                    const channel = await menu.guild?.channels.create(`${menu.user.id}`, {
                        parent: "1021189444172251146",
                        topic: "**This ticket is for a unknow reason** || DO NOT PING ANY STAFF",
                        permissionOverwrites: [
                            { allow: 'VIEW_CHANNEL', id: menu.user.id },
                            { allow: 'VIEW_CHANNEL', id: "1015764902054461520" }, // support team
                            { allow: 'VIEW_CHANNEL', id: "1015764901026856990" }, // man
                            { allow: 'VIEW_CHANNEL', id: "1021186026846306358" }, // c-suite
                            { allow: 'VIEW_CHANNEL', id: "1021180926518112346" }, /// admin
                            { deny: 'VIEW_CHANNEL', id: menu.guild.id }
                        ]
                    })

                    channel?.send({
                        content: `${menu.user}`,
                        embeds: [
                            client.embed({
                                title: `Support`,
                                description: `Welcome to Retail Essentials Support. Please explain a brief description. Our staff team will get back to you as soon as possible.`
                            }, menu)
                        ],
                        components: [
                            new MessageActionRow()
                                .addComponents(
                                    new MessageButton()
                                        .setCustomId('support_end')
                                        .setLabel('Close')
                                        .setEmoji("🔒")
                                        .setStyle("DANGER")
                                )
                        ]
                    })
                    menu.editReply(`We have made your support ticket ${channel}.`)

                    await Ticket.create({
                        user: menu.user.id,
                        channel: channel?.id
                    })

                    return;
                } catch {

                }
            }
        } else {

        }
    }
};