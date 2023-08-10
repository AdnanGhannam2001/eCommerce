import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import faqs from "../data/faqs.json";

export interface Faq {
  id: string;
  question: string;
  answer: string;
};

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  faqs: Faq[];
  faqs$: Observable<Faq[]>;

  constructor() {
    this.faqs = faqs;
    this.faqs$ = of(this.faqs);
  }

  getAll() {
    return this.faqs$;
  }
}
