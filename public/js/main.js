$(document).ready(function () {

    var commonBasePrice;
    var uncommonBasePrice;
    var rareBasePrice;
    var veryRareBasePrice;
    var legendaryBasePrice;

    // // Testing generator click
    // $("#generator").on("click", function() {
    //     // Value of selected dropdown option
    //     var value = $("#wealth-select option:selected").text();
    //     alert(value);
    // });

    // Testing getting value of select options
    $("select").on("change", function() {
        var value = this.value

        console.log(value);
    });

    function renderInventory() {

    };
});