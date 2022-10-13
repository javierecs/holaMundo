import { Component, OnInit } from '@angular/core';

class Alumno{
  nombre:string;
  apellido:string;
  excelencia:boolean

  constructor(nombre:string, apellido:string, excelencia:boolean){
    this.nombre = nombre
    this.apellido = apellido
    this.excelencia = excelencia
  }
}

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.scss']
})
export class EjemploComponent implements OnInit {
  nombre:string = '';
  apellido:string = '';
  excelencia:boolean = false;

  listadoAlumnos: Array<Alumno> = new Array<Alumno>;

  constructor() { }

  ngOnInit(): void {
  }

  agregarAlumno(){
    if(this.nombre === '' && this.apellido === ''){
      console.error('Valores no introducidos')
    } else {
      this.listadoAlumnos.push({
        nombre: this.nombre,
        apellido: this.apellido,
        excelencia: this.excelencia as boolean
      })
      console.log(this.listadoAlumnos)
      this.nombre = ''
      this.apellido = ''
      this.excelencia = false
    }
    
  }

}
