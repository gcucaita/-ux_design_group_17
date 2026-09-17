import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../shared/ui/icon.component';

@Component({ selector: 'app-home', imports: [RouterLink, IconComponent], templateUrl: './home.component.html', styleUrl: './home.component.scss' })
export class HomeComponent {}
