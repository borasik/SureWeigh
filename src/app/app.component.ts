import { Component, OnInit} from '@angular/core';

import { ShipperModel } from './shipper-model';
import { GatewayServiceService } from './gateway-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [GatewayServiceService],
  styleUrls: ['./app.component.css'] 
})

export class AppComponent implements OnInit {
  title = 'app';
  shippers: ShipperModel[];

  constructor(private service: GatewayServiceService) { }

  ngOnInit() {
    this.service.getShippers().subscribe(shippers => this.shippers = shippers, err => console.log("Getting Shippers Error: " + err));
  }

}
