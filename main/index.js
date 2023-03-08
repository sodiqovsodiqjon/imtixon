


const items =document.querySelector(".items");

const searchInput = document.getElementById("search");
let list = document.querySelector('.our__book-item');


function myFunction() {
    var element = document.body;
    let headerBottom = document.querySelector('.header__bottom-box')
    let our = document.querySelector('.our')
    let ourBook = document.querySelector('.our__book-item')
    let header3 = document.querySelector(".header__box")
    let elPhyton = document.querySelector('.col1')
    let elPhyton2 = document.querySelector('.col2')
    let elPhyton3 = document.querySelector('.col3')

    console.log(elPhyton);
    
    element.classList.toggle("dark-mode");
    headerBottom.classList.toggle('main')
    our.classList.toggle('main')
    ourBook.classList.toggle('main')
    list.classList.toggle("main")
    header3.classList.toggle("main")
    elPhyton.classList.toggle('main')
    elPhyton2.classList.toggle('main')
    elPhyton3.classList.toggle('main')


 }

let arrJson = [
    {
     "createdAt": "2023-02-28T16:01:08.757Z",
     "name": "Eugene Adams",
    "image": "https://loremflickr.com/620/480/fashion",
     //   "image": "Sumatran tree viper",
     "item": "item 1",
     "id": "1"
    },
    {
     "createdAt": "2023-03-01T04:50:51.805Z",
     "name": "Monique Emmerich",
    "image": "https://loremflickr.com/620/480/fashion",
     //   "image": "https://xabar.uz/static/crop/1/9/920__95_1952549385.jpg",
     "item": "item 2",
     "id": "2"
    },
    {
     "createdAt": "2023-02-28T19:04:29.837Z",
     "name": "Charles Quigley III",
    "image": "https://loremflickr.com/620/480/fashion",
     //   "image": "Gold tree cobra",
     "item": "item 3",
     "id": "3"
    },
    {
     "createdAt": "2023-02-28T10:22:01.679Z",
     "name": "Katrina Durgan III",
    "image": "https://loremflickr.com/620/480/fashion",
     //   "image": "https://www.ixbt.com/img/x780x600/r30/00/02/09/12/f4292ab4d811dc5b2de3b5bdd2567222_240342.png",
     "item": "item 4",
     "id": "4"
    },
    {
     "createdAt": "2023-02-28T18:44:39.510Z",
     "name": "Eugene Quitzon",
    "image": "https://loremflickr.com/620/480/fashion",
     //   "image": "https://www.ixbt.com/img/x780x600/r30/00/02/09/12/f4292ab4d811dc5b2de3b5bdd2567222_240342.png",
     "item": "item 5",
     "id": "5"
    },
    {
     "createdAt": "2023-02-28T19:28:25.649Z",
     "name": "Gabriel Oberbrunner",
    "image": "https://loremflickr.com/620/480/fashion",
     //   "image": "https://www.ixbt.com/img/x780x600/r30/00/02/09/12/f4292ab4d811dc5b2de3b5bdd2567222_240342.pngGrand Canyon rattlesnake",
     "item": "item 6",
     "id": "6"
    },
    {
     "createdAt": "2023-03-01T07:38:06.966Z",
     "name": "Alton Gerhold",
    "image": "https://loremflickr.com/620/480/fashion",
     //   "image": "https://www.ixbt.com/img/x780x600/r30/00/02/09/12/f4292ab4d811dc5b2de3b5bdd2567222_240342.pngMamushi",
     "item": "item 7",
     "id": "7"
    },
    {
     "createdAt": "2023-02-28T15:26:49.214Z",
     "name": "David D'Amore",
    "image": "https://loremflickr.com/620/480/fashion",
     //   "image": "https://www.ixbt.com/img/x780x600/r30/00/02/09/12/f4292ab4d811dc5b2de3b5bdd2567222_240342.pngGreen rat snake",
     "item": "item 8",
     "id": "8"
    },
    {
     "createdAt": "2023-02-28T12:07:31.859Z",
     "name": "Enrique Schimmel I",
    "image": "https://loremflickr.com/620/480/fashion",
     //   "image": "https://www.ixbt.com/img/x780x600/r30/00/02/09/12/f4292ab4d811dc5b2de3b5bdd2567222_240342.pngBornean pitviper",
     "item": "item 9",
     "id": "9"
    },
    {
     "createdAt": "2023-03-01T04:06:33.165Z",
     "name": "Myra Rodriguez",
    "image": "https://loremflickr.com/620/480/fashion",
     //   "image": "https://www.ixbt.com/img/x780x600/r30/00/02/09/12/f4292ab4d811dc5b2de3b5bdd2567222_240342.pngLesser black krait",
     "item": "item 10",
     "id": "10"
    },
    {
     "createdAt": "2023-03-01T05:49:52.625Z",
     "name": "Kelli Ebert",
    "image": "https://loremflickr.com/620/480/fashion",
     //   "image": "https://www.ixbt.com/img/x780x600/r30/00/02/09/12/f4292ab4d811dc5b2de3b5bdd2567222_240342.pngIndonesian water python",
     "item": "item 11",
     "id": "11"
    },
    {
     "createdAt": "2023-03-01T03:56:24.812Z",
     "name": "Hubert Leannon",
    "image": "https://loremflickr.com/620/480/fashion",
     //   "image": "Mhttps://www.ixbt.com/img/x780x600/r30/00/02/09/12/f4292ab4d811dc5b2de3b5bdd2567222_240342.pngangshan pitviper",
     "item": "item 12",
     "id": "12"
    },
    {
     "createdAt": "2023-02-28T16:25:18.002Z",
     "name": "Dewey Stracke",
    "image": "https://loremflickr.com/620/480/fashion",
     //   "image": "https://www.ixbt.com/img/x780x600/r30/00/02/09/12/f4292ab4d811dc5b2de3b5bdd2567222_240342.pngLeaf-nosed viper",
     "item": "item 13",
     "id": "13"
    },
    {
     "createdAt": "2023-03-01T03:37:43.294Z",
     "name": "Debbie Hegmann",
    "image": "https://loremflickr.com/620/480/fashion",
     //   "image": "https://www.ixbt.com/img/x780x600/r30/00/02/09/12/f4292ab4d811dc5b2de3b5bdd2567222_240342.pngRaddysnake",
     "item": "item 14",
     "id": "14"
    },
    {
     "createdAt": "2023-03-01T02:04:39.621Z",
     "name": "Miss Flora Miller",
    "image": "https://loremflickr.com/620/480/fashion",
     //   "image": "https://unsplash.com/Jerdon's pitviper",
     "item": "item 15",
     "id": "15"
    },
    {
     "createdAt": "2023-03-01T03:56:38.337Z",
     "name": "Earl O'Connell",
    "image": "https://loremflickr.com/620/480/fashion",
     //   "image": "https://unsplash.com/Common adder",
     "item": "item 16",
     "id": "16"
    },
    {
     "createdAt": "2023-02-28T10:09:10.843Z",
     "name": "Mr. Pamela Cruickshank V",
    "image": "https://loremflickr.com/620/480/fashion",
     //   "image": "https://unsplash.com/Saw-scaled viper",
     "item": "item 17",
     "id": "17"
    },
    {
     "createdAt": "2023-02-28T10:14:03.479Z",
     "name": "Dr. Marlene Prosacco",
    "image": "https://loremflickr.com/620/480/fashion",
     //   "image": "https://unsplash.com/Indian cobra",
     "item": "item 18",
     "id": "18"
    },
    {
     "createdAt": "2023-02-28T10:06:00.503Z",
     "name": "Allen Daugherty",
    "image": "https://loremflickr.com/620/480/fashion",
     //   "image": "https://unsplash.com/Texas Coral Snake",
     "item": "item 19",
     "id": "19"
    },
    {
     "createdAt": "2023-02-28T08:48:19.410Z",
     "name": "Juanita Ernser V",
    "image": "https://loremflickr.com/620/480/fashion",
     //   "image": "Khttps://unsplash.com/ing brown",
     "item": "item 20",
     "id": "20"
    },
    {
     "createdAt": "2023-02-28T22:15:54.464Z",
     "name": "Miss Stella Goyette",
    "image": "https://loremflickr.com/620/480/fashion",
     //   "image": "https://unsplash.com/Kanburian pit viper",
     "item": "item 21",
     "id": "21"
    },
    {
     "createdAt": "2023-03-01T08:14:07.840Z",
     "name": "Kent Donnelly",
    "image": "https://loremflickr.com/620/480/fashion",
     //   "image": "Bhttps://unsplash.com/ushmaster",
     "item": "item 22",
     "id": "22"
    },
    {
     "createdAt": "2023-03-01T03:58:45.082Z",
     "name": "Maureen Kertzmann",
    "image": "https://loremflickr.com/620/480/fashion",
     //   "image": "https://unsplash.com/umping viper",
     "item": "item 23",
     "id": "23"
    },
    {
     "createdAt": "2023-02-28T18:17:00.223Z",
     "name": "Verna Rau DDS",
    "image": "https://loremflickr.com/620/480/fashion",
     //   "image": "https://unsplash.com/Macklot's python",
     "item": "item 24",
     "id": "24"
    },
    {
     "createdAt": "2023-02-28T19:07:03.283Z",
     "name": "Lonnie Wolff",
    "image": "https://loremflickr.com/620/480/fashion",
     //   "image": "https://unsplash.com/Mojave rattlesnake",
     "item": "item 25",
     "id": "25"
    },
    {
     "createdAt": "2023-03-01T00:41:57.648Z",
     "name": "Theodore Ortiz",
    "image": "https://loremflickr.com/620/480/fashion",
     //   "image": "https://unsplash.com/Nitsche's tree viper",
     "item": "item 26",
     "id": "26"
    },
    {
     "createdAt": "2023-03-01T01:11:13.777Z",
     "name": "Kelly Smith",
    "image": "https://loremflickr.com/620/480/fashion",
     //   "image": "https://unsplash.com/olden tree snake",
     "item": "item 27",
     "id": "27"
    },
    {
     "createdAt": "2023-02-28T15:41:23.529Z",
     "name": "Randy O'Reilly",
    "image": "https://loremflickr.com/620/480/fashion",
     //   "image": "https://unsplash.com/Corn snake",
     "item": "item 28",
     "id": "28"
    },
    {
     "createdAt": "2023-03-01T00:57:13.910Z",
     "name": "Harry Metz",
    "image": "https://loremflickr.com/620/480/fashion",
     //   "image": "https://unsplash.com/",
     "item": "item 29",
     "id": "29"
    },
    {
     "createdAt": "2023-03-01T04:44:52.145Z",
     "name": "Faye Streich",
    "image": "https://loremflickr.com/620/480/fashion",
     //   "image": "https://unsplash.com/",
     "item": "item 30",
     "id": "30"
    },
    {
     "createdAt": "2023-02-28T14:30:02.355Z",
     "name": "Dr. Flora Tremblay",
    "image": "https://loremflickr.com/620/480/fashion",
     //   "image": "https://unsplash.com/",
     "item": "item 31",
     "id": "31"
    },
    {
     "createdAt": "2023-02-28T10:34:30.271Z",
     "name": "Gerardo Corwin",
     "image": "https://loremflickr.com/620/480/apple",
     "item": "item 32",
     "id": "32"
    },
    {
     "createdAt": "2023-02-28T11:28:53.119Z",
     "name": "Mr. Lucy Green",
    "image": "https://loremflickr.com/620/480/fashion",
     //   "image": "https://unsplash.com/",
     "item": "item 33",
     "id": "33"
    },
    {
     "createdAt": "2023-02-28T16:32:27.094Z",
     "name": "Dana Schuster",
    "image": "https://loremflickr.com/620/480/fashion",
     //   "image": "https://unsplash.com/",
     "item": "item 34",
     "id": "34"
    },
    {
     "createdAt": "2023-03-01T02:42:25.658Z",
     "name": "Ms. Mathew Shields",
    "image": "https://loremflickr.com/620/480/fashion",
     //   "image": "https://unsplash.com/",
     "item": "item 35",
     "id": "35"
    },
    {
     "createdAt": "2023-02-28T20:03:09.747Z",
     "name": "Ms. Kendra Hermiston",
    "image": "https://loremflickr.com/620/480/fashion",
     //   "image": "https://unsplash.com/ibbon snake",
     "item": "item 36",
     "id": "36"
    },
    {
     "createdAt": "2023-02-28T20:41:19.925Z",
      "image": "https://loremflickr.com/620/480/fashion","name": "Jeffery Bailey",
   
   //   "image": "https://unsplash.com/rinket snake",
     "item": "item 37",
     "id": "37"
    },
    {
     "createdAt": "2023-03-01T07:42:53.759Z",
     "name": "Marjorie Donnelly V",
    "image": "https://loremflickr.com/620/480/fashion",
     //   "image": "https://unsplash.com/Black headed python",
     "item": "item 38",
     "id": "38"
    },
    {
     "createdAt": "2023-02-28T21:18:57.511Z",
     "name": "Dr. Kendra Bernhard",
     "image": "https://loremflickr.com/620/480/fashion",
     "item": "item 39",
     "id": "39"
    },
    {
     "createdAt": "2023-02-28T13:17:13.416Z",
     "name": "Lorena Casper",
     "image": "https://loremflickr.com/620/480/fashion",
     "item": "item 40",
     "id": "40"
    },
    {
     "createdAt": "2023-03-01T05:56:36.649Z",
     "name": "Merle Konopelski",
     "image": "https://loremflickr.com/620/480/fashionBlack Water Snake",
     "item": "item 41",
     "id": "41"
    },
    {
     "createdAt": "2023-02-28T17:59:27.015Z",
     "name": "Jessica Boehm",
     "image": "https://loremflickr.com/620/480/fashion python",
     "item": "item 42",
     "id": "42"
    },
    {
     "createdAt": "2023-02-28T08:59:10.346Z",
     "name": "Sergio VonRueden",
     "image": "https://loremflickr.com/620/480/fashion snake",
     "item": "item 43",
     "id": "43"
    },
    {
     "createdAt": "2023-03-01T00:25:36.713Z",
     "name": "Opal Botsford",
     "image": "https://loremflickr.com/620/480/man",
     "item": "item 44",
     "id": "44"
   },
    {
     "createdAt": "2023-03-01T03:47:41.651Z",
     "name": "Louise Koepp",
     "image": "https://loremflickr.com/620/480/fashion",
     "item": "item 45",
     "id": "45"
    },
    {
     "createdAt": "2023-02-28T08:38:06.374Z",
     "name": "Frankie Fahey",
     "image": "https://loremflickr.com/620/480/fashion",
     "item": "item 46",
     "id": "46"
    }]



