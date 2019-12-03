const heroes = [
  {
    name: "Batman",
    publisher: "DC Comics",
    alter_ego: "Bruce Wayne",
    first_appearance: "Detective Comics #27",
    weight: "210"
  },
  {
    name: "Superman",
    publisher: "DC Comics",
    alter_ego: "Kal-El",
    first_appearance: "Action Comics #1",
    weight: "220"
  },
  {
    name: "Flash",
    publisher: "DC Comics",
    alter_ego: "Jay Garrick",
    first_appearance: "Flash Comics #1",
    weight: "195"
  },
  {
    name: "Green Lantern",
    publisher: "DC Comics",
    alter_ego: "Alan Scott",
    first_appearance: "All-American Comics #16",
    weight: "186"
  },
  {
    name: "Green Arrow",
    publisher: "DC Comics",
    alter_ego: "Oliver Queen",
    first_appearance: "All-American Comics #16",
    weight: "195"
  },
  {
    name: "Wonder Woman",
    publisher: "DC Comics",
    alter_ego: "Princess Diana",
    first_appearance: "The Incredible Hulk #180",
    weight: "165"
  },
  {
    name: "Blue Beetle",
    publisher: "DC Comics",
    alter_ego: "Dan Garret",
    first_appearance: "Mystery Men Comics #1",
    weight: "145"
  },
  {
    name: "Spider Man",
    publisher: "Marvel Comics",
    alter_ego: "Peter Parker",
    first_appearance: "Amazing Fantasy #15",
    weight: "167"
  },
  {
    name: "Captain America",
    publisher: "Marvel Comics",
    alter_ego: "Steve Rogers",
    first_appearance: "Captain America Comics #1",
    weight: "220"
  },
  {
    name: "Iron Man",
    publisher: "Marvel Comics",
    alter_ego: "Tony Stark",
    first_appearance: "Tales of Suspense #39",
    weight: "250"
  },
  {
    name: "Thor",
    publisher: "Marvel Comics",
    alter_ego: "Thor Odinson",
    first_appearance: "Journey into Myster #83",
    weight: "200"
  },
  {
    name: "Hulk",
    publisher: "Marvel Comics",
    alter_ego: "Bruce Banner",
    first_appearance: "The Incredible Hulk #1",
    weight: "1400"
  },
  {
    name: "Wolverine",
    publisher: "Marvel Comics",
    alter_ego: "James Howlett",
    first_appearance: "The Incredible Hulk #180",
    weight: "200"
  },
  {
    name: "Daredevil",
    publisher: "Marvel Comics",
    alter_ego: "Matthew Michael Murdock",
    first_appearance: "Daredevil #1",
    weight: "200"
  },
  {
    name: "Silver Surfer",
    publisher: "Marvel Comics",
    alter_ego: "Norrin Radd",
    first_appearance: "The Fantastic Four #48",
    weight: "unknown"
  }
];

// 1 Maak een array van alle superhelden namen
const heroNames = heroes.map(hero => {
  return hero.name;
});
console.log(heroNames);

// 2 Maak een array van alle "lichte" superhelden (< 190 pounds)
const lightHeroes = heroes.filter(hero => {
  return hero.weight < 190;
});
console.log(lightHeroes.length);

// 3 Maak een array met de namen van de superhelden die 200 pounds wegen
const heavySuperHeroes = heroes.filter(hero => hero.weight == 200);
const heavySuperHeroNames = heavySuperHeroes.map(hero => hero.name);

// OF in een ketting oftwel een chain:
const heavySuperHeroNames = heroes
  .filter(hero => hero.weight == 200)
  .map(hero => hero.name);
console.log(heavySuperHeroNames);

// 4 Maak een array met alle comics waar de superhelden hun "first apprearances" hebben gehad
const firstAppearance = heroes.map(hero => hero.first_appearance);
console.log("firest appearance:", firstAppearance);

// 5 Maak een array met alle superhelden van DC Comics en een array met alle superhelden van Marvel Comics
const DCComics = heroes.filter(hero => hero.publisher === "DC Comics");
const marvelComics = heroes.filter(hero => hero.publisher === "Marvel Comics");
console.log("DC Comics:", DCComics, "Marvel Comics:", marvelComics);

// 6 Tel het gewicht van alle superhelden van DC Comics bij elkaar op
const addedWeightDC = DCComics.map(hero => {
  return hero.weight !== "unknown" ? parseInt(hero.weight, 10) : 0;
}).reduce((weight1, weight2) => weight1 + weight2, 0);
console.log("totalWeight of DC Comics:", addedWeightDC);

// 7 Doe hetzelfde met alle superhelden van Marvel Comics
const addedWeightMarvel = marvelComics
  .map(hero => {
    return hero.weight !== "unknown" ? parseInt(hero.weight, 10) : 0;
  })
  .reduce((weight1, weight2) => weight1 + weight2, 0);
console.log("totalWeight of Marvel:", addedWeightMarvel);

// 8 Bonus: vind de zwaarste superheld !
