//CODE IS UGLY
//PLZ DONT LOOK AT CODE
//LIKE ITS TERRIBLE
function Player(x, y){
    this.x_val = x;
    this.y_val = y;
}

Player.prototype.newVal = function(x, y){
    this.x_val = x;
    this.y_val = y;
}

Player.prototype.movePlayer = function(direction){
    var player = document.getElementById('Player');
    var x = this.x_val;
    var y = this.y_val;
    var tile = $('#tile-' + x + '-' + y);
    switch(direction){
        case 38:
            if($('#tile-'+ (x-1) + '-' + y).hasClass('t1')){
                $(player).appendTo($('#tile-' + (x-1) + '-' + y));
                $(tile).empty();
                this.newVal(x-1, y);
            }
            break;
            
        case 40:
            if($('#tile-'+ (x+1) + '-' + y).hasClass('t1')){
                $(player).appendTo($('#tile-' + (x+1) + '-' + y));
                this.newVal(x+1, y);
            }
            break;
            
        case 39:
            if($('#tile-'+ x + '-' + (y+1)).hasClass('t1')){
                $(player).appendTo($('#tile-' + x + '-' + (y+1)));
                $(tile).empty();
                this.newVal(x, y+1);
            }
            break;
             
        case 37:
            if($('#tile-'+ x + '-' + (y-1)).hasClass('t1')){
                $(player).appendTo($('#tile-' + x + '-' + (y-1)));
                $(tile).empty();
                this.newVal(x, y-1);
            }
        }
    if($(tile).children().length < 1){
        $(tile).removeClass('t1');
        $(tile).addClass('tx');
    }
    this.checkMoves();
    this.checkWin();
}

Player.prototype.checkWin = function(){
    
}

Player.prototype.checkMoves = function(){
    
}