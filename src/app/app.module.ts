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
import { MessagesComponent } from './messages/messages.component';
import { UserComponent } from './user/user.component';
import { CommentsComponent } from './comments/comments.component';
import { UserProfilComponent } from './user-profil/user-profil.component';
import { CommentComponent } from './comment/comment.component';
import { PostComponent } from './post/post.component';
import { LikeBtnComponent } from './like-btn/like-btn.component';



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
    NewsComponent,
    MessagesComponent,
    UserComponent,
    CommentsComponent,
    UserProfilComponent,
    CommentComponent,
    PostComponent,
    LikeBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
