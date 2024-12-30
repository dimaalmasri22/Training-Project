import {Component, Input} from '@angular/core';
import {DummyTasks } from '../../task.model'
@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
@Input() Task?:DummyTasks
}
