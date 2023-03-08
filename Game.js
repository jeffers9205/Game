var Robot = function(robot) {
    robot.clone();
};
var hit = 0;
var begin = null;
Robot.prototype.onIdle = function(ev) {
    var robot = ev.robot;
    robot.ahead(100);
    begin = 2;

};

Robot.prototype.onScannedRobot = function(ev) {
    var robot = ev.robot;
    var num = 100;

    if (ev.scannedRobot.parentId == robot.id || ev.scannedRobot.id == robot.parentId) {
        return
    }

    for (var i = 0; i < num; i++) {
        robot.fire();
    }

};

Robot.prototype.onHitByBullet = function(ev) {
    var robot = ev.robot;
    var num = 20;
    hit = hit + 1;
    if (hit % 5 == 0) {
        robot.disappear();
    }
};

Robot.prototype.onRobotCollision = function(ev) {
    var robot = ev.robot;
    robot.back(40);
    robot.rotateCannon(-360);
}

Robot.prototype.onWallCollision = function(ev) {
    var robot = ev.robot;
    robot.log(robot.cannonRelativeAngle);
    robot.turn(ev.bearing - 90);
    switch (robot.cannonRelativeAngle) {
        case 0:
            robot.turnGunRight(90);
            break;
        case 90:
            robot.turnGunLeft(90);
            break;
        case 180:
            robot.turnGunRight(90);
            break;
        case 270:
            robot.turnGunLeft(90);
            break;
        default:
            robot.rotateCannon(360);
            break;
    }

};
