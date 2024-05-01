const hello = localStorage.getItem("hello");

console.log(hello);

const name = localStorage.getItem("name");
console.log(name);

const setAge = () =>{
    localStorage.setItem("age", 44);
}