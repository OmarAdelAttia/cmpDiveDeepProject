import { Component, input } from '@angular/core';
import { DashboardHeaderData } from '../dashboard-header.model';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.scss'
})
export class DashboardItemComponent {

  data = input.required<DashboardHeaderData>();

}
