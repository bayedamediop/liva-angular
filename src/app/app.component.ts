import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'liveSA';
  ok = false;
  nom = 'Baye Dame diop  koki';

  search = '';

  searchThis( data: string ): void{
    this.search = data;
    console.log(data);
  }
  onClickBtn(): any {
    if (this.ok === false) {
      this.ok = true;
    }else {
      this.ok = false;
    }
  }
}

