const charList = document.getElementById("char");
const actList = document.getElementById("act");
const adjList = document.getElementById("adj");
const charList1 = document.getElementById("char1");
const locList = document.getElementById("loc");

let chars = [
    "Astronaut",
    "Detective",
    "Pirate",
    "Chef",
    "Scientist",
    "Librarian",
    "Knight",
    "Teacher",
    "Cat",
    "Spider",
    "Dragon",
    "Dog",
    "Frog",
];

let acts = [
    "Discovers",
    "Escapes from",
    "Hides from",
    "Invents",
    "Betrays",
    "Rescues",
    "Searches for",
    "Destroys",
    "Protects",
    "Transforms into",
    "Challenges",
    "Makes a deal with",
    "Is Looking For"
];

let adjs = [
    "Mysterious",
    "Brave",
    "Ancient",
    "Lonely",
    "Glitchy",
    "Cursed",
    "Enchanted",
    "Arrogant",
    "Invisible",
    "Rebellious",
    "Forgotten",
    "Charming",
    "Vengeful"
];

let chars1 = [
    "Inventor",
    "Twin",
    "Pet",
    "Alien",
    "Sword",
    "Clone",
    "AI",
    "Spirit",
    "Mentor",
    "Prince",
    "Historian",
    "Queen",
    "Wizard"
];

let locs = [
    "In an Abandoned Theme Park",
    "On a floating city",
    "In an underground lab",
    "In a haunted mansion",
    "In a cave",
    "In a medieval village",
    "In the airport",
    "In the library",
    "Outside",
    "On a mountain",
    "In a dark alley",
    "In the forests",
    "On the moon"
];
let counter = 0;
let itemRow = new Array();
let itemDetail = new Array();
chars.forEach((char) => {
    char = char.split(",");
    itemRow[counter] = document.createElement("tr");
    itemDetail[counter] = `<td>${char}</td>`;
    itemRow[counter].innerHTML = itemDetail[counter];
    charList.append(itemRow[counter]);
    counter++;
});
charList.style.color="white";
charList.style.backgroundColor="purple";
charList.style.fontSize="20px";
acts.forEach((act) => {
    act = act.split(",");
    itemRow[counter] = document.createElement("tr");
    itemDetail[counter] = `<td>${act}</td>`;
    itemRow[counter].innerHTML = itemDetail[counter];
    actList.append(itemRow[counter]);
    counter++;
});
actList.style.color="white";
actList.style.backgroundColor="blue";
actList.style.fontSize="20px";
adjs.forEach((adj) => {
    adj = adj.split(",");
    itemRow[counter] = document.createElement("tr");
    itemDetail[counter] = `<td>${adj}</td>`;
    itemRow[counter].innerHTML = itemDetail[counter];
    adjList.append(itemRow[counter]);
    counter++;
});
adjList.style.color="white";
adjList.style.backgroundColor="green";
adjList.style.fontSize="20px";
chars1.forEach((char1) => {
    char1 = char1.split(",");
    itemRow[counter] = document.createElement("tr");
    itemDetail[counter] = `<td>${char1}</td>`;
    itemRow[counter].innerHTML = itemDetail[counter];
    charList1.append(itemRow[counter]);
    counter++;
});
charList1.style.color="white";
charList1.style.backgroundColor="orange";
charList1.style.fontSize="20px";
locs.forEach((loc) => {
    loc = loc.split(",");
    itemRow[counter] = document.createElement("tr");
    itemDetail[counter] = `<td>${loc}</td>`;
    itemRow[counter].innerHTML = itemDetail[counter];
    locList.append(itemRow[counter]);
    counter++;
});
locList.style.color="white";
locList.style.backgroundColor="pink";
locList.style.fontSize="20px";