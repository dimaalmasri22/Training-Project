import {DummyTasks} from './task.model';
import {FormControl} from '@angular/forms';
import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TasksService {
 private dummyTasks :DummyTasks[] = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ]

  constructor() {
   const tasks = localStorage.getItem('tasks');

   if(tasks){
     this.dummyTasks = JSON.parse(tasks);
   }
  }
  getUserTasks (userId:string) {
    return this.dummyTasks.filter(task => {
      return task.userId === userId;
    })
  }

  addTask (taskData:FormControl ,userId:string) {
    let taskObj:DummyTasks ={
      id:`t + ${this.dummyTasks.length}`,
      userId:userId,
      title:taskData.value.title,
      summary:taskData.value.summary,
      dueDate:taskData.value.dueDate

    }
    // to add at the end

    // this.dummyTasks.push(taskObj);

    //   to add at the beginning
    this.dummyTasks.unshift(taskObj);
    this.saveTask();
  }

  RemoveTask(TaskValue:DummyTasks){
    // this.dummyTasks.splice( this.dummyTasks.findIndex(task => task.id === TaskValue.id),1)
    // OR //
    this.dummyTasks = this.dummyTasks.filter(task => {return task.id !== TaskValue.id});
    this.saveTask();
  }
  private saveTask () {
   localStorage.setItem('tasks', JSON.stringify(this.dummyTasks));
  }

}
