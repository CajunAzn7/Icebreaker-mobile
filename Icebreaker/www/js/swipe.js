function swipe(player, start){
    var direction = '';
    var end = {};
    var move = false;
    $('html').bind("touchmove", function(event) {
        end = event.originalEvent.targetTouches[0];
    })
    .bind("touchend", function(event) {
        if(move === false){
            move = true;
            var moveX = start.pageX - end.pageX;
            var moveY = start.pageY - end.pageY;
            if(Math.abs(moveY/moveX) > 3){
                if(moveY > 0){
                    player.movePlayer('up');
                }
                else if(moveY < 0){
                    player.movePlayer('down');
                }
            }
            else if(Math.abs(moveX/moveY) > 3){
                if(moveX > 0){
                    player.movePlayer('left');
                }
                else if(moveX < 0){
                    player.movePlayer('right');
                }
            }
        }
    });
}