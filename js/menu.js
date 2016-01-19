var welcome, welcome2;
var show = function(){
    $('#titleName').fadeOut();
    $('#start').fadeOut();
    $( "#start" ).remove();
    $( "#titleName" ).remove();
    welcome = document.createElement('div');
    welcome.id = 'welcome';
    welcome.innerHTML = 'Welcome to Icebreaker...';
    $(welcome).appendTo('#menu');
    $(welcome).fadeIn();
    
    welcome2 = document.createElement('div');
    welcome2.id = 'welcome2';
    welcome2.innerHTML = 'A game where you break the ice';
    $(welcome2).appendTo('#menu');
    $(welcome2).fadeIn();
    $('#cont').fadeIn();
}


var showTutorial = function(){
    $('#welcome').fadeOut();
    $('#welcome2').fadeOut();
    $('#cont').fadeOut();
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
    $(instruct).fadeIn();
    $(instruct2).fadeIn();
    $('#gridContainer').appendTo('#menu');
    $('#gridContainer').css({transform: 'scale(0.8)'});
}
