import { Component } from '@angular/core';
import { Observable } from 'rxjs';

export interface Post{
  title:string;
  text:string;
  id:number;
  date: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BlogComponents';
  search = '';

  date$: Observable<Date> = new Observable(obs => {
    obs.next(new Date());
    setInterval(() => {
      obs.next(new Date());
    }, 1000);
  });

  posts: Post[]=[
    {title:'Вивчаю компоненти', text:'Створюю проект "Блог"', id:1, date: new Date(),},
    {title:'Вивчаю директиви', text:'Все ще створюю "Блог"', id:2, date: new Date()}
  ]

  updatePosts(post:Post){
    this.posts.unshift(post);
    console.log('Post', post);
  }

  deletePost(id:number){
    this.posts=this.posts.filter(p=>p.id!==id)
  }
}
