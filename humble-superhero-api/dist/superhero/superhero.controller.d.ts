import { SuperheroService } from './superhero.service';
import { CreateSuperheroDto } from './superhero.dto';
export declare class SuperheroController {
    private readonly superheroService;
    constructor(superheroService: SuperheroService);
    addSuperhero(createSuperheroDto: CreateSuperheroDto): {
        message: string;
    };
    getSuperheroes(): import("./superhero.service").Superhero[];
}
