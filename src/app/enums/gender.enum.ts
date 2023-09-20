export enum GenreEnum {
    SERTANEJO = 1,
    ROCK = 2,
    GOSPEL = 3,
    POP_ROCK = 4,
    MBP = 5,
    POP = 6,
    REGGAE = 7,
    PAGODE = 8,
    HEAVY_METAL = 9,
    ALTERNATIVO = 10,
}

export const GenreMap: Record<GenreEnum, string> = {
    [GenreEnum.SERTANEJO]: "Sertanejo",
    [GenreEnum.ROCK]: "Rock",
    [GenreEnum.GOSPEL]: "Gospel",
    [GenreEnum.POP_ROCK]: "Pop Rock",
    [GenreEnum.MBP]: "MBP",
    [GenreEnum.POP]: "Pop",
    [GenreEnum.REGGAE]: "Reggae",
    [GenreEnum.PAGODE]: "Pagode",
    [GenreEnum.HEAVY_METAL]: "Heavy Metal",
    [GenreEnum.ALTERNATIVO]: "Alternativo",
};
