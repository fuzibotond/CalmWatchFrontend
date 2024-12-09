import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatTabsModule} from '@angular/material/tabs';
import { MatToolbarModule} from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component'
import { PanicAttacksComponent } from './components/panic-attacks/panic-attacks.component';
import { SleepTrackerComponent } from './components/sleep-tracker/sleep-tracker.component';
import { SleepQualityComponent } from './components/sleep-quality/sleep-quality.component';
import { HeartRateComponent } from './components/heart-rate/heart-rate.component';
import { AlertHistoryComponent } from './components/alert-history/alert-history.component';
import { ActivatedRoute } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, RouterOutlet, RouterLink, RouterLinkActive,
    MatTabsModule,
    MatToolbarModule,
    ProfileComponent,
    PanicAttacksComponent,
    SleepTrackerComponent,
    SleepQualityComponent,
    HeartRateComponent,
    AlertHistoryComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  activeLinkIndex = -1;
  constructor(private route: ActivatedRoute, public router: Router){}
  navigation: any = [
    {
      label: 'Profile',
      link: '/profile',
      index: 0
    },
    {
      label: 'Panic attacks',
      link: '/panic-attacks',
      index: 1
    },
    {
      label: 'Sleep quality',
      link: '/sleep-quality',
      index: 2
    },
    {
      label: 'Sleep tracker',
      link: '/sleep-tracker',
      index: 3
    },
    {
      label: 'Heart rate',
      link: '/heart-rate',
      index: 4
    }
  ];
  title = 'CalmWatchFrontend';

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        console.log('Tab changed to:', event.url);
        // Optionally perform actions based on the URL
      });
  }
}

