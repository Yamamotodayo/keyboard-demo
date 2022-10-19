'use strict'
import { convert2Dakuon } from './convert2Dakuon.js'

let input = document.querySelectorAll("input")
let named = document.getElementById("name")
let names = []
let Count = 0

// console.log(input);

function typed(e) {
    names[Count] = e.target.value     
    named.innerHTML = names.join("")

    console.log(named);
    Count++
    console.log(names);
}

// 削除ボタン
function deleteBtn() {
    if (Count !== 0) { // この条件式がないと配列が空の時に、削除ボタンを押すと添字がマイナスになる
        names.pop()
        named.innerHTML = names.join("")
        Count--
        console.log(names);
    }
}

// スペースボタン
function spaceBtn() {
    names[Count] = "　"
    named.innerHTML = names.join("")
    Count++
    console.log(names);
}

// 濁点ボタン
function dakuBtn() {
    let daku = names[names.length - 1]
    convert2Dakuon(daku)
}


for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("click", function() {

        this.blur(".keyboard-wrapper .keys input:focus ")

        // setTimeoutが効かない
        // setTimeout(() => { 
        //     this.blur(".keyboard-wrapper .keys input:focus ")
        // }, 10);
    })
}

