import React, { useState } from 'react'
import './Form.css'
import form_img from '../../assets/form-img.svg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function Form() {
    const navigate = useNavigate();
    const [item, setItem] = useState({ title: '', link: '', url: '', tag: '', category: '', description: '' })
    const handleSubmit = async () => {
        try {
            const res = await axios.get('https://media-content.ccbp.in/website/react-assignment/add_resource.json', item);
            console.log(res);
        } catch (err) {
            console.log(err.response);
        }

    }

    return (
        <div className='form'>
            <div className='form-body dv-inp'>
                <div className='back-btn' onClick={()=>navigate(-1)}><span className='back-lt'>&lt;</span> Users</div>
                <div className='form-container'>

                    <div className='item-details'>Item Details</div>
                    <div className='dv-mr'><label className='lb'>ITEM TITLE</label><input type="text" className='inp' value={item.title} name="title" onChange={(e) => setItem({ ...item, [e.target.name]: e.target.value })} /></div>
                    <div className='dv-mr'><label className='lb'>LINK</label><input type="url" className='inp inp-link' value={item.link} name="link" onChange={(e) => setItem({ ...item, [e.target.name]: e.target.value })} /></div>
                    <div className='dv-mr'><label className='lb'>ICON URL</label><input type="url" className='inp inp-link' value={item.url} name="url" onChange={(e) => setItem({ ...item, [e.target.name]: e.target.value })} /></div>
                    <div className='dv-mr '> <label className='lb'>TAG NAME</label>
                        <select className="inp inp-select" value={item.tag} name="tag" onChange={(e) => setItem({ ...item, [e.target.name]: e.target.value })}>
                            <option value="User">User</option>
                            <option value="Requests">Requests</option>
                        </select>
                    </div>
                    <div className='dv-mr'><label className='lb'>CATEGORY</label><input type="text" name="category" className='inp' value={item.category} onChange={(e) => setItem({ ...item, [e.target.name]: e.target.value })} /></div>
                    <div className='dv-mr'><label className='lb'>DESCRIPTION</label><textarea type="text" name="description" className='inp txt-area' value={item.description} onChange={(e) => setItem({ ...item, [e.target.name]: e.target.value })} /></div>
                    <button className="lb btn" type="submit" value="CREATE" onClick={handleSubmit}>CREATE</button>
                </div>

            </div>

            <div className='image'>
                <img src={form_img} />
            </div>
        </div>

    )
}

export default Form