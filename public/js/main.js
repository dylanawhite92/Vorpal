$(document).ready(function () {

    var commonBasePrice;
    var uncommonBasePrice;
    var rareBasePrice;
    var veryRareBasePrice;
    var legendaryBasePrice;
    var shopInventory = [];
    var wealthValue = $("#wealth-select option:selected").text();
    var popValue = $("#population-select option:selected").text();
    var typeValue = $("#type-select option:selected").text();

    // Testing generator click
    $("#generator").on("click", function() {
        // Value of selected dropdown option
        renderInventory();
    });

    // Testing getting value of select options
    $("select").on("change", function() {
        var value = this.value

        console.log(value);
    });

    function renderInventory() {

    };

    function populationSize() {
        switch(popValue) {
            case "Thorp (20-80)":
            // code
            break;
            case "Hamlet (81-400)":
            // code
            break;
            case "Village (401-900)":
            // code
            break;
            case "Small Town (901-2,000)":
            // code
            break;
            case "Large Town (2,001-5,000)":
            // code
            break;
            case "Small City (5,001-12,000)":
            // code
            break;
            case "Large City (12,001-25,000)":
            // code
            break;
            case "Metropolis (25,001+)":
            // code
            break;
        }
    };

    function townWealth() {
        switch(wealthValue) {
            case "Poor":
            // code
            break;
            case "Modest":
            // code
            break;
            case "Comfortable":
            // code
            break;
            case "Affluent":
            // code
            break;
            case "Obscene":
            // code
            break;
        }
    }

    function shopType() {
        switch(typeValue) {
            case "Alchemist":
            // code
            break;
            case "Armorer":
            // code
            break;
            case "Scribe":
            // code
            break;
            case "Trader":
            // code
            break;
            case "Wandwright":
            // code
            break;
            case "Weaponsmith":
            // code
            break;
        }
    }

    function imageType() {

    }

    function buildCard() {
        
    }
});