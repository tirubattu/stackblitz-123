import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css'],
  standalone: true,
})
export class RxjsComponent implements OnInit {
  observable: Observable<any>;

  constructor() {}

  createSimpleObservable() {
    this.observable = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.error('wrong value');
      observer.complete();
    });
    // below can be used alternatively
    // this.observable.subscribe((resp) => {
    //   console.log('Next >>> ',resp)
    // },(error)=>{
    //   console.log('error >>> ',error)
    // },()=>{
    //   console.log('complete >>> ')
    // })
    this.observable.subscribe({
      next: (val) => {
        console.log('Next >>> ', val);
      },
      error: (error) => {
        console.log('Error:', error);
      },
      complete: () => {
        console.log('complete:');
      },
    });
  }

  clickObservable() {
    
  }

  ngOnInit() {
    this.createSimpleObservable();
  }
}
