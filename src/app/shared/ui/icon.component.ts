import { Component, input } from '@angular/core';

const ICONS: Record<string, string[]> = {
  alarm: ['M6 16h12l-1.5-2.5V9a4.5 4.5 0 0 0-9 0v4.5z', 'M10 19h4'],
  alert: ['M12 9v4M12 16.5h.01', 'm10.3 4.2-8 14A1.5 1.5 0 0 0 3.6 20.5h16.8a1.5 1.5 0 0 0 1.3-2.3l-8-14a1.5 1.5 0 0 0-2.6 0Z'],
  arrow: ['m9 18 6-6-6-6'], back: ['m15 18-6-6 6-6'],
  calendar: ['M4 5h16v15H4z', 'M8 3v4M16 3v4M4 10h16'], check: ['m5 12 4 4L19 6'],
  clock: ['M12 7v5l3 2', 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z'], close: ['M6 6l12 12M18 6 6 18'],
  delete: ['M4 7h16M9 7V4h6v3M7 7l1 13h8l1-13M10 11v5M14 11v5'], edit: ['M4 20h4L19 9l-4-4L4 16zM13.5 6.5l4 4'],
  globe: ['M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18', 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z'],
  help: ['M9.8 9a2.3 2.3 0 1 1 3.6 1.9c-.9.6-1.4 1.1-1.4 2.1M12 17h.01', 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z'],
  home: ['M3 11 12 4l9 7v9h-6v-6H9v6H3z'], info: ['M12 10v7M12 7h.01', 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z'],
  laptop: ['M4 5h16v10H4z', 'M2 19h20'], logout: ['M9 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h4', 'M14 8l4 4-4 4', 'M18 12H9'],
  microphone: ['M9 4a3 3 0 0 1 6 0v7a3 3 0 0 1-6 0z', 'M5 10a7 7 0 0 0 14 0M12 17v4M8 21h8'],
  mobile: ['M7 2h10v20H7zM10 18h4'], network: ['M4 9a12 12 0 0 1 16 0M7 13a8 8 0 0 1 10 0M10 17a3 3 0 0 1 4 0M4 4l16 16'],
  plus: ['M12 5v14M5 12h14'], settings: ['M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z', 'M19 12a7 7 0 0 0-.1-1l2-1.5-2-3.4-2.4 1a8 8 0 0 0-1.7-1L14.5 3h-5l-.4 3.1a8 8 0 0 0-1.7 1l-2.4-1-2 3.4L5.1 11a7 7 0 0 0 0 2L3 14.5l2 3.4 2.4-1a8 8 0 0 0 1.7 1l.4 3.1h5l.4-3.1a8 8 0 0 0 1.7-1l2.4 1 2-3.4-2.1-1.5a7 7 0 0 0 .1-1Z'],
  shield: ['M12 3 5 6v5c0 4.6 2.8 8 7 10 4.2-2 7-5.4 7-10V6z', 'm9 12 2 2 4-4'],
  user: ['M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z', 'M4 20c1.5-4 4.5-6 8-6s6.5 2 8 6'],
  volume: ['M5 10h4l5-4v12l-5-4H5zM17 9a4 4 0 0 1 0 6'], wave: ['M3 12h3l2-5 4 10 3-8 2 3h4'],
};

@Component({
  selector: 'app-icon', standalone: true,
  template: `<svg viewBox="0 0 24 24" aria-hidden="true">@for (path of paths(); track path) { <path [attr.d]="path" /> }</svg>`,
  styles: `:host{display:inline-grid;place-items:center;line-height:0}svg{width:1.5rem;height:1.5rem;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}`,
})
export class IconComponent {
  readonly name = input.required<string>();
  protected paths = () => ICONS[this.name()] ?? ICONS['info'];
}
