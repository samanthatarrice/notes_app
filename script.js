/*

1. When user adds text and clicks on button:
  - if there is no text, nothing happens (or alert)
  - a new sticky note appears.
  - the text that was added to the textarea field gets placed into sticky note.

2. If the user wants to see more text inside of the sticky note, they can click on it to enlarge.
  - The background becomes more gray
  - The sticky note becomes a modal. Larger, and in the center of the screen.
  - An X appears on the top of the note to close the modal.

*/

// $('i.far.fa-trash-alt').click(console.log('working'));

$(document).ready(function(){

  $('.add-note').click(newSticky);

  $(document).on('click', '.fa-trash-alt', function() {
    $(this).parent().remove();
  }) //needed to use .on instead of .click in order to access dynamically created elements from other functions

  function newSticky() {
    const stickyContainer = $('<div class="sticky-container"></div>');
    const stickyImg = $('<img src="images/sticky-note.png" />');
    const stickyPEl = $('<p></p>');
    const trash = $('<i class="far fa-trash-alt"></i>');
    
    $('.stickies').append(stickyContainer);
    stickyContainer.append(stickyImg);
    stickyContainer.append(stickyPEl.text($("#new-note").val()));
    stickyContainer.append(trash);
  }

})

// function deleteSticky() {
//   alert('working');
// }
