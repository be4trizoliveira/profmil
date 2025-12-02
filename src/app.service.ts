import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  private materials = [
    { id: 1, materia: 'Matemática' },
    { id: 2, materia: 'História' },
    { id: 3, materia: 'História' }
  ];

  getMaterials(filtroMateria?: string) {

    if (!filtroMateria) {
      return this.materials;
    }

    return this.materials.filter(
      materiaInicial => materiaInicial.materia === filtroMateria
    );
  }
}
