import { Component, Input, OnInit, OnDestroy, Output, EventEmitter} from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnDestroy{
  @Input('toPost') myPost!:Post;
  @Output() onRemove=new EventEmitter<number>()
  
  constructor() { }
    ngOnInit(): void {
  }

  removePost(){
    this.onRemove.emit(this.myPost.id)
  }
    
  ngOnDestroy(){
    console.log('метод ngOnDestroy');
  }  
}
