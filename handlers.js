const apikeyString = "?apiKey=1aadbb8303e74d88ba0e691bc5b59c11";

function parseData(chunks) {
    let body = {};
    const chunksArr = Buffer.concat(chunks);
    const chunksStr = chunksArr.toString();
    const urlParams = new URLSearchParams(chunksStr);
    for (const [key, value] of urlParams.entries()) {
        body[key] = value;
    }
    return body;
}

function getBody(request) {
    return (new URL("http://test.com" + request.url)).searchParams.toString();
}

const getRecipes = async (request, response) => {
    const body = getBody(request);
    const json = await fetch("https://api.spoonacular.com/recipes/complexSearch" + apikeyString + "&" + body);
    const text = await json.text();

    response.writeHead(200, {"Content-Type": "application/json"});
    response.write(text);
    response.end();
};

const getRecipe = async (request, response) => {
    const id = parseData(getBody(request))["id"];
    const card = await fetch(`https://api.spoonacular.com/recipes/${id}/information` + apikeyString);
    const json = await card.text();

    response.writeHead(200, {"Content-Type": "application/json"});
    response.write(json);
    response.end();
};

const getCard = async (request, response) => {
    let chunks = [];
    request.on("data", (chunk) => {
        chunks.push(chunk);
    });
    request.on("end", async () => {
        const body = parseData(chunks);
        const id = body["id"];

        const card = await fetch(`https://api.spoonacular.com/recipes/${id}/card` + apikeyString);
        const json = await card.text();
        const url = JSON.parse(json)["url"];

        response.writeHead(200, {"Content-Type": "application/json"});
        response.write(JSON.stringify({url: url}));
        response.end();
    });
};

module.exports = {getCard, getRecipe, getRecipes};