import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Mail } from './models/mail.interface';
import { from } from 'rxjs/internal/observable/from';
import { filter, toArray } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class MailService {
  protected fakeAPI = [
    {
      id: 1,
      folder: 'inbox',
      from: 'Jane Smith',
      summary:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis, neque at ultricies fringilla, ligula metus',
      timestamp: 1487848162905,
    },
    {
      id: 2,
      folder: 'inbox',
      from: 'John Doe',
      summary:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis, neque at ultricies fringilla, ligula metus',
      timestamp: 1487845787719,
    },
    {
      id: 3,
      folder: 'inbox',
      from: 'Joseph Hanes',
      summary:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis, neque at ultricies fringilla, ligula metus',
      timestamp: 1487845787719,
    },
    {
      id: 4,
      folder: 'trash',
      from: 'Laurence Murray',
      summary:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis, neque at ultricies fringilla, ligula metus',
      timestamp: 1487845787719,
    },
  ];

  constructor() {}
  getFolder(folder: string): Observable<Mail[]> {
    return from(this.fakeAPI).pipe(
      filter((response) => folder === response.folder),
      toArray()
    );
  }

  getMessage(id: string): Observable<Mail> {
    const idParam = Number(id);
    return from(this.fakeAPI).pipe(
      filter((response) => idParam === response.id)
    );
  }
}
