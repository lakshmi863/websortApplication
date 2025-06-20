const WhyWeStandOut = () => {
  return (
    <div
      style={{
        backgroundColor: '#150C11',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="flex flex-col lg:flex-row items-center justify-between gap-10 px-8 py-16 text-white"
    >
      <div className="max-w-2xl flex flex-col gap-4">
        <h1 className="text-[24px] font-montserrat font-semibold leading-tight">
          Why We Stand Out
        </h1>
        <p className="text-[18px] font-montserrat font-normal leading-snug">
          At Websort, we don’t just build digital products — we build careers. By joining our team, you become part of a creative and collaborative environment that values innovation, continuous learning, and personal growth.
        </p>
      </div>
      <img src="/images/bulbe.png" alt="explore" className="w-[300px] h-auto object-contain" />
    </div>
  );
};

export default WhyWeStandOut;