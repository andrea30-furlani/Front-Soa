// <!-- Script para exibir conteúdo com base na seleção de tema -->
document.getElementById('cadastro-tema-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const temaSelecionado = document.getElementById('tema').value;
    const conteudos = document.querySelectorAll('.conteudo-tema');

    // Oculta todos os conteúdos
    conteudos.forEach(conteudo => conteudo.style.display = 'none');
    if (temaSelecionado) {
        document.getElementById(temaSelecionado).style.display = 'block'; // Mostra o conteúdo selecionado
    }

    // Exibe a mensagem de sucesso
    const mensagem = document.getElementById('mensagem');
    mensagem.style.display = 'block';
    mensagem.innerText = 'Cadastro realizado com sucesso!';
    mensagem.style.color = 'green'; // Define a cor da mensagem
});


$(document).ready(function() {
    $("#telefone").inputmask("(99) 99999-9999");
});

//mascara

const telefoneInput = document.getElementById('telefone');

telefoneInput.addEventListener('input', (event) => {
  let valor = event.target.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
  valor = valor.replace(/(\d{2})(\d)/, '$1 $2'); // Insere um espaço após os dois primeiros dígitos
  valor = valor.replace(/(\d{5})(\d)/, '$1-$2'); // Insere um hífen após os cinco primeiros dígitos
  event.target.value = valor;
});