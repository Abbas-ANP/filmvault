import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";

const Pages = ({ page, setPage }) => {

  return (
    <>
      <div className='bg-gray-600 bg-opacity-80 text-white font-bold flex justify-center items-center mb-6'>
        <div className="p-5" onClick={() => setPage((page==1) ? 1 : page-1)}><FaLongArrowAltLeft /></div>
        <div className="p-5">{page}</div>
        <div className="p-5" onClick={() => {setPage(page+1)}}><FaLongArrowAltRight /></div>
      </div>
    </>
  )
}

export default Pages;