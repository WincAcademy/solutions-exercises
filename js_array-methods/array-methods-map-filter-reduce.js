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
//Stap 1:
const heavySuperHeroes = heroes.filter(hero => {
  return hero.weight == 200;
});
// Let op! Deze arrow functie kan op 1 regel: weet jij hoe?
// Alternatief: const heavySuperHeroes = heroes.filter(hero => hero.weight == 200);

//Stap 2:
const heavySuperHeroNames = heavySuperHeroes.map(hero => {
  return hero.name;
});
// Let op! Deze arrow functie kan op ook op 1 regel: weet jij hoe?
// Alternatief: const heavySuperHeroNames = heavySuperHeroes.map(hero => hero.name);

console.log(heavySuperHeroNames);

// 3 Alternatieve oplossing: chainen:
const heavySuperHeroNamesChained = heroes
  .filter(hero => hero.weight == 200)
  .map(hero => hero.name);
console.log(heavySuperHeroNamesChained);

// 4 Maak een array met alle comics waar de superhelden hun "first apprearances" hebben gehad
// Deze is gemaakt met een implicit return statement (oftwel een one-liner)
const firstAppearance = heroes.map(hero => hero.first_appearance);
console.log("firest appearance:", firstAppearance);

// 5 Maak een array met alle superhelden van DC Comics en een array met alle superhelden van Marvel Comics
// Deze is gemaakt met een implicit return statement (oftwel een one-liner)
const DCComics = heroes.filter(hero => hero.publisher === "DC Comics");
const marvelComics = heroes.filter(hero => hero.publisher === "Marvel Comics");
console.log("DC Comics:", DCComics, "Marvel Comics:", marvelComics);

// 6 Tel het gewicht van alle superhelden van DC Comics bij elkaar op
// Deze is gemaakt voor de pro's met een implicit return statement (oftwel een one-liner)
// EN een een in chain:
const addedWeightDC = DCComics.map(hero => {
  return hero.weight !== "unknown" ? parseInt(hero.weight, 10) : 0;
}).reduce((weight1, weight2) => weight1 + weight2);

console.log("TotalWeight of DC Comics - supersmall version:", addedWeightDC);

//De bovenstaande oplossing kun je ook wat uitgebreider opschrijven:
const heroWeights = DCComics.map(hero => {
  if (hero.weight !== "unknown") {
    // de Hero weights zijn in de data opgenamen als strings, e.g: '40'
    // Deze moet je even parsen naar een integer, zodat je er mee kunt rekenen.
    return parseInt(hero.weight, 10);
  } else {
    // wanneer het gewicht dus "unknown" is, dan wil je het gewicht van 0 optellen.
    return 0;
  }
});

const addedWeightOfHeroes = heroWeights.reduce((weight1, weight2) => {
  return weight1 + weight2;
});
console.log("TotalWeight of DC Comics:", addedWeightDC, addedWeightOfHeroes);

// 7 Doe hetzelfde met alle superhelden van Marvel Comics
const addedWeightMarvel = marvelComics
  .map(hero => {
    return hero.weight !== "unknown" ? parseInt(hero.weight, 10) : 0;
  })
  .reduce((weight1, weight2) => weight1 + weight2, 0);
// die 0 op het laats, daarmee geef je aan wat de initiele waarde is van de reduce functie.
console.log("TotalWeight of Marvel:", addedWeightMarvel);

// 8 Bonus: vind de zwaarste superheld!
// First cast all values to a number or 0 if unknown
const allHeroes = heroes.map(hero => {
  const weight = hero.weight !== "unknown" ? parseInt(hero.weight) : 0;
  hero.weight = weight;
  return hero;
});
// next, use reduce to find the largest value
const heaviestHero = allHeroes.reduce(
  (currentHeaviestHero, currentHero) => {
    if (currentHero.weight > currentHeaviestHero.weight) {
      return currentHero;
    } else {
      return currentHeaviestHero;
    }
  },
  allHeroes[0]
  // met deze laatste waarde geef je aan wat de initiele waarde moet zijn van de functie
);

console.log("Heaviest her0000o:", heaviestHero);
