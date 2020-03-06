$(function() {
    getQuestion();
});

function getQuestion() {
    var container = $('<div />');
    var val1 = Math.round(Math.random()*10);
    var val2 = Math.round(Math.random()*10);
    var lbl = $('<label />');
    lbl.html(val1 + ' + ' + val2 + ' = ');
    container.append(lbl);
    var input = $('<input type="text" />');
    container.append(input);
    var btn = $('<input type="button" value="Submit" />');
    var val;
    btn.click(function() { 
        
        
        input.hide();
        $(this).hide();
        
        $(this).after(function() {
            if(val1 + val2 == input.val()) {
                $('#quiz-response').html('There is no demand for women engineers, as such, as there are for women doctors; but there\'s always a demand for anyone who can do a good piece of work.');
            } else {
                return 'Try again';
            }
        });
        
        getQuestion(); 
    });
    container.append(btn);
    $('#json').append(container);
}