import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { StageComponent } from './stage/stage.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContactComponent } from './contact/contact.component';
import { ImageCarrouselComponent } from './image-carrousel/image-carrousel.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    StageComponent,
    HomeComponent,
    PortfolioComponent,
    AboutMeComponent,
    WelcomeComponent,
    ContactComponent,
    ImageCarrouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "stage", component: StageComponent },
      { path: "about-me", component: AboutMeComponent },
      { path: "portfolio", component: PortfolioComponent },
      { path: "contact", component: ContactComponent },
      { path: "**", redirectTo: "" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
