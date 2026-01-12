import { Calendar, Trophy } from 'lucide-react';

const Guidelines = () => {
  const dates = [
    { event: 'Registration Phase', date: '26 Jan - 10 Feb' },
    { event: 'Inauguration at CHRIST BKC', date: '11 Feb' },
    { event: 'Proposal Submission', date: '11 Feb - 13 Feb' },
    { event: 'Final Video & GitHub Submission', date: '16 Feb - 26 Feb' },
    { event: 'Top 10 Teams Shortlisting', date: '27 Feb - 28 Feb' },
    { event: 'Physical Demonstration', date: '10 Mar - 11 Mar' },
    { event: 'Valedictory', date: '12 Mar' },
  ];

  const prizes = [
    { place: '1st Prize', amount: '₹50,000' },
    { place: '2nd Prize', amount: '₹35,000' },
    { place: '3rd Prize', amount: '₹25,000' },
    { place: 'Consolation (7 teams)', amount: '₹15,000 each' },
  ];

  return (
    <div className="bg-brand-primary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-brand-accent">Information Center</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Guidelines & Schedule
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Key Dates */}
          <div className="bg-brand-secondary/20 rounded-2xl p-8 border border-brand-secondary/50">
             <div className="flex items-center gap-x-3 mb-8">
               <Calendar className="h-8 w-8 text-brand-accent" />
               <h3 className="text-2xl font-bold text-white">Key Dates</h3>
             </div>
             <div className="space-y-6">
                {dates.map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-brand-secondary/30 pb-4 last:border-0 last:pb-0">
                    <span className="text-base font-medium text-white">{item.event}</span>
                    <span className="text-sm font-semibold text-brand-accent mt-1 sm:mt-0">{item.date}</span>
                  </div>
                ))}
             </div>
          </div>

          {/* Prize Pool */}
          <div className="bg-brand-secondary/20 rounded-2xl p-8 border border-brand-secondary/50">
             <div className="flex items-center gap-x-3 mb-8">
               <Trophy className="h-8 w-8 text-brand-accent" />
               <h3 className="text-2xl font-bold text-white">Prize Pool</h3>
             </div>
             <p className="text-brand-muted mb-6">Total Prize Pool: ₹2,15,000</p>
             <div className="space-y-6">
                {prizes.map((item, index) => (
                  <div key={index} className="flex items-center justify-between bg-brand-primary/50 p-4 rounded-lg">
                    <span className="text-lg font-bold text-white">{item.place}</span>
                    <span className="text-xl font-bold text-brand-accent">{item.amount}</span>
                  </div>
                ))}
             </div>
             <div className="mt-8 p-4 bg-brand-accent/10 border border-brand-accent/20 rounded-lg">
               <p className="text-sm text-brand-muted">
                 Top 15 qualifying teams will receive the <strong>VSD Squadron Ultra Development Board</strong>, and all other physical components required will be reimbursed.
               </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guidelines;
