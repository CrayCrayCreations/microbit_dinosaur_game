gamerbit.onEvent(GamerBitPin.P12, GamerBitEvent.Down, function () {
    game.resume()
})
gamerbit.onEvent(GamerBitPin.P16, GamerBitEvent.Down, function () {
    game.pause()
})
gamerbit.onEvent(GamerBitPin.P8, GamerBitEvent.Down, function () {
    Character.change(LedSpriteProperty.Y, 1)
})
gamerbit.onEvent(GamerBitPin.P0, GamerBitEvent.Down, function () {
    Character.change(LedSpriteProperty.Y, -1)
})
let Projectile: game.LedSprite = null
let Character: game.LedSprite = null
Character = game.createSprite(2, 2)
Character.set(LedSpriteProperty.X, 0)
Character.set(LedSpriteProperty.Y, 2)
basic.pause(1000)
Character.set(LedSpriteProperty.X, 1)
basic.pause(1000)
Character.set(LedSpriteProperty.X, 2)
Character.ifOnEdgeBounce()
let Wall = game.createSprite(0, 0)
Kitronik_Game_Controller.runMotor(100)
music.playTone(262, music.beat(BeatFraction.Quarter))
basic.pause(100)
let Wall2 = game.createSprite(0, 1)
Kitronik_Game_Controller.runMotor(100)
music.playTone(294, music.beat(BeatFraction.Quarter))
basic.pause(100)
let Wall3 = game.createSprite(0, 2)
Kitronik_Game_Controller.runMotor(100)
music.playTone(330, music.beat(BeatFraction.Quarter))
basic.pause(100)
let Wall4 = game.createSprite(0, 3)
Kitronik_Game_Controller.runMotor(100)
music.playTone(349, music.beat(BeatFraction.Quarter))
basic.pause(100)
let Wall5 = game.createSprite(0, 4)
music.playTone(392, music.beat(BeatFraction.Quarter))
game.setScore(0)
basic.pause(100)
basic.forever(function () {
    if (game.isGameOver()) {
        music.playMelody("- - - - - - - - ", 120)
    } else {
        music.playMelody("F G F E F E D E ", 120)
        music.playMelody("D C D E F G A A ", 120)
    }
})
basic.forever(function () {
    Projectile = game.createSprite(4, randint(0, 4))
    basic.pause(1000)
    Projectile.change(LedSpriteProperty.X, -1)
    basic.pause(1000)
    Projectile.change(LedSpriteProperty.X, -1)
    basic.pause(1000)
    Projectile.change(LedSpriteProperty.X, -1)
    basic.pause(1000)
    Projectile.change(LedSpriteProperty.X, -1)
    basic.pause(1000)
})
basic.forever(function () {
    if (Projectile.isTouching(Character)) {
        game.pause()
        music.playMelody("C5 B A B A G F E ", 120)
        game.gameOver()
        basic.showNumber(game.score())
    }
    if (Projectile.isTouching(Wall)) {
        Projectile.delete()
        game.addScore(1)
    } else if (Projectile.isTouching(Wall2)) {
        Projectile.delete()
        game.addScore(1)
    } else if (Projectile.isTouching(Wall3)) {
        Projectile.delete()
        game.addScore(1)
    } else if (Projectile.isTouching(Wall4)) {
        Projectile.delete()
        game.addScore(1)
    } else if (Projectile.isTouching(Wall5)) {
        Projectile.delete()
        game.addScore(1)
    }
})
