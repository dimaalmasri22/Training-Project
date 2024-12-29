import {Component, signal} from '@angular/core';
import { HeaderComponent } from './shared-components/header/header.component';
import {SideBarComponent} from './shared-components/side-bar/side-bar.component';
import {ContentComponent} from './shared-components/content/content.component';
import {DUMMY_USERS} from './dummy-users';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, SideBarComponent, ContentComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 users = DUMMY_USERS;
  selectValue:string = 'Please select a user';
 //  selectedUserId = signal('u1');
 //
 //  get selectedUser(){
 //    return this.users.find(user => user.id === this.selectedUserId())!;
 //  }
 // onSelectUser(id:string){
 //   this.selectedUserId.set(id);
 // }

  selectedUserId = 'u1';

  get selectedUser(){
    // return this.users.find(user => user.id === this.selectedUserId)!;

    return this.users.find(user => user.id === this.selectedUserId);
  }
  onSelectUser(id:string){
    this.selectedUserId =id;
  }
}