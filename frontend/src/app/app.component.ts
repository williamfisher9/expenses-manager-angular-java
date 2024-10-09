import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BudgetComponent } from "./budget/budget.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BudgetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
