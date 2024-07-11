
document.addEventListener('DOMContentLoaded', function() {
 

    //BOTÃO TO-TOP
  
        const scrollToTop = document.getElementById('buttom-top');
        
        scrollToTop.addEventListener('click', function() {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        });
  
  
  }); //FECHAMENTO do DOMContentLoaded