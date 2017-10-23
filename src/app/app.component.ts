import { Component, OnInit } from '@angular/core';

import { ShipperModel } from './shipper-model';
import { GatewayServiceService } from './gateway-service.service';

import { NgStyle } from '@angular/common';

import { IMyDpOptions } from 'mydatepicker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [GatewayServiceService],
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app';
  private placeholder: string = "Today: " + new Date().toLocaleDateString() + ".  Please Select a Date" 

  myDatePickerOptions: IMyDpOptions = {
    todayBtnTxt: 'Today',
    dateFormat: 'yyyy-mm-dd',
    firstDayOfWeek: 'mo',
    sunHighlight: false,
    inline: false,
    disableUntil: { year: 2016, month: 8, day: 10 },
    width: '80%',
    selectionTxtFontSize: '1.5em'
  };

  // Initialized to specific date (09.10.2018).
  public model: any = { date: { year: 2018, month: 10, day: 9 } };

  shippers: ShipperModel[];
  // shippers = [
  //   {
  //     "Shipper": "Bob Smith",
  //     "BOL": "1234-452-223",
  //     "Phone": "(555)555-1234",
  //     "Email": "bob@email.com",
  //     "Driver": "Joe West",
  //     "DriverPhone": "(555)555-0101",
  //     "Status": "Non-Complient"
  //   },
  //   {
  //     "Shipper": "Anita Hill",
  //     "BOL": "1234-333-432",
  //     "Phone": "(555) 555-4321",
  //     "Email": "anita@hill.com",
  //     "Driver": "Jose Gonzales",
  //     "DriverPhone": "(555) 555-0002",
  //     "Status": "In Progress"
  //   },
  //   {
  //     "Shipper": "Darrell Johnson",
  //     "BOL": "4321-452-111",
  //     "Phone": "(555) 555-5555",
  //     "Email": "dj@email.com",
  //     "Driver": "Jen Preston",
  //     "DriverPhone": "(555) 555-4004",
  //     "Status": "In Progress"
  //   },
  //   {
  //     "Shipper": "John Smith",
  //     "BOL": "1234-452-224",
  //     "Phone": " (555) 555-5678",
  //     "Email": "john@email.com",
  //     "Driver": "Greg West",
  //     "DriverPhone": "(555)555-0101",
  //     "Status": "In progress"
  //   },
  //   {
  //     "Shipper": "Fred Mitchell",
  //     "BOL": "4444-555-111",
  //     "Phone": "(555) 555-0011",
  //     "Email": "fmitchell@email.com",
  //     "Driver": "Don Driver",
  //     "DriverPhone": "(555) 555-4132",
  //     "Status": "Pending"
  //   },
  //   {
  //     "Shipper": "Phil Parson",
  //     "BOL": "0101-232-323",
  //     "Phone": "(555) 555-2222",
  //     "Email": "phil@parson.com",
  //     "Driver": "Billy Bob",
  //     "DriverPhone": "(555) 555-9999",
  //     "Status": "Pending"
  //   },
  //   {
  //     "Shipper": "Brianna MacKenzie",
  //     "BOL": "3333-222-123",
  //     "Phone": "(555) 555-4233",
  //     "Email": "bmac@email.com",
  //     "Driver": "Tim East",
  //     "DriverPhone": "(555) 555-1212",
  //     "Status": "Pending"
  //   },
  //   {
  //     "Shipper": "Carl Jennings",
  //     "BOL": "1234-567-890",
  //     "Phone": "(555) 555-2002",
  //     "Email": "cj@email.com",
  //     "Driver": "Eduardo Rodriquez",
  //     "DriverPhone": "(555)555-8141",
  //     "Status": "Assured"
  //   },
  //   {
  //     "Shipper": "Joanne James",
  //     "BOL": "0987-654-321",
  //     "Phone": "(555)555-6543",
  //     "Email": "jojam@email.com",
  //     "Driver": "Flynn Jordon",
  //     "DriverPhone": "(555)555-7890",
  //     "Status": "Assured"
  //   },
  //   {
  //     "Shipper": "Jennifer Terry",
  //     "BOL": "1424-542-934",
  //     "Phone": "(555)555-5454",
  //     "Email": "j.terry@email.com",
  //     "Driver": "Sam Thompson",
  //     "DriverPhone": "(555)555-8543",
  //     "Status": "Assured"
  //   },
  //   {
  //     "Shipper": "Nick Turner",
  //     "BOL": "2222-111-999",
  //     "Phone": "(555) 555-9203",
  //     "Email": "nick@turner.com",
  //     "Driver": "Susan Harrison",
  //     "DriverPhone": "(555)555-6832",
  //     "Status": "Assured"
  //   },
  //   {
  //     "Shipper": "Austin Wilson",
  //     "BOL": "9540-432-205",
  //     "Phone": "(555)555-1235",
  //     "Email": "a.wilson@email.com",
  //     "Driver": "Wayne Nelson",
  //     "DriverPhone": "(555)555-0151",
  //     "Status": "Assured"
  //   }
  // ]

  constructor(private service: GatewayServiceService) { }


  getBackGroundColor(status) {
    switch (status.toUpperCase()) {
      case "Non-Complient".toUpperCase():
        return '#E74C3C';
      case "In Progress".toUpperCase():
        return '#3498DB';
      case "Pending".toUpperCase():
        return '#154360';
      case "Assured".toUpperCase():
        return '#58D68D';
    }
  }
  ngOnInit() {
    this.service.getShippers().subscribe(shippers => this.shippers = shippers, err => console.log("Getting Shippers Error: " + err));
  }

}
