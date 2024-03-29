import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { requestCreateWin } from '../requests/WinRequests';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import 'react-quill/dist/quill.bubble.css'


export const WinForm = ({token}) => {
    const [win, setWin] = useState(null)
    const [winTitle, setWinTitle]= useState('')
    const [winDescription, setWinDescription]= useState('')
    const [winDate, setWinDate] = useState('')
    const [winPicture, setWinPicture] = useState()
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    const [isDraft, setIsDraft] = useState(true)

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            [{ 'bold': true }, { 'italic': true }, { 'underline': true }, { 'strike': true }],
            [{ list:  "ordered" }, { list:  "bullet" }],
            ["blockquote", "code-block"],
        ],
        history: {
            delay: 2000,
            maxStack: 500,
            userOnly: false}
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setError(null)
        requestCreateWin(token, winTitle, winDescription, winDate, winPicture, isDraft)

        .then((res) => {
            setWin(res.data)
            navigate('/wins')
        })
        .catch((error) => {
        setError(error.message)
        })
    }

    return (
        <div className='container-form'>
            <h2 className='main-title'>Celebrate Wins</h2>
            <form className='form-win' id='form-win' onSubmit={handleSubmit}>
                <div className="container-form">
                {/* <label className='form-label' htmlFor='draft'>Draft Status</label>
                    <div className='container-input'>
                        <input 
                            className='draft'
                            id='draft'
                            name='draft'
                            onChange={(value) => setIsDraft(value)}
                            type='checkbox'
                            checked={isDraft}
                            />
                    </div> */}
                    <label className='form-label' htmlFor="winTitle">Add a Title for Your Win</label>
                    <div className='container-input'>
                        <input 
                            autoFocus
                            type='text'
                            autoComplete='off'
                            className='input-text'
                            id="winTitle"
                            maxLength={200}
                            name="winTitle"
                            onChange={(value) => setWinTitle(value)}
                            placeholder='Title Your Win'
                            required
                            />
                    </div>
                    <label className='form-label' htmlFor='winDate'>Provide a Date for the Event</label>
                    <div className='container-input'>
                        <input 
                            className='form-input-date'
                            value={winDate}
                            onChange={(e) => setWinDate(e.target.value)}
                            id='win-date'
                            type='date'
                            autoComplete='off'
                            name='winDate'
                        />
                    </div>
                    <label className='form-label' htmlFor='winDescription'>Describe the Circumstances of the Event</label>
                    <div className='container-input'>
                        <ReactQuill 
                            autoComplete='off'
                            className='custom-quill'
                            id='winDescription'
                            onChange={(value) => setWinDescription(value)}
                            maxLength={2000}
                            modules={modules}
                            name='winDescription'
                            placeholder=''
                            theme="bubble"
                        />
                    </div>
                    <label className='form-label' htmlFor='winPicture'>Provide any Visuals</label>
                    <div className='container-input'>
                        <input 
                            className='file upload'
                            value={winPicture}
                            onChange={(e) => setWinPicture(e.target.files[0])}
                            id='winPicture'
                            type='file'
                            autoComplete='off'
                            name='winPicture'
                            style={{
                                width: '400px',
                                height: '40px',
                                position: 'relative',
                                overflow: 'hidden',
                                display: 'inline-block',
                                border: '1px solid #ccc',
                                borderRadius: '10px',
                                marginBottom: '20px'}}
                        />
                    </div>
                </div> 
                <div className='container-input'>
                    <label htmlFor='submit' className='form-label'></label>
                    <input
                        id='submit'
                        to="/wins"
                        className='button-submit'
                        type='submit'
                        value='Save My Work!'
                        style={{marginTop:'30px'}}
                    />
                </div>
            </form>
            {error && <div className="error">{error}</div>}
        </div>
    )
}



                