import { FaArrowUpLong, FaArrowDownLong } from "react-icons/fa6";

const WatchList = () => {
  return (
    <>
      <div className="flex justify-center flex-wrap m-6">
        <div className="flex items-center justify-center bg-blue-400 w-[120px] h-[40px] font-bold text-white rounded-xl mx-2">All Genres</div>
        <div className="flex items-center justify-center bg-blue-400 w-[120px] h-[40px] font-bold text-white rounded-xl mx-2">All Genres</div>     
      </div>

      <div className="flex flex-col items-center m-6">
        <input
          className="w-60 h-10 bg-zinc p-3 mb-5 text-black outline-none"
          style={{ "background-color": "rgba(223, 223, 223, 1)" }}
          placeholder="Search Movie"
        />
      </div>

      <div className="border rounded-lg overflow-hidden m-4">
        <table className="border w-full">
          <thead className="bg-gray-100/70 h-10">
            <tr>
              <th>Name</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
              <th></th>
            </tr>
          </thead>

          <tbody className="border">
            <tr className="text-center border">
              <td>
                <div className="flex items-center ">
                  <img
                    className="w-15 h-20 m-5"
                    src={
                      "https://resizing.flixster.com/7c3qnZfPzZgID7Ft97PccFwEf9U=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10543523_p_v8_as.jpg"
                    }
                  />
                  <div>Interstellar</div>
                </div>
              </td>
              <td>9.12</td>
              <td>300</td>
              <td>SciFi</td>
              <td className="text-red-700"><span className="cursor-pointer">Delete</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WatchList;
