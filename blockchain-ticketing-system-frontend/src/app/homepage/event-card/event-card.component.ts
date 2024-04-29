import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss'
})
export class EventCardComponent
{
  @Input() public name: string | undefined;
  @Input() public price: number | undefined;
  @Input() public date: string | undefined;
  @Input() public country: string | undefined;
  @Input() public city: string | undefined;
  @Input() public description: string | undefined;
  @Input() public imageUrl: string | undefined;
}
