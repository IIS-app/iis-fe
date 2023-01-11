import { useEffect, useState } from 'react';
import { requestUpdateWin } from '../requests/WinRequests';
import { requestWinDetail } from '../requests/WinRequests';
import { Link, useParams } from 'react-router-dom'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import 'react-quill/dist/quill.bubble.css'


export const WinEdit = ({ token }) => {
    const { pk } = useParams()
    const [winDetail, setWinDetail] = useState([])
    const [winId, setWinId] = useState('')
    const [winTitle, setWinTitle]= useState('')
    const [winDescription, setWinDescription]= useState('')
    const [winDate, setWinDate] = useState('')
    const [winPicture, setWinPicture] = useState('', null)
    const [winLoadedPicture, setWinLoadedPicture] = useState(null)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isDraft, setIsDraft] = useState(true)



    useEffect(() => {
        setError(null)
        setIsLoading(true)
        requestWinDetail(token, { pk })
        .then(res => {
            setWinId(res.data.pk)
            setWinDetail(res.data)
            setWinTitle(res.data.title)
            setWinDate(res.data.occured_date)
            setWinDescription(res.data.win)
            setWinLoadedPicture(res.data.win_picture)
            setIsDraft(res.data.is_draft)
            })
            .catch(error => setError(error.message))
            .finally(() => setIsLoading(false))
    },[token, pk]);

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, false] }],
            [{ 'bold': true }, { 'italic': true }, { 'underline': true }, { 'strike': true }],
            [{ list:  "ordered" }, { list:  "bullet" }],
            ["blockquote", "code-block"],
            ["clean", "undo", "redo"],
        ],
        history: {
            delay: 2000,
            maxStack: 500,
            userOnly: false}
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setError(null)
        requestUpdateWin(token, { pk }, winTitle, winDescription, winDate, winPicture, isDraft)
            .catch((error) => {
                setError(error.message)
        })
    }


    return (
        <div className='container-main'>
        {error && <div className="error">{error}</div>}
            <h2 className='main-title'>What will you be celebrating today?</h2>
            <form className='form-win' id='form-win' onSubmit={handleSubmit}>
                <div className='container-form'>
                    <label className='form-label' htmlFor='draft'>Draft Status</label>
                    <div className='container-input'>
                        <input 
                            className='draft'
                            id='draft'
                            name='draft'
                            onClick={(value) => setIsDraft(!isDraft)}
                            type='checkbox'
                            checked={isDraft}
                            />
                    </div>
                    <label className='form-label' htmlFor="winTitle">Add a Name for Your Win</label>
                    <div className='container-input'>
                        <ReactQuill 
                            autoFocus
                            autoComplete='off'
                            className='custom-quill'
                            id="winTitle"
                            maxLength={200}
                            modules={modules}
                            name="winTitle"
                            onChange={(value) => setWinTitle(value)}
                            placeholder=''
                            required
                            theme="bubble"
                            />
                    </div>
                    <label className='form-label' htmlFor='winDate'>Provide a Date for the Event.</label>
                    <div className='container-input'>
                        <input 
                            className='text'
                            value={winDate}
                            onChange={(e) => setWinDate(e.target.value)}
                            id='win-date'
                            type='date'
                            autoComplete='off'
                            name='winDate'
                        />
                    </div>
                    <label className='form-label' htmlFor='winDescription'>Describe the Circumstances of the Event. </label>
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
                            className='file-upload'
                            onChange={(e) => setWinPicture(e.target.files[0])}
                            id='winPicture'
                            type='file'
                            autoComplete='off'
                            name='winPicture'
                            multiple
                        />
                        {/* TODO: MAKE SURE THIS WORKS WITH NEW WIRING */}
                        {winLoadedPicture ? <img src={winLoadedPicture} style={{ width: "200px"}} alt={winTitle} /> :''}
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
        </div>
    )
}



                