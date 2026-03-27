import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITodo } from '../../interface/todo';
type TTodo = {
  todo:ITodo,
  first:boolean,
  last:boolean,
  index:number,
  even:boolean
}
@Component({
  selector: 'app-todoitem',
  imports: [],
  templateUrl: './todoitem.html',
  styleUrl: './todoitem.css',
})
export class Todoitem {
  @Input() todoInfo:TTodo = {} as TTodo
  @Output() handleclick:EventEmitter<string> = new EventEmitter()
  onClick = (name:string)=>{
      this.handleclick.emit(name)
  }
}
