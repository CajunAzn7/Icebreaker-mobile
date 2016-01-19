var welcome, welcome2;
var show = function(){
    $('#titleName').fadeOut(1000);
    $('#start').fadeOut(1000);
    $( "#start" ).remove();
    $( "#titleName" ).remove();
    welcome = document.createElement('div');
    welcome.id = 'welcome';
    welcome.innerHTML = 'Welcome to Icebreaker';
    $(welcome).appendTo('#menu');
    $(welcome).fadeIn(1000);
    
    welcome2 = document.createElement('div');
    welcome2.id = 'welcome2';
    welcome2.innerHTML = 'A game where you break the ice';
    $(welcome2).appendTo('#menu');
    $(welcome2).fadeIn(1000);
    $('#cont').click(function(){
        $('#welcome').fadeOut(1000);
        $('#welcome2').fadeOut(1000);
        $('#cont').fadeOut(1000);
        $('#mycont').unbind('click');
        var instruct = document.createElement('div');
        instruct.id = 'instruct';
        instruct.innerHTML='Use the arrow keys to move...';
        var instruct2 = document.createElement('div');
        instruct2.id = 'instruct2';
        instruct2.innerHTML='...to get to the green square';
        loadLevel('tutorial1');
        $(instruct).appendTo('#menu');
        $(instruct2).appendTo('#menu');
        $(instruct).fadeIn(1000);
        $(instruct2).fadeIn(1000);
        $('#gridContainer').appendTo('#menu');
        $('#gridContainer').css({transform: 'scale(0.8)'});
    });
    $('#cont').fadeIn(1000);
    
}

