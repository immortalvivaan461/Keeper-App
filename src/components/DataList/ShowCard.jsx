import './ShowCard.css'

const ShowCard = (props) => {

    const onDelete = (id) =>{
        console.log("Delete ID:", id)
        props.onDelete(id)
    }


    return (
        props.allData.map((Data) => (
            <div className='Card col-11 col-md-5' key={Data.id}>
                <h2>{Data.title}</h2>
                <hr />
                <p>{Data.description}</p>
                <button className='delete-btn' onClick={() => onDelete(Data.id) }>Delete</button>
            </div>
        ))

    )
}

export default ShowCard;