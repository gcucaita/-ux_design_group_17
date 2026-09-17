import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IconComponent } from '../../shared/ui/icon.component';

type ScreenId = 'M01'|'X01'|'V01'|'M05'|'M06'|'V02'|'X02'|'X03'|'M08'|'M11'|'M12'|'M13'|'M14'|'M15'|'M19'|'M20'|'X16';
type OverlayId = 'X04'|'X05'|'X06'|'X07'|'X08'|'X09'|'X10'|'X11'|'X12'|'X13'|'X14'|'X15';

@Component({
  selector: 'app-mobile-screen',
  imports: [FormsModule, RouterLink, IconComponent],
  templateUrl: './mobile-screen.component.html',
  styleUrl: './mobile-screen.component.scss',
})
export class MobileScreenComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly data = toSignal(this.route.data, { initialValue: { screen: 'M01' } });

  readonly screen = computed(() => this.data()['screen'] as ScreenId);
  readonly overlay = signal<OverlayId | null>(null);
  readonly selectedDays = signal(['L', 'M', 'X', 'J', 'V']);
  readonly time = signal('06:30');
  readonly purpose = signal('Entrenamiento de fuerza');
  readonly intensity = signal('Media');
  readonly retries = signal(3);
  readonly postponeMinutes = signal(10);
  readonly voiceEnabled = signal(true);
  readonly notificationsEnabled = signal(true);
  readonly largeText = signal(false);
  readonly highContrast = signal(false);
  readonly voiceListening = signal(false);
  readonly alarmEnabled = signal(true);
  readonly customMinutes = signal(20);
  readonly date = signal('2026-09-17');

  readonly isDark = computed(() => ['M06', 'V02', 'X02', 'X03', 'M15'].includes(this.screen()));
  readonly showBottomNav = computed(() => ['M01', 'X01', 'M19', 'M20'].includes(this.screen()));

  readonly screenLabel: Record<ScreenId, string> = {
    M01: 'Mis alarmas', X01: 'Sin alarmas', V01: 'Crear alarma', M05: 'Alarma guardada',
    M06: 'Alarma activa', V02: 'Responder alarma', X02: 'Voz no reconocida', X03: 'Sin conexión',
    M08: 'Actividad confirmada', M11: 'Posponer', M12: 'Reprogramar', M13: 'Próximo intento',
    M14: 'Cierre seguro', M15: 'Permiso de micrófono', M19: 'Ajustes', M20: 'Privacidad y datos', X16: 'Datos eliminados',
  };

  go(path: string): void { void this.router.navigate(['/mobile', path]); }
  open(id: OverlayId): void { this.overlay.set(id); }
  close(): void { this.overlay.set(null); }
  toggleDay(day: string): void {
    const days = this.selectedDays();
    this.selectedDays.set(days.includes(day) ? days.filter(item => item !== day) : [...days, day]);
  }
  isDaySelected(day: string): boolean { return this.selectedDays().includes(day); }
  toggleAlarm(): void { this.alarmEnabled.update(value => !value); }
  toggleVoice(): void { this.voiceEnabled.update(value => !value); }
  toggleNotifications(): void { this.notificationsEnabled.update(value => !value); }
  chooseIntensity(value: string): void { this.intensity.set(value); this.close(); }
  chooseRetries(value: number): void { this.retries.set(value); this.close(); }
  choosePostpone(value: number): void { this.postponeMinutes.set(value); }
  saveCustomPostpone(): void { this.postponeMinutes.set(this.customMinutes()); this.close(); }
  simulateVoice(): void {
    this.voiceListening.set(true);
    window.setTimeout(() => { this.voiceListening.set(false); this.go('voz-no-reconocida'); }, 1200);
  }
}
