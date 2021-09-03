let width = 600
let height = 800

// Constants for simulation
let gravity = 0.9;
let bounce = 0.7;
let friction = 0.999;

let pointRadius = 5;

let gridNum = 40;
let dist = 6;

// Calculates euclidean distance between two points
function distance(p0, p1) {
    var dx = p1.x - p0.x,
        dy = p1.y - p0.y;
    return Math.sqrt(dx * dx + dy * dy);
}

// Points
let points = [];
let sticks = [];

function generatePoints() {

    // Generate points
    for (let y = 0; y < gridNum; y++) {
        for (let x = 0; x < gridNum; x++) {

            let posX = dist * x + 100;
            let posY = dist * y + 30;

            let p = { x: posX, y: posY, oldx: posX - 5, oldy: posY - 5, locked: y == 0 };
            points.push(p);
        }
    }

    // Generate sticks
    for (let y = 0; y < gridNum; y++) {
        for (let x = 0; x < gridNum-1; x++) {
            sticks.push({
                p0: points[x + y * gridNum],
                p1: points[x + 1 + y * gridNum],
                length: distance(points[x + y * gridNum], points[x + 1 + y * gridNum])
            });
        }
    }

    for (let y = 0; y < gridNum-1; y++) {
        for (let x = 0; x < gridNum; x++) {
            sticks.push({
                p0: points[x + y * gridNum],
                p1: points[x + (y + 1) * gridNum],
                length: distance(points[x + y * gridNum], points[x + (y + 1) * gridNum])
            });
        }
    }

}

function setup() {


    generatePoints();

    createCanvas(width, height);
    frameRate(30);

    renderPoints();
    renderSticks();
}

/*
 * RENDERING 
 */
function renderPoints() {
    points.forEach(p => {
        arc(p.x, p.y, 2 * pointRadius, 2 * pointRadius, 0, Math.PI * 2);
    });
}

function renderSticks() {
    sticks.forEach(s => {
        line(s.p0.x, s.p0.y, s.p1.x, s.p1.y);
    });
}

function updatePoints() {

    points.forEach(p => {

        if (!p.locked) {
            let vx = (p.x - p.oldx) * friction;
            let vy = (p.y - p.oldy) * friction;

            p.oldx = p.x;
            p.oldy = p.y;

            p.x += vx;
            p.y += vy;
            p.y += gravity;
        }
    });
}

function constrainPoints() {
    points.forEach(p => {

        let vx = (p.x - p.oldx) * friction;
        let vy = (p.y - p.oldy) * friction;

        if ((p.x + 2.5) > width) {
            p.x = (width - 2.5);
            p.oldx = p.x + vx * bounce;
        } else if ((p.x - 2.5) < 0) {
            p.x = 2.5;
            p.oldx = p.x + vx * bounce;
        }

        if ((p.y + 2.5) > height) {
            p.y = (height - 2.5);
            p.oldy = p.y + vy * bounce;
        } else if ((p.y - 2.5) < 0) {
            p.y = 2.5;
            p.oldy = p.y + vy * bounce;
        }
    });
}

function updateSticks() {
    for (var i = 0; i < sticks.length; i++) {
        var s = sticks[i],
            dx = s.p1.x - s.p0.x,
            dy = s.p1.y - s.p0.y,
            distance = Math.sqrt(dx * dx + dy * dy),
            difference = s.length - distance,
            percent = difference / distance / 2,
            offsetX = dx * percent,
            offsetY = dy * percent;

        if (!s.p0.locked) {
            s.p0.x -= offsetX;
            s.p0.y -= offsetY;
        }

        if (!s.p1.locked) {
            s.p1.x += offsetX;
            s.p1.y += offsetY;
        }
    }
}

let simulate = false;

function draw() {

        background(220);

        // Updating
        updatePoints();

        for (let i = 0; i < 3; i++) {
            constrainPoints();
            updateSticks();
        }

        // Rendering
        //renderPoints();
        renderSticks();
    
}

function isInCanvas(x, y) {
    return (x >= 0 && x <= width)
        && (y >= 0 && y <= height);
}


let createdStick = false;
let inCircle = false;
let fstPoint = null, sndPoint = null;

function stickExists(p0, p1) {

    sticks.forEach(s => {

        // Check if sticks list contains stick in either direction
        if ((distance(s.p0, p0) < pointRadius && distance(s.p1, p1)) < pointRadius
            || (distance(s.p1, p0) < pointRadius && distance(s.p0, p1)) < pointRadius) {
            return true;
        }
    });

    return false;
}

function mouseMoved() {
    if (fstPoint != null && isInCanvas(pmouseX, pmouseY)) {
        clear();
        renderPoints();
        line(fstPoint.x, fstPoint.y, pmouseX, pmouseY);
    }
}

function mouseDragged() {

    console.log('Dragged');

    let sticksToRemove = [];

    sticks.forEach(s => {
        let mPos = {x: pmouseX, y: pmouseY};

        if (distance(s.p0, mPos) < 2*pointRadius || distance(s.p1, mPos) < 2*pointRadius) {
            sticksToRemove.push(s);
        }
    });

    sticksToRemove.forEach(s => {
        let i = sticks.indexOf(s);
        sticks.splice(i, 1);
    });
}


function mouseClicked() {

    /*
    if (!simulate) {

        // Only process clicks that are inside canvas
        if (isInCanvas(pmouseX, pmouseY)) {

            let clickPoint = { x: pmouseX, y: pmouseY };


            points.forEach(p => {
                if (distance(p, clickPoint) < pointRadius) {

                    inCircle = true;

                    // Check if point has already been clicked
                    // and then create stick
                    if (fstPoint != null && (distance(fstPoint, clickPoint) > pointRadius)) {
                        sndPoint = p;

                        if (!stickExists(fstPoint, sndPoint)) {
                            sticks.push({
                                p0: fstPoint,
                                p1: sndPoint,
                                length: distance(fstPoint, sndPoint)
                            });

                            createdStick = false;
                            fstPoint = sndPoint = null;
                        }

                        clear();

                        renderPoints();
                        renderSticks();
                    } else {
                        createdStick = true;
                        fstPoint = p;
                    }
                }
            });


            if (!createdStick && !inCircle) {
                points.push({
                    x: clickPoint.x,
                    y: clickPoint.y,
                    oldx: clickPoint.x - 5,
                    oldy: clickPoint.y - 5
                });

                renderPoints();
            }
        }

    }
    */


    if (isInCanvas(pmouseX, pmouseY)) {
        points.forEach(p => {

            let clickPoint = {x: pmouseX, y: pmouseY};
            let dist = distance(p, clickPoint);

            let dx = p.x - pmouseX;
            let dy = p.y - pmouseY;

            
            p.oldx -= 5 * dx/dist;
            p.oldy -= 5 * dy/dist;
        });
    }
}

function keyPressed() {
    simulate = (keyCode == 83);
}