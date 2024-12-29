import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
// @Input() userName?: string;
@Input() userName: string | undefined;

}
