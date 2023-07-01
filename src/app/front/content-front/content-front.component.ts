import { Component, OnInit } from '@angular/core';
import { Commentaire } from 'src/app/model/Commentaire';
import { Reponse } from 'src/app/model/Reponse';

@Component({
  selector: 'app-content-front',
  templateUrl: './content-front.component.html',
  styleUrls: ['./content-front.component.css']
})
export class ContentFrontComponent implements OnInit {
  public gfg = true;
  public gff = true;
  public ggg = true;
  comment : Commentaire=new Commentaire();
  reponse : Reponse=new Reponse();
  constructor() { }

  ngOnInit(): void {
  }

}
