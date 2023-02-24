import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Page } from '../enums/PageEnum';
import { AppUser } from '../interfaces/AppUser';
import { UiService } from './ui.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user?: AppUser;

  constructor(private http: HttpClient, private ui: UiService) {}

  public getUser(): AppUser | undefined {
    if (!this.user) return;
    return this.user;
  }

  private login(user: AppUser): void {
    this.ui.navigateToPage(Page.Home);
    this.user = user;
  }

  private logout(): void {
    this.ui.navigateToPage(Page.Login);
  }

  public tryRegister(username: string, password: string): void {
    // this.http.post();
  }

  public tryLogin(username: string, password: string): void {}
}
