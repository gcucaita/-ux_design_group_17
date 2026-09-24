import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IconComponent } from '../../shared/ui/icon.component';

type ScreenId = 'W01'|'W02'|'W03'|'W04'|'W07'|'W12'|'W13'|'W14'|'W16';
type OverlayId = 'W15'|'UNLINK'|'LOGOUT';
type HistoryStatus = 'confirmed'|'postponed'|'unconfirmed';

interface HistoryRow { date: string; time: string; purpose: string; status: HistoryStatus; attempts: string; intensity: string; }
interface SessionRow { device: string; client: string; location: string; lastActive: string; current: boolean; }

@Component({
  selector: 'app-web-screen',
  imports: [FormsModule, RouterLink, IconComponent],
  templateUrl: './web-screen.component.html',
  styleUrl: './web-screen.component.scss',
})
export class WebScreenComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly data = toSignal(this.route.data, { initialValue: { screen: 'W01' } });

  readonly screen = computed(() => this.data()['screen'] as ScreenId);
  readonly overlay = signal<OverlayId | null>(null);
  readonly deleteKind = signal<'alarms'|'data'>('alarms');
  readonly deleteConfirmedKind = signal<'alarms'|'data'|null>(null);
  private deleteConfirmedTimer?: ReturnType<typeof window.setTimeout>;

  readonly email = signal('laura.martinez@correo.com');
  readonly password = signal('alarma2026');
  readonly loginError = signal(false);
  readonly loading = signal(false);

  readonly user = { name: 'Laura Martínez', initials: 'LM', email: 'laura.martinez@correo.com' };
  readonly device = { name: 'iPhone de Laura', linkedDate: '10 de agosto de 2026' };
  readonly micEnabled = signal(true);

  readonly stats = { active: 2, confirmed: 6, postponed: 2, unconfirmed: 1 };
  readonly recentActivity: { time: string; purpose: string; status: HistoryStatus }[] = [
    { time: 'Hoy · 06:30', purpose: 'Entrenamiento de fuerza', status: 'confirmed' },
    { time: 'Ayer · 20:00', purpose: 'Leer 20 minutos', status: 'postponed' },
    { time: 'Ayer · 06:30', purpose: 'Entrenamiento de fuerza', status: 'confirmed' },
  ];

  readonly historyRows: HistoryRow[] = [
    { date: '17 sept', time: '06:30', purpose: 'Entrenamiento de fuerza', status: 'confirmed', attempts: '1 de 3', intensity: 'Media' },
    { date: '16 sept', time: '20:00', purpose: 'Leer 20 minutos', status: 'postponed', attempts: '2 de 3', intensity: 'Baja' },
    { date: '16 sept', time: '06:30', purpose: 'Entrenamiento de fuerza', status: 'confirmed', attempts: '1 de 3', intensity: 'Media' },
    { date: '15 sept', time: '20:00', purpose: 'Leer 20 minutos', status: 'unconfirmed', attempts: '3 de 3', intensity: 'Baja' },
    { date: '15 sept', time: '06:30', purpose: 'Entrenamiento de fuerza', status: 'confirmed', attempts: '1 de 3', intensity: 'Media' },
    { date: '14 sept', time: '08:00', purpose: 'Preparar presentación', status: 'confirmed', attempts: '1 de 3', intensity: 'Alta' },
  ];
  readonly selectedHistoryIndex = signal(0);
  readonly selectedHistory = computed(() => this.historyRows[this.selectedHistoryIndex()]);

  readonly sessions = signal<SessionRow[]>([
    { device: 'MacBook de Laura', client: 'Chrome · macOS', location: 'Bogotá, Colombia', lastActive: 'Sesión actual', current: true },
    { device: 'iPhone de Laura', client: 'App móvil · iOS', location: 'Bogotá, Colombia', lastActive: 'Hace 5 minutos', current: false },
    { device: 'PC de trabajo', client: 'Edge · Windows', location: 'Bogotá, Colombia', lastActive: 'Hace 2 días', current: false },
  ]);

  readonly syncState = signal<'ok'|'syncing'|'error'>('ok');
  readonly lastSync = signal('Hace 2 minutos');

  readonly showSidebar = computed(() => !['W01', 'W02'].includes(this.screen()));
  readonly activeNav = computed(() => {
    const s = this.screen();
    if (s === 'W03') return 'dashboard';
    if (s === 'W04' || s === 'W07') return 'historial';
    if (s === 'W12' || s === 'W13') return 'cuenta';
    if (s === 'W14') return 'privacidad';
    if (s === 'W16') return 'sincronizacion';
    return '';
  });

  readonly screenLabel: Record<ScreenId, string> = {
    W01: 'Inicia sesión', W02: 'Cuenta vinculada', W03: 'Dashboard', W04: 'Historial de alarmas',
    W07: 'Detalle de alarma', W12: 'Cuenta', W13: 'Sesiones activas', W14: 'Privacidad y datos', W16: 'Sincronización',
  };
  readonly statusLabel: Record<HistoryStatus, string> = { confirmed: 'Confirmada', postponed: 'Pospuesta', unconfirmed: 'Sin confirmar' };

  go(path: string): void { void this.router.navigate(['/web', path]); }
  open(id: OverlayId): void { this.overlay.set(id); }
  close(): void { this.overlay.set(null); }
  confirmDelete(kind: 'alarms'|'data'): void { this.deleteKind.set(kind); this.open('W15'); }

  login(): void {
    const valid = this.email().includes('@') && this.email().length > 3 && this.password().length >= 4;
    this.loginError.set(!valid);
    if (!valid) return;
    this.loading.set(true);
    window.setTimeout(() => { this.loading.set(false); this.go('cuenta-vinculada'); }, 700);
  }

  toggleMic(): void { this.micEnabled.update(value => !value); }

  viewDetail(index: number): void { this.selectedHistoryIndex.set(index); this.go('detalle-alarma'); }

  performDelete(): void {
    const kind = this.deleteKind();
    this.close();
    this.deleteConfirmedKind.set(kind);
    window.clearTimeout(this.deleteConfirmedTimer);
    this.deleteConfirmedTimer = window.setTimeout(() => this.deleteConfirmedKind.set(null), 5000);
  }

  removeSession(index: number): void {
    this.sessions.update(rows => rows.filter((_, i) => i !== index));
  }

  logout(): void { this.close(); this.go('login'); }

  syncNow(): void {
    this.syncState.set('syncing');
    window.setTimeout(() => {
      const ok = Math.random() > 0.25;
      this.syncState.set(ok ? 'ok' : 'error');
      if (ok) this.lastSync.set('Justo ahora');
    }, 1100);
  }
}
