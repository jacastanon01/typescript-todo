export interface TodoType {
    id: number;
    text: string | number;
    isComplete: boolean;
}
export interface IActionType {
    type: "ADD_TODO" | "DELETE_TODO" | "EDIT_TODO" | "COMPLETE_TODO";
    text?: string | number;
    id?: number;
}
export interface IStateType {
    todos: TodoType[];
    //dispatch: React.Dispatch<IActionType>

}