import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { PointsComponent } from './components/points/points.component';
import { FeedComponent } from './components/feed/feed.component';
import { SettingsComponent } from './components/settings/settings.component';
import { HomePage } from './home/home.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'chat',
        component: ChatComponent
      },
      {
        path: 'points',
        component: PointsComponent
      },
      {
        path: 'feed',
        component: FeedComponent
      },
      {
        path: '',
        redirectTo: '/home/chat',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
