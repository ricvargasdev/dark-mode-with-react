export const types = {
    DARK_MODE: 'DARK_MODE',
};

export function setDarkMode(darkMode) {
    return { type: types.DARK_MODE, darkMode };
};
