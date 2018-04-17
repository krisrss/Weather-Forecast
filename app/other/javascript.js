window.FontAwesomeConfig = {
	searchPseudoElements: true
};

// Clears input field from text
$('input:text').focus(
    function(){
        $(this).val('');
});

