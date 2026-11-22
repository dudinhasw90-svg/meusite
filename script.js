/* ATUALIZAR O ANO AUTOMATICAMENTE */

const ano = document.getElementById("ano");

ano.textContent = new Date().getFullYear();


/* FILTRO DO CALENDÁRIO DE PROVAS */

const filtro = document.getElementById("filtroTurma");

const provas = document.querySelectorAll(
    "#listaProvas tr"
);

filtro.addEventListener("change", function() {

    const turmaSelecionada = filtro.value;

    provas.forEach(function(prova) {

        const turma = prova.dataset.turma;

        if (
            turmaSelecionada === "todas" ||
            turma === turmaSelecionada
        ) {

            prova.style.display = "";

        } else {

            prova.style.display = "none";

        }

    });

});
