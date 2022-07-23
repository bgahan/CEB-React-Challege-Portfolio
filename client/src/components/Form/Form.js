import React, {useState} from 'react'

const Form = () => {

  const [error, setError] = useState('')
  const [successful, setSuccessful] = useState('')

    function handleFormSubmit() {
        if (document.getElementById('email').value === '') {
          setError('You must enter a valid email')
          return
        }
        if (document.getElementById('name').value === '') {
          setError('You must enter a valid name')
          return
        }
        if (document.getElementById('message').value === '') {
          setError('You must enter a message')
          return
        }
        setError('')
        setSuccessful('Form Submitted!')
    }

  return (
    <div>
        <input id='email' type="text" placeholder='email' />
        <br/>
        <input id='name' type="text" placeholder='name' />
        <br />
        <input id='message' type="text" placeholder='message' />
        <br />
        <button onClick={handleFormSubmit}>submit</button>
        <br />
        <p style={{color: 'red'}}>{error}</p>
        <p style={{color: 'green'}}>{successful}</p>
    </div>
  )
}

export default Form