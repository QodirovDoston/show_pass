const input = document.querySelector("input")
const eye = document.querySelector("#icons-eye")

console.log(eye)
console.log(input)


eye.addEventListener("click", () => {
    if(input.type == "password"){
        return (input.type = 'text')
    }else{
        return (input.type="password")
    }
});