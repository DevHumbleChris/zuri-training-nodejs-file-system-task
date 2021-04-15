// Get Post Requests Server.

// Hints: Please Run The api_server.js file in the terminal first.

const http = require('http');
const PORT = 5000;
const fs = require('fs');
const axios = require("axios")
const API_URL = "http://127.0.0.1:3000/posts"

async function getPosts() {
  try{
    const response = await axios.get(API_URL)
    const results = response.data
    let data = JSON.stringify(results)

    fs.writeFile("./result/posts.json", data, 'utf8' , (err) => {
      if (err) console.log(err.message)
      console.log("Data Was Successfully Written Into The File (posts.json)")
    })
  }catch(err){
    console.log(err.message)
  }
}

getPosts()
