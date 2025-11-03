import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { UserInfo } from '../../models/user.model';

@Component({
  selector: 'app-dietinfo',
  standalone: true,
   imports: [CommonModule],
  templateUrl: './dietinfo.component.html',
  styleUrl: './dietinfo.component.css'
})
export class DietinfoComponent {
  constructor(private authService: AuthService) {}
  Userinfo: UserInfo[] = [];
  showAllUser : boolean = false;
  dietInfo : boolean = false;
    ngOnInit(): void {
   this.dietInfo = true;
}
  showEnrolled(): void {
    this.authService.GetUserInfo().subscribe(data => {
    this.Userinfo = data;
    this.showAllUser = true;
    this.dietInfo = false;
  });
  }

}
