    /* Slider */
    
    var splide = new Splide( '.splide' );
    splide.mount();  
    
    /* ROLAMENTO DA PÁGINA QUANDO CLICAR NOS LINKS  */

    document.addEventListener('DOMContentLoaded', function () {
        const aulasLink = document.querySelector('.nav-links a[href="#aulas"]');
        const planosLink = document.querySelector('.nav-links a[href="#planos"]');
        const contatoLink = document.querySelector('.nav-links a[href="#contato"]');
        const sobreLink = document.querySelector('.nav-links a[href="#sobre"]');

        const mobileAulasLink = document.querySelector('.mobile-menu a[href="#aulas"]');
        const mobilePlanosLink = document.querySelector('.mobile-menu a[href="#planos"]');
        const mobileContatoLink = document.querySelector('.mobile-menu a[href="#contato"]');
        const mobileSobreLink = document.querySelector('.mobile-menu a[href="#sobre"]');
        

      
        aulasLink.addEventListener('click', function (event) {
            event.preventDefault();
            scrollToSection('aulas');
        });

        planosLink.addEventListener('click', function (event) {
            event.preventDefault();
            scrollToSection('planos');
        });

        
        contatoLink.addEventListener('click', function (event) {
            event.preventDefault();
            scrollToSection('contato');
        });

        sobreLink.addEventListener('click', function (event) {
            event.preventDefault();
            scrollToSection('sobre');
        });

        mobileAulasLink.addEventListener('click', function (event) {
            event.preventDefault();
            scrollToSection('aulas');
        });
    
        mobilePlanosLink.addEventListener('click', function (event) {
            event.preventDefault();
            scrollToSection('planos');
        });
    
        mobileContatoLink.addEventListener('click', function (event) {
            event.preventDefault();
            scrollToSection('contato');
        });
    
        mobileSobreLink.addEventListener('click', function (event) {
            event.preventDefault();
            scrollToSection('sobre');
        });

        function scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                const offsetTop = section.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });

    /* QUANDO O USUÁRIO ATUALIZAR A PÁGINA, ELA VOLTA PARA O INICIO DE MANEIRA SUAVE  */

    document.addEventListener('DOMContentLoaded', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        const scrollToTopLink = document.querySelector('a[href="#topo"]');
        if (scrollToTopLink) {
            scrollToTopLink.addEventListener('click', function (event) {
                event.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    });

    /* FUNCTION ICONE MENU */

    function menuShow() {
        let menuMobile = document.querySelector('.mobile-menu');
        if (menuMobile.classList.contains('open')) {
            menuMobile.classList.remove('open');
            document.querySelector('.icon').src = "img/menu_white_36dp.svg";
        } else {
            menuMobile.classList.add('open');
            document.querySelector('.icon').src = "img/close_white_36dp.svg";
        }
    }