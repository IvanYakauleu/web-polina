import { FormEvent } from 'react'

export default function Modal() {


    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }
      return (
        <>
          <form onSubmit={handleSubmit} className='asdfasd'>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
            />
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
            />
            <label htmlFor="message">Message:</label>
            <button type="submit">Send</button>
          </form>
        </>
      );

}