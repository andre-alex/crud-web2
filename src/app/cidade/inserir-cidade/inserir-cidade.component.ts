import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cidade } from 'src/app/shared/models/cidade.model';
import { CidadeService } from '../services/cidade.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserir-cidade',
  templateUrl: './inserir-cidade.component.html',
  styleUrls: ['./inserir-cidade.component.css']
})
export class InserirCidadeComponent implements OnInit{

    @ViewChild('formCidade') formCidade! : NgForm;
    cidade! : Cidade;

    ngOnInit(): void {
        this.cidade = new Cidade();
    }
    constructor(
      private cidadeService : CidadeService,
      private router: Router
    ) {}

    inserir() : void {
      if(this.formCidade.form.valid){
        this.cidadeService.inserir(this.cidade);
        this.router.navigate(["/cidades"]);
      }
    }

}
