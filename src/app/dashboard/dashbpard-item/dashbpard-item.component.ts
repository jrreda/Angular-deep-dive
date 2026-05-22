import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-dashbpard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashbpard-item.component.html',
  styleUrl: './dashbpard-item.component.css'
})
export class DashbpardItemComponent {
  // @Input({ required: true }) image!: {src: string, alt: string};
  // @Input({ required: true }) title!: string;
  image = input.required<{src: string, alt: string}>();
  title = input.required<string>();
}
