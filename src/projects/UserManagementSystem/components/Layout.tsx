import UserTable from './UserTable';
import Button from './Button';
import { useContext } from 'react';
import { UserContext } from '../UserContext';
import UserForm from './UserForm';

const Layout = () => {
    const { formState} = useContext(UserContext)
    return (
        <main className="min-h-screen bg-gray-100 py-10">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Page Header */}
                <h1 className="mb-8 text-3xl font-bold text-gray-800">
                User Management
                </h1>
                {
                    formState.showForm ? <>    
                        {/* Form */}
                        <div className="mb-8">
                            <UserForm/>
                        </div>
                    </>: <>
                        {/* Add User Button */}
                <div className="mb-6 flex justify-end">
                    <Button/>
                </div>

                {/* Table */}
                <div>
                <UserTable/>
                </div>
                    </>
                }
            </div>
        </main>
    );
};

export default Layout;