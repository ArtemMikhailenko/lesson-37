
//Завдання 1

let usersName= ['Mike','Bob','Nikola'];
let users = {};
[users.mike, users.bob, users.nikola]= usersName;
console.log(users);

//Завдання 2

let salaries = {
    "Mike": 1500 ,
    "Bob": 1800 ,
    "Nikola": 1700,
}

function maxSalary(salaries) {

    let max = 0;
    let maxName = null;
  
    for(const [name, salary] of Object.entries(salaries)) {
      if (max < salary) {
        max = salary;
        maxName = name;
      }
    }
  
    return  `Максимальну зарплату отримує ${maxName}` ;
  }

 console.log(maxSalary(salaries));

 //Завдання 3

 let users = {mike : 'Mike', bob: 'Bob', nikola: 'Nikola'}
 
 let {mike:userMike, bob:userBob, nikola:userNikola} = users;
console.log(userMike);