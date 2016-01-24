var welcome, welcome2;
var show = function(){
    $('#titleName').fadeOut(1000);
    $('#start').fadeOut(1000);
    $('#start').off();
    welcome = document.createElement('div');
    welcome.id = 'welcome';
    welcome.innerHTML = 'Welcome to Icebreaker';
    $(welcome).appendTo('#menu');
    $(welcome).delay(1000).fadeIn(1000);
    
    welcome2 = document.createElement('div');
    welcome2.id = 'welcome2';
    welcome2.innerHTML = 'A game where you break the ice';
    $(welcome2).appendTo('#menu');
    $(welcome2).delay(1000).fadeIn(1000);
    $('#cont').click(function(){
        $('#cont').off();
        $('#welcome').fadeOut(1000);
        $('#welcome2').fadeOut(1000);
        $('#cont').fadeOut(1000);
        $('#mycont').unbind('click');
        var instruct = document.createElement('div');
        instruct.id = 'instruct';
        instruct.innerHTML='Swipe up, down, right, or left...';
        var instruct2 = document.createElement('div');
        instruct2.id = 'instruct2';
        instruct2.innerHTML='...to get to the green square';
        window.setTimeout(function(){loadLevel('tutorial1')}, 1000);
        $(instruct).appendTo('#menu');
        $(instruct2).appendTo('#menu');
        $(instruct).delay(1000).fadeIn(1000);
        $(instruct2).delay(1000).fadeIn(1000);
        $('#gridContainer').appendTo('body');
    });
    $('#cont').delay(1000).fadeIn(1000);
    
}

