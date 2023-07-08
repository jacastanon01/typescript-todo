# Typescript

- ## Types:
    - You have your primitive types which are self explainitory. after the variable name add a colon and type. 
            

            let name: string; 

            let num: number; 

            let isBool: boolean;

        
    - Non primitive types such as objects and arrays are different
    - If you do not define a type, TS will implicitly assign the type `any`. The who purpose of TS is to define static types, so it is recommended to use the `unknown` type instead of `any` if you do not know what the type will be
    - ## Arrays
        - For an array with a single type, you can declare it like
            ```
            let arr = str[]; 
            let numArr = num[]
            ```
    - ## Tuples
        - A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.
            ```
            type StringNumberPair = [string, number];
            ```
    - ## Object types
        - Any javascript type that contains properties
        - Can make property optional with `?` before the colon
    - ## Functions
        - Function parameters and returns can be type annotated but not required. Typescript can infer types similar to type annotation in variables
        - Contextual typing is when TS uses the context of the how the function occurred 
        - If you want the function to return undefined set return type to `void`. If you want to return nothing set return type to `never`
    - ## Unions
        - You can combine a variety of types into one type. The first way to combine types you might see is a union type. A union type is a type formed from two or more other types, representing values that may be any one of those types. We refer to each of these types as the union’s members.
        - TypeScript will only allow an operation if it is valid for every member of the union. For example, if you have the union string | number, you can’t use methods that are only available on string:
            ```
            function printId(id: number | string) {
                console.log(id.toUpperCase());
                Property 'toUpperCase' does not exist on type 'string | number'.
                Property 'toUpperCase' does not exist on type 'number'.
            }
            ```
        - The solution is to narrow the union with conditionals or other code. You can use methods for similar types in unions. For example both strings and arrays have a slice method, in this case you do not need to narrow the union to perform that operation

- ## Type alias vs Interface
    - Type alias or interface are prefered over object types
    - ### Type alias
        - a type alias is like a varibale for all types. You can name and reference types you create.
        
            type Point = {
                x: number;
                y: number;
            };
                
            function printCoord(pt: Point) {
                console.log("The coordinate's x value is " + pt.x);
                console.log("The coordinate's y value is " + pt.y);
            }
            
        
    - ### Interface
        - An interface is just another way to name object types. 
        - Interaces can be opened up to add new properties. This is called extending a type
            ```
            interface Animal {
                name: string;
            }
            
            interface Bear extends Animal {
                honey: boolean;
            }

            const bear = getBear();
            bear.name;
            bear.honey;
            ```

- ## Hooks and Typescript
    - useState:
        - Typescript will infer types based on the default value, but you can explicitly set types like this: 
            ```
            interface TodoType {
                id: number;
                text: string | number;
                isComplete: boolean;
            }

            const [todo, setTodo] = useState<string | number>("")
            const [todosList, setTodosList] = useState<TodoType[]>([])
            ```
    - useRef:
        - useRef is a hook that allows you to directly interact with DOM nodes and ctonains a value that will persists across renders without causing a re-render. The type for most refs will be `HTML{TagName}Element`
            ```
            const inputRef = useRef<HTMLInputElement>(null)
            ```
    

- ## Errors:
    Code and error message:
    ```
    const EditInput: React.FC = ({todo, todos, setTodos, handleEdit}: PropsTypes) => {
        return (
            <div className="edit-input">
                <input type="text" min="3" onChange={(e) => 
                    setTodos(todos.map(p => p.id === todo.id ? 
                        {
                            ...p, 
                            text: e.target.value
                        } : p
                    ))
                } />
                <button className="edit-input__btn" onClick={handleEdit}>Done</button>
            </div>
        )
    }
    Type '({ handleComplete, handleDelete, handleEdit }: IconProps) => JSX.Element' is not assignable to type 'FC<{}>'.
    Types of parameters '__0' and 'props' are incompatible.
    Type '{}' is missing the following properties from type 'IconProps': handleDelete, handleEdit, handleComplete
    ```
    Solution:
    I ran into this error so many times building this app. The solution is to provide an interface to the React functional component type so that it can recieve the defined paramters. `Type '({ handleComplete, handleDelete, handleEdit }: IconProps) => JSX.Element' is not assignable to type 'FC<{}>'.` is basically telling me "Hey! These properties cannot be assigned in this component because currently type FC is only accepting an empty object. Although I'm reading the Functional Component type is discouraged by the react TS docs, so maybe I'll learn a better way. 