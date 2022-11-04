// Belajar DOM Javascript
// DOM Selection Mhetod
////////////////////////
//-> getElementById  (Element)
//-> getElelmentsByTagName (HTMLCollection)
//-> getElementsByClassName (HTMLCollection)
//-> querySelector  (Element)
//-> querySelectorAll (nodelist)

const judul = document.getElementById('judul');
judul.style.color = 'green';

let p = document.getElementsByTagName('p');
//seleksi menggunakan index, karena htmlColection [0,1,2]
var c = document.getElementsByClassName('p');

let q = document.querySelector('#b p');

//Masih menggunakan index karena nodeList
let semua = document.querySelectorAll('p');

semua[2].style.color = 'red';
