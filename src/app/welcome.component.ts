import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  template: `
    <div>
      Hi there, welcome to this training!
    </div>
  `,
  styles: []
})
export class WelcomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
