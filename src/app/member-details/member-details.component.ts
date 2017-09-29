import { Component, OnInit } from '@angular/core';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css'],
  providers: [MemberService]
})

export class MemberDetailsComponent implements OnInit {
  memberId: string;
  memberToDisplay: FirebaseObjectObservable<any>;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private memberService: MemberService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.memberId = urlParameters['id'];
    });
    this.memberToDisplay = this.memberService.getMemberById(this.memberId);
  }

}
