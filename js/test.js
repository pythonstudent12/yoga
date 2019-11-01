 let age = document.getElementById('age');
 
 function showUser(surname, name) {
          alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
 }

 let bb = showUser.bind(age);

console.log(bb("Петя", "Иванов"));

let div = document.createElement('div');
div.className = 'fuck';
div.innerHTML = 'fgbrsbrstbrthbwbrybhsryhsy';
document.body.appendChild(div);

console.log(div);