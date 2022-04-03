export const generateId = (): string => {
    const time = new Date().valueOf().toString(36);
    const rand = Math.random().toString(36).substring(2, 6);
    const rand2 = Math.random().toString(36).substring(2, 6);

    return rand + time + rand2;
}