import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styles: [`
        em { float:right; color: #E05C65; padding-left: 10px; }
    `]

})
export class LoginComponent {

    loginInvalid: boolean = false;

    constructor(private authService: AuthService, private router: Router) { }

    login(formValues) {
        this.authService.loginUser(formValues.userName, formValues.password).subscribe(
            response => {
                if (!response) {
                    this.loginInvalid = true;
                } else {
                    this.router.navigate(['events']);
                }
            }
        );
    }

    cancelClicked() {
        this.router.navigate(['events']);
    }

}