import { Component, OnInit } from '@angular/core';
import { DomainService } from '../../services/domain.service';
import { TypesService } from '../../services/types.service';
import { LevelRatesService } from '../../services/level-rates.service';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.css'],
  providers: [TypesService, LevelRatesService, DomainService]
})
export class AddPokemonComponent implements OnInit {
  levelRates : any[];
  types : any[];

  constructor(
    private _levelRatesService : LevelRatesService,
    private _typesService : TypesService
  ) { }

  ngOnInit() {
    this._levelRatesService.getAll().then(res => {
      this.levelRates = res;
    })
    this._typesService.getAll().then(res => {
      this.types = res;
    })
  }

}
