let game = new Game()

let stage = new Stage()
stage.addBackground("../images/bg_1.jpg")

let player = new Sprite()
player.addCostume("../images/car.png")
player.size = 40
player.direction = 90
player.y = 40
player.layer = 2

let trace = new Sprite()
trace.addCostume("../images/trace.png")
trace.hidden = true
trace.layer = 1
trace.size = 30

function playerCicle() {
    if (game.keyPressed("w")) {
        player.move(3)
        createTrace()
    }
    if (game.keyPressed("s")) {
        player.move(-3)
    }
    if (game.keyPressed("a")) {
        player.direction = player.direction - 5
    }
    if (game.keyPressed("d")) {
        player.direction = player.direction + 5
    }
}

function createTrace() {
    let traceClon = trace.createClone()
    traceClon.x = player.x
    traceClon.y = player.y
    traceClon.direction = player.direction
    traceClon.hidden = false

    setTimeout(function () {
        traceClon.delete()
    }, 10000)
}


stage.forever(playerCicle)
game.run()