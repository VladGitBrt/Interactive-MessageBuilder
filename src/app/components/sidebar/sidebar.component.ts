import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IMessage } from 'src/app/model/app.model';
import { MessageActions } from 'src/app/store/actions/app.action';
import { MessageSelectors } from 'src/app/store/selectors/app.selector';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  targetMessage: Observable<IMessage>
  targetMessageID = '';
  public addTextTitle = '';
  constructor(private store$: Store) {  
    
    this.targetMessage = this.store$.select(MessageSelectors.targetMessage);
   }

  ngOnInit(): void {
  }

  public addText(): void{
    
  }
  
  public setStartMessage() :void{
    this.store$.select(MessageSelectors.targetID)
    .subscribe(id => {
      this.targetMessageID = id;
    })
    console.log(this.targetMessageID)
    this.store$.dispatch(MessageActions.setStartMessage({id: this.targetMessageID}))
  }
}
