import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChurchComponent } from './church/church.component';
import { DistrictComponent } from './district/district.component';
import { AreaComponent } from './area/area.component';
import { NationComponent } from './nation/nation.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FogotPasswordComponent } from './fogot-password/fogot-password.component';
import { AreaComponentComponent } from './area-component/area-component.component';
import { RouterModule, Routes } from '@angular/router';
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


const ROUTES: Routes = [
  {path: '', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'me', component:ProfileComponent},
  {path: 'forgot-password', component:FogotPasswordComponent},
  {path: 'recoverypassword', component:RecoveryPasswordComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ChurchComponent,
    DistrictComponent,
    AreaComponent,
    NationComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    FogotPasswordComponent,
    AreaComponentComponent,
    NotFoundComponent,
    ProfileComponent,
    DistrictsComponent,
    MailboxComponent,
    CalenderComponent,
    ChurchMemberComponent,
    RecoveryPasswordComponent,
    AuthHeaderComponent,
    SideBarComponent,
    HeaderComponent,
    FooterComponent,
    MenuTopComponent,
    HomeComponent,
    PageTitleAndUrlComponent,
    RigthsideComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
