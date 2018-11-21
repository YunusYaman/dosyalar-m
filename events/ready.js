const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../database/ayarlar.json');
const snekfetch = require('snekfetch');

var prefix = ayarlar.prefix;

module.exports = (client,message) => {

var baslangic =
chalk.blue.bold(`\n                             \n                             \n                             \n-----------------\nBOT AKTİF\n-----------------`)
console.log(baslangic);
var oynuyorkısmı = [`www.thefunt.net`,`/davet | ${client.guilds.size} sunucu`];
///\\[
 // \\  `${client.guilds.size} Sunucu`,
  // \\ `❤️ 29 Ekim 1923 ❤️ `,
  // \\ `/yardım | ${client.guilds.size} Sunucu | ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Kullanıcıyı`,
 //\\   ` ${client.guilds.size} Sunucu | ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Kullanıcıyı`,
 //\\   `www.thefunt.net`,
 // \\  `/yardım | ${client.guilds.size} Sunucuyu`,
// \\   `/davet ♣ /yardım`,
 // \\  `www.thefunt.net`,
 //\\   `rainbow özelliğini`,
// \\\   `/davet ♠ ${client.guilds.size} Sunucuyu`,
// \\   `/yardım | ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Kullanıcıyı`
//\\];


setInterval(function() {

    var random = Math.floor(Math.random()*(oynuyorkısmı.length-0+1)+0);

    client.user.setActivity(oynuyorkısmı[random], { type: 'WATCHING' });
    }, 2 * 6000);
};

