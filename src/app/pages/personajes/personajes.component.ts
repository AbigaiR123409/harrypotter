import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';

@Component({
  selector: 'app-personajes',
  imports: [],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent implements OnInit {

  data:any[] = [];
  constructor(private personajesService:PersonajesService){}
  ngOnInit(): void {
    this.personajesService.getPersonajes().subscribe((personajes:any['']) =>{
      this.data = personajes;
    })
  }
}
