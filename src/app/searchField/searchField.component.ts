import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'search-field',
  templateUrl: './searchField.component.html'
})
export class SearchFieldComponent {
  constructor(private http: HttpClient) {
    http.get('assets/countries.json').subscribe(data => {
     console.log(this.convertToArray(data));
       this.countries = this.convertToArray(data);

    });
  }


  countries = ["Austria", "Australia", "Auscokoliv"];

  convertToArray(data) {
    return Object.keys(data).map(function(index) {
      return data[index];
    })
  }
}
