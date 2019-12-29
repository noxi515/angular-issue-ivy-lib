import { Injectable } from '@angular/core';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';

@Injectable({
  providedIn: 'root'
})
export class MyLibService {
  constructor(
    private readonly insights: ApplicationInsights
  ) { }
}
