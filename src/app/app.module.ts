import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ChatComponent } from './components/chat/chat.component';
import { PointsComponent } from './components/points/points.component';
import { SettingsComponent } from './components/settings/settings.component';
import { FeedComponent } from './components/feed/feed.component';
import { HomePageModule } from './home/home.module';

@NgModule({
  declarations: [AppComponent, ChatComponent, PointsComponent, SettingsComponent, FeedComponent],
  entryComponents: [],
  imports: [
    HomePageModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
