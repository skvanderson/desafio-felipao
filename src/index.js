const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o nome do herói: ', (nomeHeroi) => {
  rl.question('Digite a quantidade de experiência do herói: ', (xp) => {
    xp = parseInt(xp);

    let nivel;
    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata Ouro";
    } else if (xp >= 6001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 5001 && xp <= 8000) {
        nivel = "Platina Diamante";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }
    console.log(`O Herói ${nomeHeroi} está no nível de ${nivel}`);

    rl.close();
  });
});
