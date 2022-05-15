/**
 * dead center - both LEDs are ON
 * 
 * Maq  left of the line - Left LED is ON Right is OFF
 * 
 * Maq Right of line - Right LED is ON LEFT is OFF
 * 
 * When away from line - both are ON
 * 
 * if in Air or both on line - both are OFF
 * 
 * If sensor value is 0 - then it is on the line
 */
basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        basic.showString("D")
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        basic.showString("L")
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        basic.showString("R")
    } else {
        basic.showString("B")
    }
})
