import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'app-dialog-wrapper',
  standalone: true,
  imports: [],
  templateUrl: './dialog-wrapper.component.html',
  styleUrls: ['./dialog-wrapper.component.scss', '/node_modules/vuejs-example-cca-test/dist/style.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DialogWrapperComponent {
  handleClick(event: any): void {
    console.log('clicked from angular app', event.detail);
  }
}
