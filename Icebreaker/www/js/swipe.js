function swipe(player, start){
    var direction = '';
    var end = {};
    $('html').bind("touchmove", function(event) {
        end = event.originalEvent.targetTouches[0];
    });
    $('html').bind("touchend", function(event) {
        //alert('end: ' + end.pageX + ',' + end.pageY);
        var moveX = start.pageX - end.pageX;
        var moveY = start.pageY - end.pageY;
        if(Math.abs(moveY/moveX) > 4){
            if(moveY > 0){
                player.movePlayer('up');
            }
            else if(moveY < 0){
                player.movePlayer('down');
            }
        }
        else if(Math.abs(moveX/moveY) > 4){
            if(moveX > 0){
                player.movePlayer('left');
            }
            else if(moveX < 0){
                player.movePlayer('right');
            }
        }
    });
}