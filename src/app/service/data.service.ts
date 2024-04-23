import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }
  createDb(): {} | Observable<{}>  {
    return {
      products: [
        {
          id: 1,
          name: 'Kidist Amare',
          department: 'computer engineer',
          salary: 40
        },
        {
          id: 2,
          name: 'Betelhem Dagnachew',
          department: 'computer science ',
          salary: 80
        },
        {
          id: 3,
          name: 'Mastewal Tesfa',
          department: 'cheical engieer',
          salary: 30
        }
      ],
      products1: [
        {
          id: 1,
          name: 'Kalkidan Dagnachew',
          department: 'computer engineering ',
          salary: 40
        },
        {
          id: 2,
          name: 'Meron Tesema',
          department: 'computer science ',
          salary: 80
        },
        {
          id: 4,
          name: 'Betelhem Lemma',
          department: 'Chemical engineering',
          salary: 30
        }
      ]
    };
  }
}