// zul_iqembulezifundi: {
//     name: "zul-iqembulezifundi",
//     author: "Iqembu Lezifundiswa, Mussa Muhammad Telela , Uthman Mfanafuthi Msomi, Moulana Abdur Rahman Chilipa, Haji Ibrahim Mondli Japhet Mthembu, Moulana Imran Ngcobo, Moulana Eshaaq Osman",
//     language: "Zulu",
//     direction: "ltr",
//     source: "Islamic Dawah Movement of Southern Africa(IDM), https://www.alqurantranslation.com/",
//     comments: "",
//     link: "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/zul-iqembulezifundi.json",
//     linkmin: "https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/zul-iqembulezifundi.min.json"
//     }


var user = []

console.log(arrJson);
function filterArr(data) {
    data.map(item =>{
        console.log(item);
        list.innerHTML += `
    
        <li  class="book__item-list">
        <div class="book__img-back">
            <img class="book__item__list-img" src="${item.image}" alt="book img">
        </div>
        <div class="our__book-item">
            <div class="div">
                <b>${item.createdAt}</b>
                <p class="book__list-text">${item.name}</p>
                <p class="book__list-textyear">${item.id}</p>
            </div>
            <div class="book__buttons">
                <button type="button" class="btn btn-warning">Warning</button>


                <button onclick="document.getElementById('id01').style.display='block'"
                    class="btn btn-light">More Info</button>

            </div>


            <button type="button" class="btn btn-secondary">Secondary</button>
        </div>

        <div id="id01" class="modal">

            <form class="modal-content animate" action="/action_page.php" method="post">
                <div class="imgcontainer">
                
                  
                </div>

               <!-- MODAL ICIDAGILAR -->
                   
                    <div class="modal__header-flex">
                        <h3 class="modal__header-log">Phyton</h3>
                            <span onclick="document.getElementById('id01').style.display='none'"
                        class="close modal__header" title="Close Modal"> &times;</span>
                    </div>
                        
                    <div class="modal__box">
                        
                
                    <a class="modal__bok-link mt-100"  href="#">
                        <img src="../images/bokmodal.svg" alt="">
                    </a>

                    <p>Culpa nulla pariatur cupidatat nisi incididunt ea do ipsum. Incididunt quis mollit elit commodo cillum eiusmod reprehenderit labore irure. Cillum et incididunt et nostrud exercitation quis aute laboris non ut adipisicing. Laboris ad minim aute nulla proident deserunt velit anim sunt aliquip ut sit. Exercitation aliquip ullamco officia non aliqua. Sint deserunt aliquip veniam id eiusmod sit consectetur mollit ea aliqua officia consequat. Magna non mollit nisi est commodo voluptate aute id. Deserunt nostrud id do in nisi mollit deserunt non. Pariatur fugiat cillum irure elit sint nisi ad ipsum culpa deserunt cupidatat esse consequat laboris. Id aliquip non consectetur esse proident duis Lorem.</p>



                    <ul class="modal__list">
                        <li class="modal__item">
                            <b>Autor:</b>
                            <button class="modal__btn">Jamal Kasper</button>
                            <button class="modal__btn">Author 2</button>
                        </li>
                        <i>Autor :</i>

                        <li class="modal__item">
                            <b>Published : </b>
                            <button class="modal__btn">2019</button>
                        </li>

                        <li class="modal__item">
                            <b>Publishers :</b>
                            <button class="modal__btn">Hollman</button>
                        </li>

                        
                        <li class="modal__item">
                            <b>Categories:</b>
                            <button class="modal__btn">Computers</button>
                        </li>

                        <li class="modal__item">
                            <b>Pages Count:</b>
                            <button class="modal__btn">346</button>
                        </li>
                    </ul>

                <div class="modal__none" style="background-color:#ffffff">
                 
                   
                    <button type="button"
                        onclick="document.getElementById('id01').style.display='none'"
                        class="cancelbtn ">Cancel</button>

                </div>
                    </div>
            </form>
        </div>

    </li>



    
    
        `
    })
}

