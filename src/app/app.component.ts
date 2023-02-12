/** Angular basiert auf Componenten, eine Com. hat 3 Elemente, Componenten arbeiten zusammen */
import { Component } from '@angular/core';

@Component({ //** Component-Meta-Daten mit Pfaden damit man auf die Componente ansprechen kann */
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Center-App';
}
