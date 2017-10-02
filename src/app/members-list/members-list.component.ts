import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css'],
  providers: [MemberService]
})

export class MembersListComponent implements OnInit {
  members: FirebaseListObservable<any[]>;

  constructor(private router: Router, private memberService: MemberService) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

  goToMemberDetails(clickedMember) {
    this.router.navigate(['members', clickedMember.$key]);
  }

  goToEditMemberPage(memberToEdit) {
    this.router.navigate(['edit-member', memberToEdit]);
  }

}
