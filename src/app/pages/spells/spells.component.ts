import { Component, OnInit } from '@angular/core';
import { SpellsService } from '../../services/spells.service';

@Component({
  selector: 'app-spells',
  imports: [],
  templateUrl: './spells.component.html',
  styleUrl: './spells.component.css'
})
export class SpellsComponent implements OnInit {

  data:any[] = [];
  constructor(private spellsService:SpellsService){}
  ngOnInit(): void {
    this.spellsService.getSpells().subscribe((spells:any['']) => {
      this.data = spells;
    })
  }

}
