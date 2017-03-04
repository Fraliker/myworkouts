import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';


import { MyApp } from './app.component';
import { WorkoutsPage } from '../pages/workouts/workouts';
import { AddWorkoutPage } from '../pages/add-workout/add-workout';
import { WorkoutDetailsPage } from '../pages/workout-details/workout-details';

import { AboutPage } from '../pages/about/about';

import { TabsPage } from '../pages/tabs/tabs';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyBRgSJE7gaNQQq3wQGUVff_lWOQG6ZsURw",
  authDomain: "workouttracker-5c7be.firebaseapp.com",
  databaseURL: "https://workouttracker-5c7be.firebaseio.com",
  storageBucket: "workouttracker-5c7be.appspot.com",
  messagingSenderId: "544101582809"
};


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    WorkoutsPage,
    AddWorkoutPage,
    WorkoutDetailsPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    WorkoutsPage,
    AddWorkoutPage,
    WorkoutDetailsPage,    
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
