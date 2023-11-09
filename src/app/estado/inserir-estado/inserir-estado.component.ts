import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Estado } from 'src/app/shared/models/estado.model';
import { EstadoService } from '../services/estado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserir-estado',
  templateUrl: './inserir-estado.component.html',
  styleUrls: ['./inserir-estado.component.css']
})
export class InserirEstadoComponent implements OnInit{

    @ViewChild('formEstado') formEstado! : NgForm;
    estado! : Estado;

    ngOnInit(): void {
        this.estado = new Estado();
    }

    constructor(
      private estadoService : EstadoService,
      private router : Router
    ){}

    inserir() : void {
      if(this.formEstado.form.valid){
        this.estadoService.inserir(this.estado);
        this.router.navigate(['/estados'])
      }
    }
}
