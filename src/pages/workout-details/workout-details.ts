import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FirebaseService } from "../../app/services/firebase.service"
import { WorkoutsPage } from "../workouts/workouts"

@Component({
  selector: 'page-workout-details',
  templateUrl: 'workout-details.html'
})
export class WorkoutDetailsPage {
    public workout:any;
    public result:any;

  constructor(public navCtrl: NavController, public params: NavParams, public firebaseService: FirebaseService) {
    this.workout = params.get('workout')
  }
  
  deleteWorkout(workout) {
    
    console.log("workout.$key " + workout.$key);
    this.firebaseService.deleteWorkout(workout.$key);
    this.navCtrl.push(WorkoutsPage);

  }

}
