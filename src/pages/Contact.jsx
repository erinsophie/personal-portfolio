import { useForm, ValidationError } from '@formspree/react';
import { RoughNotation } from 'react-rough-notation';

function Contact() {
  const [state, handleSubmit] = useForm('xjvqknpz');

  if (state.succeeded) {
    return (
      <div className="flex-1">
        <p>Thanks for your message! I will get back to you shortly</p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col gap-5 mb-20 md:mb-0">
      <p className="font-bold text-2xl">Contact</p>
      <p>
        If you have an opportunity you&apos;d like to discuss,{' '}
        <RoughNotation
          type="highlight"
          color="#ffcfe4"
          show={true}
          animate={true}
          animationDuration={1000}
          multiline={true}
        >
          get in touch!
        </RoughNotation>
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="flex items-center">
          <label htmlFor="name" className="w-20">
            Name*
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className="border border-black w-full rounded-lg p-1"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        <div className="flex items-center">
          <label htmlFor="email" className="w-20">
            Email*
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="border border-black w-full rounded-lg p-1"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message">I&apos;d like to chat about*</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="border border-black rounded-lg p-1"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <button
          type="submit"
          className="rounded-lg bg-black text-white p-2 rounded-md w-40"
          disabled={state.submitting}
        >
          Send message
        </button>
      </form>
    </div>
  );
}

export default Contact;
