import { motion } from "framer-motion";
import { Phone, MapPin, Mail, ArrowRight } from "lucide-react";

const contacts = [
  {
    icon: Phone,
    label: "Phone",
    value: "0704866322 / 0740552922",
    href: "tel:0704866322",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Rich Rose Building, Kwhisero, Kakamega",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@westernapiaries.co.ke",
    href: "mailto:info@westernapiaries.co.ke",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-4">
              Contact Us
            </h2>
            <p className="font-body text-muted-foreground max-w-md mx-auto">
              Email us and keep upto date with our latest news
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contacts.map((contact, i) => (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-card rounded-2xl p-8 border border-border text-center hover:shadow-lg transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <contact.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-body text-xs uppercase tracking-wider text-muted-foreground mb-2">
                  {contact.label}
                </p>
                {contact.href ? (
                  <a
                    href={contact.href}
                    className="font-body font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <p className="font-body text-sm text-foreground">{contact.value}</p>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <a
              href="tel:0704866322"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 rounded-full font-body font-semibold text-lg hover:shadow-xl hover:shadow-primary/25 transition-all group"
            >
              Call Us Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
