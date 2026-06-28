import { useContext } from "react";
import { UserContext } from "../UserContext";
import TableRows from "./TableComponents/TableRows";

const UserTable = () => {
  const { users } = useContext(UserContext)
  return (
    <div className="overflow-x-auto rounded-xl bg-white shadow-lg">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
              Full Name
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
              Email
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
              Contact
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
              Gender
            </th>
            <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(user=><TableRows user={user} key={user.userId}/>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;