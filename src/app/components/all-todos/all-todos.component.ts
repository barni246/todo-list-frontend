import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';
import { Todo } from 'src/app/models/todos';

@Component({
  selector: 'app-all-todos',
  templateUrl: './all-todos.component.html',
  styleUrls: ['./all-todos.component.scss']
})



export class AllTodosComponent implements OnInit {
  err:string = '';
  todos: any = [];
  newTodo:string='';

  constructor(private http: HttpClient,private as:AuthService) { }

  async ngOnInit() {
       try{
          this.todos = await this.loadTodos();
       console.log(this.todos)
       }catch(e) {
         this.err = "Fehler beim Laden!";
       }
   
  }

 
  async createTodo(): Promise<void> {
    try {
      const url = environment.baseUrl + "/todos/";
      const body = {
        "title": this.newTodo,
        "chacked": false
      };
     
      const response = await lastValueFrom(this.http.post(url, body));
      console.log('Todo created:', response);
      this.todos = await this.loadTodos();
    } catch (error) {
      console.error('Error creating todo:', error);
    }
  }
  
   loadTodos() {  const url = environment.baseUrl + "/todos/"; 
      return lastValueFrom(this.http.get(url)); 
     }



  // async updateTodos(todo: Todo): Promise<void> {
  //   try {
  //     debugger;
  //     const url = `${environment.baseUrl}/todos/${todo.id}/`;
  //     const body = {
  //       "title": todo.title,
  //       "checked": true
  //     };
     
  //     await lastValueFrom(this.http.put(url, body));
  //   } catch (error) {
  //     console.error('Error updating todo:', error);
  //   }
  // }
  

  toggleEditMode(todo: Todo): void {
    todo.editMode = !todo.editMode;
  }


}

