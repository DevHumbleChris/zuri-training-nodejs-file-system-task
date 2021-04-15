// Get Post Requests Server.
const http = require('http');
const PORT = 5000;
const fs = require('fs');
const https = require('https');
const API_URL = "http://127.0.0.1:3000/posts"

https.get(API_URL, (resp) => {
  let data = ''

  resp.on('data', (chunk) => {
    data += chunk;
  })

  resp.on('end', () => {
    console.log(JSON.parse(data))
  })
}).on('error', (err) => {
  console.log(`Error: ${err.message}`)
})
