const students = [
  "Shafi",
  "Erina",
  "Jenna",
  "Denver",
  "Victoria",
  "Janaya",
  "Honor",
  "Tracey",
  "Rashena",
  "Kendall",
  "Grace",
  "Mina",
  "Kseniia",
  "Morgan",
  "Shazeeda",
  "Kat",
  "Denise",
  "Djana",
  "Michelle",
  "Tejah",
  "Laigha",
];

let chosenStudent = "";

function getRandomStudent() {
  const randomIndex = Math.floor(Math.random() * students.length);
  chosenStudent = students[randomIndex];
}

function render() {
  let student = document.getElementById("student");
  student.textContent = chosenStudent;
  let button = document.getElementById("picker");
  button.onclick = function(){
    getRandomStudent();
    render();
  }
}


render();
