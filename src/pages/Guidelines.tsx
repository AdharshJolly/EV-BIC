import { Calendar, Trophy, Clock, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Guidelines = () => {
  const dates = [
    { event: 'Registration Phase', date: '26 Jan - 10 Feb', status: 'upcoming' },
    { event: 'Inauguration at CHRIST BKC', date: '11 Feb', status: 'future' },
    { event: 'Proposal Submission', date: '11 Feb - 13 Feb', status: 'future' },
    { event: 'Final Video & GitHub Submission', date: '16 Feb - 26 Feb', status: 'future' },
    { event: 'Top 10 Teams Shortlisting', date: '27 Feb - 28 Feb', status: 'future' },
    { event: 'Physical Demonstration', date: '10 Mar - 11 Mar', status: 'future' },
    { event: 'Valedictory', date: '12 Mar', status: 'future' },
  ];

  const prizes = [
    { place: '2nd Prize', amount: '₹35,000', color: 'bg-gray-300', text: 'text-gray-800', height: 'h-48' },
    { place: '1st Prize', amount: '₹50,000', color: 'bg-yellow-400', text: 'text-yellow-900', height: 'h-64' },
    { place: '3rd Prize', amount: '₹25,000', color: 'bg-orange-400', text: 'text-orange-900', height: 'h-40' },
  ];

  return (
    <div className="min-h-screen py-24 sm:py-32 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-base font-semibold leading-7 text-brand-accent"
          >
            Information Center
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Guidelines & Schedule
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Key Dates - Vertical Timeline */}
          <div className="relative">
             <div className="flex items-center gap-x-3 mb-8">
               <Calendar className="h-8 w-8 text-brand-accent" />
               <h3 className="text-2xl font-bold text-white">Event Timeline</h3>
             </div>
             
             <div className="space-y-0 relative pl-4 border-l-2 border-brand-secondary">
                {dates.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="mb-8 relative pl-6 last:mb-0"
                  >
                    <div className="absolute -left-[21px] top-1.5 h-4 w-4 rounded-full bg-brand-primary border-2 border-brand-accent"></div>
                    <div className="glass-panel p-4 rounded-lg hover:bg-brand-secondary/40 transition-colors">
                        <h4 className="text-lg font-semibold text-white">{item.event}</h4>
                        <div className="flex items-center gap-2 mt-1 text-brand-accent">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm font-medium">{item.date}</span>
                        </div>
                    </div>
                  </motion.div>
                ))}
             </div>
          </div>

          {/* Prize Pool */}
          <div>
             <div className="flex items-center gap-x-3 mb-8">
               <Trophy className="h-8 w-8 text-brand-accent" />
               <h3 className="text-2xl font-bold text-white">Prize Pool</h3>
             </div>
             <p className="text-brand-muted mb-12">Total Prize Pool: ₹2,15,000</p>
             
             <div className="flex items-end justify-center gap-4 h-80 mb-12 border-b border-brand-secondary/30 pb-0">
                {prizes.map((prize, index) => {
                    const height = index === 1 ? '16rem' : index === 0 ? '12rem' : '10rem';
                    return (
                        <motion.div 
                            key={index}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: height, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 + (index * 0.1) }}
                            className={`flex flex-col items-center justify-start w-1/3 rounded-t-xl ${prize.color} ${prize.text} p-4 shadow-lg pt-6`}
                        >
                            <span className="text-sm sm:text-lg font-bold uppercase tracking-wider opacity-80 mb-1">{prize.place}</span>
                            <span className="text-xl sm:text-3xl font-black">{prize.amount}</span>
                        </motion.div>
                    );
                })}
             </div>

             <div className="space-y-4">
                 <div className="flex items-center justify-between bg-brand-secondary/30 p-4 rounded-lg border border-brand-secondary/50">
                    <span className="text-white font-medium">Consolation (7 teams)</span>
                    <span className="text-brand-accent font-bold">₹15,000 each</span>
                 </div>
                 <div className="p-6 bg-gradient-to-r from-brand-accent/10 to-transparent border border-brand-accent/20 rounded-lg">
                   <div className="flex items-start gap-3">
                       <CheckCircle2 className="w-6 h-6 text-brand-accent flex-shrink-0 mt-0.5" />
                       <p className="text-sm text-brand-muted">
                         Top 15 qualifying teams will receive the <strong>VSD Squadron Ultra Development Board</strong>, and all other physical components required will be reimbursed.
                       </p>
                   </div>
                 </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;
