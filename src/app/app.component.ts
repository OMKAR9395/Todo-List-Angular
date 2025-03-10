import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [FormsModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  task: string = "";
  taskList: { id: number, task: string }[] = [];
  taskIdCounter: number = 1; // Ensures unique IDs

  addTask() {
    if (this.task.trim()) {  // Prevents empty task addition
      this.taskList.push({ id: this.taskIdCounter++, task: this.task });
      this.task = ""; // Clears input field
    }
  }

  deleteTask(taskId: number) {
    this.taskList = this.taskList.filter(item => item.id !== taskId);
  }

  trackById(index: number, task: { id: number }): number {
    return task.id;
  }
}
