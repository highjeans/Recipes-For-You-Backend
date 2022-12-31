const http = require("http");
const {requests} = require("./requests");

const server = http.createServer((request, response) => {
    requests(request, response);
});

server.listen(8080, () => {
    console.log("Server listening on port 8080.")
})