import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css'],
})
export class TemplateDrivenFormComponent implements OnInit {
  formModel: {
    name: string;
    email: string;
    type: string;
    num?: number;
    date?: Date;
    code?: number;
} = { name: '', email: '', type: '' };
  constructor() {}

  ngOnInit(): void {}
}
