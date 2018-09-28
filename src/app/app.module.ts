import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule } from '@angular/material';
import { SoftwareComponentComponent } from './software-component/software-component.component';
import { HardwareComponentComponent } from './hardware-component/hardware-component.component';
import { ServicesComponentComponent } from './services-component/services-component.component';
import { MyDataComponentComponent } from './my-data-component/my-data-component.component';

const appRoutes: Routes=[
  {path: 'Software', component: SoftwareComponentComponent},
  {path: 'Hardware', component: HardwareComponentComponent},
  {path: 'Services', component: ServicesComponentComponent},
  {path: 'Meine-Daten', component: MyDataComponentComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    SoftwareComponentComponent,
    HardwareComponentComponent,
    ServicesComponentComponent,
    MyDataComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
