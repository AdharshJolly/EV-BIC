import { Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="min-h-screen bg-brand-primary py-24 sm:py-32 relative">
       {/* Background */}
       <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-secondary/10 to-transparent -z-10"></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-base font-semibold leading-7 text-brand-accent uppercase tracking-widest"
          >
            Get in Touch
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            We're Here to Help
          </motion.p>
          <p className="mt-4 text-lg leading-8 text-brand-muted">
            Have questions about the challenge, eligibility, or technical details? Reach out to us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Info & FAQ */}
          <div className="flex flex-col gap-12">
             <motion.div 
               initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}
               className="space-y-8"
             >
                <div className="glass-panel p-8 rounded-2xl flex items-start gap-6 group hover:border-brand-accent/50 transition-colors">
                    <div className="bg-brand-secondary/50 p-4 rounded-xl group-hover:bg-brand-accent/20 transition-colors">
                      <Mail className="h-6 w-6 text-brand-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                      <div className="space-y-1">
                        <p className="text-brand-muted">General: <a href="mailto:info@evbic.com" className="text-white hover:text-brand-accent transition-colors">info@evbic.com</a></p>
                        <p className="text-brand-muted">Support: <a href="mailto:support@evbic.com" className="text-white hover:text-brand-accent transition-colors">support@evbic.com</a></p>
                      </div>
                    </div>
                </div>

                <div className="glass-panel p-8 rounded-2xl flex items-start gap-6 group hover:border-brand-accent/50 transition-colors">
                    <div className="bg-brand-secondary/50 p-4 rounded-xl group-hover:bg-brand-accent/20 transition-colors">
                      <MapPin className="h-6 w-6 text-brand-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                      <p className="text-brand-muted leading-relaxed">
                        CHRIST (Deemed to be University)<br />
                        Bannerghatta Road Campus (BKC)<br />
                        Bangalore, Karnataka
                      </p>
                    </div>
                </div>
             </motion.div>

             {/* Mini FAQ */}
             <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
                className="bg-brand-secondary/10 rounded-2xl p-8 border border-brand-secondary/30"
             >
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-5 h-5 text-brand-muted" />
                  <h3 className="text-lg font-semibold text-white">Common Questions</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">Who can participate?</h4>
                    <p className="text-sm text-brand-muted">Students, Researchers, and Start-ups (&lt;2 years old) in teams of 1-3.</p>
                  </div>
                  <div className="h-px bg-brand-secondary/30"></div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">Is hardware provided?</h4>
                    <p className="text-sm text-brand-muted">Top 15 teams receive the VSDSquadron Ultra board; other components are reimbursed.</p>
                  </div>
                </div>
             </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}
          >
            <form className="glass-panel p-8 sm:p-10 rounded-3xl border border-brand-secondary/50 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 rounded-full blur-2xl -z-10"></div>
               
               <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>
               
               <div className="space-y-6">
                 <div>
                   <label htmlFor="name" className="block text-sm font-medium leading-6 text-brand-muted mb-2">Your Name</label>
                   <input type="text" name="name" id="name" className="block w-full rounded-lg border-0 bg-brand-primary/50 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-brand-secondary focus:ring-2 focus:ring-inset focus:ring-brand-accent sm:text-sm sm:leading-6 transition-all" placeholder="John Doe" />
                 </div>
                 
                 <div>
                   <label htmlFor="email" className="block text-sm font-medium leading-6 text-brand-muted mb-2">Email Address</label>
                   <input type="email" name="email" id="email" className="block w-full rounded-lg border-0 bg-brand-primary/50 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-brand-secondary focus:ring-2 focus:ring-inset focus:ring-brand-accent sm:text-sm sm:leading-6 transition-all" placeholder="john@example.com" />
                 </div>
                 
                 <div>
                   <label htmlFor="message" className="block text-sm font-medium leading-6 text-brand-muted mb-2">Message</label>
                   <textarea name="message" id="message" rows={4} className="block w-full rounded-lg border-0 bg-brand-primary/50 px-4 py-3 text-white shadow-sm ring-1 ring-inset ring-brand-secondary focus:ring-2 focus:ring-inset focus:ring-brand-accent sm:text-sm sm:leading-6 transition-all" placeholder="How can we help you?"></textarea>
                 </div>
                 
                 <button type="submit" className="w-full flex justify-center items-center gap-2 rounded-lg bg-brand-accent px-8 py-4 text-sm font-bold text-brand-dark shadow-lg hover:bg-white hover:scale-[1.02] transition-all duration-200">
                   Send Message <Send className="w-4 h-4" />
                 </button>
               </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
