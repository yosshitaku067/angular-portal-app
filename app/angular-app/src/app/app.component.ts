import { Component } from '@angular/core';
import { ContentService } from './core/services/content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'portal-app';

  constructor(private contentService: ContentService) {
    this.contentService.fetch();
  }
}
