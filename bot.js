const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "!";
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`By : mahmod`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Exciting ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`!bc :  mahmod|3bker`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});



client.login("NTEwNDMwNTM3Mzc5MjE3NDUw.DscPRA.DKcpDALOlHONM1bLfbvuvPbf8YI");
