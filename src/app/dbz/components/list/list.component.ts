import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{

  @Input()
   public CharacterList: Character[]= []


 @Output()
   public onDelete: EventEmitter<string> = new EventEmitter();

   DeleteCharacterById(id?:string):void {

    if  (!id) return;

   this.onDelete.emit(id);

 }
}
