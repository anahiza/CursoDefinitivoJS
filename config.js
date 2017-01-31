'use strict'
const config={

	aws:{
		accessKey: process.env.AWS_ACCESS_KEY,
		secretKey: process.env.AWS_SECRET_KEY
	},
  secret: process.env.PLATZIGRAM_SECRET || 'platzi',
  client: {
    endpoints:{
      pictures:'http://api.platigram.com/pictures',
      users:'http://api.platigram.com/user',
      auth:'http://api.platigram.com/auth'
    }
  }
}

if (process.env.NODE_ENV !== 'production') {
  config.client.endpoints = {
    pictures: 'http://localhost:5000',
    users: 'http://localhost:5001',
    auth: 'http://localhost:5002'
  }
}

module.exports = config;