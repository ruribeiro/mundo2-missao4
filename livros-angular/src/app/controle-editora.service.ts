import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {

  private editoras: Array<Editora> = [
    {codEditora:1, nome:'Letras e Artes'},
    {codEditora:2, nome:'Central Gospel'},
    {codEditora:3, nome:'Benvirá'},
    { codEditora:4, nome:'quadrinhos na cia'},
    {codEditora:5, nome:'Disal'},
];

  constructor() {}

  getNomeEditora = (codEditora:number) => {
    const nomeEditora = this.editoras.filter(e => (e.codEditora === codEditora));
    return nomeEditora[0].nome
    //return 'ok'
  }

  getEditoras =() => {
    return this.editoras
        
  }
}