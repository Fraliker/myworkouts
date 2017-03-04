import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { FirebaseService } from "../../app/services/firebase.service"
import { WorkoutsPage } from "../workouts/workouts"


@Component({
  selector: 'page-add-workout',
  templateUrl: 'add-workout.html'
})
export class AddWorkoutPage {
  public title:String;
  public note:String;
  public type:String;
  public workout:any;
  
  //public result:any;
      

  constructor(public navCtrl: NavController, private firebaseService:FirebaseService) {
    // this.title="";//this.note="";//this.type="";
  }
  
  // Add workout
  onSubmit() {
      // build the workout from the fields
      this.workout = {
        title:  this.title,
        note:   this.note,
        type:   this.type
      }
      
      // add tot the firebase db
      this.firebaseService.addWorkout(this.workout);
        /*.subscribe(data => {this.result = data;}); // not required - in fact produces an error */
      
      // return to the workouts page which will display the full list of workouts
      this.navCtrl.push(WorkoutsPage);
      
      // reset the values
      this.title = null;
      this.note = null;
      this.type = null;

  }
}
