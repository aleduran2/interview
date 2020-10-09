import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  score : number = 0;
  displayRatingScore = 4;
  constructor() { }

	ngOnInit(){
	}

  onRateChange = (score) => {
    this.score = score;
  }
}
