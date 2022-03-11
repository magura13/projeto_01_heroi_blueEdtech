const prompt = require(`prompt-sync`)();

let sim = 0; //CONTADOR QUE SERÁ CALCULADO AO FINAL QUANTOS "SIM" OBTIVE COMO RESPOSTA, ADIDIONANDO ELE AO LOOP
let pergunta;//VARIÁVEL PARA RECEBER A RESPOSTA DO USUÁRIO DADA NO PROMPT

console.clear();

const name = prompt(
    `Olá, hoje você irá participar do projeto 1 da Blue Ed Tech. Qual o seu nome? `,
); // pergunta interativa básica pedindo o nome do usuário

console.clear();

console.log(`\tA TRAVESSIA DA SERRA DO ESPINHAÇO`);
console.log(`\n\t${name} resolveu um dia fazer a travessia da Serra do Espinhaço. A serra do Espinhaço é uma cadeia montanhosa localizada no planalto Atlântico, estendendo-se pelos estados de Minas Gerais e Bahia.
A serra do Espinhaço pode ser considerada a única cordilheira do Brasil, pois é singular em sua forma e formação. Há mais de um bilhão de anos em constante movimento, é uma cadeia de montanhas bastante longa e estreita, entrecortada por picos e vales.
Tem cerca de 1000 quilômetros de extensão, no sentido latitudinal do Quadrilátero Ferrífero, ao Norte de Minas e, depois de uma breve interrupção, alcança a porção sul da Bahia. Todo esse percurso apresenta uma diferença mínima de longitude, ou seja,
sua largura varia apenas entre 50 e 100 km. Entre os municípios que são cortados pela Serra do Espinhaço estão Ouro Branco, Ouro Preto, Catas Altas, Caeté, Serro, Diamantina, Botumirim, Grão Mogol, Itacambira, Porteirinha, Mato Verde, Espinosa, Olhos-d'Água, e Monte Azul.
Foi ao longo da serra do Espinhaço que a mineração, no período colonial se deu, principalmente. E foi na Serra do Espinhaço, em consequência, que os núcleos urbanos mais importantes se formaram (Ouro Preto, Sabará, Serro e São João Del Rei, por exemplo, dentre outros).
As raízes africanas, europeias e indígenas se misturam no Espinhaço, deixando marcas nos costumes e manifestações culturais das comunidades locais. A beleza e a cultura da região oferecem condições para o desenvolvimento do ecoturismo.
\tContudo ${name} precisará de conferir se está realmente pronto para essa grande aventura, por essa Serra que representa a história desse país incrível chamado Brasil. `); // introdução, história, etc..

console.log(
    `\n\n${name}, responda as perguntas que seguem para sabermos se está pronto. As perguntas devem ser respondidas com [1] = sim ou [0] = não.\n\n `,
);

do {
    //LOOP PARA ACEITAR SOMENTE A RESPOSTA 0 || 1, while A RESPOSTA NÃO FOR 0||1 NÃO SAIRÁ DO LOOP
    pergunta = +prompt(
        `Você treinou o suficiente para atravessar todos os km's e desafios que estarão no seu caminho?   `,
    );
    if (pergunta != 1 && pergunta != 0) {
        console.log(
            `Responda com os dígitos númericos [1] ou [0]. Outra resposta não será aceita`,
        );
    }
    if (pergunta == 1) {//Caso a resposta seja 1=sim adicione 1 a variável/contador 
        sim++;
    }
} while (pergunta != 1 && pergunta != 0);

console.clear();

do {
    pergunta = +prompt(
        `Você estudou bastante toda a geografia, relevos e caminhos que irá enfrentar?  `,
    );
    if (pergunta != 1 && pergunta != 0) {
        console.log(
            `Responda com os dígitos númericos [1] ou [0]. Outra resposta não será aceita`,
        );
    }
    if (pergunta == 1) {
        sim++;
    }
} while (pergunta != 1 && pergunta != 0);

console.clear();

do {
    pergunta = +prompt(
        `Avisou a fámilia e amigos por todos os lugares por onde irá passar? `,
    );
    if (pergunta != 1 && pergunta != 0) {
        console.log(
            `Responda com os dígitos númericos [1] ou [0]. Outra resposta não será aceita`,
        );
    }
    if (pergunta == 1) {
        sim++;
    }
} while (pergunta != 1 && pergunta != 0);

console.clear();

do {
    pergunta = +prompt(
        `Preparou todo o equipamento necessário para a aventura?   `,
    );
    if (pergunta != 1 && pergunta != 0) {
        console.log(
            `Responda com os dígitos númericos [1] ou [0]. Outra resposta não será aceita`,
        );
    }
    if (pergunta == 1) {
        sim++;
    }
} while (pergunta != 1 && pergunta != 0);

console.clear();

do {
    pergunta = +prompt(`Está levando o kit de primeiros socorros?   `);
    if (pergunta != 1 && pergunta != 0) {
        console.log(
            `Responda com os dígitos númericos [1] ou [0]. Outra resposta não será aceita`,
        );
    }
    if (pergunta == 1) {
        sim++;
    }
} while (pergunta != 1 && pergunta != 0);

console.clear();

if (sim == 5) {
    //CONDICIONAIS, DE ACORDO COM A QUANTIDADE DO CONTADOR "SIM" IRÁ ENTRAR EM CADA CONDIÇÃO
    console.log(
        `Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.`,
    );
} else if (sim == 4) {
    console.log(
        `Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.`,
    );
} else if (sim == 3) {
    console.log(
        `Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.`,
    );
} else if (sim == 2 || sim == 1) {
    console.log(`Você falha, mas ainda consegue fugir da situação.`);
} else {
    console.log(`Você falha miseravelmente.`);
}
console.log(`\n\n`);