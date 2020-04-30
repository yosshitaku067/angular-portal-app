import { Component, OnInit, Inject } from '@angular/core';
import { ContentService } from '../../core/services/content.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.scss']
})
export class TopPageComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: HTMLDocument, public contentService: ContentService) {}

  ngOnInit(): void {
    this.document.body.style.backgroundColor = '';
  }

}
