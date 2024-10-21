import { JsonPipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from './interfaces/Task';
import { Filter } from './interfaces/Filter';
import { TasksStore } from './ngrx-signals.component.store';


@Component({
  selector: 'app-ngrx-signals',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  providers: [TasksStore],  //es un provider. 
  templateUrl: './ngrx-signals.component.html',
  styleUrl: './ngrx-signals.component.scss'
})



export class NgrxSignalsComponent {

  readonly store = inject(TasksStore); 

  title="NGRX Signals Example";


  ngOnInit(): void {
    this.store.loadTasks(); 
  }


 /* filter= signal<Filter>('all')



  tasks = signal<Task[]>([
    {id:'1', title: 'Task 1', completed: false },
    {id:'2', title: 'Task 2', completed: true },
    {id:'3', title: 'Task 3', completed: false },
  ]);

  //visibleTasks = signal<Task[]>(this.tasks());

  visibleTasks = computed(() => {

    const tasks = this.tasks();
    const filter = this.filter();

    switch (filter) {
      case 'pending':
        return tasks.filter((task) => !task.completed);
      case 'done':
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
  })

  showPendingTasks() {
    const tasks = this.tasks().filter((task) => !task.completed);
    this.visibleTasks.set(tasks);
  }

  showAllTasks() {
    this.visibleTasks.set(this.tasks())
  }

  showDoneTasks() {
    const tasks = this.tasks().filter((task) => task.completed);
    this.visibleTasks.set(tasks);
  }

    changeFilter(filter: Filter) {
      this.filter.set(filter)
    }*/

}
