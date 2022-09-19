import { CommandInteraction } from "discord.js"
import { Bot } from "../../Client";

module.exports = {
    name: "interactionCreate",
    run: async (client: Bot, command: CommandInteraction, commandGet: any) => {
        if (!command.isCommand()) return;
        
        commandGet = await client.commands.get(command.commandName)
        
        if (!commandGet) return

        try {
            commandGet.run(client, command)
        } catch (err) {
            command.reply({
                embeds: [
                    client.embed({
                        title: `An error occurred.`,
                        description: `An error has happend we would recommend you to report the error to a staff member.\n\n**${err}**`
                    }, command)
                ]
            });
        }
    }
};