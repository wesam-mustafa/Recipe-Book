import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature="recipe";
    onNavigate(feature:string){
      this.loadedFeature=feature;
    }
    ngOnInit(){
      firebase.initializeApp({
        apiKey: "AIzaSyDERe9OPjRo5v7UIqEDmIMKo6BYKz7VIAs",
        authDomain: "ng-recipe-book-96581.firebaseapp.com"
      });
    }
}
