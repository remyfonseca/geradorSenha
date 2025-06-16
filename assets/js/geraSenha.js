import geraSenha from "./gerador.js";

const senhaGerada = document.querySelector("#password");
const qtdCaracteres = document.querySelector("#qtd-caracteres");
const chkMaiusculas = document.querySelector("#chk-maiusculas");
const chkMinusculas = document.querySelector("#chk-minusculas");
const chkNumeros = document.querySelector("#chk-numeros");
const chkSimbolos = document.querySelector("#chk-simbolos");
const gerarSenha = document.querySelector("#gerar-senha");
const copiaSenha = document.querySelector("#copia");


export default () => {
    gerarSenha.addEventListener('click', ()=> {
        senhaGerada.innerHTML = gera();
    })

    copiaSenha.addEventListener('click', () => {
    const senha = senhaGerada.innerHTML;
    if (senha) {
        navigator.clipboard.writeText(senha)
            .then(() => alert("Senha copiada!"))
            .catch(() => alert("Erro ao copiar a senha!"));
    } else {
        alert("Nenhuma senha gerada para copiar!");
    }
    });
}

function gera(){

    const qtd = qtdCaracteres.value;
    if (!/^\d+$/.test(qtd)) {
        return "Quantidade inválida!";
    }

    const senha = geraSenha(
        qtdCaracteres.value,
        chkMaiusculas.checked,
        chkMinusculas.checked,
        chkNumeros.checked,
        chkSimbolos.checked
    );

    return senha || "Nada Selecionado!";
}