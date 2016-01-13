//CODE IS UGLY
//PLZ DONT LOOK AT CODE
//LIKE ITS TERRIBLE
var allowMove = false;
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
}

function generateMap(arr){
    var container = document.getElementById('gridContainer');
    $("#Player").removeData("pos");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    $('#gridContainer').css({
        'width' : (arr[0].length * ((window.innerHeight/8)+2)) + 'px',
        'height' : (arr.length * ((window.innerHeight/8)+2)) + 'px',
        'border' : '5px solid #6699ff',
        'display' : 'none'
    });
    for(var i = 0; i < arr.length; i++){
        for(var k = 0; k < arr[i].length; k++){
            var tile = document.createElement('div');
            tile.id = 'tile-'+ i +'-' + k;
            tile.className = 't' + arr[i][k];
            $(tile).css({
                'top' : i * ((window.innerHeight/8)+2) + 'px',
                'left': k * ((window.innerHeight/8)+2) + 'px',
                'height': (window.innerHeight/8) + 'px',
                'width': (window.innerHeight/8) + 'px'
            });
            $(tile).appendTo($('#gridContainer'));
            if(arr[i][k] == 'b'){
                var player = document.createElement('div');
                player.id = 'Player';
                $(player).css({
                    'height' : ((window.innerHeight/8)+2)/2 + 'px',
                    'width' : ((window.innerHeight/8)+2)/2 + 'px',
                    'left' : ((window.innerHeight/8)+2)/4 + 'px',
                    'top' : ((window.innerHeight/8)+2)/4 + 'px'
                });
                $(player).appendTo($(tile));
                $("#Player").data("pos",{x: i, y: k});
            }
        }
    }
    $('#gridContainer').fadeIn();
    if(allowMove === false){
        var func = movePlayer();
        allowMove = true;
    }
}




