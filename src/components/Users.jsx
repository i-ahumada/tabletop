import { users } from "../constants/index.js";

export const Users = () => {
    return( 
        <div className="w-[200px] px-5 py-2 bg-primary rounded-[10px] box shadow-center">
            <ul className="no-list text-dark">
                {
                    users.map((user) => (
                        <li key={user.id} className="w-full py-2">
                            <div className="flex flex-row justify-content-start items-center text-[20px] gap-5">
                                <i className="fa-brands fa-d-and-d"></i>
                                <p> {user.name} </p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}