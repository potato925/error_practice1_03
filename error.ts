function checkValue (value: number) {
    if (value == -1) {
        throw new Error (`値が-1なのでエラーです`);
    }
}

try {
    checkValue(-1);
} catch (error) {
    console.error(error.message);
}