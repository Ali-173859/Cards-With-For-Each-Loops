var list = document.getElementById("list");
var items = [
  {
    name: "LEAGUE LEGENDS",
    title: "PUZZLE",
    types: ["Action Role-Playing"],
    desc: "League of Legends, commonly referred to as League, is a 2009 multiplayer online battle arena video game developed and published by Riot.",
    image:
      "https://i0.wp.com/highschool.latimes.com/wp-content/uploads/2021/09/league-of-legends.jpeg?fit=1607%2C895&ssl=1",
  },
  {
    name: "BATTLEFIELD 4",
    title: "WAR",
    types: ["First-Person Shooter"],
    desc: "A first-person shooter is a video game centered on gun fighting and other weapon-based combat seen from a first-person perspective.",
    image:
      "https://cdn2.unrealengine.com/egs-battlefield2042-dice-g1a-00-1920x1080-ecbff394ca1c.jpg",
  },
  {
    name: "CALL OF DUTY - 2024",
    title: "SHOOTING",
    types: ["	Battle Royale, First-Person Shooter"],
    desc: "The Call of Duty franchise remains one of the most successful series in the shooter genre, and as rumors.",
    image:
      "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/12/what-to-expect-cod-2024.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5",
  },
  
];


function createCards() {
  list.innerHTML = "";
  items.forEach(function (data, ind) {
    if (data !== undefined) {
      var ele = `<div class="lg:w-1/3 sm:w-1/2 p-4">
        <div class="bg-black shadow-md rounded-lg overflow-hidden">
          <img alt="gallery" class="w-full h-48 object-cover object-center" src="${data.image}">
          <div id="${ind}" class="p-6">
            <h2 class="tracking-widest text-sm title-font font-medium text-purple-400 mb-1">${data.name}</h2>
            <h1 class="title-font text-lg font-medium text-white mb-3">${data.title}</h1>
            <p class="leading-relaxed mb-3 text-gray-400">${data.types.join(" , ")}</p>
            <p class="leading-relaxed mb-3 text-gray-500">${data.desc}</p>
            <div class="flex justify-between">
              <button onclick="updateDesc(this)" class="bg-purple-500 hover:bg-purple-700 text-white px-3 py-2 rounded">Update</button>
              <button onclick="removeCard(this)" class="bg-red-500 hover:bg-red-700 text-white px-3 py-2 rounded">Delete    </button>
            </div>
          </div>
        </div>
      </div>`;
      list.innerHTML += ele;
    }
  });
}


function updateDesc(ele) {
  var index = ele.parentElement.parentElement.id;
  var newDesc = prompt("Enter new description:", items[index].desc);
  if (newDesc !== null) {
    items[index].desc = newDesc;
    createCards(); 
  }
}


function removeCard(ele) {
  var index = ele.parentElement.parentElement.id;
  delete items[index]; 
  createCards(); 
}

createCards();