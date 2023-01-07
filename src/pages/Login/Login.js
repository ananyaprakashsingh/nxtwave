import React, { useState } from 'react'
import form_img from '../../assets/login.svg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login() {
    const navigate = useNavigate();
    const [item, setItem] = useState({ username: '', password: '' })



    const handleSubmit = async () => {

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
                <div className='back-btn' onClick={() => navigate(-1)}><span className='back-lt'>&lt;</span> Back</div>
                <div className='form-container'>

                    <div className='item-details'>Login</div>
                    <div className='dv-mr'><label className='lb'>UserName</label><input type="text" className='inp' value={item.username} name="username" onChange={(e) => setItem({ ...item, [e.target.name]: e.target.value })} required /></div>
                    <div className='dv-mr'><label className='lb'>Password</label><input type="password" className='inp inp-link' value={item.password} name="password" onChange={(e) => setItem({ ...item, [e.target.name]: e.target.value })} required /></div>
                    <button className="lb btn" type="submit" value="CREATE" onClick={handleSubmit}>Login</button>
                </div>

            </div>

            <div >
                <img src={form_img} className='limg' />
            </div>
        </div>
    </>
    )
}

export default Login