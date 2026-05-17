import { useContext } from "react";
import UserContext from "../UserContext";

import { useNavigate } from "react-router-dom";

const Profile = () => {

  const { user } = useContext(UserContext);
  const navigate = useNavigate()
  const back = () => {
    navigate('/')
  }

  return (
    <>
      {user.message === 'Not Found' ? (
        <>
          <div className="flex flex-col justify-center items-center p-20 min-h-120 max-w-120 mt-2 ml-100 rounded-md bg-gray-500">
            <h1 className="font-extrabold text-white text-4xl">User Not Found</h1>
            <button className=' bg-emerald-500 text-white p-3 w-25 rounded-lg mt-4 font-medium hover:bg-emerald-600 active:scale-95 transition-all duration-150 cursor-pointer' onClick={back}>Back</button>
          </div>
        </>
      ) : (
        <div className="font-extrabold text-white flex flex-col justify-center items-center max-h-135 w-120 mx-auto overflow-y-auto border-2 border-white rounded-lg bg-gray-500">
          <div className="  mt-2">
            <img className="max-h-40 max-w-40 rounded-full mt-10 ml-12" src={user.avatar_url} alt="" />
            <h1 className="text-2xl mb-3 whitespace-nowrap">Name: {user.name}</h1>
          </div>
          <div className="w-85 mb-3">
            <p>{user.bio}</p>
          </div>
          <div className="flex gap-5.5">
            <p>{user.followers} Followers</p>
            <p>{user.following} Following</p>
          </div>
          <div className="flex flex-col gap-1 my-2 ">
            <p>{user.public_repos} Public Repositories</p>
            <p>{user.email}</p>
            <p>{user.blog}</p>
            <p>{user.location}</p>
          </div>
          <div className="flex gap-x-10">
            <p>Created on <br />{new Date(user.created_at).toLocaleDateString()}</p>
            <p>Last Updated on <br /> {new Date(user.updated_at).toLocaleDateString()}</p>
          </div>
          <button className='bg-emerald-500 text-white p-3 w-25 rounded-lg m-4 font-medium hover:bg-emerald-600 active:scale-95 transition-all duration-150 cursor-pointer' onClick={back}>Back</button>
        </div>
      )}
    </>
  );
};

export default Profile;