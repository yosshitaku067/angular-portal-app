import { Injectable } from '@angular/core';
import { ContentKind } from '../../interfaces/content';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  contentKinds: ContentKind[] = [
    {
      nextPage: 'contents',
      description: 'Testing Tools',
      imageUrl: '/assets/imgs/image.jpg',
      color: '#EB5160',
      id: 'test',
      contents: [{
        title: 'Tool A',
        url: '',
        description: 'Testing Tool for A Application. That\'s a great tool to save time. It\'s very easy to use and makes your job a lot easier.',
        imageUrl: '/assets/imgs/image.jpg',
        id: ''
      }, {
        title: 'Tool B',
        url: '',
        description: 'Testing Tool for B Application. That\'s a great tool to save time. It\'s very easy to use and makes your job a lot easier.',
        imageUrl: '/assets/imgs/image.jpg',
        id: ''
      }, {
        title: 'Tool C',
        url: '',
        description: 'Testing Tool for C Application. That\'s a great tool to save time. It\'s very easy to use and makes your job a lot easier.',
        imageUrl: '/assets/imgs/image.jpg',
        id: ''
      }, {
        title: 'Tool D',
        url: '',
        description: 'Testing Tool for D Application. That\'s a great tool to save time. It\'s very easy to use and makes your job a lot easier.',
        imageUrl: '/assets/imgs/image.jpg',
        id: ''
      }]
    },
    {
      nextPage: 'contents',
      description: 'Visualization Tools',
      imageUrl: '/assets/imgs/image.jpg',
      color: '#8F3985',
      id: 'viz',
      contents: []
    }
  ];

  constructor() { }

  getContentKindById(id: string) {
    const content = this.contentKinds.filter(c => c.id === id);
    if (!content || content.length !== 1) {
      window.alert('error');
      return;
    }

    return content[0];
  }
}
