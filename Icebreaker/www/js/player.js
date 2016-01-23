//CODE IS UGLY
//PLZ DONT LOOK AT CODE
//LIKE ITS TERRIBLE
var win = new Audio('sounds/ShortWin.wav');
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
        case 'up':
            if($('#tile-'+ (x-1) + '-' + y).hasClass('t1')){
                $(player).appendTo($('#tile-' + (x-1) + '-' + y));
                $(tile).empty();
                this.newVal(x-1, y);
            }
            break;
            
        case 'down':
            if($('#tile-'+ (x+1) + '-' + y).hasClass('t1')){
                $(player).appendTo($('#tile-' + (x+1) + '-' + y));
                this.newVal(x+1, y);
            }
            break;
            
        case 'right':
            if($('#tile-'+ x + '-' + (y+1)).hasClass('t1')){
                $(player).appendTo($('#tile-' + x + '-' + (y+1)));
                $(tile).empty();
                this.newVal(x, y+1);
            }
            break;
             
        case 'left':
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
        $('#instruct').fadeOut();
        $('#instruct2').fadeOut();
        $('#gridContainer').fadeOut();
        window.setTimeout(function(){
            $('#instruct').text('But you can\'t just go to the end square...');
            $('#instruct2').text('...you have to clear the others first');
            loadLevel('tutorial2');
            $('#instruct2').css({'top' : '85%'});
            $('#instruct').fadeIn(1000);
            $('#instruct2').fadeIn(1000);
        }, 1000);
        
    }
    else if(this.win === true && this.map == 'tutorial2'){
        $('#instruct').fadeOut(1000);
        $('#instruct2').fadeOut(1000);
        $('#gridContainer').fadeOut(1000);
        $('#welcome').text('You know the basics of the game...');
        $('#welcome2').text('Now go play!');
        $('#welcome2').css({'top' : '60%'});
        $('#welcome').delay(1000).fadeIn(1000);
        $('#welcome2').delay(1000).fadeIn(1000);
        $('#cont').off('click');
        $('#cont').click(function(){
            $('#welcome').fadeOut(1000);
            $('#welcome2').fadeOut(1000);
            $('#mycont').fadeOut(1000);
            $('#main').css({'overflow' : 'scroll'});
            $('#main').fadeIn(1000);
            $('#gridContainer').empty();
            $('#gridContainer').appendTo('#main');
            $('html, body').css({
                'overflow-y': 'auto'
            }); 
            for(var i = 1; i < 10; i++){
                loadButtons(i);
            }
            window.setTimeout(function(){$('#menu').remove();}, 1000);
        });
        $('#cont').delay(1000).fadeIn(1000);
    }
    else if(this.win === true){
        var map = this.map;
        $('#winScreen').fadeIn(1000);
        var cont = document.createElement('div');
        $(cont).css('background-color', '#3399ff');
        $(cont).text('Next Level');
        cont.className = 'continue';
        $(cont).click(function(){
            loadLevel(map+1);
            $('#winScreen').fadeOut(1000);
        });
        $(cont).appendTo('#winScreen');
        var menu = document.createElement('div');
        $(menu).text('Main Menu');
        menu.className = 'continue';
        $(menu).css({
            'background-color': '#3399ff',
            'top': '80%'
        });
        $(menu).click(function(){
            $('#winScreen').fadeOut(1000);
            $('.button').fadeIn(1000);
            $('#gridContainer').fadeOut(1000);
        });
        $(menu).appendTo('#winScreen');
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
    if(this.clear == total + 1 && this.win === false){
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