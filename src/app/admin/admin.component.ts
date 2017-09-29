import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})

export class AdminComponent implements OnInit {

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  submitForm(firstName: string, lastName: string, birthdate: string, affiliation: string, role: string, status: string, email: string, cellPhone: string, picture: string) {
    let newMember = {
      'firstName': firstName,
      'lastName': lastName,
      'birthdate': birthdate,
      'affiliation': affiliation,
      'role': role,
      'status': status,
      'email': email,
      'cellPhone': cellPhone,
      'picture': picture
    }

    this.memberService.addMember(newMember);
  }
}
