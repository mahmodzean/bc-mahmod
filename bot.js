const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on('message', message => {
    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split('!').slice(1).join('!');
if(message.content.split('!')[0] == prefix + '!bc') {
    if (!args[1]) {
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField(' » الرسالة : ', args)
            .setColor('#ff0000')
            // m.send(`[!{m}]`);
            m.send(`!{m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : EX Clan`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : EX Clan ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`!bc |mahmod AR | 3bker`,"http://twitch.tv/Death Shop")
client.user.setStatus("dnd")
});

client.login(process.env.BOT_TOKEN);
