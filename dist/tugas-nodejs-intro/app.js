const sum = require('./sum');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askForNumbers() {
    rl.question('Masukkan angka pertama: ', (firstInput) => {
        rl.question('Masukkan angka kedua: ', (secondInput) => {
            const firstNumber = parseFloat(firstInput);
            const secondNumber = parseFloat(secondInput);

            try {
                const result = sum(firstNumber, secondNumber);
                console.log('Hasil penjumlahan:', result);
            } catch (error) {
                console.error('Error:', error.message);
            } finally {
                rl.close();
            }
        });
    });
}

askForNumbers();