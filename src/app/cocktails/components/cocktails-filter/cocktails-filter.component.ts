import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cocktails-filter',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cocktails-filter.component.html',
  styleUrl: './cocktails-filter.component.scss'
})
export class CocktailsFilterComponent implements OnInit{
  @Output() onChange: EventEmitter<string> = new EventEmitter<string>();
  subs: Subscription = new Subscription();
  filterFormGroup = new FormGroup({
    filterInput: new FormControl("")
  });

  ngOnInit(): void {
    this.subs.add(this.filterFormGroup.controls["filterInput"].valueChanges.subscribe((text: string | null) => {
      this.onChange.emit(text??"");
    }))
      
  }
}
