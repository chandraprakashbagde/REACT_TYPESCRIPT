class Todo{
    id: number;
    text: string;

    constructor(text: string){
        this.id= new Date().getMilliseconds();
        this.text = text;

    }
}

export default Todo