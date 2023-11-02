export interface ICharacter {
    image: string;
    name: string;
    sanity: string;
    state: boolean;
    age: number | null;
    relatives: string;
}

export interface IUserCharacter extends ICharacter {
    objects: string[];
    acquaintances: string[];
}