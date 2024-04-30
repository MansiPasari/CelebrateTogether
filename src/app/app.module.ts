import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ServicesComponent } from './services/services.component';
// import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms'; 
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { EventComponent } from './event/event.component';
import { EventBookingComponent } from './event-booking/event-booking.component';


const appRoute:Routes=[
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {path:'gallery',component:GalleryComponent},
  {path:'event',component:EventComponent},
  {path:'event-booking',component:EventBookingComponent},
  {path:'testimonials',component:TestimonialsComponent},
  {path:'contact',component:ContactComponent},
  {path:'footer',component:FooterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    TestimonialsComponent,
    GalleryComponent,
    ServicesComponent,
    ContactComponent,
    EventComponent,
    EventBookingComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
