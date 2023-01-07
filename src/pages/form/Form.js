import React, { useState } from 'react'
import './Form.css'
import form_img from '../../assets/form-img.svg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Form() {
    const navigate = useNavigate();
    const [item, setItem] = useState({ title: '', link: '', url: '', tag: 'User', category: '', description: '' })

    function isURL(str) {
        var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return pattern.test(str);
    }

    const handleSubmit = async () => {
        try {
            for (var key in item) {

                if (item[key] === "") {
                    toast.error(`${key.charAt(0).toUpperCase() + key.slice(1)} is required.`, {
                        position: "bottom-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored"
                    })
                    return;
                }
            }

            if (!isURL(item['link'])) {
                toast.error(`Link is invalid.`, {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored"
                })
                return;
            }

            if (!isURL(item['url'])) {
                toast.error(`Icon Url is invalid.`, {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored"
                })
                return;
            }

            const res = await axios.get('https://media-content.ccbp.in/website/react-assignment/add_resource.json', item);

            toast.success('Added Successfully!', {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setItem(({ title: '', link: '', url: '', tag: 'User', category: '', description: '' }))
        } catch (err) {
            toast.error("Failed", {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored"
            })

            console.log(err.response);
        }

    }

    return (<><ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
    />
        <div className='form'>

            <div className='form-body dv-inp'>
                <div className='back-btn' onClick={() => navigate(-1)}><span className='back-lt'>&lt;</span> Users</div>
                <div className='form-container'>

                    <div className='item-details'>Item Details</div>
                    <div className='dv-mr'><label className='lb'>ITEM TITLE</label><input type="text" className='inp' value={item.title} name="title" onChange={(e) => setItem({ ...item, [e.target.name]: e.target.value })} required /></div>
                    <div className='dv-mr'><label className='lb'>LINK</label><input type="url" className='inp inp-link' value={item.link} name="link" onChange={(e) => setItem({ ...item, [e.target.name]: e.target.value })} required /></div>
                    <div className='dv-mr'><label className='lb'>ICON URL</label><input type="url" className='inp inp-link' value={item.url} name="url" onChange={(e) => setItem({ ...item, [e.target.name]: e.target.value })} required /></div>
                    <div className='dv-mr '> <label className='lb'>TAG NAME</label>
                        <select className="inp inp-select" value={item.tag} name="tag" onChange={(e) => setItem({ ...item, [e.target.name]: e.target.value })}>
                            <option value="User">User</option>
                            <option value="Requests">Requests</option>
                        </select>
                    </div>
                    <div className='dv-mr'><label className='lb'>CATEGORY</label><input type="text" name="category" required className='inp' value={item.category} onChange={(e) => setItem({ ...item, [e.target.name]: e.target.value })} /></div>
                    <div className='dv-mr'><label className='lb'>DESCRIPTION</label><textarea type="text" name="description" required className='inp txt-area' value={item.description} onChange={(e) => setItem({ ...item, [e.target.name]: e.target.value })} /></div>
                    <button className="lb btn" type="submit" value="CREATE" onClick={handleSubmit}>CREATE</button>
                </div>

            </div>

            <div className='image'>
                <img src={form_img} />
            </div>
        </div>
    </>
    )
}

export default Form