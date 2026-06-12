/* ==========================================
   POO MASTER EXPERIENCE
   Desenvolvido para revisão de POO
========================================== */

// ==========================================
// INICIAR EXPERIÊNCIA
// ==========================================

const btnStart = document.querySelector("#startBtn");

if (btnStart) {
    btnStart.addEventListener("click", () => {
        document.querySelector("#conteudo")
            .scrollIntoView({
                behavior: "smooth"
            });
    });
}

// ==========================================
// SCROLL SUAVE MENU
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {
            destino.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});

// ==========================================
// MENU ATIVO
// ==========================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }

    });

});

// ==========================================
// ANIMAÇÃO DE ENTRADA
// ==========================================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".reveal").forEach(el => {
    observer.observe(el);
});

// ==========================================
// BARRA DE PROGRESSO
// ==========================================

const progressBar = document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    if (progressBar) {
        progressBar.style.width = progress + "%";
    }

});

// ==========================================
// QUIZ POO
// ==========================================

const perguntas = [

    {
        pergunta: "O que é uma Classe?",
        alternativas: [
            "Um objeto criado",
            "Um molde para criar objetos",
            "Um método",
            "Um atributo"
        ],
        correta: 1
    },

    {
        pergunta: "Qual pilar protege os dados internos?",
        alternativas: [
            "Herança",
            "Polimorfismo",
            "Encapsulamento",
            "Abstração"
        ],
        correta: 2
    },

    {
        pergunta: "Qual método cria um objeto?",
        alternativas: [
            "Getter",
            "Setter",
            "Construtor",
            "toString"
        ],
        correta: 2
    },

    {
        pergunta: "Sobrecarga ocorre quando:",
        alternativas: [
            "Métodos têm nomes diferentes",
            "Métodos têm o mesmo nome e parâmetros diferentes",
            "Existem duas classes",
            "Existe herança"
        ],
        correta: 1
    },

    {
        pergunta: "Variáveis static pertencem:",
        alternativas: [
            "Ao objeto",
            "Ao método",
            "À classe",
            "Ao construtor"
        ],
        correta: 2
    }

];

let perguntaAtual = 0;
let pontuacao = 0;

const quizContainer =
    document.getElementById("quiz");

function carregarPergunta() {

    if (!quizContainer) return;

    const p = perguntas[perguntaAtual];

    let html = `
        <div class="quiz-card">
            <h3>${p.pergunta}</h3>
            <div class="quiz-options">
    `;

    p.alternativas.forEach((alt, index) => {

        html += `
            <button class="quiz-option"
            onclick="responder(${index})">
                ${alt}
            </button>
        `;

    });

    html += `
            </div>
        </div>
    `;

    quizContainer.innerHTML = html;
}

window.responder = function(indice) {

    const pergunta = perguntas[perguntaAtual];

    if (indice === pergunta.correta) {
        pontuacao++;
    }

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {

        carregarPergunta();

    } else {

        mostrarResultado();

    }

};

function mostrarResultado() {

    let mensagem = "";

    if (pontuacao === 5) {

        mensagem =
            "🏆 Excelente! Você domina POO.";

    } else if (pontuacao >= 3) {

        mensagem =
            "🚀 Muito bom! Continue revisando.";

    } else {

        mensagem =
            "📚 Revise os conceitos e tente novamente.";
    }

    quizContainer.innerHTML = `
        <div class="resultado">
            <h2>Pontuação</h2>
            <h1>${pontuacao}/${perguntas.length}</h1>
            <p>${mensagem}</p>

            <button onclick="reiniciarQuiz()">
                Refazer Quiz
            </button>
        </div>
    `;
}

window.reiniciarQuiz = function() {

    perguntaAtual = 0;
    pontuacao = 0;

    carregarPergunta();

};

// ==========================================
// CONTADOR DE LEITURA
// ==========================================

const contador = document.getElementById("contador-conceitos");

if (contador) {

    let total = document.querySelectorAll(".conceito").length;

    contador.innerHTML = total;

}

// ==========================================
// EFEITO PARALLAX HERO
// ==========================================

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    if (!hero) return;

    const offset = window.scrollY;

    hero.style.backgroundPositionY =
        offset * 0.5 + "px";

});

// ==========================================
// LOADING INICIAL
// ==========================================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    carregarPergunta();

});

// ==========================================
// CONSOLE MESSAGE
// ==========================================

console.log(`
=========================================
POO MASTER EXPERIENCE
Sistema carregado com sucesso.
=========================================
`);