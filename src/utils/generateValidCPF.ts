export default function generateValidCPF() {
    const generateRandomDigits = (count: number) => Array.from({ length: count }, () => Math.floor(Math.random() * 10));

    const calculateDigit = (digits: number[]) => {
        const sum = digits.reduce((acc, num, index) => acc + num * (digits.length + 1 - index), 0);
        const remainder = (sum * 10) % 11;
        return remainder === 10 ? 0 : remainder;
    };

    const baseDigits = generateRandomDigits(9);
    const firstDigit = calculateDigit(baseDigits);
    const secondDigit = calculateDigit([...baseDigits, firstDigit]);

    return [...baseDigits, firstDigit, secondDigit].join('');
}