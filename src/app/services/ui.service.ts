import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Page } from '../enums/PageEnum';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  public Page = Page;
  private currentPage = Page.Register;
  public loading: boolean = false;

  constructor(private http: HttpClient) {}

  public navigateToPage(page: Page): void {
    this.currentPage = page;
  }

  public getCurrentPage(): Page {
    return this.currentPage;
  }

  public getIsLoading(): boolean {
    return this.loading;
  }
}
