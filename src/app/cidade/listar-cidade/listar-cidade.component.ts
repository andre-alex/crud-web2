import { Component, OnInit } from '@angular/core';
import { CidadeService } from '../services/cidade.service';
import { Cidade } from 'src/app/shared/models/cidade.model';

@Component({
  selector: 'app-listar-cidade',
  templateUrl: './listar-cidade.component.html',
  styleUrls: ['./listar-cidade.component.css']
})
export class ListarCidadeComponent implements OnInit{
  
  cidades : Cidade[] = [];
  
  ngOnInit(): void {
      this.cidades = this.listarTodos();
  }
  constructor(private cidadeService : CidadeService){}

  listarTodos() : Cidade[] {
    return this.cidadeService.listarTodos();
  }

  remover($event: any, cidade: Cidade): void {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover a cidade ${cidade.nome}?`)) {
      this.cidadeService.remover(cidade.id!);
      this.cidades = this.listarTodos();
    }
   }
}
