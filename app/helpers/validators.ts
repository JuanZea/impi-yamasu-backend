export const validatePlayer = (nick): string => nick;

export const validateId = (id): number => {
    const parsed = parseInt(id);
    if (parsed) return parsed;
};
