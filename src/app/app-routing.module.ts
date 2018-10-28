import { PostpresentationComponent } from './postpresentation/postpresentation.component';
import { SearchComponent } from './search/search.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ProfileComponent } from './profile/profile.component';
import { PresentationComponent } from './presentation/presentation.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ScoreComponent } from './score/score.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {path: 'landingpage', component:LandingpageComponent},
  {path: 'home', component:HomeComponent},
  {path: 'profile', component:ProfileComponent},
  {path: '', component:LandingpageComponent},
  {path: 'search', component:SearchComponent},
  {path: 'postpresentation', component:PostpresentationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
