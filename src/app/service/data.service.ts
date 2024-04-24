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
          department: 2,
          salary: 2
        },
        {
          id: 2,
          name: 'Betelhem Dagnachew',
          department: 3,
          salary: 1
        },
        {
          id: 3,
          name: 'Mastewal Tesfa',
          department: 1,
          salary: 2
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
          name: 'Addis software',
          address: 'Addis Abeba ',
          website: "https://addissoftware.com/"
        },
        {
          id: 2,
          name: 'MMC Y tech',
          address: 'Addis Abeba ',
          website: "https://mmcytech.com/"
        },
        {
          id: 4,
          name: 'Zala Tech',
          address: 'Addis Abeba ',
          website: "https://zalatechs.com/"
        }
      ],

      department: [
        {
          id: 1,
          name: 'computer engineering',
        },
        {
          id: 2,
          name: 'software enginneering',
        },
        {
          id: 4,
          name: 'computer science',
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
