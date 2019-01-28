$(document).ready(function () {

    var commonBasePrice;
    var uncommonBasePrice;
    var rareBasePrice;
    var veryRareBasePrice;
    var legendaryBasePrice;
    var shopInventory = [];

    // Testing generator click
    $("#generator").on("click", function() {
        // Value of selected dropdown option
        renderInventory();
    });

    // Testing getting value of select options
    // $("select").on("change", function() {
    //     var value = this.value

    //     console.log(value);
    // });

    function renderInventory() {
        var wealthValue = $("#wealth-select option:selected").text();
        var popValue = $("#population-select option:selected").text();
        var typeValue = $("#type-select option:selected").text();

    };

    function populationSize() {
        switch(value) {

        }
    };

    function townWealth() {
        switch(value) {
            
        }
    }

    function shopType() {
        switch(value) {
            
        }
    }

    function imageType() {
        
    }
});