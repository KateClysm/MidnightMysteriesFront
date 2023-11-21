export interface ICharacter {
    id: string;
    image: string;
    phrase: string;
    name: string;
    sanity: string;
    state: boolean;
    age: number | null;
    ending: string;
}

export interface IUserCharacter extends ICharacter {
    objects: string[];
    acquaintances: string[];
}