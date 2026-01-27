import { Component, inject } from '@angular/core';
import { MemberService } from '../../../core/services/member-service';
import { Observable } from 'rxjs/internal/Observable';
import { Member } from '../../../types/member';
import { AsyncPipe } from '@angular/common';
import { MemberCard } from "../../../feauures/members/member-card/member-card";

@Component({
  selector: 'app-member-list',
  imports: [AsyncPipe, MemberCard],
  templateUrl: './member-list.html',
  styleUrl: './member-list.css',
})
export class MemberList {
  private membersService = inject(MemberService);
  protected members$: Observable<Member[]> 
  
     constructor() {
    this.members$ = this.membersService.getMembers();
  }
}
