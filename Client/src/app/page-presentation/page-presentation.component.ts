import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-presentation',
  templateUrl: './page-presentation.component.html',
  styleUrls: ['./page-presentation.component.css'],

})


export class PagePresentationComponent implements OnInit {

  clickMessage = '';
  onClickMe(): void {

    this.clickMessage = 'I learnt how to click';
  }
  constructor() { }

  ngOnInit() {
  }

}
