$('.add-note').click(newSticky);

$('.add-note').mousedown(() => {
  $('.add-note').css('box-shadow', 'none');
})

$('.add-note').mouseup(() => {
  $('.add-note').css('box-shadow', '5px 5px 5px rgba(0, 0, 0, 0.5)');
})


/* REMOVED TO ALLOW USER TO ADD LINE BREAKS TO NOTES:
$(document).on('keydown',(e) => {
  if(e.which === 13) {
    if ($('textarea').val() === '') {
      e.preventDefault();
      alert('Add a new note!');
    } else {
    e.preventDefault();
    newSticky();
    }
  }
});
*/


$(document).on('click', '.fa-trash-alt', function() {
  $(this).parent().remove();
}) //needed to use .on instead of .click in order to access dynamically created elements from other functions

$(document).on('click', '.fa-search-plus', openModal);

function newSticky() {
  if ($('textarea').val() === '') {
    alert('Add a new note!');
    e.preventDefault();
  }

  const stickyContainer = $('<div class="sticky-container"></div>');
  const stickyImg = $('<img src="images/sticky-note.png" />');
  const stickyPEl = $('<p class="sticky-text"></p>');
  const trash = $('<i class="far fa-trash-alt"></i>');
  const enlarge = $('<i class="fas fa-search-plus"></i>');
  
  $('.stickies').append(stickyContainer);
  stickyContainer.append(stickyImg);
  stickyContainer.append(stickyPEl.html($("#new-note").val()));
  stickyContainer.append(trash);
  stickyContainer.append(enlarge);
  $('#new-note').val('');
}

function openModal() {
  const modalBackground = $('<div class="modal-background"></div>');
  const modalContent = $('<div class="modal-content"></div>');
  const close = $('<i class="fas fa-window-close"></i>');

  $('body').append(modalBackground);
  modalBackground.append(modalContent);
  modalContent.append(close);
  modalContent.append($(this).prev().prev().html());

  $(document).on('click', '.fa-window-close', () => {
    modalBackground.css('display', 'none');
  });
}

/* STEPS:

1. When user adds text and clicks on button:
  - if there is no text, nothing happens (or alert)
  - a new sticky note appears.
  - the text that was added to the textarea field gets placed into sticky note.

2. If the user wants to see more text inside of the sticky note, they can click on it to enlarge.
  - The background becomes more gray
  - The sticky note becomes a modal. Larger, and in the center of the screen.
  - An X appears on the top of the note to close the modal.

*/