import { Component } from '@angular/core';
import { Page } from './enums/PageEnum';
import { UiService } from './services/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public Page = Page;
  constructor(public ui: UiService) {}
}
