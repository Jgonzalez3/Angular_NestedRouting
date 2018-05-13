import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  title = "Product Detail";
  route: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.parent.params.subscribe(params => console.log(`The Parent params: ${params}`));
    this._route.params.subscribe((params: Params) =>{
      console.log(params['id']);
      this.route = params["id"];
    });
  }

}
