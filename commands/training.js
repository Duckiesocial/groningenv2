const discord = require("discord.js")

module.exports.run = async (bot, message, arguments) => {

var userName = message.author.username;

var userDiscriminator = message.author.discriminator;

var status = true

var Eenheid, collected, msgVraag;

const filter = m => m.author.id === message.author.id;

message.delete(9000);

TrainingRe = new discord.RichEmbed()
.setTitle("**Kies de eenheid:**")
.setDescription("👮) Politie \n👨‍🚒) Brandweer \n👨‍)Ambulance\n🕵️‍)Kmar\n🕵️‍)DSI\n\n\n **HOOFDLETTER GEVOELIG**")
.setColor("#4287f5")
msgVraag = await message.reply(TrainingRe);

collected = await message.channel.awaitMessages(filter, { max: 1, time: 60000, errors: ["time"] })
.catch(error => { return message.reply(`De tijd is verlopen.\nHet command werd geanuleerd.`) });

if (collected.size > 0) {

if (collected.first().content === 'stop') {
status = false;
};

eenheidreply = collected.first().content;

if (eenheidreply === "politie") Eenheid = ("Politie"),kleur = ("#1f5de0")
else if (eenheidreply === "Politie") Eenheid = ("Politie"),kleur = ("#1f5de0")
else if (eenheidreply === "POLITIE") Eenheid = ("Politie"),kleur = ("#1f5de0")
else if (eenheidreply === "brandweer") Eenheid = ("Brandweer"),kleur = ("#eb4034")
else if (eenheidreply === "Brandweer") Eenheid = ("Brandweer"),kleur = ("#eb4034")
else if (eenheidreply === "BRANDWEER") Eenheid = ("Brandweer"),kleur = ("#eb4034")
else if (eenheidreply === "DSI") Eenheid = ("DSI"),kleur = ("#000000")
else if (eenheidreply === "Kmar") Eenheid = ("Kmar"),kleur = ("#040078")
else if (eenheidreply === "Ambulance") Eenheid = ("Ambulance"),kleur = ("#ffee00")
else Eenheid = 0;

collected.first().delete(10000);
msgVraag.delete(9000);

} else return;
if (status === true){ 
Tijdreq = new discord.RichEmbed()
.setDescription(`Om welke tijd wilt u deze training doen?`)
.setColor("#4287f5")

msgVraag = await message.channel.send(Tijdreq);

collected = await message.channel.awaitMessages(filter, { max: 1, time: 1200000, errors: ["time"] })
.catch(error => { return message.reply(`De tijd is verlopen.\nHet command werd geanuleerd.`) });

if (collected.size > 0) {
if (collected.first().content === 'stop') {
status = false;
};
var Tijdw = collected.first().content;

if (Tijdw === "10 uur") Tijd = ("10:00")
else if (Tijdw === "10 Uur") Tijd = ("10:00")
else if (Tijdw === "10 UUR") Tijd = ("10:00")
else if (Tijdw === "10") Tijd = ("10:00")
else if (Tijdw === "10:00") Tijd = ("10:00")

else if (Tijdw === "11 Uur") Tijd = ("11:00")
else if (Tijdw === "11 UUR") Tijd = ("11:00")
else if (Tijdw === "11 Uur") Tijd = ("11:00")
else if (Tijdw === "11") Tijd = ("11:00")

else if (Tijdw === "12 Uur") Tijd = ("12:00")
else if (Tijdw === "12 UUR") Tijd = ("12:00")
else if (Tijdw === "12 Uur") Tijd = ("12:00")
else if (Tijdw === "12") Tijd = ("12:00")

else if (Tijdw === "13 Uur") Tijd = ("13:00")
else if (Tijdw === "13 UUR") Tijd = ("13:00")
else if (Tijdw === "13 Uur") Tijd = ("13:00")
else if (Tijdw === "13") Tijd = ("13:00")

else if (Tijdw === "14 Uur") Tijd = ("14:00")
else if (Tijdw === "14 UUR") Tijd = ("14:00")
else if (Tijdw === "14 Uur") Tijd = ("14:00")
else if (Tijdw === "14") Tijd = ("14:00")

else if (Tijdw === "15 Uur") Tijd = ("15:00")
else if (Tijdw === "15 UUR") Tijd = ("15:00")
else if (Tijdw === "15 Uur") Tijd = ("15:00")
else if (Tijdw === "15") Tijd = ("15:00")

else if (Tijdw === "16 Uur") Tijd = ("16:00")
else if (Tijdw === "16 UUR") Tijd = ("16:00")
else if (Tijdw === "16 uur") Tijd = ("16:00")
else if (Tijdw === "16") Tijd = ("16:00")

else if (Tijdw === "17 Uur") Tijd = ("17:00")
else if (Tijdw === "17 UUR") Tijd = ("17:00")
else if (Tijdw === "17 Uur") Tijd = ("17:00")
else if (Tijdw === "17") Tijd = ("17:00")

else if (Tijdw === "18 Uur") Tijd = ("18:00")
else if (Tijdw === "18 UUR") Tijd = ("18:00")
else if (Tijdw === "18 Uur") Tijd = ("18:00")
else if (Tijdw === "18") Tijd = ("18:00")

else if (Tijdw === "19 Uur") Tijd = ("19:00")
else if (Tijdw === "19 UUR") Tijd = ("19:00")
else if (Tijdw === "19 Uur") Tijd = ("19:00")
else if (Tijdw === "19") Tijd = ("19:00")

else if (Tijdw === "20 Uur") Tijd = ("20:00")
else if (Tijdw === "20 UUR") Tijd = ("20:00")
else if (Tijdw === "20 Uur") Tijd = ("20:00")
else if (Tijdw === "20") Tijd = ("20:00")
else Tijd = Tijdw;

collected.first().delete(10000);
msgVraag.delete(9000);
} else return;



Hostreq = new discord.RichEmbed()
.setDescription(`Wie is de host?(Roblox Naam)`)
.setColor("#4287f5")

msgVraag = await message.channel.send(Hostreq);

collected = await message.channel.awaitMessages(filter, { max: 1, time: 1200000, errors: ["time"] })
.catch(error => { return message.reply(`De tijd is verlopen.\nHet command werd geanuleerd.`) });

if (collected.size > 0) {
if (collected.first().content === 'stop') {
status = false;
};

var Host = collected.first().content;

collected.first().delete(10000);
msgVraag.delete(9000);

} else return;

if (status === true){ 

CoHostreq = new discord.RichEmbed()
.setDescription(`Wie is de Co-host?(Roblox Naam)`)
.setColor("#4287f5")

msgVraag = await message.channel.send(CoHostreq);

collected = await message.channel.awaitMessages(filter, { max: 1, time: 1200000, errors: ["time"] })
.catch(error => { return message.reply(`De tijd is verlopen.\nHet command werd geanuleerd.`) });

if (collected.size > 0) {
if (collected.first().content === 'stop') {
status = false;
};

var CoHost = collected.first().content;
collected.first().delete(10000);
msgVraag.delete(9000);
} else return;

if (status === true){ 

Opreq = new discord.RichEmbed()
.setDescription(`Zijn er enkele opmerkingen?(Bijzonderheden)`)
.setColor("#4287f5")

msgVraag = await message.channel.send(Opreq);

collected = await message.channel.awaitMessages(filter, { max: 1, time: 1200000, errors: ["time"] })
.catch(error => { return message.reply(`De tijd is verlopen.\nHet command werd geanuleerd.`) });

if (collected.size > 0) {
if (collected.first().content === 'stop') {
status = false;
};
var Opmerkingen = collected.first().content;
collected.first().delete(10000);
msgVraag.delete(9000);
} else return;

TrainingAnnoucement = new discord.RichEmbed()
.setTitle("**TRAINING**")
.addField("Eenheid:", Eenheid)
.addField("Tijd:", Tijd)
.addField("Host:", Host)
.addField("Co-host:", CoHost)
.addField("Opmerkingen:", Opmerkingen)
.setColor(kleur);

if (status === true){ 

var trainingschannel = bot.channels.get("598278919812153374");

trainingschannel.send(TrainingAnnoucement);

if(!Data[TID]) Data[TID] = {
eenheid: (`${Eenheid}`),
tijd: (`${Tijd}`),
host: (`${Host}`),
cohost: (`${CoHost}`),
opmerking: (`${Opmerkingen}`),
tid: (`${TID}`),
date: (`${datum}`),
mID: (`${MesID}`)
}

};
} else; 
} else;
} else;
} 

module.exports.help = {
    name: "training"
}