$(document).ready(initializeForm);

function initializeForm() {

    // initializeing www.w3schools.com/js/js_best_practices.asp
    var itemCount = 0;
    var itemInput = $("input#item");
    itemInput.val("");

    // define what happens when click "Add Item". Having problem with key 13 which is the enter key
    $("a#add-item").click(shoppingList);
    $("#item").keydown(function (enter) {
        if (enter.keyCode == 13) {
            shoppingList();
        }
    });

    function shoppingList() {
        if (itemInput.val() === '') {
            return;
        }
        // get the items list and item to add
        var items = $("ul#items");
        var purchased = $("ul#purchased");
        var itemToBuy = itemInput.val();
        itemInput.val("");

        // create variable to hold www.w3schools.com/js/js_variables.asp
        var listItem = $("<li><input type='checkbox' name=" + itemToBuy + " value=" + itemToBuy + "> " + itemToBuy + " <a class='delete' href='#'><strong>-</strong> Delete</a></li>");
        listItem.attr("id", "item[" + itemCount+++"]");
        addItem(listItem);

        //delete items
        listItem.find("a").click(function () {
            $(this).parent().hide('slow', function () {
                $(this).remove();
            });
        });

        // add the item 
        function addItem(listItem) {
            listItem.hide();
            items.append(listItem);
            listItem.show('slow');
        }
      //move to bought
        function purchasedItem(listItem) {
            listItem.hide();
            purchased.append(listItem);
            listItem.show('slow');
        }
        listItem.find("input:checkbox").click(function () {
            this.checked ? purchasedItem(listItem) : addItem(listItem);
        });

        // clear input and refocus
        itemInput.focus();
    }
}