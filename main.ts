input.onGesture(Gesture.FreeFall, function () {
	
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 60; index++) {
        basic.showNumber(number)
        number += -1
    }
})
let number = 0
number = 60
let count = 0
