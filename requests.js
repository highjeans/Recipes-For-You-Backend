const {getRecipe, getRecipes, getCard} = require("./handlers");


const requests = (request, response) => {
    const url = request.url;

    switch (url) {
        case "recipe":
            getRecipe(request, response);
            break;
        case "recipes":
            getRecipes(request, response);
            break;
        case "card":
            getCard(request, response);
            break;
    }
};

module.exports = {requests};