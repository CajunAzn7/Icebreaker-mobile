var showTutorial = function(){
    loadLevel('tutorial1');
    $('#titleName').fadeOut();
    $('#start').fadeOut();
    $('#instruct').fadeIn();
    $('#instruct2').fadeIn();
    $( "#start" ).remove();
    $( "#titleName" ).remove();
    $('#gridContainer').appendTo('#menu');
    $('#gridContainer').css({transform: 'scale(0.8)'});
}