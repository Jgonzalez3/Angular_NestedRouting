import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.css']
})
export class ReviewDetailComponent implements OnInit {
  title = "Review Details"
  route: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    //  read a parameter from the parent route
    this._route.parent.params.subscribe((params) => console.log(params));
    this._route.params.subscribe((params: Params) =>{
      console.log(params['id']);
      this.route = params["id"];
    })
  }

}
