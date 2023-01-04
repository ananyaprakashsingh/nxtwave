import React from 'react'
import './Form.css'
import form_img from '../../assets/form-img.svg'
function Form() {
    return (
        <div className='form'>
            <div className='form-body dv-inp'>
                <div className='back-btn'><span className='back-lt'>&lt;</span> Users</div>
                <div className='form-container'>

                    <div className='item-details'>Item Details</div>
                    <div className='dv-mr'><label className='lb'>ITEM TITLE</label><input type="text" className='inp' /></div>
                    <div className='dv-mr'><label className='lb'>LINK</label><input type="url" className='inp inp-link' /></div>
                    <div className='dv-mr'><label className='lb '>ICON URL</label><input type="url" className='inp inp-link' /></div>
                    <div className='dv-mr '> <label className='lb '>TAG NAME</label>
                        <select className="inp inp-select" id="cars" name="cars">
                            <option value="User">User</option>
                            <option value="Requests">Requests</option>
                        </select>
                    </div>
                    <div className='dv-mr'><label className='lb'>CATEGORY</label><input type="text" className='inp' /></div>
                    <div className='dv-mr'><label className='lb'>DESCRIPTION</label><input type="text" className='inp' /></div>
                    <input className="lb btn" type="submit" value="CREATE"></input>
                </div>

            </div>

            <div className='image'>
                <img src={form_img} />
            </div>
        </div>

    )
}

export default Form