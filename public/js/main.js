$(document).ready(function () {

    // Global variables
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

    // Generate shop inventory on click
    $("#generator").on("click", function() {
        // Value of selected dropdown option
        renderInventory();
    });

    // Populate item info on click
    $(document).on("click", ".item-btn", function() {
        buildItemInfo($(this).text());
    })

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

    // Round a given integer to the nearest 10 place
    function roundNumber(num) {
       return Math.round(num / 10) * 10;
    }

    // Set random price based on average price range examples found in Dungeon Master's Guide (5E)
    function setPrice(rarity) {
        var unrounded;
        var price;

        switch (rarity) {
            case "Common":
                return `${commonBasePrice} gp`;
            case "Uncommon":
                unrounded = uncommonBasePrice + Math.floor(Math.random() * 400);
                price = roundNumber(unrounded)
                return `${price} gp`;
            case "Rare":
                unrounded = rareBasePrice + Math.floor(Math.random() * 4500);
                price = roundNumber(unrounded)
                return `${price} gp`;
            case "Very Rare":
                unrounded = veryRareBasePrice + Math.floor(Math.random() * 45000);
                price = roundNumber(unrounded)
                return `${price} gp`;
            case "Legendary":
                unrounded = legendaryBasePrice + Math.floor(Math.random() * 175000);
                price = roundNumber(unrounded)
                return `${price} gp`;
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

            var icon = $("<img>");
            icon.addClass("item-icon float-left");
            
            // Set icon based on item type
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
                    icon.attr("src", "./images/wondrous.png");
                    break;
            }

            // Name container
            var itemName = $("<h5>");
            itemName.addClass("item-name card-title float-left")

            var button = $("<button>");
            button.addClass("btn item-btn btn-outline-secondary ml-1");
            button.text(shopInventory[i].item_name);
            itemName.append(button);

            // Price container
            var price = $("<h6>")
            price.addClass("float-right");

            // Set price by item rarity
            price.text(`Price: ${setPrice(shopInventory[i].rarity)}`);

            var coin = $("<img>");
            coin.attr("src", "./images/coin.gif");
            price.prepend(coin);

            // Append the created elements to each other
            // Then append that div to the inventory box
            cardHeading.append(icon);
            cardHeading.append(itemName);
            cardHeading.append(price);
            cardDiv.append(cardHeading);
            $("#inventory").append(cardDiv)
        }
    }

    function buildItemInfo(name) {
        // Populate item info box on item name click
        // $("#item-display").fadeOut(400, function() {
        //     // Empty display div of previous info
        //     this.innerHTML = "";
        // });

        $("#item-display").empty();

        for (i = 0; i < shopInventory.length; i++) {
            if (name === shopInventory[i].item_name) {
                // Elements being created
                var itemName = $("<h2>");
                var underline = $("<u>");
                var attunement = $("<p>");
                var rarity = $("<p>");
                var itemInfo = $("<p>");
                var location = $("<p>");
                var type = $("<p>");

                // Setting text values of display elements

                itemName.addClass("text-center");
                underline.text(name);
                itemName.append(underline);

                if (shopInventory[i].attunement === false) {
                    attunement.text(`Requires Attunement: False`);
                }
                else {
                    attunement.text(`Requires Attunement: True`);
                }                

                rarity.text(`Rarity: ${shopInventory[i].rarity}`);
                itemInfo.text(shopInventory[i].description);
                location.text(`Found In: ${shopInventory[i].location}`);
                type.text(`Category: ${shopInventory[i].type}`);
                
                // Connecting all the elements
                $("#item-display").append(itemName);
                $("#item-display").append(attunement);
                $("#item-display").append(rarity);
                $("#item-display").append(itemInfo);
                $("#item-display").append(location);
                $("#item-display").append(type);
            };
        };
        // $("#item-display").delay(400).fadeIn();
    };
});