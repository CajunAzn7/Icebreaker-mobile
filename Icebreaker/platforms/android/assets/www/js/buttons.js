function loadButtons(but){
        var button = document.createElement('div');
        button.className = 'button';
        button.id = 'button' + but;
        $(button).text(but);
        $(button).css({
            'top' : (but) * 200 + 2 + 'px'
        });
        $(button).click(function(){
            loadLevel(but);
            $('html, body').css({
                'overflow-y': 'hidden'
            }); 
        });
        $(button).appendTo('body');
    
}