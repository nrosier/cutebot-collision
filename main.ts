let sonar = 0
cuteBot.forward()
basic.forever(function () {
    sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (sonar > 2 && sonar < 15) {
        cuteBot.motors(0, 0)
        for (let index = 0; index < 4; index++) {
            music.playTone(880, music.beat(BeatFraction.Quarter))
            basic.pause(2000)
            cuteBot.motors(randint(-50, -100), 0)
            basic.pause(500)
        }
    } else {
        cuteBot.forward()
    }
})
