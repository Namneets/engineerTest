declare var $: any;
import { Component } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'engineerTest';
  tablePostData : any[] = [];
  currentRowSelected : any;

  constructor(private http:Http){
	   setInterval(()=>{
	  		this.getTablePostData();
	  	},1000)
  }


  public getTablePostData():any{
  	this.http.get('https://hn.algolia.com/api/v1/search_by_date?tags=story').subscribe(response=>{
  		if(response.json().hits && response.json().hits.length) this.tablePostData = response.json().hits;
  		else this.tablePostData = [];
  	})
  }

  public openModal(item:any):any{
  	this.currentRowSelected = item;
  	$('#myModal').modal('show');
  }

  public closeModal():any{
  	$('#myModal').modal('hide');
  	$('#myModal').removeClass('show');
  }


}
