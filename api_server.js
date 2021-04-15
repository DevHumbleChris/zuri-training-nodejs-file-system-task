const http = require('http')
const PORT = 3000
const fs = require('fs')
const url = require('url')

const server = http.createServer( (req, res) => {
  if(req.method === "GET") {
    return handleGetRequests(req, res);
  }
})

// Get Requests.
function handleGetRequests(req, res) {

  const { pathname } = url.parse(req.url)

  if(pathname !== "/posts") {
    return handleError(res, 404);
  }

  res.setHeader("Content-Type", "application/json;charset=utf-8")
  fs.readFile("./posts.json", (err, data) => {
    if(err) console.log(err.message)
    return res.end(data);
  })
}

// 404 Error Handling.
function handleError(res, code) {
  res.statusCode = code
  res.setHeader("Content-Type", "application/json;charset=utf-8")
  return res.end(JSON.stringify({
    code,
    message: "Page Not Found"
}))
}

server.listen(PORT, () => {
  console.log(`Server API Running At Port ${PORT}`)
})
