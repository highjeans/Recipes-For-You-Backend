function parseBody(request) {
    let chunks = [];
    let body = {};
    request.on("data", (chunk) => {
        chunks.push(chunk);
    });
    request.on("end", () => {
        chunks = Buffer.concat(chunks).toString();
        for (const [key, value] of new URLSearchParams(chunks)) {
            body[key] = value;
        }
    });
    console.log(body);
    return body;
}

const getRecipes = (request, response) => {

};

const getRecipe = (request, response) => {

};

const getCard = (request, response) => {

};

module.exports = {getCard, getRecipe, getRecipes};