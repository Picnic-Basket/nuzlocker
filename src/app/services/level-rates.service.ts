import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { DomainService } from './domain.service';

@Injectable()
export class LevelRatesService {

  constructor(
    private _domainService: DomainService,
    private _http: Http
  ) { }

  url = this._domainService._ip;

  getAll() {
    return this._http.get(this.url + 'level-rate')
      .map(res => res.json())
      .toPromise();
  }

}
