const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    let bUser = message.guild.member.message.mentions.users.first() || message.guild.members.get(args[0]);
    if(!bUser) return message.channel.send("Kon geen user vinden!");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Jij kan deze command niet Gebruiken!");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Die persoon kan niet gekicked worden.");

    let banEmbed = new discord.RichEmbed()
    .setTitle("**BAN**")
    .setColor("#bc0000")
    .addField("verbannen Gebruiker", `${bUser}`)
    .addField("Gebanned bij", `${message.author.username}`)
    .addField("Gekicked in Channel..", message.channel)
    .addField("Tijd", message.createdAt)
    .addField("Reden", bReason)

    let banChannel = message.guild.channels.find(`name`, "report");
    if(!banChannel) return message.channels.send("Kon report niet vinden");

    reportChannel.send(banEmbed)

}

module.exports.help = {
    name: "ban"
}