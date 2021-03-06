import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  title = "Author";
  route: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.parent.params.subscribe((params) => console.log(params));
    this._route.params.subscribe((params: Params) =>{
      console.log(params['id']);
      this.route = params["id"];
    })
  }

}
