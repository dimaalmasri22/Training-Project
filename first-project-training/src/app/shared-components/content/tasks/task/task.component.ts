import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DummyTasks } from '../../task.model'
import {CardComponent} from '../../../../shared/card/card.component';
import {DatePipe} from '@angular/common';
@Component({
  selector: 'app-task',
  imports: [
    CardComponent,
    DatePipe
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
@Input() Task?:DummyTasks;
@Output() removeTask = new EventEmitter<DummyTasks>();

completeTask (){
  this.removeTask.emit(this.Task);
}
}
