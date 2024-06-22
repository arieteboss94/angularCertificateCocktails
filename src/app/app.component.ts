import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterModule, HttpClientModule ],
  templateUrl: 'app.component.html',
})
export class AppComponent {
}
