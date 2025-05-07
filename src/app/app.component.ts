import { Component } from '@angular/core';
import { RouterLink, RouterOutlet,RouterModule } from '@angular/router';
import { FormatTextPipe } from './pipes/format.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, FormatTextPipe,RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp01_ANGULAR_ePsi';
}
