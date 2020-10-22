import { Component } from '@angular/core';
import { NotificationService } from './services/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClientSCP';
  constructor(private toastr: NotificationService) { }

  showToasterSuccess() {
    this.toastr.showSucces("Saved Successfully");
  }
}
