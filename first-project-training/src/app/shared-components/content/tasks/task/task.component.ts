import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {DummyTasks } from '../../task.model'
import {CardComponent} from '../../../../shared/card/card.component';
import {DatePipe} from '@angular/common';
import {TasksService} from '../../tasks.service';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIcon, MatIconRegistry} from '@angular/material/icon';

const THUMBUP_ICON =
  `
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.` +
  `44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5` +
  `1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
  </svg>
`;
const X_ICON = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
    <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;
@Component({
  selector: 'app-task',
  imports: [
    CardComponent,
    DatePipe,
    MatIcon
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
@Input() Task!:DummyTasks;
@Output() removeTask = new EventEmitter<DummyTasks>();
private TasksService = inject(TasksService)

  constructor() {
    const iconRegistry = inject(MatIconRegistry);
    const sanitizer = inject(DomSanitizer);

    // Note that we provide the icon here as a string literal here due to a limitation in
    // Stackblitz. If you want to provide the icon from a URL, you can use:
    // `iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('icon.svg'));`
    iconRegistry.addSvgIconLiteral('x-icon', sanitizer.bypassSecurityTrustHtml(X_ICON));
  }
completeTask (){
  this.removeTask.emit(this.Task);
}
completeTask2(){
  this.TasksService.RemoveTask(this.Task);
  }
}
