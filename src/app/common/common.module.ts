import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material';
//import { MatIconModule } from '@angular/material/icon';
import { TextBoxComponent } from './components/text-box/text-box.component';
import { LoginComponent } from './containers/login/login.component';
import { BasicButtonComponent } from './components/basic-button/basic-button.component';
import { RaisedButtonComponent } from './components/raised-button/raised-button.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatIconModule
  ],
  declarations: [TextBoxComponent, LoginComponent, BasicButtonComponent, RaisedButtonComponent],
  exports: [TextBoxComponent, BasicButtonComponent, RaisedButtonComponent, LoginComponent]
})
export class OurCommonModule { }
