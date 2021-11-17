let container = $('.container');                             
let timeRows = $('.container').children();
let content = ['', '', '', '', '', '', '', '', ''];
let now = moment();
let current = $('#currentDay');

function init() {
    current.text('Today is: ' + now.format('MMMM DD YYYY'));       
    futurePast();                                        

    if(localStorage.getItem('notes') !== null){                   
    content = JSON.parse(localStorage.getItem('notes'));
    
    timeRows.find('textarea').each(function (i) {
        $(this).text(content[i])
    })
    } 
}


function futurePast () {                             
    timeRows.each(function () {
        let rowHour = $(this).data().hour.substr(0, 2)
        let rowNow = now.format('HH')

    if(rowNow < rowHour){
        $(this).addClass('future');

    } else if (rowNow == rowHour){
        $(this).addClass('present');

    } else if (rowNow > rowHour){
        $(this).addClass('past');
    };
    })
};

function saveContent(){                                 
    let value = $(this).siblings().eq(1).val();
    let iLocation = $(this).data().index;   
    content[iLocation] = value;  
    localStorage.setItem('notes', JSON.stringify(content));
};


init();

container.on('click', '.saveBtn', saveContent);


