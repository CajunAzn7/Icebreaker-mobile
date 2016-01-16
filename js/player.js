//CODE IS UGLY
//PLZ DONT LOOK AT CODE
//LIKE ITS TERRIBLE
var win = new Audio('sounds/win.wav');
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
    var clear = 0;
    var total = $('.tileContainer').length * ($('#tileContainer1').children().length) - 2;
    for(var i = 0; i < $('.tileContainer').length; i++){
        for(var k = 0; k < $('#tileContainer' + i + ' > div').length; k++){
            var tile = $('#tile-' + i + '-' + k);
            if($(tile).hasClass('tx')){
                clear++;
            }
        }
    }
    if(clear == total){
        var x = this.x_val;
        var y = this.y_val;
        var top = $('#tile-'+ (x-1) + '-' + y).hasClass('te');
        var bot = $('#tile-'+ (x+1) + '-' + y).hasClass('te');
        var left = $('#tile-'+ (x) + '-' + (y - 1)).hasClass('te');
        var right = $('#tile-'+ (x) + '-' + (y + 1)).hasClass('te');
        if(top || bot || left || right){
            var end = $(".te", "#gridContainer");
            $(end).removeClass('te');
            $(end).addClass('t1');
        }
    }
    if(clear == total + 1){
        win.play();
    }
}

Player.prototype.checkMoves = function(){
    
}