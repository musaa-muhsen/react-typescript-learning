//rafce

import React, {useRef} from 'react'
import './styles.css';

interface Props {
    todo?: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

//const InputField = ({todo, setTodo} : Props) => {
const InputField: React.FC<Props> = ({todo, setTodo, handleAdd}) => {

    const inputRef = useRef<HTMLInputElement>(null)

  return (
    <>
    <form onSubmit={(e) => {
        inputRef.current?.blur()
        handleAdd(e)}}>
        <input
        ref={inputRef}
         type="input" 
                value={todo}
                onChange={
                    (e)=> setTodo(e.target.value)
                }
        placeholder="Enter a task" className='input__box' />
        
        <button className="input__submit" type="submit">go</button>
         
    </form>
     
    </>
  )
}

export default InputField