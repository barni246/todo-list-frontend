export class Todo {
    id: number;
    title: string;
    checked: boolean;
    editMode:any;
  
    constructor(id: number, title: string, checked: boolean, editMode:any) {
      this.id = id;
      this.title = title;
      this.checked = checked;
      this.editMode = editMode;
    }
  }