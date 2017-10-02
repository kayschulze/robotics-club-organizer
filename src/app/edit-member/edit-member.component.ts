import { Component, Input, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css'],
  providers: [MemberService]
})

export class EditMemberComponent implements OnInit {
  @Input() selectedMember;

  constructor(private router: Router, private memberService: MemberService) { }

  ngOnInit() {
    // this.members = this.memberService.getMembers();
  }

  beginUpdatingMember(memberToUpdate) {
    this.memberService.updateMember(memberToUpdate);
  }

  beginDeletingMember(selectedMember) {
    this.memberService.deleteMember(selectedMember);
  }
}
