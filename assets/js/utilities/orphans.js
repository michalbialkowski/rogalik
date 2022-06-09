$(`
    h1, h2, h3, h4, h5, h6, 
    .h1, .h2, .h3, .h4, .h5, .h6, 
    p, 
    table, 
    ul, ol, li, 
    a, 
    span, strong, em, bold, i, small
`).each(function() {
    var textReplace = $(this).html();
    var lettersToReplace = [
        'a', 'i', 'o', 'u', 'w', 'z',
        'na', 'od', 'za', 'we', 'dla', 'oraz', 'wraz', 'nad'
    ];
    var arrayLength = lettersToReplace.length;
    for (var i = 0; i < arrayLength; i++) {
        var textSplit = textReplace.split(' ' + lettersToReplace[i] + ' ');
        var textReplace = textSplit.join(' ' + lettersToReplace[i] + '&nbsp;');
    }
    $(this).empty();
    $(this).html(textReplace);
});  