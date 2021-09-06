import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import{HeaderComponent} from "./Header/Header.component";
import { FooterComponent } from './footer/footer.component';
import {NodeComponent} from './node/node.component';
import { NavBarComponent } from './NavBar/navbar.component';
import { AppendTEPipe } from './custom/append.pipe';
import { NewMSPipe } from './pipe/new.pipe';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './Contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { FeedbackComponent } from './feedback/feedback.component';
import { StudentComponent } from './Student/student.component';
import { StudentService } from './services/student.service';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { CreatestudentComponent } from './createstudent/createstudent.component';
import { ChildComponent } from './child/child.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { CommonInterceptor } from './services1/common.inceptor';
import { AuthGuard } from './auth.guard';
import { ColorDirective } from './custom/color.directive';

const routes =[
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'student',component:StudentComponent,canActivate:[AuthGuard]},
  {path:'createstudent',component:CreatestudentComponent},
  {path:'Login',component:LoginFormComponent},
  {path:'**',component:ErrorComponent} 
]

@NgModule({
  declarations: [
    AppComponent,HeaderComponent,FooterComponent,NodeComponent,NavBarComponent,AppendTEPipe,NewMSPipe, HomeComponent,ContactComponent, AboutComponent, ErrorComponent, FeedbackComponent, StudentComponent, CreatestudentComponent, ChildComponent, ProductComponent, SearchComponent, LoginFormComponent,ColorDirective
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),ReactiveFormsModule,FormsModule,HttpClientModule
  ],
  providers: [StudentService, { provide: HTTP_INTERCEPTORS, useClass: CommonInterceptor, multi: true },AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
