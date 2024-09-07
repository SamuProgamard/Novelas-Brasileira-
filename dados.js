
document.getElementById('pesquisar-btn').addEventListener('click', function() {
    // Oculta todos os resultados
    document.getElementById('chiquititas').style.display = 'none';
    document.getElementById('carrossel').style.display = 'none';
    document.getElementById('poliana').style.display = 'none';
  
    // ObtÃ©m o valor da pesquisa
    let pesquisa = document.getElementById('pesquisar-input').value.toLowerCase();
  
    // Exibe o resultado correspondente
    if (pesquisa.includes('chiquititas')) {
      document.getElementById('chiquititas').style.display = 'block';
    } else if (pesquisa.includes('carrossel')) {
      document.getElementById('carrossel').style.display = 'block';
    } else if (pesquisa.includes('poliana')) {
      document.getElementById('poliana').style.display = 'block';
    }
  });
  

