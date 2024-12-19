// Função para abrir e fechar o menu de navegação (exemplo de interatividade)
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('header nav a');
    
    // Adiciona um efeito de clique para os links
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        alert(`Você clicou em: ${link.textContent}`);
      });
    });
  });
  