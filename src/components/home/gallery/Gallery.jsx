const Gallery = () => {
  return (
    <div className="lg:p-3 bg bg-indigo-400 ">
      <h1 className="text-center lg:text-5xl mx-auto w-1/2 lg:w-1/4 lg:px-2 p-2 text-2xl rounded-lg font-bold bg bg-sky-400 text-white">
        Our Gallery
      </h1>
      <div className="lg:container mx-auto px-5 py-2 lg:px-18 lg:pt-5">
        <div className="-m-1 lg:flex flex-wrap md:-m-2   relative  overflow-hidden bg-cover bg-no-repeat">
          <div className="flex lg:w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center   transition duration-300 ease-in-out hover:scale-110"
                src="https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                
                />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center   transition duration-300 ease-in-out hover:scale-110"
                src="https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center   transition duration-300 ease-in-out hover:scale-110"
                src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              />
            </div>
          </div>
          <div className="flex lg:w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                src="https://images.unsplash.com/photo-1599623560574-39d485900c95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                className="block h-full w-full rounded-lg object-cover object-center   transition duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center   transition duration-300 ease-in-out hover:scale-110"
                src="https://images.unsplash.com/photo-1615592389070-bcc97e05ad01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center   transition duration-300 ease-in-out hover:scale-110"
                src="https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
