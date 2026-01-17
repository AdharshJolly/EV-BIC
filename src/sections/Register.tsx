"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Building, Users, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';

const Register = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => setSubmitted(true), 1000);
  };

  const handleBangaloreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const questionDiv = document.getElementById('in-person-question');
    if (questionDiv) {
      questionDiv.style.display = e.target.value === 'yes' ? 'block' : 'none';
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-transparent flex items-center justify-center p-6">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-full max-w-lg"
        >
          <Card className="bg-brand-secondary/20 border-brand-accent/50 overflow-hidden relative">
            <div className="absolute inset-0 bg-brand-accent/5 pointer-events-none"></div>
            <CardContent className="p-12 text-center relative z-10">
               <div className="w-20 h-20 bg-brand-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                 <CheckCircle className="w-10 h-10 text-brand-accent" />
               </div>
               <h2 className="text-3xl font-bold text-white mb-4">Registration Successful!</h2>
               <p className="text-brand-muted mb-8">
                 Thank you for registering for the EV Battery Intelligence Challenge. We have sent a confirmation email with further details.
               </p>
               <Button 
                 onClick={() => setSubmitted(false)}
                 className="bg-brand-secondary hover:bg-brand-secondary/80 text-white px-8 py-6 rounded-lg font-medium w-full sm:w-auto"
               >
                 Back to Home
               </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent py-24 sm:py-32 relative">
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-brand-secondary/20 to-transparent -z-10"></div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Register for EV BIC
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-2 text-lg leading-8 text-brand-muted"
          >
            Join the revolution in EV battery intelligence. Secure your spot today.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mx-auto max-w-xl relative"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-brand-accent/5 rounded-full blur-3xl -z-10"></div>

          <Card className="glass-panel border-brand-secondary/50 shadow-2xl bg-brand-secondary/30">
            <CardContent className="p-8 sm:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div className="col-span-1 space-y-2">
                    <Label htmlFor="participant1-name" className="text-brand-text">Participant 1 Name</Label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-brand-muted" />
                      </div>
                      <Input
                        type="text"
                        name="participant1-name"
                        id="participant1-name"
                        required
                        className="pl-10 bg-brand-primary/60 border-brand-secondary focus-visible:ring-brand-accent text-white"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  
                  <div className="col-span-1 space-y-2">
                    <Label htmlFor="participant2-name" className="text-brand-text">Participant 2 Name</Label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-brand-muted" />
                      </div>
                      <Input
                        type="text"
                        name="participant2-name"
                        id="participant2-name"
                        required
                        className="pl-10 bg-brand-primary/60 border-brand-secondary focus-visible:ring-brand-accent text-white"
                        placeholder="Jane Smith"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2 space-y-2">
                    <Label htmlFor="email" className="text-brand-text">Email ID</Label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-brand-muted" />
                      </div>
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="pl-10 bg-brand-primary/60 border-brand-secondary focus-visible:ring-brand-accent text-white"
                        placeholder="team@example.com"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2 space-y-2">
                    <Label htmlFor="phone" className="text-brand-text">Phone Number</Label>
                    <Input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      className="bg-brand-primary/60 border-brand-secondary focus-visible:ring-brand-accent text-white"
                      placeholder="+91 9876543210"
                    />
                  </div>

                  <div className="sm:col-span-2 space-y-2">
                    <Label htmlFor="college" className="text-brand-text">College Name</Label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Building className="h-5 w-5 text-brand-muted" />
                      </div>
                      <Input
                        type="text"
                        name="college"
                        id="college"
                        required
                        className="pl-10 bg-brand-primary/60 border-brand-secondary focus-visible:ring-brand-accent text-white"
                        placeholder="Christ University"
                      />
                    </div>
                  </div>

                  <div className="col-span-1 space-y-2">
                    <Label htmlFor="state" className="text-brand-text">State</Label>
                    <Input
                      type="text"
                      name="state"
                      id="state"
                      required
                      className="bg-brand-primary/60 border-brand-secondary focus-visible:ring-brand-accent text-white"
                      placeholder="Karnataka"
                    />
                  </div>

                  <div className="col-span-1 space-y-2">
                    <Label htmlFor="city" className="text-brand-text">City</Label>
                    <Input
                      type="text"
                      name="city"
                      id="city"
                      required
                      className="bg-brand-primary/60 border-brand-secondary focus-visible:ring-brand-accent text-white"
                      placeholder="Bangalore"
                    />
                  </div>

                  <div className="sm:col-span-2 space-y-2">
                    <Label htmlFor="bangalore-based" className="text-brand-text">Are you Bangalore based?</Label>
                    <div className="relative">
                      <select
                        id="bangalore-based"
                        name="bangalore-based"
                        required
                        onChange={handleBangaloreChange}
                        className="flex h-10 w-full rounded-md border border-brand-secondary bg-brand-primary/60 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-white appearance-none"
                      >
                        <option value="">Select option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-muted">
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                      </div>
                    </div>
                  </div>

                  <div className="sm:col-span-2 space-y-2" id="in-person-question" style={{display: 'none'}}>
                    <Label htmlFor="attend-in-person" className="text-brand-text">Would you like to attend the session in person? (First 250 positive responses get invitation to offline session)</Label>
                    <div className="relative">
                      <select
                        id="attend-in-person"
                        name="attend-in-person"
                        className="flex h-10 w-full rounded-md border border-brand-secondary bg-brand-primary/60 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-white appearance-none"
                      >
                        <option value="">Select option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-muted">
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <Button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-lg bg-brand-accent text-brand-dark font-bold hover:bg-white transition-all duration-200 py-6"
                  >
                    Submit Registration <Send className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
