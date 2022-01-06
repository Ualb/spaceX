import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import {Rocket} from '../schemas/rockets'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'space';
  result:Rocket[] = new Array();

  constructor(private http: HttpClient){

  }

  ngOnInit() {
    this.http.get('https://api.spacexdata.com/v4/rockets')
    .subscribe((rockets: any) => {

      const data:any[] = rockets; 
      
      this.result = data.map(e => {
        return {
          name: e.name,
          description: e.description,
          flickr_images: e.flickr_images
        }
      })

      this.result.forEach(e => {
        e.flickr_images = e.flickr_images.slice(0, 1);
      })

      console.log(this.result)
    })


  }

}
