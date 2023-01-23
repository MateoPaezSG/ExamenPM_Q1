import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() nombre:any="";
  @Input() apellido:any="";
  @Input() direccion:any="";
  @Input() numero:any="";
  @Input() edad:any="";

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  almacenar(){
    this.nombre.localStorage.setItem("1")
    this.apellido.localStorage.setItem("2")
    this.direccion.localStorage.setItem("3")
    this.numero.localStorage.setItem("4")
    this.edad.localStorage.setItem("5")
  }

}
