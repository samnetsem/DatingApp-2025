import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { ApiError } from '../../../types/error';
import { Router } from '@angular/router';
@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFound {
    private location = inject(Location);

  goBack() {
    this.location.back();
  }
  protected error: ApiError;
  private router = inject(Router);
  protected showDetails = false;

  constructor() {
    const navigation = this.router.getCurrentNavigation();
    this.error = navigation?.extras?.state?.['error']
  }

  detailsToggle() {
    this.showDetails = !this.showDetails;
  }
}
