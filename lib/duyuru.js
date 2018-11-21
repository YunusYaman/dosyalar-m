	const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setDescription(`Bu komut özel mesajlarda kullanıma kapatılmıştır.`)
  return message.author.send(ozelmesajuyari); }
//eğer bir bot yollamış ise mesajı
if (message.author.bot === true) {
  return;
}

  if (!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return  message.channel.send(new Discord.RichEmbed()
.setDescription(`<:hata:428568466639814666> | Bu komutu kullanmak için gerekli yetkiniz yok.`)
.setColor("RANDOM"));
	let duyuru = args.slice(0).join(' ');
	if (duyuru.length < 1) return message.channel.send(new Discord.RichEmbed()
    .setDescription('<:hata:428568466639814666> | Lütfen duyuru metnini yazınız.')
    .setColor('RANDOM'))
	const mesaj2 = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField(':mega: | Yeni Duyuru:', `**»** ${duyuru}`)
	.setFooter(`Yetkili: ${message.author.username}`)
	message.channel.send('@everyone')
  message.channel.send(mesaj2);
  message.delete()
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['duyuru', 'duyuru yap'],
  permLevel: 3
};

exports.help = {
  name: 'duyuru',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'duyuru [duyuru]'
};



