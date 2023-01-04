import { Link } from 'react-router-dom'

export const Questions = () => {

    return (
        <>
        <h1 className="Questions">Questions</h1>
        <Link 
            className='button-add'
            key="button-add"
            id="button-add"
            to="/questions/add"
        >Add Your Own Question</Link>
        <div>
            <h1>Questions to Answer</h1>
            <div className="question-box">
                <div>                    
                    {/* {Questions.map(question => ())} */}
                    <p>Here is a list of system-suggested questions the user can answer.</p>
                </div>
            </div>
        </div>
        <div>
            <h1>Questions to Ask</h1>
            <div className="question-box">
                <div>                    
                    <p>Here is a list of system-suggested questions the user can ask.</p>
                </div>
            </div>
        </div>
        <div>
            <h1>Agent's Questions and Answers</h1>
            <div className="question-box">
                <div>
                    <p>Here is a list of questions the user has chosen to save and answer.</p>
                </div>
            </div>
        </div>
        <div>
            <h1>Target Questions and Answers</h1>
            <div className="question-box">
                <div>
                    <p>Here is a list of questions the user has chosen to ask a company.</p>
                </div>
            </div>
        </div>
        </>
    )
}