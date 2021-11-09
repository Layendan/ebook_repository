const { Discord, Intents } = require("discord.js");
const myIntents = new Intents();
//myIntents.add(Intents.FLAGS.USE_SLASH_COMMANDS, Intents.FLAGS.ATTACH_FILES, Intents.FLAGS.EMBED_LINKS, Intents.FLAGS.SEND_MESSAGES);
const client = new Discord.Client({ intents: 2147534848 });

client

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("pong");
  }
})

client.login(process.env.TOKEN)