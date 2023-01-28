function App() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-zinc-700 font-poppins">
      <div className="flex flex-col p-2 mx-3 rounded-2xl bg-zinc-800 md:flex-row">
        <img
          className="object-cover w-full transition duration-300 bg-center md:w-40 md:rounded-r-none rounded-2xl h-80 hover:scale-110"
          src={require("./assets/image.jpg")}
          alt="sdf"
        />
        <div className="flex-col justify-around p-6 mt-5 space-y-6 text-center md:p-12 md:text-start md:flex">
          <h1 className="text-2xl font-semibold leading-3 text-white">Get diet and fitness tips in your inbox</h1>
          <p className="text-xs leading-5 tracking-wide text-white">
            Eat better and exercise better. Sign up for the Diet&Fitness
            newsletter.
          </p>
          <div className="space-y-6 md:w-5/6 md:flex md:items-center md:space-y-0">
            <input className="w-full px-5 py-3 mr-5 text-xs capitalize bg-transparent border focus:outline-none" placeholder="Enter your email address" type="text" />
            <button className="w-full px-5 py-3 text-xs transition-all duration-500 rounded-lg md:h-full md:w-auto bg-lime-500 text-lime-800 hover:text-white hover:bg-lime-700">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
