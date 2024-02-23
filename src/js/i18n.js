$( document ).ready(function() {

    // use plugins and options as needed, for options, detail see
    i18next
    // detect user language
    .use(i18nextBrowserLanguageDetector)
    // init i18next
    .init({
        debug: true,
        fallbackLng: 'en',
        resources: {
        en: {
            translation: {
                common:{
                    btn: "start trading in one click"
                },
                review:{
                    title: "Special conditions for traders from Hong Kong"
                }
            }
        },
        ru: {
            translation: {
                common:{
                    btn: "начать торговлю в один клик"
                },
                review:{
                    title: "Специальные условия для трейдеров из Гонконга"
                }
            }
        }
        }
    }, (err, t) => {
        if (err) return console.error(err);

        // for options see
        jqueryI18next.init(i18next, $, { useOptionsAttr: true });

        // start localizing, details:
        $('body').localize();
    });

})