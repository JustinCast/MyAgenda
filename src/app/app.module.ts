import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { AppComponent } from './app.component';
// Manual Imports
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import { MatSidenavModule } from "@angular/material";
import { RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import {SuiModule} from 'ng2-semantic-ui';
import { ROUTES } from './app.routing';
import { NotesComponent } from './notes/notes.component';
import { ErrorHandleComponent } from './error-handle/error-handle.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotesComponent,
    ErrorHandleComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    SuiModule,
    RouterModule.forRoot(ROUTES)
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
