import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  post = [
    {title: 'First Post', content: 'This is a post'},
    {title: 'Second Post', content: 'This is a post'},
    {title: 'Third Post', content: 'This is a post'}
  ];

  constructor() { }

  ngOnInit() {}

}
