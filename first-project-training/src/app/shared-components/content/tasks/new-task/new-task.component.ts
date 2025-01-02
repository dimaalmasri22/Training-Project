import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import { Directive } from '@angular/core';
import {AbstractControl, FormsModule, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {NgIf} from '@angular/common';
import {TasksService} from '../../tasks.service'
import {discardPeriodicTasks} from '@angular/core/testing';

// Custom Validator Directive

@Directive({
  selector: '[customValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CustomValidatorDirective,
      multi: true,
    },
  ],
})
export class CustomValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const forbiddenName = 'admin';
    if (control.value && control.value.toLowerCase() === forbiddenName) {
      return { forbiddenName: true };
    }
    return null;
  }
}

@Directive({
  selector: '[futureDateValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: FutureDateValidatorDirective,
      multi: true,
    },
  ],
})
export class FutureDateValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const inputDate = new Date(control.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Ignore time component

    if (control.value && inputDate <= today) {
      return { invalidDate: true }; // Return error if the date is in the past or today
    }
    return null; // No error
  }
}

@Component({
  imports: [
    FormsModule,
    NgIf,
    CustomValidatorDirective,
    FutureDateValidatorDirective
  ],
  selector: 'app-new-task',
  styleUrl: './new-task.component.scss',
  templateUrl: './new-task.component.html'
})
export class NewTaskComponent {
  @Output() cancelTask = new EventEmitter();
  @Output() addTask = new EventEmitter();
  @Input() userId!:string;
  enteredTitle: string ='';
  enteredSummary: string ='';
  enteredDueDate: string ='';

  private TasksService = inject(TasksService)

  onCloseDialog () {
    this.cancelTask.emit();
  }

  onSubmit (form:any){
    // this.addTask.emit(form);
    //or
    this.TasksService.addTask(form,this.userId)
    this.cancelTask.emit();
    }
}
