import {Component, Input} from '@angular/core';
import {TaskComponent} from '../content/tasks/task/task.component'
import {DummyTasks} from './task.model'
@Component({
  selector: 'app-content',
  imports: [TaskComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
// @Input() userName?: string;
  @Input({required:true}) userId!: string;
  @Input({required:true}) userName!: string
dummyTasks :DummyTasks[] = [
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
get userSelectedTasks () {
    return this.dummyTasks.filter(task => {
      return task.userId === this.userId;
    })
}
}
