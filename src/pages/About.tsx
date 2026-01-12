const About = () => {
  return (
    <div className="bg-brand-primary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-brand-accent">About the Challenge</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Driving Innovation in Indian EV Ecosystem
          </p>
          <p className="mt-6 text-lg leading-8 text-brand-muted">
            India's rapid transition towards electric mobility places unprecedented demands on battery safety, reliability, and lifecycle optimization. 
            The EV Battery Intelligence Challenge is a national hackathon aimed at developing cloud-connected, intelligent battery monitoring and management prototypes.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            
            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                WHY THIS MATTERS
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-brand-muted">
                <p className="flex-auto">
                  Current EV battery systems in India largely depend on imported controllers and black-box units with limited data access. 
                  This challenge empowers innovators to build transparent, software-defined systems using homegrown silicon.
                </p>
              </dd>
            </div>

            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                THE PLATFORM
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-brand-muted">
                <p className="flex-auto">
                  <strong>VSDSquadron ULTRA + THEJAS32 (C-DAC VEGA)</strong><br />
                  An advanced development platform built around the THEJAS32 RISC-V processor. It enables real-time sensor interfacing, deterministic control, and secure firmware execution.
                </p>
              </dd>
            </div>

            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                KEY OBJECTIVES
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-brand-muted">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Battery health estimation and degradation tracking</li>
                  <li>Thermal and safety monitoring</li>
                  <li>Predictive analytics for battery lifespan</li>
                  <li>Secure data pipelines from edge to cloud</li>
                </ul>
              </dd>
            </div>

            <div className="flex flex-col">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                PARTICIPANTS
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-brand-muted">
                <p className="flex-auto">
                  Open to Students, Researchers, and Start-ups (up to 2 years old). Teams can have 1 to 3 members.
                </p>
              </dd>
            </div>

          </dl>
        </div>
      </div>
    </div>
  );
};

export default About;
