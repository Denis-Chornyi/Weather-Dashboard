import { HttpErrorResponse } from '@angular/common/http';

export class ErrorHandler {
  static getErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
      case 401:
        return 'Invalid API key. Please check your configuration.';
      case 404:
        return 'City not found. Please check the spelling and try again.';
      case 429:
        return 'Too many requests. Please try again later.';
      default:
        return `An error occurred: ${error.message}`;
    }
  }
}