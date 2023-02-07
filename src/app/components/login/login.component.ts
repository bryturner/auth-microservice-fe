import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Page } from 'src/app/enums/PageEnum';
import { AuthService } from 'src/app/services/auth.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public Page = Page;
  public emailFC = new FormControl('', [Validators.required, Validators.email]);
  public passwordFC = new FormControl('', [Validators.required]);
  public hidePassword: boolean = true;

  constructor(private auth: AuthService, public ui: UiService) {}
}
