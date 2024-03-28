//Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString()); // Sat Jan 20 2024
// console.log(myDate.toISOString());  // 2024-01-20T12:56:55.711Z
// console.log(myDate.toJSON());       // 2024-01-20T12:56:55.711Z
// console.log(myDate.toLocaleDateString()); // 20/1/2024
// console.log(myDate.toLocaleString());  // 20/1/2024, 6:29:01 pm
// console.log(typeof myDate);

let myCreatedate= new Date(2024, 0 , 20)
// console.log(myCreatedate.toDateString());


let myTimeStamp = Date.now()
// console.log((myTimeStamp));
// console.log(myCreatedate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);

newDate.toLocaleString('default', {
    weekday: "long", 
})