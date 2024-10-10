import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-edit-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-modal.component.html',
  styleUrl: './edit-modal.component.css'
})
export class EditModalComponent{

  constructor(private http : HttpClient) {

    console.log("------------------")
      console.log(this.selectedType)
  }

  

  @Input() description : string = '';
  @Input() amount : number = 0;
  @Input() showModal : boolean = true;
  @Input() id : number = 0;
  @Input() selectedType : string = 'NNN';



  @Output() hideModalEvent = new EventEmitter<boolean>();

  hideModal() {
    this.hideModalEvent.emit(true);
  }


  amountHasErrors : boolean = false;
  descriptionHasErrors : boolean = false;

  updateDescriptionModelField(e:any) {
    this.description = e.target.value;
  }

  saveChanges(){
    this.amountHasErrors = false;
    this.descriptionHasErrors = false;


    if(this.amount == 0 || this.amount == null){
      this.amountHasErrors = true;
    }

    if(this.description == '' || this.description == null){
      this.descriptionHasErrors = true;
    }


    if(!this.amountHasErrors && !this.descriptionHasErrors){
      this.http.put(`http://localhost:8080/api/v1/expenses`, {id: this.id, amount: this.amount,
        description: this.description, type: this.selectedType}).subscribe(() => this.hideModalEvent.emit(false));
    }
  }

  updateSelectedType(e : any){
    this.selectedType = e.target.value
  }

}
