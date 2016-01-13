//CODE IS UGLY
//PLZ DONT LOOK AT CODE
//LIKE ITS TERRIBLE
function movePlayer(){
    $('html').keydown(function(e){
        var player = document.getElementById('Player');
        container = document.getElementById('gridContainer');
        var x = $(player).data('pos').x;
        var y = $(player).data('pos').y;
        var val = e.which||e.keyCode;
        var tile = document.getElementById('tile-' + x + '-' + y);
        switch(val){
            case 38:
                if(document.getElementById('tile-'+ (x-1) + '-' + y).className == 't1'){
                    tile.removeChild(player);
                    $(player).appendTo($('#tile-' + (x-1) + '-' + y));
                    $(player).data("pos",{x: x-1, y: y});
                }
                break;
                
            case 40:
                if(document.getElementById('tile-'+ (x+1) + '-' + y).className == 't1'){
                    tile.removeChild(player);
                    $(player).appendTo($('#tile-' + (x+1) + '-' + y));
                    $(player).data("pos",{x: x + 1, y: y});
                }
                break;
                
            case 39:
                if(document.getElementById('tile-'+ x + '-' + (y+1)).className == 't1'){
                    tile.removeChild(player);
                    $(player).appendTo($('#tile-' + x + '-' + (y+1)));
                    $(player).data("pos",{x: x, y: y+1});
                }
                break;
                 
            case 37:
                if(document.getElementById('tile-'+ x + '-' + (y-1)).className == 't1'){
                    tile.removeChild(player);
                    $(player).appendTo($('#tile-' + x + '-' + (y-1)));
                    $(player).data("pos",{x: x, y: y-1});
            }
        }
        if($(tile).children().length < 1){
            $(tile).removeClass(tile.className);
            $(tile).addClass('tx');
        }
    });
}

function noMoves(tile){
    var x = $(player).data('pos').x;
    var y = $(player).data('pos').y;
    
}
