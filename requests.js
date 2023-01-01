const {getRecipe, getRecipes, getCard} = require("./handlers");


const requests = async (request, response) => {
    const url = request.url;

    switch (url) {
        case "/recipe":
            await getRecipe(request, response);
            break;
        case "/recipes":
            await getRecipes(request, response);
            break;
        case "/card":
            await getCard(request, response);
            break;
    }
};

module.exports = {requests};