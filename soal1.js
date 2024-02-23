const moduleSoal1 = require("./moduleSoal1.js");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan sisi persegi: ", (sideA) => {
  var sideA = parseInt(sideA);
  console.info(`Luas persegi jika sisinya ${sideA} adalah ${moduleSoal1.area(sideA, sideA)}`);
  console.info(`Keliling persegi jika sisinya ${sideA} adalah ${moduleSoal1.perimeter(sideA,sideA)}`);

  console.info("================================================================================");

  rl.question("Masukkan panjang persegi panjang: ", (sideA) => {
    var sideA = parseInt(sideA);
    rl.question("Masukkan lebar persegi panjang: ", (sideB) => {
      var sideB = parseInt(sideB);
      console.info(`Luas persegi panjang jika panjang ${sideA} dan lebar ${sideB} adalah ${moduleSoal1.area(sideA,sideB)}`);
      console.info(`Keliling persegi panjang jika panjang ${sideA} dan lebar ${sideB} adalah ${moduleSoal1.perimeter(sideA,sideB)}`);
      rl.close();
    });
  });  
});