import { channel } from "diagnostics_channel";
import { MessageEmbed } from "discord.js";
import { Bot } from "../../Client";

module.exports = {
    name: "ready",
    /**
     * @param {Bubbly} bubbly
     */
    run: async (client: Bot) => {
        function pickStatus() {
            let status = [`Support Tickets`, `Retail Essentials`]
            let Status = Math.floor(Math.random() * status.length);

            client.user?.setActivity(status[Status], {
                type: "WATCHING"
            });
        };

        // const channel = client.channels.cache.get('1015766818469707857')

        // if (channel?.isText()) {
          //  channel.send({
          //      embeds: [
          //          new MessageEmbed({
          //              title: "Starter Package",
           //             description: "**Which includes:**\n - Ice Cooler\n - Chillers\n - Shelves\n - Indoor Barrier 1\n - Indoor Barrier 2\n - Attendant Station\n - Customer Service Desk\n\n All togther this is 35 Robux open a ticket to buy."
           //         }).setColor('#2f3136'),
            //        new MessageEmbed({
             //           title: "Upgrade Package",
             //           description: "**Which includes:**\n - Prop House\n - ATM Holder\n - EAS Gate Cover/Advertisement \n - Advertisement Holder\n\n All togther this is 210 Robux open a ticket to buy."
            //        }).setColor('#2f3136'),
            //        new MessageEmbed({
             //           title: "Retail Plus",
            //            description: "**What is Retail Plus?**\n**Well, Retail Plus is a monthly subscription to Retail Essentials. It will grant you a few perks which include:**\n - Priority Support\n - Free products\n - Discounts\n - Exclusive Roles\n - And much more!\n Why not join today? Open a Retail Plus ticket in #deleted-channel and wait for someone to assist! The current price for Retail Plus is 255 Robux."
            //        }).setColor('#2f3136'),
            //        new MessageEmbed({
             //           title: "Booster Perks",
            //            description: "**Boosting Retail Essentials will get you some amazing perks!**\n\n **Perks for one boost:**\n- Access to #booster-files, which gives you a catalog of free models designed by Retail Essentials for use in your games.\n -Special Role\n-One license every 3 months (starting 10 days after boosting)\n**Perks for two boosts:**\n- All of the above\n - Priority Support\n - Exclusive Roles\n - Two free licences every 4 1/2 months (starting 10 days after boosting)"
           //         }).setColor('#2f3136'),
            //    ],
           // })
        //}

        pickStatus()
        setInterval(pickStatus, 30000);

        client.loadCommands()
    }
};