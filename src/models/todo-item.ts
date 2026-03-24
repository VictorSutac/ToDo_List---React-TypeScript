export interface ToDo {
  id: number;
  text: string;
  isDone: boolean;
}

// создали отдельно фаил ToDo.ts с интерфейсом
// чтобы не дублировать код
// ранее он был в ToDoLis.ts прописан и в ToDoLisItem.ts 
// теперь там указано ToDo - как объект