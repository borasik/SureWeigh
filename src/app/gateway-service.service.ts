import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { ShipperModel } from './shipper-model'

@Injectable()
export class GatewayServiceService {

  constructor(private http: Http) { }

  private extractData(res: Response) {
    return res.json();
  }

  getShippers(): Observable<ShipperModel[]> {
    return this.http.get('http://ppswtest.azurewebsites.net/api/values').map(this.extractData);
  }
}