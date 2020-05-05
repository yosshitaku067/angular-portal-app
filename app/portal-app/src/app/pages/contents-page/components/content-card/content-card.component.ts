import { Component, OnInit, Input } from '@angular/core';
import { Content } from 'src/app/interfaces/content';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss', '../../../../core/shared/styles/card.scss'],
})
export class ContentCardComponent implements OnInit {
  @Input() content: Content;
  @Input() colorSet = {
    color: '',
    primaryShadow: {
      primary: '',
      second: '',
    },
    secondaryShadow: {
      primary: '',
      second: '',
    },
  };
  mouseover = false;
  isClicked = false;

  constructor() {}

  ngOnInit(): void {}

  plainBoxShadow() {
    return `5px 5px 10px ${this.colorSet.primaryShadow.primary}, -5px -5px 10px ${this.colorSet.primaryShadow.second}`;
  }

  boxShadow() {
    if (this.isClicked) {
      return `inset 5px 5px 10px ${this.colorSet.primaryShadow.primary}, inset -5px -5px 10px ${this.colorSet.primaryShadow.second}`;
    } else {
      if (this.mouseover) {
        return `5px 5px 10px ${this.colorSet.secondaryShadow.primary}, -5px -5px 10px ${this.colorSet.secondaryShadow.second}`;
      } else {
        return this.plainBoxShadow();
      }
    }
  }

  onClick() {
    window.open(this.content.url, '_blank');
  }

  src(image: string) {
    return environment.imageBase + image;
  }

}
