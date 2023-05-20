const Gallery = () => {
  return (
    <div className="lg:p-5 ">
      <h1 className="text-center lg:text-5xl mx-auto lg:w-1/3 lg:p-4 p-2 text-2xl  rounded-lg font-bold bg bg-sky-400 text-white">Our Gallery</h1>
      <div className=" lg:flex p-4 shadow-xl gap-2">
        <div className="lg:flex  lg:w-1/2 gap-2">
          <div className="">
            <img
              className="rounded-lg  lg:h-full"
              src="https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
              alt="Shoes"
            />
          </div>
          <div className="lg:w-1/2 my-auto  ">
            <div className=" ">

                <img
                  className="rounded-lg    "
                  src="https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
                  alt="Shoes"
                />

            </div>
            <div className=" ">

                <img
                  className="rounded-lg  mt-3 "
                  src="https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
                  alt="Shoes"
                />

            </div>
            <div className=" ">

                <img
                  className="rounded-lg   mt-3 "
                  src="https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
                  alt="Shoes"
                />

            </div>
          </div>
          
        </div>
        <div className="lg:flex lg:w-1/2 ">
            <img
              className="rounded-lg   "
              src="https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
              alt="Shoes"
            />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
