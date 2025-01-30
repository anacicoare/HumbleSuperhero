import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateSuperheroDto } from './superhero.dto';

export interface Superhero {
  name: string;
  superpower: string;
  humilityScore: number;
}

@Injectable()
export class SuperheroService {
  private superheroes: Superhero[] = [];

  addSuperhero(superhero: CreateSuperheroDto) {
    this.superheroes.push(superhero);
  }

  getSuperheroes() {
    return this.superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
  }
}
