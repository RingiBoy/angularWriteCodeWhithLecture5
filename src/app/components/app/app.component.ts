import {Component} from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';
import {ServeCommand} from '@angular/cli/commands/serve-impl';
import {FindSmthService} from '../services/find-smth.service';
import {FindAllPostsOfUserService} from '../services/find-all-posts-of-user.service';
import {User} from '../model/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  type: string;
  idTs: number;
  typeUser: User;
  constructor(private serviceFind: FindSmthService, private servicePost: FindAllPostsOfUserService) {
  }


  findSmth(): void {
    console.log(this.type);
    this.serviceFind.FindAllAny(this.type).subscribe(value => console.log(value));
  }


  idSmth(): void {
    console.log(this.idTs);
    
    this.servicePost.showPostofId(this.idTs).subscribe(value => console.log(value));
  }
}
