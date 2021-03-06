import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListsComponent } from './components/lists/lists.component';
import { ListsDetailsComponent } from './components/lists-details/lists-details.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { InternalCommsAppComponent } from './components/internal-comms-app/internal-comms-app.component';
import { GeneralWorkComponent } from './components/general-work/general-work.component';
import { OtherComponent } from './components/other/other.component';
import { componentFactoryName } from '@angular/compiler';

const appRoutes: Routes = [
  {path: '', component: ListsComponent},
  // {path: 'about', component: AboutComponent },
  // {path: 'internal', component: InternalCommsAppComponent},
  // {path: 'general', component: GeneralWorkComponent},
  // {path: 'other', component: OtherComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    // ComponentsComponent,
    ListsComponent,
    ListsDetailsComponent,
    HeaderComponent,
    ButtonComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent,
    SidebarComponent,
    InternalCommsAppComponent,
    GeneralWorkComponent,
    OtherComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    // AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
