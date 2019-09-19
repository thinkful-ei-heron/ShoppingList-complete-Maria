$(function(){
   $('#js-shopping-list-form').submit(event => {
       // to stop default submission 
       event.preventDefault();

       // create variable to add item to the list
       const addItem = $('.js-shopping-list-entry').val();

    $('.shopping-list-entry').val(''); // to allow new item to be added

    $('.shopping-list').append(
        `<li>
        <span class="shopping-item">${addItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);

    });

    //to delete items
    $('.shopping-list').on('click', 'shopping-item-delete', function(event){
        $(this).closest('li').remove();  
    });
    // to check off the item on list
    $('.shopping-list').on('click', 'shopping-item-toggle', function(event){
        $(this).closest('li').find('shopping-item').toggleClass(
            '.shopping-item_checked'
        );

    });



});


//.append(): Insert content, specified by the parameter, to the end of each 
//element in the set of matched elements.

//.preventDefault():  If this method is called, the default action of the 
//event will not be triggered.

//.toggleClass(): Add or remove one or more classes from each element in the 
//set of matched elements, depending on either the class's presence or the 
//value of the state argument.

//.submit: Bind an event handler to the "submit" JavaScript event, or
// trigger that event on an element.

// .closest: For each element in the set, get the first element that matches
// the selector by testing the element itself and traversing up through its 
//ancestors in the DOM tree.

//.remove(): Remove the set of matched elements from the DOM.

//.val(): Get the current value of the first element in the set of matched elements or set 
//the value of every matched element.
