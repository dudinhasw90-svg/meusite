let editando = false;

function ativarEdicao() {
    editando = !editando;

    document.querySelectorAll("main section").forEach(secao => {
        secao.contentEditable = editando;
    });

    const botao = document.getElementById("modoEdicao");

    if (editando) {
        botao.textContent = "💾 Salvar alterações";
    } else {
        salvarSite();
        botao.textContent = "✏️ Editar site";
    }
}

function salvarSite() {
    const conteudo = document.querySelector("main").innerHTML;

    localStorage.setItem("falaEscola", conteudo);

    alert("Alterações salvas neste navegador!");
}

window.addEventListener("DOMContentLoaded", () => {
    const salvo = localStorage.getItem("falaEscola");

    if (salvo) {
        document.querySelector("main").innerHTML = salvo;
    }
});
