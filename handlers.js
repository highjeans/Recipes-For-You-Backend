function parseBody(request) {
    let chunks = [];
    let body = {};
    const chunksArr = Buffer.concat(chunks);
    const chunksStr = chunksArr.toString();
    const urlParams = new URLSearchParams(chunksStr);
    for (const [key, value] of urlParams.entries()) {
        body[key] = value;
    }
    return body;
}

const getRecipes = (request, response) => {

};

const getRecipe = (request, response) => {

};

const getCard = (request, response) => {

};

module.exports = {getCard, getRecipe, getRecipes};