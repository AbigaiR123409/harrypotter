import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpellsService {

  constructor(private http:HttpClient) { }

  getSpells(){
    return this.http.get('https://harry-potter-api.onrender.com/hechizos');
  }
}
