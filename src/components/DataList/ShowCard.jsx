import { useState } from 'react';
import './ShowCard.css';

const ShowCard = (props) => {
    const [editId, setEditId] = useState(null);
    const [formData, setFormData] = useState({ title: '', description: '' });

    const onDelete = (id) => {
        props.onDelete(id);
    };

    const onEditClick = (data) => {
        setEditId(data.id);
        setFormData({ title: data.title, description: data.description });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = (id) => {
        if (formData.title.trim() === '' || formData.description.trim() === '') {
            alert("Title and Description cannot be empty!");
            return;
        }

        props.onEdit(id, formData);
        setEditId(null); // close edit form
    };

    const handleCancel = () => {
        setEditId(null);
    };

    return (
        props.allData.map((data) => (
            <div className='Card col-11 col-md-5' key={data.id}>
                {editId === data.id ? (
                    <>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder="Enter Title"
                        />
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Enter Description"
                        />
                        <button className='save-btn' onClick={() => handleSave(data.id)}>Save</button>
                        <button className='cancel-btn' onClick={handleCancel}>Cancel</button>
                    </>
                ) : (
                    <>
                        <h2>{data.title}</h2>
                        <hr />
                        <p>{data.description}</p>
                        <button className='edit-btn' onClick={() => onEditClick(data)}>Edit</button>
                        <button className='delete-btn' onClick={() => onDelete(data.id)}>Delete</button>
                    </>
                )}
            </div>
        ))
    );
};

export default ShowCard;
