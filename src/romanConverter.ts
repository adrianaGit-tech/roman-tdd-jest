const ROMAN_VALUES: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

export function convertRoman(roman: string): number {
    if (!roman || typeof roman !== 'string') {
        throw new Error('Roman numeral must be a non-empty string');
    }

    roman = roman.toUpperCase();
    let total = 0;

    for (let i = 0; i < roman.length; i++) {
        const currentSymbol = roman[i];          // string
        const nextSymbol = roman[i + 1];         // string | undefined

        const current = ROMAN_VALUES[currentSymbol];
        const next = nextSymbol ? ROMAN_VALUES[nextSymbol] : undefined;

        if (!current) {
            throw new Error(`Invalid roman symbol: ${currentSymbol}`);
        }

        if (next && current < next) {
            total += next - current;
            i++; // saltamos el siguiente
        } else {
            total += current;
        }
    }

    return total;
}

export function convert_number(roman: string): string {
    return convertRoman(roman).toString();
}
