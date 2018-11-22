const snekfetch = require('snekfetch')
const api = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM1NDIzMTYzMDQwNTA0MjE3NiIsImJvdCI6dHJ1ZSwiaWF0IjoxNTE2Mjc0MTQ1fQ.2H9LjNjH6WFp5LmswfXAYSDsHQn2JSPPgbgf1WjSi_c'

module.exports = client => {
snekfetch.post(`https://discordbots.org/api/bots/stats`)
  .set('Authorization', api)
  .send({ server_count: client.guilds.size })
  .then(() => console.log('discordbots.org adlı sitedeki veriler güncellendi.'))
  .catch(err => console.error(`Bir şeyler yanlış gitti: ${err.body}`));
}

