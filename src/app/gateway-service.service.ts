import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers} from '@angular/http';
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
    let headers = new Headers(
      {
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Headers': '*'
       }
    );
    let options = new RequestOptions({ headers: headers });

    return this.http.get('http://ppswtest.azurewebsites.net/api/values', options).map(this.extractData);
  }
}