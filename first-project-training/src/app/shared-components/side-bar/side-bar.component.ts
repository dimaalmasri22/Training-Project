import {Component, computed, EventEmitter, Input, input, Output, signal,output} from '@angular/core';
import { DUMMY_USERS } from '../../dummy-users'
import {NgForOf} from '@angular/common';
import {User} from './users.model'
import {CardComponent} from '../../shared/card/card.component';
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-side-bar',
  standalone: true,
  templateUrl: './side-bar.component.html',
  imports: [
    NgForOf,
    CardComponent
  ],
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
   // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // selectedUser = DUMMY_USERS;

  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser().avatar;
  // }
  // imagePath = computed(()=>{
  //   return 'assets/users/' + this.selectedUser().avatar;
  // })
  //
  // onSelectUser() {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }

  // @Input({required:true}) avatar!: string;
  // @Input({required:true}) id!: string;
  // @Input({required:true}) name!: string;
  @Input({required:true}) user!: User
  // @Output() select = new EventEmitter();
  select = output<string>()
  @Input({required:true}) selected!: boolean;

  // avatar = input.required<string>()
  // name = input<string>('x')


  // imagePath = computed(()=>{return 'assets/users/' + this.avatar();})
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(){
    console.log(this.select)
    this.select.emit(this.user.id);
  }
}
