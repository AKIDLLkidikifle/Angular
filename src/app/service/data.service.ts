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
          description: 'computer engineer',
          price: 40
        },
        {
          id: 2,
          name: 'Betelhem Dagnachew',
          description: 'computer science ',
          price: 80
        },
        {
          id: 3,
          name: 'Mastewal Tesfa',
          description: 'cheical engieer',
          price: 30
        }
      ],
      products1: [
        {
          id: 1,
          name: 'Kalkidan Dagnachew',
          description: 'Lorem ipsum . Voluptatem excepturi magnam nostrum dolore recusandae',
          price: 40
        },
        {
          id: 2,
          name: 'Meron Tesema',
          description: 'amet consectetur adipisicing elit.Lorem ipsum dolor sit ',
          price: 80
        },
        {
          id: 4,
          name: 'Betelhem Lemma',
          description: 'Voluptatem excepturi harum rerum aliquam magnam nostrum dolore recusandae',
          price: 30
        }
      ]
    };
  }
}
