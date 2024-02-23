const vardai = [
  "Jon Snow",
  "Cersei Lannister",
  "Daenerys Targaryen",
  "Theon Greyjoy",
  "Tyrion Lannister",
  "Arya Stark",
];
console.log(vardai[0]);
console.log(vardai[5]);

let pasirinkimas = prompt("Įveskite skaičių nuo 1 iki 6");

console.log("Vardas: " + vardai[pasirinkimas - 1]);
