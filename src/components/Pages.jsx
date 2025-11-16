import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import { useEffect } from "react";

const Pages = ({ page, setPage }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <>
      <div className='bg-black text-white font-bold flex justify-center items-center mb-5'>
        <div className="p-2 w-[55px] rounded-xl pl-5 hover:bg-white hover:text-black transition active:-translate-x-2 text-xl cursor-pointer" onClick={() => setPage((page==1) ? 1 : page-1)}><FaLongArrowAltLeft /></div>
        <div className="p-4 text-xl">{page}</div>
        <div className="p-2 w-[55px] rounded-xl pl-5 hover:bg-white hover:text-black transition active:translate-x-2 text-xl" onClick={() => {setPage(page+1)}}><FaLongArrowAltRight /></div>
      </div>

      <div className="text-center font-bold mb-4">
        {page !== 1 && (
        <button onClick={() => setPage(1)} className="ml-2">Back to Home</button>
      )}
      </div>
    </>
  )
}

export default Pages;