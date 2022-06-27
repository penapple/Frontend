import { Component, OnInit } from '@angular/core';
import { AloeToken } from '../models/AloeToken';
import { AloeTokenService } from '../services/aloe-token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private aloeTokenService : AloeTokenService ) { }

  ngOnInit(): void {
    
  }


  getTokens(){
    this.aloeTokenService.getAloeTokens()
    .subscribe((tokens : AloeToken[]) => {
      console.log(tokens)
    }
    );
  }

}
