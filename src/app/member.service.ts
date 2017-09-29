import { Injectable } from '@angular/core';
import { Member } from './member.model';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MemberService {
  memberList: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.memberList = database.list('members');
  }

  getMembers() {
    return this.memberList;
  }

  getMemberById(memberId: string) {
    return this.database.object('members/' + memberId);
  }

}
