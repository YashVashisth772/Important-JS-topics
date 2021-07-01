let name = {
    firstname: "Yash",
    lastname:"Vashisth"
}

let printFullName = function (hometown, state) {
    console.log(this.firstname + " " + this.lastname + " from " + hometown + " , " + state)
}
// function borrowing, first paramenter to call() tells whom should this keyword refer to.
printFullName.call(name, "Dehradun", "Uttrakhand");

let name2 = {
    firstname: "Sachin",
    lastname: "tendulkar"
}

printFullName.call(name2, "Mumbai", "Maharashtra");

// apply method is same as call. just the difference is that after the first arguement we pass the coming parameters in list.
printFullName.apply(name2, ["Mumbai", "Maharasthra"]);

// bind method:  gives a copy of the function which could be invoked later, in call/apply, the function were invoked directly.
let printMyName = printFullName.bind(name2, "Mumbai", "Maharastra");
console.log(printMyName);
// console:  prints function defination
printMyName();