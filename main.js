 // Função para abrir uma aba específica
 function openTab(tabId) { 
    // Esconder todas as abas
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function(tab) {
      tab.style.display = 'none';
    });

    // Remover a classe 'active-tab' de todos os botões
    var buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(function(button) {
      button.classList.remove('active-tab');
    });

    // Exibir a aba desejada
    document.getElementById(tabId).style.display = 'block';

    // Adicionar a classe 'active-tab' ao botão correspondente
    document.querySelector('[onclick="openTab(\'' + tabId + '\')"]').classList.add('active-tab');
  }