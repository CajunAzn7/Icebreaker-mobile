//CODE IS UGLY
//PLZ DONT LOOK AT CODE
//LIKE ITS TERRIBLE
var win = new Audio('sounds/WinChime.wav');
var click = new Audio('sounds/Clicky.wav');
function Player(x, y, clear, win, map){
    this.x_val = x;
    this.y_val = y;
    this.clear = clear;
    this.win = win;
    this.map = map;
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
        click.play();
        $(tile).removeClass('t1');
        $(tile).addClass('tx');
        this.clear++;
    }
    this.checkWin();
    if(this.win === false){
        this.checkMoves();
    }
    else if(this.win === true && this.map == 'tutorial1'){
        $('#gridContainer').empty();
        loadLevel('tutorial2');
        instruct.innerHTML='But you can&#39t just go to the end square...';
        instruct2.innerHTML='...you have to clear the others first';
        $(instruct2).css({'top' : '85%'});
    }
    else if(this.win === true && this.map == 'tutorial2'){
        $('#instruct').fadeOut();
        $('#instruct2').fadeOut();
        $('#instruct').remove();
        $('#instruct2').remove();
        $('#gridContainer').empty();
        $('#gridContainer').appendTo('#main');
        $('#welcome').text('You know the basics of the game...');
        $('#welcome2').text('Now go play!');
        $('#welcome2').css({'top' : '60%'});
        $('#welcome').fadeIn();
        $('#welcome2').fadeIn();
        $('#cont').click(function(){
            $('#welcome').fadeOut();
            $('#welcome2').fadeOut();
            $('#mycont').fadeOut();
            $('#main').fadeIn();
            $('#menu').remove();
        });
        $('#cont').fadeIn();
    }
    else if(this.win === true){
        $('#winScreen').fadeIn();
    }
}

Player.prototype.checkWin = function(){
    var total = $('.tileContainer').length * ($('#tileContainer1').children().length) - 2;
    if(this.clear == total){
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
    if(this.clear == total + 1){
        win.play();
        this.win = true;
        clear = 0;
    }
}


/*
Player.prototype.checkMoves = function(){
    var top = $('#tile-'+ (x-1) + '-' + y).hasClass('t1');
    var bot = $('#tile-'+ (x+1) + '-' + y).hasClass('t1');
    var left = $('#tile-'+ (x) + '-' + (y - 1)).hasClass('t1');
    var right = $('#tile-'+ (x) + '-' + (y + 1)).hasClass('t1');
    alert(top + ' ' + bot + ' ' + left + ' ' + right);
    if(!top && !left && !bot && !right){
        alert('you lost');
    }
}
*/