import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'autocomplete';

  queryString: string;

  dataset = ['samip', 'helena', 'abhishek', 'prafull', 'samipi'];

  searchResults: Array<String> = this.dataset;

  onSubmit() {
    this.fetch(this.queryString).then((res) => { 
      this.searchResults = res;
    }).catch(err => console.log(err));
  }

  fetch(queryParam: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.dataset.filter(d => d === queryParam ))
      }, 1000);
    })
  }
}
