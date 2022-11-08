import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  // dataEmitter = new EventEmitter<string>();

  dataEmitter = new Subject<string>();
  LogMessage(name: string, role: string) {
    console.log(
      `A new user with username '${name}' and role '${role}' has been added`
    );
  }

  raiseDataEmitterEvent(data: string) {
    this.dataEmitter.next(data);
  }

  constructor() {}
}
