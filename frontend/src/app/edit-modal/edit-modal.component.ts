import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-edit-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-modal.component.html',
  styleUrl: './edit-modal.component.css'
})
export class EditModalComponent {

  constructor(private http : HttpClient) {}

  @Input() description : string = '';
  @Input() amount : number = 0;
  @Input() showModal : boolean = true;
  @Input() id : number = 0;

  @Output() hideModalEvent = new EventEmitter<boolean>();

  hideModal() {
    this.hideModalEvent.emit(true);
  }

  descriptionModelVal : string = '';
  amountModelVal : number = 0;

  saveChanges(){
    /*this.http.put(`http://localhost:8080/api/v1/expenses`, {id: this.id, amount: this.amountVal.nativeElement.value, 
      description: this.descriptionVal.nativeElement.value, type: "EXP"}).pipe(
        switchMap(() => {
          return this.http.get("http://localhost:8080/api/v1/expenses").pipe(map(response => {
            console.log(response);
            return response;
          }));
       }
      )).subscribe(response => console.log(response))*/

      console.log(this.descriptionModelVal)
      console.log(this.amountModelVal)
  }

}
