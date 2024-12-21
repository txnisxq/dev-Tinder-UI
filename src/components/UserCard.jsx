

export const UserCard = ({user}) => {
    console.log(user);
    const {firstName , lastName , age , gender , about , skills , photoUrl} = user;
  return (
    <div>

       <div className="card  bg-neutral-700 w-96 shadow-xl">
         
         <figure>
           <img
           src={photoUrl}
           alt="Shoes" />
         </figure>

          <div className="card-body ">
            <h2 className="card-title text-blue-500">{firstName + " " + lastName}</h2>
            {age && gender && <p className="text-white">{age + ", " + gender}</p>}
            <p className="text-white">{about}</p>
            <p className="text-white">Skills: {skills}</p>

            <div className="card-actions flex justify-between my-4 ">
            <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Ignore</button>
            <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Request</button>
            </div>
          </div>

       </div>

    </div>
  )
}
