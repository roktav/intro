function sum(a, b) {
    // Memeriksa apakah a dan b adalah angka
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both arguments must be numbers');
    }
    return a + b;
}

module.exports = sum;