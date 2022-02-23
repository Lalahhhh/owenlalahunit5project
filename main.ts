// This organizes the code and adds a whole new section of it to give the program some color
function doSomething () {
    timer.background(function () {
        if (Side_3_answer < 10) {
            // If the answer is less than 10, the program will display an ice cream cone
            ice_cream = sprites.create(img`
                ............3333bb..bb33333.....
                ........3bb31111d3b311d111d33...
                .......3bdd11111dbd11d11111113..
                .......bdddd1111bd11d111dd11113.
                ......3d111dd111b11d111dd33d11d3
                ......3d11111dd1d11d111d11d33113
                ....bb3d111111dd13dd111d1dd3b31b
                ...b3d3dd111111dd13dd11d1dddbbdb
                ...3ddd31d111111dd133dddddddb.b.
                ..311111d1ddd1111dd11dddddd33...
                ..3111111d111dd111dd1111dd3313..
                ..bddd1111ddd11dd111d111111113..
                ..311ddd111dddd11dd11ddd1111ddb.
                ..31111dd111dddd11dd111dddddddb.
                ...bd1111d1113ddd11dd1111111d3b.
                ...4dd1111d1113ddd11ddd111d333b.
                ..4dbdddd11d11133ddddddddddddb..
                .4ddbddddd11d111d33ddddddddd3b..
                .4dddb11ddd11dd111d333dddd3bb...
                .4dd55b111d11dd11111d3333bbb....
                .445555b111d11dddd111111ddb.....
                .4455555bd1d311ddddddddddd3.....
                .45455555bb1d3111ddddddd113.....
                .4554555555b333d1111111113......
                455554555555bbb33d11111d33......
                4d555545555555dbbb3d11d33.......
                4dd5555455555ddddd43333.........
                45dd555544ddddddd4..............
                .45dd5555d44dddd4...............
                ..45dd55dddd4444................
                ...45dd55444....................
                ....44444.......................
                `, SpriteKind.Player)
            ice_cream.setPosition(72, 49)
            game.showLongText(Side_3_answer, DialogLayout.Bottom)
            ice_cream.sayText("ENJOY!")
        } else {
            // If the answer of side C is greater than 10, the program will display a donut
            while (Side_3_answer > 10) {
                donut = sprites.create(img`
                    ..............bbbbbbb...........
                    ...........bb66663333baa........
                    .........bb3367776333663aa......
                    ........b33333888333389633aa....
                    .......b3333333333333389633aa...
                    ......b34443333333333338633bae..
                    .....b3455433333333334443333ae..
                    ....b33322333dddd3333455233daee.
                    ...b3d333333dd3bbbb33322333dabe.
                    ..b3d333333d3bb33bb33333333da4e.
                    ..bd33333333b33aab3333333223a4ee
                    .b3d3663333b33aab33366332442b4ee
                    .bd3b983333a3aa3333387633ee3b4ee
                    .bd6983333baaa333333387633bb4bee
                    b3d6833333bba333333333863ba44ebe
                    bdd3333333bb3333333333333a44bebe
                    add666633333322333366333ba44bbbe
                    ad67776333332442336983d3a444b4e.
                    add888b333333ee3369833d3a44b44e.
                    add333333333333336833d3a444b4e..
                    a3dd3333344433333dddd3a444b44e..
                    ab33ddd325543333dd33aa444b44e...
                    .eabb3dd32233333baaa4444b44e....
                    .ebabb3d333d33baa444443b44e.....
                    ..ebaab3ddd3aaa4444433b44e......
                    ..eebbaab33a44444333b444e.......
                    ...eeebbaab444b333b4444e........
                    ....ebeeebbbbbbbb4444ee.........
                    .....eebbbb44444444ee...........
                    .......eeebbb444eee.............
                    ..........eeeeee................
                    ................................
                    `, SpriteKind.Player)
                donut.setPosition(77, 56)
                game.showLongText(Side_3_answer, DialogLayout.Bottom)
                donut.sayText("ENJOY!")
            }
        }
    })
}
let donut: Sprite = null
let ice_cream: Sprite = null
let Side_3_answer = 0
// background color
scene.setBackgroundColor(13)
// Tells users the function of the program and gives instruction
game.showLongText("Pythagorean Theorem Solver when you are given A & B: Enter two the measurements of two sides of your triangle ", DialogLayout.Center)
pause(1000)
// tells user to input the first side of their triangle
game.showLongText("Enter side 1 (click A to continue)", DialogLayout.Center)
let Side_1 = game.askForNumber("")
game.showLongText("Enter side 2", DialogLayout.Center)
let Side_2 = game.askForNumber("")
// organizes inputted values and displays them to the user for them to make sure they are correct
let text_list = [Side_1, Side_2]
game.showLongText("So your two numbers are...", DialogLayout.Bottom)
game.showLongText(text_list, DialogLayout.Bottom)
// the following three blocks are the "calculation" portion of the program
let side_1_answer = Side_1 * Side_1
let side_2_answer = Side_2 * Side_2
Side_3_answer = Math.sqrt(side_1_answer + side_2_answer)
game.showLongText("Calculating...", DialogLayout.Center)
pause(1000)
// shows the final answer that the user is looking for
game.showLongText("The final answer of side 3 is...", DialogLayout.Center)
pause(1000)
doSomething()
