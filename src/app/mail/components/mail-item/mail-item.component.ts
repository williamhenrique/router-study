import { Component, OnInit, Input } from '@angular/core';
import { Mail } from '../../models/mail.interface';

@Component({
  selector: 'mail-item',
  templateUrl: './mail-item.component.html',
  styleUrls: ['./mail-item.component.css']
})
export class MailItemComponent {

  @Input()
  message: Mail;

}
