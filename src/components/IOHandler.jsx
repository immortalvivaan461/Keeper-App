import InputForm from './Form/InputForm';
import './IOHandler.css';
import ShowCard from './DataList/ShowCard';

const InputHandler = (props) => {

    const getnewData = (newData) => {
        console.log(newData);
        props.getData(newData);

    }

    const deleteItem = (deleteitm) => {
        console.log(deleteitm)
        props.deleteReq(deleteitm)
    }

    const editItem = (id, updatedData) => {
        props.editReq(id, updatedData);
    };

    return (
        <div className='body'>
            <div>
                <InputForm getData={getnewData} />
            </div>
            <hr />
            <div className='Output_handler'>
                <ShowCard allData={props.Tasks} onDelete={deleteItem} onEdit={editItem} />
            </div>
            
        </div>
    )
}

export default InputHandler;