import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-brand-primary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-lg leading-8 text-brand-muted">
            Have questions about the EV Battery Intelligence Challenge? Reach out to us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="flex flex-col gap-8">
             <div className="bg-brand-secondary/20 p-8 rounded-2xl border border-brand-secondary/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-brand-accent/20 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-brand-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Email</h3>
                </div>
                <p className="text-brand-muted">General Queries: <a href="mailto:info@evbic.com" className="text-brand-accent hover:underline">info@evbic.com</a></p>
                <p className="text-brand-muted">Support: <a href="mailto:support@evbic.com" className="text-brand-accent hover:underline">support@evbic.com</a></p>
             </div>

             <div className="bg-brand-secondary/20 p-8 rounded-2xl border border-brand-secondary/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-brand-accent/20 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-brand-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Location</h3>
                </div>
                <p className="text-brand-muted">
                  CHRIST (Deemed to be University)<br />
                  Bannerghatta Road Campus (BKC)<br />
                  Bangalore, Karnataka
                </p>
             </div>
          </div>

          {/* Simple Contact Form */}
          <form className="bg-brand-secondary/10 p-8 rounded-2xl border border-brand-secondary/30">
            <div className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold leading-6 text-white">Name</label>
                <div className="mt-2.5">
                  <input type="text" name="name" id="name" className="block w-full rounded-md border-0 bg-brand-primary px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-brand-secondary focus:ring-2 focus:ring-inset focus:ring-brand-accent sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">Email</label>
                <div className="mt-2.5">
                  <input type="email" name="email" id="email" className="block w-full rounded-md border-0 bg-brand-primary px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-brand-secondary focus:ring-2 focus:ring-inset focus:ring-brand-accent sm:text-sm sm:leading-6" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">Message</label>
                <div className="mt-2.5">
                  <textarea name="message" id="message" rows={4} className="block w-full rounded-md border-0 bg-brand-primary px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-brand-secondary focus:ring-2 focus:ring-inset focus:ring-brand-accent sm:text-sm sm:leading-6"></textarea>
                </div>
              </div>
              <button type="submit" className="block w-full rounded-md bg-brand-accent px-3.5 py-2.5 text-center text-sm font-semibold text-brand-dark shadow-sm hover:bg-brand-accent/80 transition-colors">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
