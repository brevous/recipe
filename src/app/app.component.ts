import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCxTvAmOc5LCzis5tJYW-uLP7UKuSKeAeQ',
      authDomain: 'ng-recipe-book-2d1b4.firebaseapp.com',
    });
  }

  // onNavigate(feature: string) {
  //   this.loadedFeature = feature;
  // }
}
