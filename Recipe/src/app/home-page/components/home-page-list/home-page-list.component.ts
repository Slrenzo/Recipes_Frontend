import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../models/home-page.model";

@Component({
  selector: 'app-home-page-list',
  templateUrl: './home-page-list.component.html',
  styleUrls: ['./home-page-list.component.scss']
})
export class HomePageListComponent implements OnInit {

  @Input() recipes: Recipe[] = [];

  constructor() { }

  ngOnInit(): void { }

}
