let input = document.querySelectorAll("input")
let named = document.getElementById("name")
let names = []
let nameCount = 0
// let nnn

console.log(input);

// input.forEach(element => {
//     console.log(element);
// });
function typed(e) {
    names[nameCount] = e.target.value 
    // nnn = e.target.value
    // named.innerHTML += nnn
    // named.innerHTML += e.target.value
    
    named.innerHTML = names.join("")

    console.log(named);
    nameCount++
    console.log(names);
}

for (i = 0; i < input.length; i++) {
    input[i].addEventListener("click", function() {

        this.blur(".keyboard-wrapper .keys input:focus ")

        // setTimeoutが効かない
        // setTimeout(() => { 
        //     this.blur(".keyboard-wrapper .keys input:focus ")
        // }, 10);
    })
}

function deleteBtn() {
    let result = nnn.slice(1,3)
    named += result
}