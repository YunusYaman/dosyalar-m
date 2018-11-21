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

//komutları yükleyelim - en
const logg = message => {
	console.log(`[EN-KOMUTLAR] ${message}`);
  };
  client.commands = new Discord.Collection();
  client.aliases = new Discord.Collection();
  fs.readdir('./lib-en/', (err, files) => {
	if (err) console.error(err);
	log(`----->   ${files.length} The command will be loaded.`);   
	files.forEach(f => {
	  let props = require(`./lib-en/${f}`);
	  log(`[EN-KOMUTLAR] ♦ loaded command: ${props.help.name}.`);
	  client.commands.set(props.help.name, props);
	  props.conf.aliases.forEach(alias => {
		client.aliases.set(alias, props.help.name);
	  });
	});
  });

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./lib/${command}`)];
      let cmd = require(`./lib/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./lib/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);        
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./lib/${command}`)];
      let cmd = require(`./lib/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.reload = command => {
	return new Promise((resolve, reject) => {
	  try {
		delete require.cache[require.resolve(`./lib-en/${command}`)];
		let cmd = require(`./lib-en/${command}`);
		client.commands.delete(command);
		client.aliases.forEach((cmd, alias) => {
		  if (cmd === command) client.aliases.delete(alias);
		});
		client.commands.set(command, cmd);
		cmd.conf.aliases.forEach(alias => {
		  client.aliases.set(alias, cmd.help.name);
		});
		resolve();
	  } catch (e){
		reject(e);
	  }
	});
  };
  
  client.load = command => {
	return new Promise((resolve, reject) => {
	  try {
		let cmd = require(`./lib-en/${command}`);
		client.commands.set(command, cmd);
		cmd.conf.aliases.forEach(alias => {
		  client.aliases.set(alias, cmd.help.name);
		});
		resolve();
	  } catch (e){
		reject(e);        
	  }
	});
  };
  
  client.unload = command => {
	return new Promise((resolve, reject) => {
	  try {
		delete require.cache[require.resolve(`./lib-en/${command}`)];
		let cmd = require(`./lib-en/${command}`);
		client.commands.delete(command);
		client.aliases.forEach((cmd, alias) => {
		  if (cmd === command) client.aliases.delete(alias);
		});
		resolve();
	  } catch (e){
		reject(e);
	  }
	});
  };





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