import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroController } from './superhero.controller';
import { SuperheroService } from './superhero.service';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { CreateSuperheroDto } from './superhero.dto';

describe('SuperheroController', () => {
  let controller: SuperheroController;
  let validationPipe: ValidationPipe;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuperheroController],
      providers: [SuperheroService],
    }).compile();

    controller = module.get<SuperheroController>(SuperheroController);

    // Initialize validation pipe for manual validation
    validationPipe = new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true });
  });

  async function validateAndCallAddSuperhero(data: any) {
    // Manually validate using the DTO class and pipe
    const validatedData = await validationPipe.transform(data, {
      type: 'body',
      metatype: CreateSuperheroDto,
    });
    controller.addSuperhero(validatedData);
  }

  it('should add and retrieve superheroes', async () => {
    await validateAndCallAddSuperhero({ name: 'Testman', superpower: 'Testing', humilityScore: 7 });
    const superheroes = controller.getSuperheroes();
    expect(superheroes.length).toBe(1);
    expect(superheroes[0].name).toBe('Testman');
  });

  it('should not allow humility score to be greater than 10', async () => {
    await expect(
      validateAndCallAddSuperhero({ name: 'Testman', superpower: 'Testing', humilityScore: 11 })
    ).rejects.toThrow(BadRequestException);

    const superheroes = controller.getSuperheroes();
    expect(superheroes.length).toBe(0);
  });

  it('should not allow humility score to be less than 0', async () => {
    await expect(
      validateAndCallAddSuperhero({ name: 'Testman', superpower: 'Testing', humilityScore: -1 })
    ).rejects.toThrow(BadRequestException);

    const superheroes = controller.getSuperheroes();
    expect(superheroes.length).toBe(0);
  });

  it('should add a valid superhero', async () => {
    await validateAndCallAddSuperhero({ name: 'Testman', superpower: 'Testing', humilityScore: 5 });
    const superheroes = controller.getSuperheroes();
    expect(superheroes.length).toBe(1);
    expect(superheroes[0].name).toBe('Testman');
  });
});
