import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreStateService {
  private readonly CURRENT_STORE_ID = 'currentStoreId';
  public currentStoreId: string;

  constructor() {
    this.currentStoreId = localStorage.getItem(this.CURRENT_STORE_ID);
  }

  public isStoreSelected(): boolean {
    return this.currentStoreId !== undefined && this.currentStoreId !== null;
  }

  public getCurrentStoreId(): string {
    return this.currentStoreId;
  }

  public setCurrentStoreId(_id: string) {
    this.currentStoreId = _id;
  }
}
