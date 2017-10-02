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

  addMember(memberToAdd: Member) {
    return this.memberList.push(memberToAdd);
  }

  updateMember(localUpdatedMember) {
    let memberEntryInFirebase = this.getMemberById(localUpdatedMember.$key);
    memberEntryInFirebase.update({
      firstName: localUpdatedMember.firstName,
      lastName: localUpdatedMember.lastName,
      birthdate: localUpdatedMember.birthdate,
      affiliation: localUpdatedMember.affiliation,
      role: localUpdatedMember.role,
      status: localUpdatedMember.status,
      email: localUpdatedMember.email,
      cellPhone: localUpdatedMember.cellPhone,
      picture: localUpdatedMember.picture
    });

  }

  deleteMember(localMemberToDelete) {
    let memberEntryInFirebase = this.getMemberById(localMemberToDelete.$key);
    memberEntryInFirebase.remove();
  }

}
