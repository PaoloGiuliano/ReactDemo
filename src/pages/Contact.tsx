import ContactForm from "../components/ContactForm";
const Contact = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="h-[75vh] w-3/4 border-5 border-solid border-blue-100 sm:w-1/2">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
