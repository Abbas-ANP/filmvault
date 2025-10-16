const Banner = () => {
  return (
    <>
      <div
        className="h-[70vh] bg-cover bg-center flex items-end"
        style={{
          backgroundImage:
            "url(https://kneelbeforeblog.s3.eu-west-1.amazonaws.com/wp-content/uploads/2019/04/25033528/AvengersEG2D_banner-Cropped.jpg)",
        }}
      >
        <div className="text-white text-xl text-center w-full bg-blue-900 bg-opacity-60 p-2">
          Avengers Endgame
        </div>
      </div>
    </>
  );
};

export default Banner;
