import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CanActivateGuard implements CanActivate {
  public canActivate(): boolean {
    return confirm('Do you really want to get to that route?');
  }
}
