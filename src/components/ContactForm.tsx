import { useForm, SubmitHandler } from "react-hook-form";
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "test",
      lastName: "",
    },
  });

  const firstName = watch("firstName");
  return (
    <div>
      <form
        className="bg-orange-200"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <input
          {...register("firstName", {
            required: "First name is required.",
            minLength: { value: 4, message: "First name Min length is 4." },
          })}
          placeholder="firstname"
        />
        <input
          {...register("lastName", {
            required: "Last name is required.",
            minLength: { value: 4, message: "last name Min length is 4." },
          })}
          placeholder="lastname"
        />
        <p>{errors.firstName?.message}</p>
        <p>{errors.lastName?.message}</p>
        <input type="submit" />
      </form>
    </div>
  );
};

export default ContactForm;
