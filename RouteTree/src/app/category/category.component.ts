import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  title = "Category"
  route: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.parent.params.subscribe(params => console.log(`The Parent params: ${params}`));
    this._route.params.subscribe((params: Params) =>{
      console.log(params['cat']);
      this.route = params['cat'];
    })
  }

}
