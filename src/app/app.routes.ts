import { Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { PanicAttacksComponent } from './components/panic-attacks/panic-attacks.component';
import { SleepTrackerComponent } from './components/sleep-tracker/sleep-tracker.component';
import { SleepQualityComponent } from './components/sleep-quality/sleep-quality.component';
import { HeartRateComponent } from './components/heart-rate/heart-rate.component';
import { AlertHistoryComponent } from './components/alert-history/alert-history.component';

export const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'panic-attacks', component: PanicAttacksComponent },
  { path: 'sleep-tracker', component: SleepTrackerComponent },
  { path: 'sleep-quality', component: SleepQualityComponent },
  { path: 'heart-rate', component: HeartRateComponent },
  { path: 'alert-history', component: AlertHistoryComponent },
];



