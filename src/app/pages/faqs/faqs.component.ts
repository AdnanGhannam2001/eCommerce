import { Component } from '@angular/core';
import { Faq, FaqService } from 'src/app/services/faq.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.scss']
})
export class FaqsComponent {
  faqs: Faq[] = [];
  constructor(private faqService: FaqService) { }

  ngOnInit() {
    this.faqService.getAll()
      .subscribe(val => this.faqs = val);
  }
}
