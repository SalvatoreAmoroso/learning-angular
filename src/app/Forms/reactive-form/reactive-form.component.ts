import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Task2 } from '../model-interfaces';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {

  task: Task2;
  taskForm: FormGroup;
  tagsArray: FormArray;

  constructor(private taskService: TaskService, fb: FormBuilder) {
    this.useFormBuilder(fb);
    this.tagsArray = this.taskForm.controls["tags"] as FormArray;
  }

  private useNativeWay() {
    this.taskForm = new FormGroup({
      title: new FormControl(),
      description: new FormControl(),
      favorite: new FormControl(false),
      state: new FormControl("BACKLOG"),
      tags: new FormArray([
        new FormGroup({
          label: new FormControl()
        })
      ]),
      assignee: new FormGroup({
        name: new FormControl(),
        email: new FormControl()
      })
    });
  }

  //Einfache Variante über den Formbuilder (für die manuelle Variante siehe useNativeWay)
  private useFormBuilder(fb: FormBuilder) {
    this.taskForm = fb.group({
      title: [],
      description: [],
      favorite: [],
      state: ["BACKLOG"],
      tags: fb.array([
        fb.group({
          lavel: []
        })
      ]),
      assignee: fb.group({
        name: [],
        email: []
      })
    })
  }

  saveTask(value: any) {
    Object.assign(this.task, value); //Assign kopiert die Eigenschaften aus value in das Model. So bleiben Eigenschaften des Models erhalten (z.B. die technische ID, welche nicht in value ist)
    this.taskService.saveTask(this.task);
  }

  removeTag(i: number) {
    this.tagsArray.removeAt(i);
    return false; //Verhindert, dass das Formular abgesendet wird. Alternativ den Button mit type="button" definieren in HTML.
  }

  loadTask(i: number) {
    this.task = this.taskService.getTask(i);
    this.adjustTagsArray(this.task.tags); //Wir müssen hier erst die Kontrollelemente erstellen, die dem Task entsprechen. Zwei Tags => Zwei Tag Komponenten in der UI erstellen
    this.taskForm.patchValue(this.task); //patchValue lädt ein Task Objekt und ignoriert nicht vorhandene Elemente. setValue wirft stattdessen eine Exception
    //patchValue und setValue bieten auch die Klassen FormControl und FormArray an (um Teile des Formulars nachzuladen)
    return false;
  }

  private adjustTagsArray(tags: any) {
    const tagCount = tags ? tags.length : 0;
    while (tagCount > this.tagsArray.controls.length) {
      this.addTag();
    }

    while (tagCount < this.tagsArray.controls.length) {
      this.removeTag(0);
    }
  }

  addTag() {
    this.tagsArray.push(this.createTagGroup())
    return false; //Verhindert, dass das Formular abgesendet wird. Alternativ den Button mit type="button" definieren in HTML.
  }

  private createTagGroup(): FormGroup {
    return new FormGroup({
      label: new FormControl()
    });
  }
}
