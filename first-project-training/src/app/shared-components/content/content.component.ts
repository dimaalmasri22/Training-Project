import {Component, Input} from '@angular/core';
import {TaskComponent} from '../content/tasks/task/task.component';
import {DummyTasks} from './task.model';
import {NewTaskComponent} from './tasks/new-task/new-task.component'
import {FormControl} from '@angular/forms';
import { TasksService } from './tasks.service'

@Component({
  selector: 'app-content',
  imports: [TaskComponent,NewTaskComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
// @Input() userName?: string;
  @Input({required:true}) userId!: string;
  @Input({required:true}) userName!: string
  isAddingTask: boolean = false;

  constructor(public tasksService : TasksService) { }

  get userSelectedTasks () {
    // return this.dummyTasks.filter(task => {
    //   return task.userId === this.userId;
    // })
    return this.tasksService.getUserTasks(this.userId);
}

  RemoveTask(TaskValue:DummyTasks){
    // this.dummyTasks.splice( this.dummyTasks.findIndex(task => task.id === TaskValue.id),1)
    // OR //
    // this.dummyTasks = this.dummyTasks.filter(task => {return task.id !== TaskValue.id});

    this.tasksService.RemoveTask(TaskValue);
  }

  onStartAddTask (){
    this.isAddingTask = true;
  }

  onCancelAddTask (){
  this.isAddingTask = false;
  }

  // onAddTask (event:FormControl ){
  // let taskObj:DummyTasks ={
  //   id:`t + ${this.dummyTasks.length}`,
  //   userId:this.userId,
  //   title:event.value.title,
  //   summary:event.value.summary,
  //   dueDate:event.value.dueDate
  //
  // }
  // to add at the end

  // this.dummyTasks.push(taskObj);

  //   to add at the beginning
  // this.dummyTasks.unshift(taskObj);
  //
  // this.isAddingTask = false;
  // }
}
