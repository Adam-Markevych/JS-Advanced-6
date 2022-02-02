import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-list',
  templateUrl: './child-list.component.html',
  styleUrls: ['./child-list.component.scss']
})
export class ChildListComponent implements OnInit {
  @Input() task!: string; 
  @Input() arr!: any;
  @Output() fromChild = new EventEmitter();
  public disabled_btnSave = false;
  public checked: any;
  public disCheck = false;
  public btn_delDisab = true;
  public btnDEL = true;
  public clickEdit = false;
  public editTask!: string;
  public n = 1;
  public saveIndex!: number;
  constructor() { }

  ngOnInit(): void {
  }
  btnDelete(index: number): void{
    this.arr.splice(index, 1);
    for(let i = 0; i <= this.arr.length; i++){

      this.n = i;
    }
    console.log(this.n)
    this.fromChild.emit(this.n)
  }

  btnEdit(index: number): void {
    this.clickEdit = true;
    this.saveIndex = index;
    this.editTask = this.arr[index].task;
  }
  CheckBtnSave(): void {
    if(this.editTask.length != 0){
      this.disabled_btnSave = false;
    }else{
      this.disabled_btnSave = true;
    }
  }
  btn_saveEdit(): void{
      let newObj = {
        task: this.editTask
      }
      this.arr[this.saveIndex] = newObj;
      this.editTask = '';
      this.clickEdit = false;
  }
}
