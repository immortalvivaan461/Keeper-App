import { useState } from 'react';
import './InputForm.css';

const InputForm = (props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const titleChangeHandler = (evt) => {
        setTitle(evt.target.value)
    }

    const descriptionChangeHandler = (evt) => {
        setDescription(evt.target.value)
    }

    const SubmitHandler = (event) => {
        event.preventDefault();

        const newData = {
            id: Date.now().toString(),
            title: title,
            description: description
        }

        if (title.trim() === '' || description.trim() === '') {
            alert("Title and Description cannot be empty!");
            return;
        }
        // console.log(newData)
        //allow to pass the data in the props getData from parent component
        props.getData(newData);

        setTitle('');
        setDescription('');
    }

    return (
        <form onSubmit={SubmitHandler}>
            <div className='Inputform'>
                <div className='InputBox'>
                    <label htmlFor='title'>Title:</label>
                    <input id="title" type="text" value={title} onChange={titleChangeHandler} placeholder='Enter Title' required />
                </div>
                <div className='InputBox'>
                    <label htmlFor='description'>Description:</label>
                    
                    <textarea id="description" type="text" value={description} onChange={descriptionChangeHandler} placeholder='Enter Description' required ></textarea>
                </div>

                <button type='submit'>Submit</button>
            </div>
        </form>
    )
}

export default InputForm;
