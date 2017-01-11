import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { DomainService } from './domain.service';

@Injectable()
export class TypesService {

  constructor(
    private _domainService: DomainService,
    private _http: Http
  ) { }

  url = this._domainService._ip;

  getAll() {
    return this._http.get(this.url + 'types')
      .map(res => res.json())
      .toPromise();
  }

}
