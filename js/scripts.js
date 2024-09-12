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




 // //3(i). Adding the delete button "X": 
 //   let crossOutButton = document.createElement("crossOutButton");
 //   crossOutButton.appendChild(document.createTextNode("X"));
 //   li.appendChild(crossOutButton);

 //   crossOutButton.addEventListener("click", deleteListItem);
 // //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
 //   function deleteListItem(){
 //     li.classList.add("delete")
 //   }


 // 4. Reordering the items: 
   $('#list').sortable();


