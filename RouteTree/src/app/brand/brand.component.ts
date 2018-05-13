import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  title = "Brand";
  route: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this._route.parent.params.subscribe(params => console.log(`The Parent params: ${params}`));
    this._route.params.subscribe((params: Params) =>{
      console.log(params['brand']);
      this.route = params['brand'];
    });
  }

}
