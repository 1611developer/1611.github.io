var treasureLocation = Math.floor(Math. random() * 9)
var bombLocation = Math.floor(Math. random() * 9)

// if(treasureLocation === bombLocation) {
//     bombLocation = Math.floor(Math. random() * 9)
// }
const treasure = (id) => {
 
    if(treasureLocation === id) {
        document.getElementById(id).innerHTML = "&#x1f308" 
        alert("You Win!!!")
        //window.location.reload()
    } else if(bombLocation === id) {
        document.getElementById(id).innerHTML = "&#x2620"
        alert("Try Again!")
        //window.location.reload()
    } else if(treasureLocation !== location && bombLocation !== location){
        document.getElementById(id).innerHTML = "X"
    }
    attepms++;
}


let attemps = 0;