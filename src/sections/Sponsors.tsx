import { motion } from 'framer-motion';
import { Star, Shield, Award, Handshake } from 'lucide-react';

const Sponsors = () => {
  return (
    <div className="min-h-screen bg-brand-primary py-24 sm:py-32 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-base font-semibold leading-7 text-brand-accent uppercase tracking-widest"
          >
            Our Partners
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Powered by Industry Leaders
          </motion.p>
          <p className="mt-4 text-lg leading-8 text-brand-muted">
             Enabling the future of EV technology through strong collaboration.
          </p>
        </div>

        {/* Title Sponsors - Premium Look */}
        <div className="mb-24 relative">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
            <h3 className="text-2xl font-bold text-white uppercase tracking-widest">Title Sponsors</h3>
            <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
             {[1, 2].map((i) => (
               <motion.div 
                 key={i}
                 initial={{ scale: 0.9, opacity: 0 }}
                 whileInView={{ scale: 1, opacity: 1 }}
                 viewport={{ once: true }}
                 whileHover={{ y: -5 }}
                 className="h-48 bg-gradient-to-br from-brand-secondary/40 to-brand-primary border border-brand-accent/20 rounded-2xl flex items-center justify-center relative group overflow-hidden"
               >
                 <div className="absolute inset-0 bg-brand-accent/5 group-hover:bg-brand-accent/10 transition-colors"></div>
                 <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-accent to-blue-500 opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
                 <span className="text-2xl font-bold text-white z-10 tracking-wider">TITLE SPONSOR {i}</span>
               </motion.div>
             ))}
          </div>
        </div>

        {/* Gold & Silver Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
           {/* Gold Sponsors */}
           <div>
             <div className="flex items-center justify-center gap-2 mb-6">
                <Award className="w-5 h-5 text-yellow-400" />
                <h3 className="text-xl font-bold text-yellow-400 uppercase tracking-widest">Gold Sponsors</h3>
             </div>
             <div className="grid grid-cols-2 gap-4">
                {[1, 2].map((i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="h-32 bg-brand-secondary/20 border border-yellow-500/20 rounded-xl flex items-center justify-center hover:border-yellow-500/50 transition-colors"
                  >
                    <span className="text-brand-muted font-medium">Gold Sponsor {i}</span>
                  </motion.div>
                ))}
             </div>
           </div>

           {/* Silver Sponsors */}
           <div>
             <div className="flex items-center justify-center gap-2 mb-6">
                <Shield className="w-5 h-5 text-gray-400" />
                <h3 className="text-xl font-bold text-gray-400 uppercase tracking-widest">Silver Sponsors</h3>
             </div>
             <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="h-32 bg-brand-secondary/20 border border-gray-500/20 rounded-xl flex items-center justify-center hover:border-gray-500/50 transition-colors"
                  >
                    <span className="text-brand-muted font-medium">Silver Sponsor {i}</span>
                  </motion.div>
                ))}
             </div>
           </div>
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-brand-secondary/30 border border-brand-secondary/50 p-12 text-center"
        >
           <Handshake className="w-12 h-12 text-brand-accent mx-auto mb-6" />
           <h3 className="text-2xl font-bold text-white mb-4">Interested in Sponsoring?</h3>
           <p className="text-brand-muted max-w-2xl mx-auto mb-8">
             Join us in shaping the future of sustainable mobility. Connect with top talent and showcase your commitment to innovation.
           </p>
           <a href="mailto:sponsors@evbic.com" className="inline-block bg-white text-brand-primary px-8 py-3 rounded-full font-bold hover:bg-brand-accent hover:text-white transition-colors">
             Become a Partner
           </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Sponsors;
