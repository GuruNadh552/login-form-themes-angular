import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'login-themes';

  COLORS = [
    "#1DD1A1",
    "#FF6B6B",
    "#2E86DE",
    "#F368E0",
    "#FF9F43"
  ] as const;
}
