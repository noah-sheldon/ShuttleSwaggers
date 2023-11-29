import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player } from '../../models/player';
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-sessions',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './sessions.component.html',
  styleUrl: './sessions.component.scss'
})
export class SessionsComponent{
  constructor(){}

  displayedColumns = ["name"];
  players : Player[] = [
    {name: "Noah"},
    {name: "Amit"},
    {name: "Sunil"},
  ];
}
