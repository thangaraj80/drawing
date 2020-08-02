import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { MatToolbarModule,
//   MatIconModule,
//   MatCardModule,
//   MatButtonModule,
//   MatProgressSpinnerModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SafePipe } from './safe.pipe';
import { WpComponent } from './wp/wp.component';

@NgModule({
  declarations: [
    AppComponent,
  
    SafePipe,
  
    WpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  //   MatToolbarModule,
  // MatIconModule,
  // MatCardModule,
  // MatButtonModule,
  // MatProgressSpinnerModule,
  BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
