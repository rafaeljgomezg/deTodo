

import { Component, inject, signal } from '@angular/core';

import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-app',
  standalone: true,
  imports: [
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    JsonPipe

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


  
  phonePatternPeru: string = '^(?:\\+?51)?[ -]?(?:1[ -]?)?(?:\\d{7,8}|\\d{9})$';


  form = signal<FormGroup>(
    new FormGroup(
      {
        empresa: new FormControl(''),
        tel: new FormControl('', Validators.pattern(this.phonePatternPeru)),
        email: new FormControl('', Validators.email),
        pagweb: new FormControl(''),
        actividad: new FormControl(''),
        lenguajes: new FormControl([]),
        numempleados: new FormControl(0),
      }
    )
  )

  private formBuilder:FormBuilder = inject(FormBuilder);
  private dialog = inject(MatDialog);



  constructor(){

  }

  ngOnInit(): void {
    
  }

  enviar() {
    console.log(this.form().value)
    }
}
