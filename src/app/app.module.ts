import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './core/menu/menu/menu.component';
import { CoreComponent } from './core/core/core.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { GestionPageComponent } from './pages/gestion-page/gestion-page.component';
import { CardComponent } from './shared/components/card/card.component';
import { DatePipePipe } from './shared/pipes/date-pipe.pipe';
import { GalleryComponent } from './shared/components/gallery/gallery.component';
import { FormComponent } from './pages/gestion-page/form/form.component';
import { RatingModule } from 'primeng/rating';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CoreComponent,
    GalleryComponent,
    FooterComponent,
    CardComponent,
    HomePageComponent,
    ProductsPageComponent,
    GestionPageComponent,
    DatePipePipe,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
