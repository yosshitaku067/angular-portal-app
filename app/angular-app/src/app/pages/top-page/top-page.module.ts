import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopPageComponent } from './top-page.component';
import { ContentKindCardComponent } from './components/content-kind-card/content-kind-card.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [TopPageComponent, ContentKindCardComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
  ],
  exports: [
    TopPageComponent
  ]
})
export class TopPageModule { }
