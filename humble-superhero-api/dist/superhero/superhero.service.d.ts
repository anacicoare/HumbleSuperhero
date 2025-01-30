import { CreateSuperheroDto } from './superhero.dto';
export interface Superhero {
    name: string;
    superpower: string;
    humilityScore: number;
}
export declare class SuperheroService {
    private superheroes;
    addSuperhero(superhero: CreateSuperheroDto): void;
    getSuperheroes(): Superhero[];
}
