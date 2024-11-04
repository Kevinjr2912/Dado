import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container-input-button',
  templateUrl: './container-input-button.component.html',
  styleUrl: './container-input-button.component.css',
})
export class ContainerInputButtonComponent {
  // Variables 
  value: number = 0;
  count: number = 0;
  flag: boolean = false;
  arrayNumbers: number[] = [];

  // Inputs
  @Input() num: number = 0;
  
  generateValue(): void {
    if (this.count !== 3) {
      let min = 1;
      let max = 5;

      this.value = Math.floor(Math.random() * (max - min + 1) + min);

      this.count++;
    }
  }

  desactivatedInput(): void {
    if(this.count !== 0){
      this.flag = true;
    }
  }

  addValuesInputs({ num }: { num: number }): void {
    
  }
}
