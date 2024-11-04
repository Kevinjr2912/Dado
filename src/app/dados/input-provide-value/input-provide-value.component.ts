import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-provide-value',
  templateUrl: './input-provide-value.component.html',
  styleUrl: './input-provide-value.component.css'
})
export class InputProvideValueComponent {
  @Input() value: number = 0;
  @Output() valueFinally = new EventEmitter<{
    num: number
  }>

  emit(): void {
    this.valueFinally.emit({
      num: this.value
    })
  }
}
