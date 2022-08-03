import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailModule } from 'src/app/shared/components/detail/detail.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatDialogModule,
    DetailModule
  ]
})
export class HomeModule { }
