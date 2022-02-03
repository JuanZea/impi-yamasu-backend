export const validatePlayerData = ({ name, password }): { name: string; password: string } => {
    if (name && password) return { name: name, password: password };
};

export const validateAuthorId = (id): number => {
    const parsed = parseInt(id);
    if (parsed) return parsed;
};
