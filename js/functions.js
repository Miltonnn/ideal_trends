    /* Slider */
    
    $('.slider').nivoSlider();    
    
    /* Quando o usuário carregar a página ela irá para o topo */

    window.addEventListener('load', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });    
    
    /* ROLAMENTO DA PÁGINA QUANDO CLICAR NOS LINKS  */

    document.addEventListener('DOMContentLoaded', function () {
        const aulasLink = document.querySelector('.nav-links a[href="#aulas"]');
        const planosLink = document.querySelector('.nav-links a[href="#planos"]');
        const contatoLink = document.querySelector('.nav-links a[href="#contato"]');
        

      
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

