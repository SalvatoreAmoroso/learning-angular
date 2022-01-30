import { Task2 } from '../model-interfaces';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
const STORAGE_KEY = 'tasks_formulare';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task2[] = [];

  constructor() {
    this._loadFromLocalStorage();
  }

  findTasks(query = ''): Task2[] {
    if (!query) {
      return this.tasks;
    }
    return this.tasks.filter(task => {
      return ((task.title && task.title.indexOf(query) !== -1) ||
        (task.description && task.description.indexOf(query) !== -1) ||
        (task.state && task.state.indexOf(query) !== -1)
      );
    });
  }

  findTasksAsync(query = ''): Observable<Task2[]> {
    return of(this.findTasks(query));
  }


  getTask(id: number | string): Task2 {
    const task = this.tasks.filter(_task => _task.id == id)[0];
    return <Task2>(Object.assign({}, task));
  }

  getTaskAsync(id: number | string): Observable<Task2> {
    return of(this.getTask(id));
  }

  saveTask(task: Task2) {
    if (task.id) {
      this.tasks = this.tasks.map(_task => {
        return _task.id === task.id ? task : _task;
      });
    } else {
      task.id = new Date().getTime(); // Pseudo Id
      this.tasks = [...this.tasks, task];
    }
    this._saveToLocalStorage();
    return task;
  }

  deleteTask(task: Task2) {
    this.tasks = this.tasks.filter(_task => _task.id !== task.id);
    this._saveToLocalStorage();
  }

  _saveToLocalStorage() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.tasks));
  }

  _loadFromLocalStorage() {
    const tasksString = localStorage.getItem(STORAGE_KEY);
    if (tasksString) {
      this.tasks = <Task2[]>JSON.parse(tasksString);
    } else {
      this.tasks = [
        {
          id: 1,
          title: 'Neues Entwickler-Team zusammenstellen ',
          description: 'Das ist wirklich sehr dringend. Bitte so schnell wie möglich darum kümmern...',
          state: 'IN_PROGRESS',
          assignee: {
            name: 'John Doe',
            email: 'john@doe.com'
          }
        }, {
          id: 2,
          title: 'Ersten Prototyp mit Angular 2.0 entwickeln',
          description: 'Der Prototyp soll zeigen, wie Routing und HTTP-Anbindung umgesetzt werden können.',
          state: 'BACKLOG',
          tags: [{
            label: 'wichtig'
          }, {
            label: 'dringend'
          }],
          assignee: {
            name: 'Max Doe',
            email: 'max@doe.com'
          }
        }];
    }
  }

}
