function scrollToSection(sectionId) {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
     
   // Funcionalidad del botón "Ir arriba"
        const scrollToTopButton = document.getElementById("scrollToTop");

        // Mostrar el botón cuando se desplaza hacia abajo
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) { // Muestra el botón después de desplazar 300px
                scrollToTopButton.classList.add("show");
            } else {
                scrollToTopButton.classList.remove("show");
            }
        });

        // Desplazamiento hacia arriba al hacer clic en el botón
        scrollToTopButton.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
        window.addEventListener('load', function() {
            setTimeout(function() {
              document.getElementById('loading-screen').classList.add('hidden');
            }, 2000); // 5000 milisegundos = 5 segundos
          });