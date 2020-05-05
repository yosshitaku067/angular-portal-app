import { Injectable } from '@angular/core';
import { ContentKind } from '../../interfaces/content';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  contentKinds: ContentKind[] = [];

  constructor(private http: HttpClient) {}

  async getContentKindById(id: string) {
    if (this.contentKinds.length === 0) {
      await this.fetch();
    }

    const content = this.contentKinds.filter((c) => c.id === id);
    if (!content || content.length !== 1) {
      window.alert('error');
      return;
    }

    return content[0];
  }

  fetch() {
    return new Promise((resolve) => {
      this.http
        .get<{ sites: ContentKind[] }>('/api/site-map', { responseType: 'json' })
        .pipe(map((res) => res.sites))
        .subscribe((contentKinds) => {
          this.contentKinds = contentKinds;
          resolve();
        });
    });
  }
}
