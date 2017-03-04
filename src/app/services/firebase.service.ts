import { Injectable } from "@angular/core";
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import "rxjs/add/operator/map";

import { Workout } from "../workout";
import { Type } from "../type";


@Injectable()
export class FirebaseService {
  
  workouts : FirebaseListObservable<Workout[]>;
  types : FirebaseListObservable<Type[]>;

  constructor(private _af: AngularFire) {
  } 
  
  getWorkouts(type:string=null){
      console.log('here in services getWorkouts')
      console.log("type " + type)
      if (type != null && type != "0") {
        this.workouts = this._af.database.list("/workouts", {
          query: {
              orderByChild: 'type',
              equalTo: type
            }
          }) as FirebaseListObservable<Workout[]>        
      } else {
        this.workouts = this._af.database.list("/workouts") as
        FirebaseListObservable<Workout[]>
        //console.log(this.workouts)
      }
      return this.workouts;
  }
  
  getTypes(){
      this.types = this._af.database.list("/types") as
      FirebaseListObservable<Type[]>
      return this.types;
  }
  
  addWorkout(newWorkout){
    console.log(newWorkout)
    return this.workouts.push(newWorkout);
  }
  
  updateWorkout(key, updWorkout) {
    return this.workouts.update(key, updWorkout);
    
  }
  
  deleteWorkout(key) {
    return this.workouts.remove(key);
  }
  
}

