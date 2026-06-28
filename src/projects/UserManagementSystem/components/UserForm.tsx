import { useContext } from "react";
import { UserContext } from "../UserContext";
import { allowOnlyNumbers } from "../../../utils/utils";

const UserForm = () => {
  const { closeForm, onInputChanges, formState, addUser, updateUser} = useContext(UserContext)
  const { fullName, email, contact, gender } = formState.formData

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>): void =>{
    event.preventDefault();
    if(formState.currentAction==="add"){
      addUser()
    }else{
      updateUser()
    }
  }
  return (
    <div className="max-w-xl mx-auto rounded-xl border bg-white p-6 shadow-lg">
      <h2 className="mb-6 text-2xl font-bold text-gray-800">User Form</h2>

      <form className="space-y-5" onSubmit={handleSubmit}>
        {/* Full Name */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Full Name<span className="text-red-500">*</span>
          </label>
          <input
            onChange={onInputChanges}
            type="text"
            placeholder="Enter full name"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            name="fullName"
            value={fullName}
            required={true}
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            onChange={onInputChanges}
            type="email"
            name="email"
            value={email}
            placeholder="Enter email"
            required={true}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Contact */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Contact<span className="text-red-500">*</span>
          </label>
          <input
            inputMode="numeric"
            onChange={onInputChanges}
            type="number"
            name="contact"
            value={contact}
            placeholder="Enter contact number"
            required={true}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            onKeyDown={allowOnlyNumbers}
            maxLength={10}
          />
        </div>

        {/* Gender */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Gender<span className="text-red-500">*</span>
          </label>

          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input type="radio" name="gender" onChange={onInputChanges} value="Male" checked={gender==="Male"} required={true}/>
              Male
            </label>

            <label className="flex items-center gap-2">
              <input type="radio" name="gender" onChange={onInputChanges} value="Female" checked={gender==="Female"} required={true}/>
              Female
            </label>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={closeForm}
            type="button"
            className="rounded-lg border border-gray-300 bg-white px-5 py-2 font-medium text-gray-700 transition hover:bg-gray-100"
          >
            Close
          </button>

          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700"
          >
            Save User
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;