import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Mail } from '../../models/mail.interface';
import { pluck } from 'rxjs/internal/operators/pluck';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mail-folder',
  templateUrl: './mail-folder.component.html',
  styleUrls: ['./mail-folder.component.css']
})
export class MailFolderComponent{
  messages: Observable<Mail[]> = this.route.data.pipe(pluck('messages'));
  title: Observable<string> = this.route.params.pipe(pluck('name'));
  constructor(private route: ActivatedRoute) {}

}
