function newItem() {
// jQuery
//1. Adding a new item to the list of items: 
  let inputValue = $('#input').val();
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    let li = $('#list').append('<li class="list-item">'+inputValue+'</li>');
    $('#list').append(li);

  }
  $('#input').val('');
  deleteButton();
}



 //2. Crossing out an item from the list of items:
function crossOut() {
  var selectedChild = $(this);

  if (!selectedChild.hasClass("strike")) {
    selectedChild.addClass("strike");
  } else {
    selectedChild.removeClass("strike");
  }
}

$("#list").on("click",'.list-item',crossOut);


function deleteButton() {
  let listItems = $('.list-item');  // Select all elements with the class 'list-item'

  listItems.each(function() {  // Use jQuery's each() method to iterate over the items
    let item = $(this);  // 'this' refers to the current DOM element, so wrap it with $ for jQuery

    if (!item.hasClass('buttonActive')) {  // Check if the item does not have the 'buttonActive' class
      item.addClass('buttonActive');  // Add the 'buttonActive' class
      
      // Create a new delete button for each item
      let deleteButton = $("<button class='DeleteButton'>x</button>");
      
      // Append the delete button to the current list item (not all list items)
      item.append(deleteButton);
    }

  });
}

function deleteListItem(){
  $(this).parent().addClass("delete")
  }

$(document).on("click", ".DeleteButton", deleteListItem);

 // 4. Reordering the items: 
   $('#list').sortable();


