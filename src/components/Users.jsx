import { useEffect } from "react";
import { users } from "../constants/index.js";

export const Users = () => {
    return( 
        <div className="w-[200px] px-5 py-2 bg-[#272727]/[0.6] rounded-[10px] box shadow-center">
            <ul className="no-list text-dark">
                {
                    users.map((user) => (
                        <li key={user.id} className="w-full py-2">
                            <div className="flex flex-row justify-content-start items-center gap-5">
                                <i className="fa-solid fa-dragon"></i>
                                <p> {user.name} </p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}