const http = require("http");
const {requests} = require("./requests");

const server = http.createServer(async (request, response) => {
    await requests(request, response);
});

server.listen(8080, () => {
    console.log("Server listening on port 8080.")
})