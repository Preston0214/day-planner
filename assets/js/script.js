//on save button click save user itnput-----
//save user input to local storage-----
//take user input and display it in appropriate timeblock 

var today = $('#currentDay')
var now = moment()
var allNotes = ['','','','','','','','','']
var lastNote = localStorage.getItem('note')
var saveBtn = $('.saveNotes')

today.text("Today is: " + (now.format("MMMM, DD, YYYY")))








function saveNotes() {
    var userNote = $(this).parent().closest('textarea').val();
    var hour = $(this).parent().attr('id');
    localStorage.setItem(hour, userNote);
    console.log(userNote)
}

saveBtn.on('click', saveNotes())



