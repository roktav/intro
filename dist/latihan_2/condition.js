// condition.js

const readline = require('readline');

// Membuat antarmuka readline untuk input dari pengguna
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Program untuk menentukan genap atau ganjil
rl.question("Masukkan angka: ", (inputNumber) => {
    inputNumber = Number(inputNumber);

    if (isNaN(inputNumber)) {
        console.log("Input bukan angka.");
    } else {
        if (inputNumber % 2 === 0) {
            console.log(`${inputNumber} adalah angka genap.`);
        } else {
            console.log(`${inputNumber} adalah angka ganjil.`);
        }
    }

    // Program untuk mencetak nama hari berdasarkan nomor hari
    rl.question("Masukkan nomor hari (1-7): ", (dayNumber) => {
        dayNumber = Number(dayNumber);

        switch (dayNumber) {
            case 1:
                console.log("Senin");
                break;
            case 2:
                console.log("Selasa");
                break;
            case 3:
                console.log("Rabu");
                break;
            case 4:
                console.log("Kamis");
                break;
            case 5:
                console.log("Jumat");
                break;
            case 6:
                console.log("Sabtu");
                break;
            case 7:
                console.log("Minggu");
                break;
            default:
                console.log("Nomor hari tidak valid.");
        }

        // Menutup antarmuka readline
        rl.close();
    });
});
