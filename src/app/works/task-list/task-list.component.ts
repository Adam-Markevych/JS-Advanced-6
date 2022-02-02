import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  public disabled_btnAdd = true;
  public n: any;
  public inpTask!: string;
  public newObj: any;
  public h = 3;
  public objTask = [
    {
      task: 'Java Script'
    },
    {
      task: 'HTML'
    },
    {
      task: 'CSS'
    }
]
  constructor(){}
  ngOnInit(): void {
  }

  
  CheckBtnAdd(): void{
    if(this.inpTask.length != 0){
      this.disabled_btnAdd = false;
    } else{
      this.disabled_btnAdd = true;
    }
  }
  btnADD(): void{
        for(let i = 0; i <= this.objTask.length; i++){
          this.h = i + 1;
        }
        console.log(this.h)
        this.newObj = {
          task: this.inpTask
        }
        this.objTask.push(this.newObj);
        this.inpTask = '';
        this.disabled_btnAdd = true;
    }
    getTask(data: any): void{
      this.h = data;
    }
}

