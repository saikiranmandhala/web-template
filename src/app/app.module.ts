import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import {
  InputTextareaModule, RadioButtonModule, InputSwitchModule, InputTextModule, ButtonModule, MenuModule, MenuItem, SplitButtonModule,
  CheckboxModule, AutoCompleteModule, DropdownModule, PasswordModule, MultiSelectModule, SpinnerModule, SliderModule,
  CalendarModule, ListboxModule, RatingModule, ChipsModule, EditorModule, SharedModule, SelectButtonModule, ToggleButtonModule
} from 'primeng/primeng';
import { AppTopbarComponent } from './app-topbar/app-topbar.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
// import { AppMenuComponent } from './my-menu/my-menu.component';
import { AppSubMenuComponent } from './app-sub-menu/app-sub-menu.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule,
    InputTextareaModule, RadioButtonModule, InputSwitchModule, InputTextModule, ButtonModule, MenuModule, SplitButtonModule,
    CheckboxModule, AutoCompleteModule, DropdownModule, PasswordModule, MultiSelectModule, SpinnerModule, SliderModule,
    CalendarModule, ListboxModule, RatingModule, ChipsModule, EditorModule, SharedModule, SelectButtonModule, ToggleButtonModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, AppTopbarComponent, AppMenuComponent, AppSubMenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
