import { Client, ClientOptions, Collection, MessageEmbed } from "discord.js"
import { promisify } from 'util'
import { config } from '../config'

const glob = require('glob')
const globPromise = promisify(glob)

class Bot extends Client {
    public config = config;
    public owner = ["664141231366078464"]
    public commands = new Collection()
    public events = new Collection()
    public embed = (options: any, message: any) => {
        const emb = new MessageEmbed({
            ...options
        }).setColor('#2f3136')
        return emb
    }

    constructor(options: ClientOptions) {
        super(options)
    }

    async setup() {
        console.log(`---------------------------------\nRetail V1\n---------------------------------`);
        await this.loadEvents()
        this.login(this.config.TOKEN)
    }

    async loadCommands() {
        const commandFiles = await globPromise(`${__dirname}/commands/**/*.ts`);

        commandFiles.map((value: any) => {
            const file = require(value)
            this.commands.set(file.name, file)

            try {
                this.guilds.cache.get('1015758103783944222')?.commands.create(file)
            } catch {
                console.log(`Error loading command ${file.name}`)
            }
        })

        console.log(
            `✅ Commands loaded\n📌 Commands: ${commandFiles.length}\n---------------------------------`
        );
    }

    async loadEvents() {
        const eventFiles = await globPromise(`${__dirname}/events/**/*.ts`);

        eventFiles.map((value: any) => {
            const file = require(value)
            this.events.set(file.name, file)
            this.on(file.name, file.run.bind(null, this))
        })

        console.log(
            `✅ Events loaded\n📌 Events: ${eventFiles.length}\n---------------------------------`
        );
    }
}

export { Bot }