$( document ).ready(function() {
    
    // castomizing the header select
    function dropdownOption (state) {
        if (!state.id) {
            return state.text;
        }
        var baseUrl = "../img";
        var $state = $(
            '<span><img class="select2-option-img" src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + state.text + '</span>'
        );
        return $state;
    };

    function selectedResult (state) {
        if (!state.id) {
        return state.text;
        }
    
        var baseUrl = "../img";
        var $state = $(
        '<span><img class="img-flag" /> <span></span></span>'
        );
    
        // Use .text() instead of HTML string concatenation to avoid script injection issues
        $state.find("span").text(state.text);
        $state.find("img").attr("src", baseUrl + "/" + state.element.value.toLowerCase() + ".png");
    
        return $state;
    };
  
    $(".header__interface-lang").select2({
        templateResult: dropdownOption,
        templateSelection: selectedResult
    });

    // Track the selected language
    $('.header__interface-lang').on("change", ()=>{
        const lang = $('.header__interface-lang').val();
        let abbr = "en";
        switch(lang){
            case 'russian':
                abbr="ru";
                break;
            case 'english':
                abbr="en";
                break;
        }
        i18next.changeLanguage(abbr);
        $('body').localize();
    })

    // Translate Implementaion
    // use plugins and options as needed, for options, detail see
    i18next
    // detect user language
    .use(i18nextBrowserLanguageDetector)
    // init i18next
    .init({
        debug: true,
        fallbackLng: 'ru',
        resources: translations
    }, (err, t) => {
        if (err) return console.error(err);

        // for options see
        jqueryI18next.init(i18next, $, { useOptionsAttr: true });

        // start localizing, details:
        $('body').localize();
    });
});