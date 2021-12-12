const server = require("./api/server")
const port = process.env.PORT || 9000
const dotenv = require('dotenv').config()

server.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})