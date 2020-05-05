import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, style, query, state, animate, keyframes, AnimationEvent } from '@angular/animations';
import { Router } from '@angular/router';
import { ContentKind } from '../../../../interfaces/content';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-content-kind-card',
  templateUrl: './content-kind-card.component.html',
  styleUrls: ['./content-kind-card.component.scss', '../../../../core/shared/styles/card.scss'],
  animations: [
    trigger('cardAnim', [
      transition('init => end', [
        animate(
          '800ms ease-in',
          keyframes([
            style({
              zIndex: 10,
              offset: 0,
            }),
            style({
              offset: 1,
              transform: `scaleX(7) scaleY(7) translate3d(0, 0, 10px)`,
            }),
          ])
        ),
      ]),
    ]),
    trigger('imageAnim', [
      state(
        'end',
        style({
          opacity: 0,
          transform: `translateY(-100px)`,
        })
      ),
      transition('init => end', [animate('400ms ease-in')]),
    ]),
    trigger('textAnim', [
      state(
        'end',
        style({
          opacity: 0,
          transform: `translateY(-100px)`,
        })
      ),
      transition('init => end', [animate('300ms ease-in')]),
    ]),
  ],
})
export class ContentKindCardComponent implements OnInit {
  @Input() contentKind: ContentKind;
  readonly initState = 'init';
  readonly endState = 'end';
  imageAnim = false;
  cardAnim = false;
  textAnim = false;
  mouseover = false;
  isClicked = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClickCard() {
    this.imageAnim = true;
  }

  animImageStart(ev: AnimationEvent) {
    console.log(ev);
    if (ev.fromState === 'init') {
      setTimeout(() => {
        this.cardAnim = true;
      }, 400);
      setTimeout(() => {
        this.textAnim = true;
      }, 100);
    }
  }

  animCardEnd(ev: AnimationEvent) {
    console.log(ev);
    if (ev.fromState === 'init') {
      this.router.navigate(['/', this.contentKind.nextPage, this.contentKind.id]);
    }
  }

  plainBoxShadow() {
    return `5px 5px 10px ${this.contentKind.colorSet.primary.primaryShadow.primary}, -5px -5px 10px ${this.contentKind.colorSet.primary.primaryShadow.second}`;
  }

  boxShadow() {
    if (this.isClicked) {
      return `inset 5px 5px 10px ${this.contentKind.colorSet.primary.primaryShadow.primary}, inset -5px -5px 10px ${this.contentKind.colorSet.primary.primaryShadow.second}`;
    } else {
      if (this.mouseover) {
        return `5px 5px 10px ${this.contentKind.colorSet.primary.secondaryShadow.primary}, -5px -5px 10px ${this.contentKind.colorSet.primary.secondaryShadow.second}`;
      } else {
        return this.plainBoxShadow();
      }
    }
  }

  src(image: string) {
    return environment.imageBase + image;
  }

}
