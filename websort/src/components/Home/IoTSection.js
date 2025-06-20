const IoTSection = () => {
  return (
    <div
      className="imgdesktop20 flex flex-col items-center justify-center text-center"
      style={{
        backgroundImage: "url('/images/iot.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-white text-3xl font-montserrat m-5">Fueling the Future with Innovation</h1>
      <img src="/images/iot.png" alt="iot" className="h-72 w-84 flex flex-row items-center justify-center" />
      <div className="flex gap-4 p-6">
        <div className="arrow-container w-16 h-16 bg-red-500 hover:scale-105 transition-all duration-300 shadow-lg"></div>
        <div className="arrow-container w-16 h-16 bg-white hover:scale-105 transition-all duration-300 shadow-lg"></div>
        <div className="arrow-container w-16 h-16 bg-white hover:scale-105 transition-all duration-300 shadow-lg"></div>
      </div>
      <button className="text-white m-4 p-5 border border-white rounded">Know More</button>
    </div>
  );
};

export default IoTSection;