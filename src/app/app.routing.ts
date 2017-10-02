import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MembersListComponent } from './members-list/members-list.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { EditMemberComponent } from './edit-member/edit-member.component';

const appRoutes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    component: MembersListComponent
  },
  {
    path: 'members/:id',
    component: MemberDetailsComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: "add-member",
    component: AddMemberComponent
  },
  {
    path: "edit-member",
    component: EditMemberComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
