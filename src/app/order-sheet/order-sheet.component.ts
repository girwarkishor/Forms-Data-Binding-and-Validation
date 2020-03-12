import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { CustomValidators } from '../custom-validators';

@Component({
  selector: 'app-order-sheet',
  templateUrl: './order-sheet.component.html',
  styleUrls: ['./order-sheet.component.css']
})
export class OrderSheetComponent implements OnInit {
  orderSheetForm: FormGroup;
  weirdRequestsControls: FormArray;
  showWelcomeMessage = false;l
  customerNameControl;

  constructor(private _formBuilder: FormBuilder) {
    this.buildForm();
   }

   ngOnInit() {
  }

   private buildForm(){
     this.orderSheetForm = this._formBuilder.group({
       customerName: this._formBuilder.control(null, [Validators.required, Validators.minLength(2)]),
       size: this._formBuilder.control(null),
       bread: this._formBuilder.control(null),
       specialtySandwich: this._formBuilder.control(null),
       weirdRequests: this._formBuilder.array([
         this._formBuilder.control(null)
       ]),
       otherNotes: this._formBuilder.control(null),
       meats: this._formBuilder.group({
         meatHam: this._formBuilder.control(null),
         meatTurkey: this._formBuilder.control(null),
         meatRoastBeef: this._formBuilder.control(null)
       }),
       cheeses: this._formBuilder.group({
         cheeseProvolone: this._formBuilder.control(null),
         cheeseCheddar: this._formBuilder.control(null),
         cheeseSwiss: this._formBuilder.control(null)
       }),
       veggiesAndSuch: this._formBuilder.group({
         veggieLettuce: this._formBuilder.control(null),
         veggieTomato: this._formBuilder.control(null),
         veggieMustard: this._formBuilder.control(null)
       })
     },{
       validator: CustomValidators.requiredWhen('bread', 'specialtySandwich')
     });
     this.weirdRequestsControls = this.orderSheetForm.get('weirdRequests') as FormArray;
     this.customerNameControl = this.orderSheetForm.get('customerName')
     this.customerNameControl.valueChanges
      .subscribe(value => {
        this.showWelcomeMessage = value && value.toLowerCase().trim() === 'justin s.';
      });
   }

   onAddWeirdRequest(){
     this.weirdRequestsControls.push(this._formBuilder.control(null));
   }

   onRemoveWeirdRequest(index){
     this.weirdRequestsControls.removeAt(index);
   }

   onResetForm(){
     this.orderSheetForm.reset();
   }

   onSubmitForm(){
     console.log(this.orderSheetForm.value);  
   }

}