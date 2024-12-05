const fs = require('fs');

// Ganti 'file.txt' dengan nama file teks yang ingin Anda baca
fs.readFile('latihanNodeJS.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});