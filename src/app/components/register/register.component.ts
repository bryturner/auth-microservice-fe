import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Page } from 'src/app/enums/PageEnum';
import { AuthService } from 'src/app/services/auth.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  public Page = Page;
  public emailFC = new FormControl('', [Validators.required, Validators.email]);
  public passwordFC = new FormControl('', [Validators.required]);
  public verifyPasswordFC = new FormControl('', [Validators.required]);
  public hidePassword: boolean = true;
  public hideVerifyPassword: boolean = true;

  constructor(private auth: AuthService, public ui: UiService) {}
}
