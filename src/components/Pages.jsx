import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

const Pages = ({ page, setPage }) => {

  return (
    <>
      <div className='bg-gray-600 bg-opacity-80 text-white font-bold flex justify-center items-center mb-6'>
        <div className="p-3 w-[55px] rounded-xl pl-5 hover:bg-black" onClick={() => setPage((page==1) ? 1 : page-1)}><FaLongArrowAltLeft /></div>
        <div className="p-5">{page}</div>
        <div className="p-3 w-[55px]  rounded-xl pl-5 hover:bg-black" onClick={() => {setPage(page+1)}}><FaLongArrowAltRight /></div>
      </div>
      <div onClick={() => setPage(1)}>Back to Page 1</div>
    </>
  )
}

export default Pages;