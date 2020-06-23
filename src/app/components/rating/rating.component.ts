import {Component, Input} from '@angular/core';

@Component({
  selector: 'ca-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  private _stars: boolean[] = Array(5).fill(false);
  private _rating: number;

  @Input() set rating(rating: number) {
    this._rating = rating;
    this._stars = this._stars.map((_, i) => rating > i);
  }

  get rating(): number {
    return this._rating;
  }

  get stars(): boolean[] {
    return this._stars;
  }

  constructor() {}
}
