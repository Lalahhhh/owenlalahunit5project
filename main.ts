// dont forget to add comment!!!
scene.setBackgroundColor(13)
game.showLongText("Pythagorean Theorem Solver when you are given A & B: Enter two the measurements of two sides of your triangle ", DialogLayout.Center)
pause(1000)
game.showLongText("Enter side 1 (click A to continue)", DialogLayout.Center)
let Side_1 = game.askForNumber("")
game.showLongText("Enter side 2", DialogLayout.Center)
let Side_2 = game.askForNumber("")
let side_1_answer = Side_1 * Side_1
let side_2_answer = Side_2 * Side_2
let Side_3_answer = Math.sqrt(side_1_answer + side_2_answer)
game.showLongText("Calculating...", DialogLayout.Center)
pause(1000)
game.showLongText("The final answer of side 3 is...", DialogLayout.Center)
pause(1000)
game.showLongText(Side_3_answer, DialogLayout.Center)
