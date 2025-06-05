let idCounter = 1;

export function getNextId(): number {
    return idCounter++;
}

export function resetIdCounter(): void {
    idCounter = 1;
}
