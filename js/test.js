 let age = document.getElementById('age');
 
 function showUser(surname, name) {
          alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
 }

 let bb = showUser.bind(age);

console.log(bb("Петя", "Иванов"));

 