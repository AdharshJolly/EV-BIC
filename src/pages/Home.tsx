import { ArrowRight, Cpu, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="relative isolate overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-brand-accent to-brand-secondary opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-brand-secondary/50 px-3 py-1 text-sm font-semibold leading-6 text-brand-accent ring-1 ring-inset ring-brand-accent/20">What's new</span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-brand-muted">
                <span>Just announced v1.0</span>
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            EV Battery Intelligence Challenge
          </h1>
          <p className="mt-6 text-lg leading-8 text-brand-muted">
            Powering the Future of E-Mobility with Indigenous Compute. Build cloud-connected, intelligent battery monitoring systems on the VSDSquadron ULTRA.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link to="/register" className="rounded-md bg-brand-accent px-3.5 py-2.5 text-sm font-semibold text-brand-dark shadow-sm hover:bg-brand-accent/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent">
              Register Now
            </Link>
            <Link to="/about" className="text-sm font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        
        {/* Hero Visual/Graphic placeholder - ideally a 3D model or sleek graphic */}
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
             <div className="-m-2 rounded-xl bg-brand-secondary/20 p-2 ring-1 ring-inset ring-brand-secondary/40 lg:-m-4 lg:rounded-2xl lg:p-4">
               <div className="rounded-md bg-brand-dark border border-brand-secondary/50 p-8 shadow-2xl ring-1 ring-brand-secondary/20">
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div className="flex flex-col gap-4 p-4 rounded-lg bg-brand-secondary/20 border border-brand-secondary/30">
                        <Cpu className="h-10 w-10 text-brand-accent" />
                        <h3 className="text-lg font-bold text-white">Indigenous Compute</h3>
                        <p className="text-sm text-brand-muted">Powered by THEJAS32 RISC-V processor from C-DAC.</p>
                    </div>
                    <div className="flex flex-col gap-4 p-4 rounded-lg bg-brand-secondary/20 border border-brand-secondary/30">
                        <Zap className="h-10 w-10 text-brand-accent" />
                        <h3 className="text-lg font-bold text-white">Smart Energy</h3>
                        <p className="text-sm text-brand-muted">Real-time battery health estimation and degradation tracking.</p>
                    </div>
                    <div className="flex flex-col gap-4 p-4 rounded-lg bg-brand-secondary/20 border border-brand-secondary/30">
                        <Shield className="h-10 w-10 text-brand-accent" />
                        <h3 className="text-lg font-bold text-white">Safety First</h3>
                        <p className="text-sm text-brand-muted">Thermal and safety monitoring with predictive analytics.</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
