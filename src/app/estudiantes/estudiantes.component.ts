import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../estudiante';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
  estudiantes:Estudiante[] = [
    { nombre:'Susana', apellido :"Mercolan", genero: "Mujer"},
    { nombre:'Juan', apellido :"Albrecht", genero: "Hombre"}
  ]

  constructor() {

  }

  ngOnInit() {
  }

}
