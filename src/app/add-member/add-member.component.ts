import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css'],
  providers: [MemberService]
})

export class AddMemberComponent implements OnInit {

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
