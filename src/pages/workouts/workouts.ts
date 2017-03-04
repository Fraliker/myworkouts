import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { FirebaseService } from "../../app/services/firebase.service"
import { WorkoutDetailsPage } from "../workout-details/workout-details"


@Component({
  selector: 'page-workouts',
  templateUrl: 'workouts.html'
})
export class WorkoutsPage {
  workouts:any;

  constructor(public navCtrl: NavController, private firebaseService:FirebaseService) {

  }
  
  ngOnInit() {
    this.firebaseService.getWorkouts().subscribe(workouts => {
      console.log(workouts);
      this.workouts = workouts;
    })
  }
  
  workoutSelected(event, workout){
    console.log('here in workoutSelected')
    this.navCtrl.push(WorkoutDetailsPage, {workout:workout})
  }

}
