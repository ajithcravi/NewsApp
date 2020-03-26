import { Component, OnInit } from '@angular/core';
import { NewsService } from "../news.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  newsList: any;

  constructor( private newsservice : NewsService) { }

  ngOnInit() {
    this.newsservice.getData('top-headlines?country=in').subscribe(data =>{
      console.log(data);
      this.newsList = data;
    })
  }

  getDate(date){
    console.log(date.toDateString());
  }

}
