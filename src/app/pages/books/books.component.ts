import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-books',
  imports: [],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit {

    data:any[] = [];
    constructor(private booksService:BooksService){}
    ngOnInit(): void {
      this.booksService.getBooks().subscribe((books:any['']) =>{
        this.data = books;
      })
    }
}
