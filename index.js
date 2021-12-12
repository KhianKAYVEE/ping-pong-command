let Discord = require('discord.js')
let client = new Discord.Client()

client.on("ready", () => {
  client.user.setPresence({ activity: { name: "Hello There!"}, status: "online" })

})

client.on("message", message => {
if(message.content === "ping") {
  message.channel.send("pong")
}
})

client.login(process.env.TOKEN)