import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { MatCard, MatCardTitle, MatCardContent } from '@angular/material/card';
import {CommonModule, NgIf} from '@angular/common';
@Component({
  selector: 'app-panic-attacks',
  standalone: true,
  imports: [MatCard, MatCardTitle, MatCardContent, NgIf],
  templateUrl: './panic-attacks.component.html',
  styleUrl: './panic-attacks.component.scss'
})
export class PanicAttacksComponent implements OnInit {
  panicAttacks: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    const startDate = '2024-11-01'; // Example date
    const endDate = '2024-11-10';
    this.apiService.getPanicAttacks(startDate, endDate).subscribe(data => this.panicAttacks = data.panic_attacks);
  }

  confirmPanicAttack(id: string): void {
    this.apiService.confirmPanicAttack(id).subscribe(() => {
      // Update the UI or show confirmation message
    });
  }
}
