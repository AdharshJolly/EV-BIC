const Sponsors = () => {
  return (
    <div className="bg-brand-primary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Sponsors</h2>
          <p className="mt-4 text-lg leading-8 text-brand-muted">
            Enabling the future of EV technology. We are proud to be supported by industry leaders.
          </p>
        </div>

        {/* Title Sponsors */}
        <div className="mb-20">
          <h3 className="text-xl font-semibold text-brand-accent text-center mb-8 uppercase tracking-widest">Title Sponsors</h3>
          <div className="mx-auto grid max-w-lg grid-cols-1 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-2 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
             <div className="col-span-1 h-32 w-full bg-brand-secondary/30 rounded-lg flex items-center justify-center border border-brand-secondary">
               <span className="text-brand-muted font-bold text-xl">TITLE SPONSOR 1</span>
             </div>
             <div className="col-span-1 h-32 w-full bg-brand-secondary/30 rounded-lg flex items-center justify-center border border-brand-secondary">
               <span className="text-brand-muted font-bold text-xl">TITLE SPONSOR 2</span>
             </div>
          </div>
        </div>

        {/* Gold & Silver Sponsors */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
           <div>
             <h3 className="text-lg font-semibold text-yellow-400 text-center mb-8 uppercase tracking-widest">Gold Sponsors</h3>
             <div className="grid grid-cols-2 gap-6">
                {[1, 2].map((i) => (
                  <div key={i} className="h-24 bg-brand-secondary/20 rounded-lg flex items-center justify-center border border-brand-secondary/50">
                    <span className="text-brand-muted font-medium">Gold {i}</span>
                  </div>
                ))}
             </div>
           </div>
           <div>
             <h3 className="text-lg font-semibold text-gray-400 text-center mb-8 uppercase tracking-widest">Silver Sponsors</h3>
             <div className="grid grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-24 bg-brand-secondary/20 rounded-lg flex items-center justify-center border border-brand-secondary/50">
                    <span className="text-brand-muted font-medium">Silver {i}</span>
                  </div>
                ))}
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
