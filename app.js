//değişkenlerimiz
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const moment = require('moment');
const snekfetch = require('snekfetch');
const Request = require('request');
const chalk = require('chalk');
require('./util/eventLoader')(client);

const konsol = new Discord.WebhookClient('513131181446004767','LpEO7CfWqOMOvfgDargy5yQ2MNTfwdx_vKZ697jzD_WVuab6vhWFSGUoZ4JLKgGe17Rh')
client.on('ready',ready => {
konsol.send("ready, thefunt")
});


//Ayarlar
const ayarlar = require('./database/ayarlar.json');
const settings = require('./database/ayarlar.json');
var prefix = ayarlar.prefix;
var log01 = 
chalk.white.bgRed.bold("♠ | Database verileri başarı ile çekildi")
console.log(log01);

//komutları yükleyelim. - tr
const log = message => {
  console.log(`${message}`);
};
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./lib/', (err, files) => {
  if (err) console.error(err);
  log(`----->   ${files.length} adet komut yüklenecek.`);   
  files.forEach(f => {
    let props = require(`./lib/${f}`);
    log(`[TR-KOMUTLAR] ♦ Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

///////////////////////////-    KOMUT ALANI -///////////////////////////////////////////

///////////////////////////-    KOMUT ALANI -///////////////////////////////////////////
client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);