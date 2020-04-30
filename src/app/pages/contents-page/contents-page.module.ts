import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentsComponent } from './contents-page.component';
import { ContentCardComponent } from './components/content-card/content-card.component';
import { FlexModule } from '@angular/flex-layout';



@NgModule({
  declarations: [ContentsComponent, ContentCardComponent],
  imports: [
    CommonModule,
    FlexModule
  ],
  exports: [
    ContentsComponent
  ]
})
export class ContentsPageModule { }
