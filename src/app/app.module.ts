import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { ListsComponent } from './components/lists/lists.component';
import { ListsDetailsComponent } from './components/lists-details/lists-details.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const appRoutes: Routes = [
  {path: '', component: ListsComponent},
  {path: 'about', component: AboutComponent },
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
    SidebarComponent
  ],
  imports: [
    BrowserModule,
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
