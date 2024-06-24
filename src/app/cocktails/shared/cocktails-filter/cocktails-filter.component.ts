import { Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cocktails-filter',
  templateUrl: './cocktails-filter.component.html',
  styleUrl: './cocktails-filter.component.scss'
})
export class CocktailsFilterComponent implements OnInit, OnDestroy{
  @Output() onChange: EventEmitter<string> = new EventEmitter<string>();
  subs: Subscription = new Subscription();
  filterFormGroup = new FormGroup({
    filterInput: new FormControl("")
  });

  ngOnInit(): void {
    this.subs.add(this.filterFormGroup.controls["filterInput"].valueChanges.subscribe((text: string | null) => {
      this.onChange.emit(text ?? "");
    }))
      
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
