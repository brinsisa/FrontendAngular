import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Avis } from 'src/app/model/Avis';
import { AvisService } from 'src/app/services/avis.service';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-addavis',
  templateUrl: './addavis.component.html',
  styleUrls: ['./addavis.component.css']
})
export class AddavisComponent implements OnInit {
  ctrl = new FormControl(null, Validators.required);
  avis : Avis=new Avis();
  id:any;
  titre:any="";
  currentRate=0;
  constructor(private avisService: AvisService,private router: Router,private ac:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.ac.snapshot.params['id'];
    if(this.id === undefined) {
      this.avis = new Avis();
      this.titre='Add new rating';
    }else {
      this.avisService.getAvisById(this.id).subscribe(res=>{
        this.avis=res;
        this.titre ='Update rating'+res.valeur_avis;
       // this.currentRate=res.valeur_avis;
      }) 
    }
  }
  save()
{
  console.log(this.avis);
  if(this.id === undefined){
    this.avisService.addAvis(this.avis).subscribe(res=>this.router.navigateByUrl('/lista'));  
  }else{
    this.avisService.updateAvis(this.id,this.avis).subscribe((data)=>this.router.navigateByUrl('/lista'));  
    
  }

}
  }


