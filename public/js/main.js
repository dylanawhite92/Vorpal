$(document).ready(function () {

    // Base item prices using the table from the Dungeon Master's Guide (5E) for reference
    var commonBasePrice = 50;
    var uncommonBasePrice = 101;
    var rareBasePrice = 501;
    var veryRareBasePrice = 5001;
    var legendaryBasePrice = 50001;
    var shopInventory = [];
    var wealthValue = $("#wealth-select option:selected").val();
    var popValue = $("#population-select option:selected").val();
    var typeValue = $("#type-select option:selected").val();

    // Testing generator click
    $("#generator").on("click", function() {
        // Value of selected dropdown option
        renderInventory();
    });

    // Setting value of select options
    $("#population-select").on("change", function() {
        var value = this.value;
        popValue = value;
    });

    // Setting value of wealth select options
    $("#wealth-select").on("change", function() {
        var value = this.value;
        wealthValue = value;
    });

    // Setting value of select options
    $("#type-select").on("change", function() {
        var value = this.value;
        typeValue = value;
    });

    function renderInventory() {
        // Empty inventory before filling it again.
        shopInventory.length = 0;

        // Query the database
        // Testing
        $.ajax({
            method: "GET",
            url: `/${popValue}`
        }).then(function(data) {
            for (i = 0; i < data.length; i++) {
                shopInventory.push(data[i]);
            };
            
            console.log(shopInventory);
            buildCard();
        })
    };

    // function populationSize() {
    //     switch(popValue) {
    //         case "Thorp (20-80)":
    //         // code
    //         break;
    //         case "Hamlet (81-400)":
    //         // code
    //         break;
    //         case "Village (401-900)":
    //         // code
    //         break;
    //         case "Small Town (901-2,000)":
    //         // code
    //         break;
    //         case "Large Town (2,001-5,000)":
    //         // code
    //         break;
    //         case "Small City (5,001-12,000)":
    //         // code
    //         break;
    //         case "Large City (12,001-25,000)":
    //         // code
    //         break;
    //         case "Metropolis (25,001+)":
    //         // code
    //         break;
    //     }
    // };

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

    // Renders inventory items
    function buildCard() {
        $("#inventory").empty();

        for (i = 0; i < shopInventory.length; i++) {
            // Card boundaries
            var cardDiv = $("<div>");
            cardDiv.addClass("card mb-3 p-2");

            // Card content container
            var cardHeading = $("<div>");
            cardHeading.addClass("card-heading");

            // Set icon based on item type
            var icon = $("<img>");
            icon.addClass("item-icon float-left");
            
            switch (shopInventory[i].type) {
                case "Armor":
                    icon.attr("src", "./images/armors.png");
                    break;
                case "Potion":
                    icon.attr("src", "./images/potions.png");
                    break;
                case "Ring":
                    icon.attr("src", "./images/rings.png");
                    break;
                case "Rod":
                    icon.attr("src", "./images/rods.png");
                    break;
                case "Scroll":
                    icon.attr("src", "./images/scrolls.png");
                    break;
                case "Wand":
                    icon.attr("src", "./images/wands.png");
                    break;
                case "Weapon":
                    icon.attr("src", "./images/weapons.png");
                    break;
                case "Wondrous Item":
                    icon.attr("src", "./images/Wondrous.png");
                    break;
            }

            var itemName = $("<h5>");
            itemName.addClass("item-name card-title float-left")

            var span = $("<span>");
            span.addClass("btn btn-outline-secondary ml-1");
            span.text(shopInventory[i].item_name);
            itemName.append(span);

            var price = $("<h6>")
            price.addClass("float-right");
            price.text("Price: 600 gp");

            var coin = $("<img>");
            coin.attr("src", "./images/coin.gif");
            price.prepend(coin);

            cardHeading.append(icon);
            cardHeading.append(itemName);
            cardHeading.append(price);
            cardDiv.append(cardHeading);
            $("#inventory").append(cardDiv)
        }
    }

    function buildItemInfo() {
        // Populate item info box on item name click
    }
});