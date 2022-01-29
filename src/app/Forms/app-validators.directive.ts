import { Directive } from '@angular/core';
import { AbstractControl, NG_ASYNC_VALIDATORS, NG_VALIDATORS } from '@angular/forms';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { UserService } from './services/user.service';

@Directive({
  selector: '[SallisEmailValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmailValidator,
    multi: true
  }]
})
export class EmailValidator {

  validate(control: AbstractControl): { [key: string]: any } | null {
    const regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    if (!control.value || control.value === '' || regex.test(control.value)) {
      return null;
    }
    return { invalidEmail: true }
  }
}

@Directive({
  selector: '[SallisUserExistsValidator]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: UserExistsValidator,
    multi: true
  }]
})
export class UserExistsValidator {
  constructor(private userService: UserService) {

  }

  validate(control: AbstractControl): Observable<any> {
    console.log("validate")
    return this.userService.checkIfUserExists(control.value).pipe(delay(100),
      map(userExists => {
        return userExists === false ? { userNotFound: true } : null;
      })
    )
  }

}


export const APPLICATION_VALIDATORS = [EmailValidator, UserExistsValidator];