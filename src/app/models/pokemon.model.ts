import { Sprite } from "./sprite.model";

export class Pokemon {
    id: number;
    name: string;
    sprites: Sprite;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}