filterArr(arrJson)

const item = document.querySelector("our__book-item")
const searchInp = document.getElementById("serch")
var users = []

const getItem = () => {
    fetch(arrJson)
    .then(res => {res.json()
    .then(res => {
        users = res;
    })
    .catch(err = console.log(err));
})
};

searchInp.addEventListener('input', e => {
    const element= e.target.value.toLowerCase()
    console.log(element);
})


// function myFunction() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
// }

// let arrJson = []

// fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions.min.json')
//  .then(res => res.json())
//  .then(data => {
//     arrJson = [...arrJson, data]
//     console.log([data]);
//     renderDate([data])
//  })

// //  console.log(arrJson);
//  function renderDate(arr) {
//     //  console.log(arr);
//      arr.forEach(item => {
//         // console.log(item.aar_sheikhmahmoudab);
//      });
//      for(let i in arr){
//         console.log(arr[i].name);
//      }

// }

// renderDate(arrJson)


// function renderBooks(array, parent, template) {
//     // parent.textContent = null;

//     array.forEach(book => {
//         console.log(book);
//         const newBook = template.content.cloneNode(true);

//         const elImg = findElement('#bookImg', newBook)  
//         const elTitle = findElement('#bookTitle', newBook)  
//         // const elAuthors = findElement('#bookAuthors', newBook)  
//         const elBookDay = findElement('#bookDay', newBook)  

//         elImg.src = book.volumeInfo.imageLinks.thumbnail;
//         elTitle.textContent = book.volumeInfo.title;
//         // elAuthors.textContent = book.volumeInfo.;
//         elBookDay.textContent = book.volumeInfo.publishedDate
//         parent.appendChild(newBook);
//     });
// }


