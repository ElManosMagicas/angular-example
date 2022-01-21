import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginBoxComponent } from './components/login-box/login-box.component';
import { TitleComponent } from './components/title/title.component';
import { FormComponent } from './components/form/form.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { InputPasswordComponent } from './components/input-password/input-password.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginBoxComponent,
    TitleComponent,
    FormComponent,
    SocialMediaComponent,
    InputTextComponent,
    InputPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
