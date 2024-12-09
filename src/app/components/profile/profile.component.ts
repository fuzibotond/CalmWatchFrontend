import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import {MatButton} from '@angular/material/button';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, MatButton],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  profileData: any;

  constructor(public apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    console.log("ngOnInit")
    this.apiService.getProfile().subscribe(data => this.profileData = data);
  }

  login():void {
    window.location.href =this.apiService.baseUrl+"/login"
  }
}
