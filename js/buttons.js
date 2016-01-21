function loadButtons(but){
        var button = document.createElement('div');
        button.className = 'button';
        button.id = 'button' + but;
        $(button).text(but);
        $(button).css({
            'top' : (but-1) * 202 + 2 + 'px'
        });
        $(button).click(function(){
            loadLevel(but);
        });
        $(button).appendTo('body');
    
}