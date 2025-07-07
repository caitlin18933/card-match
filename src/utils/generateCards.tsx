export const generateCards = (numPairs: number) => {
    const newCards: string[] = [];
    for (let i = 1; i <= numPairs; i++) {
        newCards.push(`${i}-A`);
        newCards.push(`${i}-B`);
    }
    return newCards.sort(() => Math.random() - 0.5);
};