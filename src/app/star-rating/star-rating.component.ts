import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {
  @Input() score: number;
	@Input() maxScore = 5;

  @Output() rateChanged = new EventEmitter();

  range = [];
  marked = -1;

	constructor() { }

	ngOnInit() {
    for (var i = 0; i < this.maxScore; i++) {
      this.range.push(i);
    }
  }

  public mark = (index) => {
    this.marked = this.marked == index ? index - 1 : index;
    this.score = this.marked + 1;
    this.rateChanged.next(this.score);
  }

  public isMarked = (index: number) => {
    return (index <= this.marked) ? 'fas fa-star' : 'far fa-star';
  }
}
