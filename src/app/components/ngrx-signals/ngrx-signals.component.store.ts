import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { Task } from './interfaces/Task';
import { Filter} from './interfaces/Filter';
import { computed } from '@angular/core';

type TasksState = {
  tasks: Task[];
  filter: Filter;
};

const initialState: TasksState = {
  tasks: [],
  filter: 'all'
};

export const TasksStore = signalStore(
  withState(initialState),
  withComputed((state) => ({
    visibleTasks: computed(()=>{
        const tasks = state.tasks();
        const filter = state.filter();

    switch (filter) {
      case 'pending':
        return tasks.filter((task) => !task.completed);
      case 'done':
        return tasks.filter((task) => task.completed);
      default:
        return tasks;
    }
    })
  })),
  withMethods((store) => ({
    changeFilter:(newFilter:Filter) => {
        patchState(store, {
            filter: newFilter
        });  
    },
    loadTasks : () => {
        const newTasks = [
            {id:'1', title: 'Task 1', completed: false },
            {id:'2', title: 'Task 2', completed: true },
            {id:'3', title: 'Task 3', completed: false },
            {id:'4', title: 'Task 4', completed: true },
        ]

        patchState(store, {
            tasks: newTasks
        })
    }
  }))
);