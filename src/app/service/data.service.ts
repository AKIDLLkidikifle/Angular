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
      employees: [
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
      candidates: [
        {
          id: 1,
          name: 'Kalkidan Dagnachew',
          departmentId: 2,
          companyId: 1
        },
        {
          id: 2,
          name: 'Meron Tesema',
          departmentId: 2,
          companyId: 1
        },
        {
          id: 4,
          name: 'Betelhem Lemma',
          departmentId: 2,
          companyId: 1
        }
      ],

      company: [
        {
          id: 1,
          name: 'Kalkidan Dagnachew',
          address: 'Addis Abeba ',
          website: "www.addis.com"
        },
        {
          id: 2,
          name: 'Meron Tesema',
          address: 'Addis Abeba ',
          website: "www.addis.com"
        },
        {
          id: 4,
          name: 'Betelhem Lemma',
          address: 'Addis Abeba ',
          website: "www.addis.com"
        }
      ],

      department: [
        {
          id: 1,
          name: 'Kalkidan Dagnachew',
        },
        {
          id: 2,
          name: 'Meron Tesema',
        },
        {
          id: 4,
          name: 'Betelhem Lemma',
        }
      ],

      salary: [
        {
          id: 1,
          amount: 30 ,
        },
        {
          id: 2,
          amount: 30,
        },
        {
          id: 4,
          amount: 30 ,
        }
      ]
    };
  }
}
