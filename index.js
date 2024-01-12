// ID
// Gera automaticamente um código de 4 dígitos incrementais
function cadastrarProduto() {
  // Lógica de geração do ID aqui
  let formattedId = generateProductId()

  // Atualiza o valor do campo ID do Produto
  document.getElementById('id_produto').value = formattedId

  // Adicione aqui a lógica para enviar os dados do formulário para o backend, se necessário
}

function generateProductId() {
  // Recupera o último ID armazenado (pode ser obtido do banco de dados)
  // Aqui estamos usando localStorage apenas para fins de exemplo
  let lastProductId = localStorage.getItem('lastProductId') || 0

  // Incrementa o último ID
  lastProductId++

  // Formata para um código de 4 dígitos
  let formattedId = String(lastProductId).padStart(4, '0')

  // Armazena o novo ID (atualizado) para uso futuro
  localStorage.setItem('lastProductId', lastProductId)

  return formattedId
}

document.addEventListener('DOMContentLoaded', function () {
  var mainFooter = document.getElementById('mainFooter')

  // Adiciona um ouvinte de rolagem para mostrar o footer apenas quando a tela for rolada até o final
  window.addEventListener('scroll', function () {
    var windowHeight = window.innerHeight
    var bodyHeight = document.body.offsetHeight
    var scrollPosition = window.scrollY || window.pageYOffset

    // Verifica se a tela foi rolada até o final
    if (scrollPosition + windowHeight >= bodyHeight) {
      mainFooter.classList.add('show-footer')
    } else {
      mainFooter.classList.remove('show-footer')
    }
  })
})

// Aplica a máscara ao elemento de entrada com id "casNumber"
$(document).ready(function () {
  $('#casNumber').inputmask('9999-99-9', { placeholder: 'x' })
})

function convertePadrao(elemento) {
  // Remove qualquer caractere não numérico
  elemento.value = elemento.value.replace(/[^0-9]/g, '')
}

document.addEventListener('DOMContentLoaded', function () {
  const inputNumero = document.getElementById('numero')
  const errorMessage = document.getElementById('error-message')

  inputNumero.addEventListener('input', function () {
    const inputValue = inputNumero.value.trim()
    const isValid = /^\d{0,7}$/.test(inputValue)

    if (!isValid) {
      errorMessage.textContent =
        'Digite apenas números com no máximo 7 caracteres.'
      inputNumero.classList.add('error')
    } else {
      errorMessage.textContent = ''
      inputNumero.classList.remove('error')
    }
  })
})

function cadastrarProduto() {
  // Lógica de validação do link da FISPQ aqui
  let linkFispq = document.getElementById('link_fispq').value.trim()

  if (!isValidUrl(linkFispq)) {
    // Exibe uma mensagem de erro, se a URL não for válida
    alert('Digite um link de FISPQ válido.')
    return
  }

  // Adicione aqui a lógica para enviar os dados do formulário para o backend, se necessário
}

function isValidUrl(url) {
  // Expressão regular para verificar se a string se parece com uma URL
  // Esta regex é uma simplificação e pode não cobrir todos os casos
  const urlRegex =
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i
  return urlRegex.test(url)
}

document.addEventListener('DOMContentLoaded', function () {
  var mainFooter = document.getElementById('mainFooter')

  // Adiciona um ouvinte de rolagem para mostrar o footer apenas quando a tela for rolada até o final
  window.addEventListener('scroll', function () {
    var windowHeight = window.innerHeight
    var bodyHeight = document.body.offsetHeight
    var scrollPosition = window.scrollY || window.pageYOffset

    // Verifica se a tela foi rolada até o final
    if (scrollPosition + windowHeight >= bodyHeight) {
      mainFooter.classList.add('show-footer')
    } else {
      mainFooter.classList.remove('show-footer')
    }
  })
})

// Aplica a máscara ao elemento de entrada com id "casNumber"
$(document).ready(function () {
  $('#casNumber').inputmask('9999-99-9', { placeholder: 'x' })
})

document.addEventListener('DOMContentLoaded', function () {
  const inputNumero = document.getElementById('numero')
  const errorMessage = document.getElementById('error-message')

  inputNumero.addEventListener('input', function () {
    const inputValue = inputNumero.value.trim()
    const isValid = /^\d{0,7}$/.test(inputValue)

    if (!isValid) {
      errorMessage.textContent =
        'Digite apenas números com no máximo 7 caracteres.'
      inputNumero.classList.add('error')
    } else {
      errorMessage.textContent = ''
      inputNumero.classList.remove('error')
    }
  })
})

function transformarParaMaiusculas(elemento) {
  elemento.value = elemento.value.toUpperCase()
}


//home.html
document.addEventListener('DOMContentLoaded', function () {
  var mainFooter = document.getElementById('mainFooter')

  window.addEventListener('scroll', function () {
    var windowHeight = window.innerHeight
    var bodyHeight = document.body.offsetHeight
    var scrollPosition = window.scrollY || window.pageYOffset

    if (scrollPosition + windowHeight >= bodyHeight) {
      mainFooter.classList.add('show-footer')
    } else {
      mainFooter.classList.remove('show-footer')
    }
  })
})

function pesquisar() {
  var termoPesquisa = document.getElementById('termoPesquisa').value;
  alert('Termo de pesquisa: ' + termoPesquisa);
  // Adicione a lógica de pesquisa aqui
}

$(document).ready(function () {
  $('#casNumber').inputmask('9999-99-9', { placeholder: 'x' });
});

document.addEventListener("DOMContentLoaded", function () {
  const inputNumero = document.getElementById("numero");
  const errorMessage = document.getElementById("error-message");

  inputNumero.addEventListener("input", function () {
    const inputValue = inputNumero.value.trim();
    const isValid = /^\d{0,7}$/.test(inputValue);

    if (!isValid) {
      errorMessage.textContent = "Digite apenas números com no máximo 7 caracteres.";
      inputNumero.classList.add("error");
    } else {
      errorMessage.textContent = "";
      inputNumero.classList.remove("error");
    }
  });
});

// Página de cliente
let tipoProdutoCliente = ''; // Variável global para armazenar o tipo de produto selecionado

function setTipoCliente(tipo) {
  tipoProdutoCliente = tipo;
  alert(`Tipo de produto selecionado: ${tipo}`);
}

function cadastrarProdutoCliente() {
  // Lógica de validação do formulário e envio dos dados para o backend
  alert(`Dados do formulário:\nTipo: ${tipoProdutoCliente}\nOutros campos: Adicione a lógica aqui`);
}

function transformarParaMaiusculasCliente(elemento) {
  elemento.value = elemento.value.toUpperCase();
}
