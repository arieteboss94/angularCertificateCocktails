import { Component, EventEmitter, Output, Signal, WritableSignal, computed, effect, signal} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cocktails-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cocktails-filter.component.html',
  styleUrl: './cocktails-filter.component.scss'
})
export class CocktailsFilterComponent {
  @Output() onChange: EventEmitter<string> = new EventEmitter<string>();
  value: string;

  onChangeValue(text: string): void{
    this.onChange.emit(text);
  }
}
