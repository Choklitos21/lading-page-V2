import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetingComponent } from './greeting/greeting.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyContactComponent } from './my-contact/my-contact.component';
import { PrincipalComponent } from './principal/principal.component';
import { SkillsComponent } from './skills/skills.component';



@NgModule({
  declarations: [
    GreetingComponent,
    AboutMeComponent,
    MyContactComponent,
    PrincipalComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PrincipalComponent
  ]
})
export class HomeModule { }
