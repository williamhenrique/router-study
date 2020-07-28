import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Mail } from '../../models/mail.interface';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/internal/operators/pluck';

@Component({
  selector: 'app-mail-view',
  templateUrl: './mail-view.component.html',
  styleUrls: ['./mail-view.component.css']
})
export class MailViewComponent {

  public message$: Observable<Mail> = this.router.data.pipe(
    pluck('message')
  );
  constructor(private router: ActivatedRoute) {
    this.message$.subscribe(console.log)
   }

}
