import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BudgetService } from '../services/budget.service';
import { Item } from '../model/item';
import { EditModalComponent } from "../edit-modal/edit-modal.component";
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-budget',
  standalone: true,
  imports: [EditModalComponent, CurrencyPipe],
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.css'
})
export class BudgetComponent implements OnInit{

  items : Item[] = [];
  total : number = 0;
  @ViewChild('expenseDesc') expenseDesc!: ElementRef;
  @ViewChild('expenseType') expenseType!: ElementRef;
  @ViewChild('amount') amount!: ElementRef;

  constructor(private budgetService : BudgetService) {}

  

  ngOnInit(): void {
    this.budgetService.getItems().subscribe(response => {this.items = response.result;
      this.total = 0;
      this.items.forEach(item => {
        if(item.type == "EXP") {
          this.total -= item.amount;
        } else {
          this.total += item.amount;
        }
      })
    })
  }

  typeHasErrors : boolean = false;
  descHasErrors : boolean = false;
  

  handleSubmission() {
    this.typeHasErrors = false;
    this.descHasErrors = false;

    let hasErrors : boolean = false;

    if(this.amount.nativeElement.value == null || this.amount.nativeElement.value == '' || 
      this.expenseDesc.nativeElement.value == null || this.expenseDesc.nativeElement.value == ''){
        hasErrors = true;
      }

    if(!hasErrors) {
      this.budgetService.createItem(new Item(0, this.expenseDesc.nativeElement.value, this.expenseType.nativeElement.value, this.amount.nativeElement.value))
    .subscribe(response => {
      this.items = response.result;
      this.total = 0;
      this.items.forEach(item => {
        if(item.type == "EXP") {
          this.total -= item.amount;
        } else {
          this.total += item.amount;
        }

        this.amount.nativeElement.value = '';
        this.expenseDesc.nativeElement.value = '';
      })

    })
    } else {
      if(this.amount.nativeElement.value == null || this.amount.nativeElement.value == ''){
        this.typeHasErrors = true;
      } 

      if(this.expenseDesc.nativeElement.value == null || this.expenseDesc.nativeElement.value == ''){
        this.descHasErrors = true;
      }
    }
  }

  deleteRecord(id: number) {
    this.budgetService.deleteItem(id)
    .subscribe(response => {
      this.items = response.result;
      this.total = 0;
      this.items.forEach(item => {
        if(item.type == "EXP") {
          this.total -= item.amount;
        } else {
          this.total += item.amount;
        }
      })

    })
    }

    modalDescriptionField : string = '';
    modalAmountField : number = 0;
    modalIdField : number = 0;
    modalSelectedTypeField : string = '';
    hideEditModal : boolean = true;

    editItem(id : number) {
      console.log(id)
      this.budgetService.getItemById(id).subscribe(response => {
        this.modalDescriptionField = response.result.description;
          this.modalAmountField = response.result.amount;
          this.modalIdField = response.result.id;
          this.modalSelectedTypeField = response.result.type;
          this.hideEditModal = false;
      })
    }

    hideModal(){
      this.hideEditModal = true;
      this.budgetService.getItems().subscribe(response => {this.items = response.result;
        this.total = 0;
        this.items.forEach(item => {
          if(item.type == "EXP") {
            this.total -= item.amount;
          } else {
            this.total += item.amount;
          }
        })
      })
    }
}
