//LIST OF BOOKS 
const books = [ 
    {title: 'Science Of Storytelling', borrowed: false}, 
    {title: 'How We Got to Now', borrowed: true}, 
    {title: 'Soonish', borrowed: false},
    {title: 'The Big Nine', borrowed: true},
    {title: 'Deviced!', borrowed: true},
    {title: 'The Truth About Your Future', borrowed: false}
];



//CALL TO ACTION 

let myinput = document.querySelector('input');
let myBtn = document.querySelector('.serlink');
let enterinput = document.querySelector('#searchinp');


myBtn.onclick = function () {
    let input = prompt('Get a Book');
    let found = books.find(book => book.title.toLowerCase() === input.toLowerCase())

    if (found && found.borrowed === false) {
        alert(`We found ${found.title} and it is available`)
    } else if (found && found.borrowed === true) {
        alert(`We found ${found.title} but it is not available`)
    } else {
        alert(`This book was not found in our database. Please check back at a later time`)
    }
}

enterinput.onkeypress = function (inp) {
    if  (inp.key === 'Enter')   {            
            let input = enterinput.value.trim()
            let found = books.find(book => book.title.toLowerCase() === input.toLowerCase())

            if (found && found.borrowed === false) {
                alert(`We found ${found.title} and it is available`)
            } else if (found && found.borrowed === true) {
                alert(`We found ${found.title} but it is not available`)
            } else {
                alert(`This book was not found in our database. Please check back at a later time`)
            }
    }
}

/*----TO UPPER CASE
let searchinput = [];
myinput.addEventListener('keyup', (e) => {
    const inputString = e.target.value.toLowerCase();
    const filterInput = searchinput.filter((character) => {
        return(
            character.book.toLowerCase().includes(inputString)
        );
    });
    displayCharater(filterInput);
});
*/

//AUTO COMPLETE
document.getElementById('searchinp').addEventListener('input', (e) => {
        let bookArray = [];

        if (e.target.value) {
            bookArray = books.filter(book => book.toLowerCase().includes(e.target.value));
            bookArray = bookArray.map(book => `<list>${book}</list>`)
        }
        showBookArray(bookArray);
});


function showBookArray (bookArray) { 
    const file = !bookArray.length? '' : bookArray.join ('');
    document.querySelector('list').innerHTML = file;

}












//CONVERT INPUT TO LOWER CASE 
/*
Object.entries(book).forEach( entry => {
    if (entry[0].toLowerCase() === mybtn 
})
*/