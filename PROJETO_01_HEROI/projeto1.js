const prompt = require(`prompt-sync`)();

let cont = 0;//VARIÁVEL PARA CONTADOR DO LOOP 
let sim = 0; //CONTADOR QUE SERÁ CALCULADO AO FINAL QUANTOS "SIM" OBTIVE COMO RESPOSTA, ADIDIONANDO ELE AO LOOP
const perguntas = [//ARRAY COM TODAS AS PERGUNTAS DO JOGO, O LOOP LERÁ NO ÍNDICE PELO PERGUNTAS.LENGTH(CONT)
    "Você treinou o suficiente para atravessar todos os km's e desafios que estarão no seu caminho?",
    'Você estudou bastante toda a geografia, relevos e caminhos que irá enfrentar?',
    'Avisou a fámilia e amigos por todos os lugares por onde irá passar?',
    'Preparou todo o equipamento necessário para a aventura?',
    'Está levando o kit de primeiros socorros?',
];
const respostas = [//ARRAY COM RESPOSTAS, NO FINAL SERÁ EXIBIDO DE ACORDO COM O VALOR NA VARIÁVEL SIM RESPOSTA[SIM]
    "Você falha miseravelmente.",
    "Você falha, mas ainda consegue fugir da situação.",
    "Você falha, mas ainda consegue fugir da situação.",
    "Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.",
    "Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.",
    "Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações."
    ]

console.clear();

const name = prompt(
    `Olá, hoje você irá participar do projeto 1 da Blue Ed Tech. Qual o seu nome? `,
); // pergunta interativa básica pedindo o nome do usuário

console.clear();

console.log(`\tA TRAVESSIA DA SERRA DO ESPINHAÇO
\n\t${name} resolveu um dia fazer a travessia da Serra do Espinhaço de bicicleta. A serra do Espinhaço é uma cadeia montanhosa localizada no planalto Atlântico, estendendo-se pelos estados de Minas Gerais e Bahia.
A serra do Espinhaço pode ser considerada a única cordilheira do Brasil, pois é singular em sua forma e formação. Há mais de um bilhão de anos em constante movimento, é uma cadeia de montanhas bastante longa e estreita, entrecortada por picos e vales.
Tem cerca de 1000 quilômetros de extensão, no sentido latitudinal do Quadrilátero Ferrífero, ao Norte de Minas e, depois de uma breve interrupção, alcança a porção sul da Bahia. Todo esse percurso apresenta uma diferença mínima de longitude, ou seja,
sua largura varia apenas entre 50 e 100 km. Entre os municípios que são cortados pela Serra do Espinhaço estão Ouro Branco, Ouro Preto, Catas Altas, Caeté, Serro, Diamantina, Botumirim, Grão Mogol, Itacambira, Porteirinha, Mato Verde, Espinosa, Olhos-d'Água, e Monte Azul.
Foi ao longo da serra do Espinhaço que a mineração, no período colonial se deu, principalmente. E foi na Serra do Espinhaço, em consequência, que os núcleos urbanos mais importantes se formaram (Ouro Preto, Sabará, Serro e São João Del Rei, por exemplo, dentre outros).
As raízes africanas, europeias e indígenas se misturam no Espinhaço, deixando marcas nos costumes e manifestações culturais das comunidades locais. A beleza e a cultura da região oferecem condições para o desenvolvimento do ecoturismo.
\tContudo ${name} precisará de conferir se está realmente pronto para essa grande aventura, por essa Serra que representa a história desse país incrível chamado Brasil.
\n\n${name}, responda as perguntas que seguem para sabermos se está pronto. As perguntas devem ser respondidas com [sim] ou [nao].\n\n `); // introdução, história, etc..

prompt(`\t!!APERTE ENTER!!`);
console.clear();

while (cont < perguntas.length) {
    console.clear();
    do {
        pergunta = prompt(`${perguntas[cont]}`).toLowerCase();
        if (pergunta != 'sim' && pergunta != 'não' && pergunta != 'nao') {
            console.log(
                `Responda com [sim] ou [não]. Outra resposta não será aceita`,
            );
        }
        if (pergunta == 'sim') {
            sim++;
        }
    } while (pergunta != 'sim' && pergunta != 'não' && pergunta != 'nao');
    cont++;
}

console.clear();

console.log(respostas[sim]);