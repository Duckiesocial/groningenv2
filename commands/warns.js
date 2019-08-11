const discord = require("discord.js")
const fs = require("fs");

const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

    // !warn gebruiker Reden Redern lel

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Jij kan deze command niet gebruiken.");

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if(!user) return message.reply("Geef een gebruiker op of de User zit niet op de Server.");

    // if(user.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry jij kan deze Persoon niet Warnen");

    var reason = args.join(" ").slice(22);

    if(!reason) return message.reply("Geef een reden op.");

    if(!warns[user.id]) warns[user.id] = {
        warns: 0
    };

    warns[user.id].warns++;

    fs.writeFile("./warnings.json", "json", JSON.stringify(warns), (err) =>{
       if(err) console.log(err);
    });
 
}

module.exports.help = {
    name: "warn"
}