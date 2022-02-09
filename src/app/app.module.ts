import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { AppComponent } from './app.component';
import { HobbyCarouselComponent } from './hobby-carousel/hobby-carousel.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ConnectionService } from './connection.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HobbyCarouselComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCarouselModule.forRoot(),
    HttpClientModule,
  ],
  providers: [ConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
