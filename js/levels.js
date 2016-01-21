//CODE IS UGLY
//PLZ DONT LOOK AT CODE
//LIKE ITS TERRIBLE
var player;
var x, y;
var currMap;
var down = false;

myAudio = new Audio('sounds/Snow.wav');

$(myAudio).bind('ended', function()  {
    myAudio.currentTime = 0;
    myAudio.play();
});

myAudio.play();

function loadLevel(level){
    $.get('levels/' + level + '.txt', function(data){
            var rows = data.split('\n');
            var levelRow = new Array (rows);
            for (var i = 0; i < rows.length; i++){
                var elements = rows[i].split(" ");
                levelRow[i] = new Array(elements.length);
                for(var k = 0; k < elements.length; k++){
                    levelRow[i][k] = elements[k];
                }
            }
            generateMap(levelRow);
    });
    currMap = level;
}

function generateMap(arr){
    var winWid;
    winWid = ((window.innerHeight/(arr.length + 1)));
    $('#gridContainer').empty();
    for(var i = 0; i < arr.length; i++){
        var tileContainer = document.createElement('div');
        tileContainer.id = "tileContainer" + i;
        tileContainer.className = 'tileContainer';
        $(tileContainer).css({
            'width': arr[0].length * winWid + 'px',
            'height': winWid + 'px',
            'margin': 'auto',
        });
        $(tileContainer).appendTo('#gridContainer');
        for(var k = 0; k < arr[i].length; k++){
            var tile = document.createElement('div');
            tile.id = 'tile-'+ i +'-' + k;
            tile.className = 't' + arr[i][k];
            $(tile).css({
                'left': k * winWid + 'px',
                'height': winWid + 'px',
                'width': winWid + 'px'
            });
            $(tile).appendTo($(tileContainer));
            if(arr[i][k] == 'b'){
                player = document.createElement('div');
                player.id = 'Player';
                $(player).css({
                    'height' : winWid/2 + 'px',
                    'width' : winWid/2 + 'px',
                    'left' : winWid/4 + 'px',
                    'top' : winWid/4 + 'px'
                });
                $(player).appendTo($(tile));
                x = i;
                y = k;
            }
        }
    }
    $('#gridContainer').css({
        'width' : (arr[0].length * (winWid)) + 'px',
        'height' : (arr.length * (winWid)) + 'px',
        'border' : '5px solid #6699ff',
        'margin-top': 'auto',
        'margin' : 'auto',
        'display' : 'none'
    });
    
    $('#gridContainer').fadeIn();
    $('.button').fadeOut();
    var clear = $('.tx').length;
    player = new Player(x, y, clear, false, currMap);
}

$('html').keydown(function(e){
    if(down === false){
        if(e.keyCode >= 37 && e.keyCode <= 40 && $('#Player').length){
            down = true;
            player.movePlayer(e.keyCode);
        }
        else{
            down = false;
        }
    }
});

$('html').keyup(function(e){
    down = false;
});
