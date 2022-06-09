import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChurchComponent } from './church/church.component';
import { DistrictComponent } from './district/district.component';
import { AreaComponent } from './area/area.component';
import { NationComponent } from './nation/nation.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FogotPasswordComponent } from './fogot-password/fogot-password.component';
import { AreaComponentComponent } from './area-component/area-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { DistrictsComponent } from './districts/districts.component';
import { MailboxComponent } from './mailbox/mailbox.component';
import { CalenderComponent } from './calender/calender.component';
import { ChurchMemberComponent } from './church-member/church-member.component';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import { RecoveryPasswordComponent } from './recovery-password/recovery-password.component';
import { AuthHeaderComponent } from './auth-header/auth-header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuTopComponent } from './menu-top/menu-top.component';
import { HomeComponent } from './home/home.component';
import { PageTitleAndUrlComponent } from './page-title-and-url/page-title-and-url.component';
import { RigthsideComponent } from './rigthside/rigthside.component';
import { NewsComponent } from './news/news.component';
import { MessagesComponent } from './messages/messages.component';

const ROUTES: Routes = [
  
  {path: '', component:HomeComponent},
  {path:'login', component:LoginComponent},
  
  {path:'register', component:RegisterComponent},

  {path: 'me', component:ProfileComponent , pathMatch: 'full'},
  {path: 'forgot-password', component:FogotPasswordComponent},
  {path: 'recoverypassword', component:RecoveryPasswordComponent},
  {path: 'members', component:ChurchMemberComponent,pathMatch:'full'},
  {path: '**', component: NotFoundComponent},
];

const isAuth: boolean =false;

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
