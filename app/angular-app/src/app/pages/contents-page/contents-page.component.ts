import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ContentService } from '../../core/services/content.service';
import { ContentKind } from '../../interfaces/content';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-contents-page',
  templateUrl: './contents-page.component.html',
  styleUrls: ['./contents-page.component.scss'],
})
export class ContentsComponent implements OnInit {
  contentKind: ContentKind;

  constructor(
    @Inject(DOCUMENT) private document: HTMLDocument,
    private route: ActivatedRoute,
    private contentService: ContentService
  ) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      this.contentService.getContentKindById(id).then((contentKind) => {
        this.contentKind = contentKind;
        this.document.body.style.backgroundColor = this.contentKind.colorSet.primary.color;
        console.log(this.document.body.style.backgroundColor);
      });
    });
  }

  ngOnInit(): void {}

  backgroundImage() {
    return `background: #ddd url(${this.contentKind.imageUrl}) 50% 50% no-repeat`;
  }
}
