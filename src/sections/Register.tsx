"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Building, Send, CheckCircle, Phone, Key } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const INDIAN_STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  // Union Territories
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Lakshadweep",
  "Delhi",
  "New Delhi",
  "Puducherry",
  "Ladakh",
  "Jammu and Kashmir",
];

const Register = () => {
  const [step, setStep] = useState<0 | 1 | 2>(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    participant1Name: "",
    participant2Name: "",
    phoneNumber: "",
    collegeName: "",
    state: "",
    city: "",
    willAttendOnline: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send OTP");
      setStep(1);
    } catch (err: unknown) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Registration failed");
      setStep(2);
    } catch (err: unknown) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred",
      );
    } finally {
      setLoading(false);
    }
  };

  if (step === 2) {
    return (
      <div className="min-h-screen bg-transparent flex items-center justify-center p-6">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-full max-w-lg"
        >
          <Card className="bg-brand-secondary/20 border-brand-accent/50 overflow-hidden relative backdrop-blur-sm">
            <div className="absolute inset-0 bg-brand-accent/5 pointer-events-none"></div>
            <CardContent className="p-12 text-center relative z-10">
              <div className="w-20 h-20 bg-brand-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-brand-accent" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Registration Successful!
              </h2>
              <p className="text-brand-muted mb-8">
                Thank you for registering for the EV Battery Intelligence
                Challenge. A confirmation email has been sent to{" "}
                {formData.email}.
              </p>
              <Button
                onClick={() => window.location.reload()}
                className="bg-brand-secondary hover:bg-brand-secondary/80 text-white px-8 py-6 rounded-lg font-medium w-full sm:w-auto"
              >
                Register Another Team
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-transparent py-24 relative">
      <div className="absolute top-0 left-0 w-full h-96 bg-linear-to-b from-brand-secondary/20 to-transparent -z-10"></div>

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
            {step === 0 && "Start by verifying your email address."}
            {step === 1 &&
              "Complete your team registration details and enter the OTP sent to your email."}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mx-auto max-w-xl relative"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-brand-accent/5 rounded-full blur-3xl -z-10"></div>

          <Card className="glass-panel border-brand-secondary/50 shadow-2xl bg-brand-secondary/30 backdrop-blur-md">
            <CardContent className="p-8 sm:p-12">
              <AnimatePresence mode="wait">
                {/* STEP 0: EMAIL */}
                {step === 0 && (
                  <motion.form
                    key="step0"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    onSubmit={handleSendOtp}
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-brand-text">
                        Email Address
                      </Label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-brand-muted" />
                        </div>
                        <Input
                          type="email"
                          name="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="pl-10 bg-brand-primary/60 border-brand-secondary focus-visible:ring-brand-accent text-white"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    {error && <p className="text-red-400 text-sm">{error}</p>}
                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-brand-accent text-brand-dark font-bold hover:bg-white py-6"
                    >
                      {loading ? "Sending..." : "Send OTP"}
                    </Button>
                  </motion.form>
                )}

                {/* STEP 1: OTP */}
                {step === 1 && (
                  <motion.form
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    onSubmit={handleRegister}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                      <div className="col-span-1 space-y-2">
                        <Label
                          htmlFor="participant1Name"
                          className="text-brand-text"
                        >
                          Participant 1 Name *
                        </Label>
                        <div className="relative">
                          <Input
                            type="text"
                            name="participant1Name"
                            required
                            value={formData.participant1Name}
                            onChange={handleChange}
                            className="bg-brand-primary/60 border-brand-secondary focus-visible:ring-brand-accent text-white"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>

                      <div className="col-span-1 space-y-2">
                        <Label
                          htmlFor="participant2Name"
                          className="text-brand-text"
                        >
                          Participant 2 Name *
                        </Label>
                        <div className="relative">
                          <Input
                            type="text"
                            name="participant2Name"
                            required
                            value={formData.participant2Name}
                            onChange={handleChange}
                            className="bg-brand-primary/60 border-brand-secondary focus-visible:ring-brand-accent text-white"
                            placeholder="Jane Smith"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2 space-y-2">
                        <Label
                          htmlFor="phoneNumber"
                          className="text-brand-text"
                        >
                          Phone Number *
                        </Label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Phone className="h-5 w-5 text-brand-muted" />
                          </div>
                          <Input
                            type="tel"
                            name="phoneNumber"
                            required
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="pl-10 bg-brand-primary/60 border-brand-secondary focus-visible:ring-brand-accent text-white"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2 space-y-2">
                        <Label
                          htmlFor="collegeName"
                          className="text-brand-text"
                        >
                          College Name *
                        </Label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Building className="h-5 w-5 text-brand-muted" />
                          </div>
                          <Input
                            type="text"
                            name="collegeName"
                            required
                            value={formData.collegeName}
                            onChange={handleChange}
                            className="pl-10 bg-brand-primary/60 border-brand-secondary focus-visible:ring-brand-accent text-white"
                            placeholder="Christ University"
                          />
                        </div>
                      </div>

                      <div className="col-span-1 space-y-2">
                        <Label htmlFor="state" className="text-brand-text">
                          State *
                        </Label>
                        <div className="relative group">
                          <select
                            name="state"
                            id="state"
                            required
                            value={formData.state}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                state: e.target.value,
                              })
                            }
                            className="w-full px-4 py-2.5 pr-10 bg-brand-primary/60 border border-brand-secondary rounded-md text-white appearance-none cursor-pointer transition-all duration-300 hover:border-brand-accent/50 hover:bg-brand-primary/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:border-brand-accent focus-visible:bg-brand-primary/80"
                          >
                            <option
                              value=""
                              className="bg-brand-primary text-white"
                            >
                              Select a state
                            </option>
                            {INDIAN_STATES.map((state) => (
                              <option
                                key={state}
                                value={state}
                                className="bg-brand-primary text-white"
                              >
                                {state}
                              </option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-brand-muted group-hover:text-brand-accent/70 group-focus-within:text-brand-accent transition-colors duration-300">
                            <svg
                              className="h-5 w-5 fill-current"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="col-span-1 space-y-2">
                        <Label htmlFor="city" className="text-brand-text">
                          City *
                        </Label>
                        <Input
                          type="text"
                          name="city"
                          required
                          value={formData.city}
                          onChange={handleChange}
                          className="bg-brand-primary/60 border-brand-secondary focus-visible:ring-brand-accent text-white"
                          placeholder="Bangalore"
                        />
                      </div>

                      <div className="sm:col-span-2 space-y-2">
                        <Label htmlFor="otp" className="text-brand-text">
                          OTP (Check your email) *
                        </Label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Key className="h-5 w-5 text-brand-muted" />
                          </div>
                          <Input
                            type="text"
                            name="otp"
                            id="otp"
                            required
                            value={formData.otp}
                            onChange={handleChange}
                            className="pl-10 bg-brand-primary/60 border-brand-secondary focus-visible:ring-brand-accent text-white tracking-widest text-lg"
                            placeholder="XXXXXX"
                            maxLength={6}
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2 pt-4 space-y-6">
                        <Separator className="bg-brand-secondary/50" />

                        {/* Online Attendance Question */}
                        <div className="space-y-3">
                          <Label className="text-brand-text">
                            Would you attend the session online? *
                          </Label>
                          <div className="flex gap-3">
                            <button
                              type="button"
                              onClick={() =>
                                setFormData({
                                  ...formData,
                                  willAttendOnline: true,
                                })
                              }
                              className={`flex-1 px-4 py-2.5 rounded-md font-medium transition-all duration-200 ${formData.willAttendOnline
                                  ? "bg-brand-accent text-brand-dark"
                                  : "bg-brand-primary/60 border border-brand-secondary text-white hover:border-brand-accent/50"
                                }`}
                            >
                              Yes
                            </button>
                            <button
                              type="button"
                              onClick={() =>
                                setFormData({
                                  ...formData,
                                  willAttendOnline: false,
                                })
                              }
                              className={`flex-1 px-4 py-2.5 rounded-md font-medium transition-all duration-200 ${!formData.willAttendOnline
                                  ? "bg-brand-accent text-brand-dark"
                                  : "bg-brand-primary/60 border border-brand-secondary text-white hover:border-brand-accent/50"
                                }`}
                            >
                              No
                            </button>
                          </div>
                        </div>


                      </div>
                    </div>

                    {error && <p className="text-red-400 text-sm">{error}</p>}

                    <div className="pt-6">
                      <Button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 rounded-lg bg-brand-accent text-brand-dark font-bold hover:bg-white transition-all duration-200 py-6"
                      >
                        {loading ? "Registering..." : "Complete Registration"}{" "}
                        <Send className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
