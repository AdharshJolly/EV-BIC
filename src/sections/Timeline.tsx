"use client";

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';

const Timeline = () => {
  const dates = [
    { event: 'Registration Phase', date: '26 Jan - 10 Feb 2026', status: 'Active', desc: 'Team registration and idea submission.' },
    { event: 'Inauguration', date: '11 Feb 2026', status: 'Upcoming', desc: 'Official launch at CHRIST (Deemed to be University), Bangalore.' },
    { event: 'Proposal Submission', date: '11 Feb - 13 Feb 2026', status: 'Upcoming', desc: 'Detailed technical proposal submission.' },
    { event: 'Video & GitHub', date: '16 Feb - 26 Feb 2026', status: 'Upcoming', desc: 'Submission of prototype video and code repository.' },
    { event: 'Shortlisting', date: '27 Feb - 28 Feb 2026', status: 'Upcoming', desc: 'Announcement of Top 10 teams.' },
    { event: 'Grand Finale', date: '10 Mar - 11 Mar 2026', status: 'Upcoming', desc: 'Physical demonstration and hackathon finale.' },
  ];

  return (
    <div className="bg-brand-primary py-24 sm:py-32 relative">
       <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-brand-secondary/20 to-transparent -z-10"></div>

       <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
             <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 font-display">Event Timeline</h2>
             <p className="text-brand-muted">Follow the journey from ideation to innovation.</p>
          </div>

          <div className="relative max-w-3xl mx-auto">
             {/* Vertical Line */}
             <div className="absolute left-8 top-0 bottom-0 w-px bg-brand-secondary/50 md:left-1/2 md:-ml-px"></div>

             {dates.map((item, index) => (
                <motion.div 
                   key={index}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: index * 0.1 }}
                   className={`relative mb-12 last:mb-0 md:flex md:justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                   {/* Dot */}
                   <div className="absolute left-8 -ml-3 w-6 h-6 rounded-full border-4 border-brand-primary bg-brand-accent md:left-1/2 md:-ml-3 z-10 shadow-[0_0_10px_rgba(204,255,0,0.5)]"></div>

                   <div className="ml-20 md:ml-0 md:w-[45%]">
                      <Card className="bg-brand-secondary/30 border-brand-secondary/50 hover:border-brand-accent/30 transition-all">
                         <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-2">
                               <Badge variant={item.status === 'Active' ? 'default' : 'secondary'} className={item.status === 'Active' ? 'bg-brand-accent text-brand-dark' : 'bg-brand-secondary text-brand-muted'}>
                                  {item.status}
                               </Badge>
                               <div className="flex items-center text-xs font-bold text-brand-muted uppercase tracking-wider">
                                  <Calendar className="w-3 h-3 mr-1" />
                                  {item.date}
                               </div>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-1">{item.event}</h3>
                            <p className="text-sm text-brand-muted">{item.desc}</p>
                         </CardContent>
                      </Card>
                   </div>
                </motion.div>
             ))}
          </div>
       </div>
    </div>
  );
};

export default Timeline;
