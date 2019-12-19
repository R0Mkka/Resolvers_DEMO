import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CanLoadGuard implements CanLoad {
  public canLoad(): boolean {
    return confirm('Are you confident that you are ready to see it??? Think twice...');
  }
}
