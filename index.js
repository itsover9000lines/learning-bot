const Discord = require("discord.js")
const generateImage = require("./generateImage")
require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

let bot = {
    client,
    prefix: "L.",
    owners: ["203259894743302145"]
}

client.commands = new Discord.Collection()
client.events = new Discord.Collection()


// client.on("ready", () => {
//     console.log(`Logged in as ${client.user.tag}`)
// })

// client.on("messageCreate", (message) => {
//     if(message.content == "hi"){
//         message.reply("Hello!")
//     }
// })

// const welcomeChannelID = "531599666643468289"
// client.on("guildMemberAdd", async (member) => {
//     const img = await generateImage(member)
//     member.guild.channels.cache.get(welcomeChannelID).send({
//         content: `<@${member.id}> Welcome!`,
//         files: [img]
//     })
// })

client.login(process.env.TOKEN)