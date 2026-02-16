import { motion } from "framer-motion";
import { Truck, Scissors, Flower2, MapPin } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Hive Transfer and Transportation",
    description:
      "Do you have hives at a location and you need them moved to another location? We provide these services.",
  },
  {
    icon: Scissors,
    title: "Harvesting Services",
    description:
      "Our company offers harvesting services to client who have commercial scale number of bee hives.",
  },
  {
    icon: Flower2,
    title: "Pollination Services",
    description:
      "Do you have a farm that is experiencing low yields due to low pollination rates? Do not worry anymore. Our company has a team of experts that will help you install colonized bee hives in your farm to enable fast pollination.",
  },
  {
    icon: MapPin,
    title: "Site Survey and Project Set up",
    description:
      "Are you looking forward to setting up a bee keeping enterprise and you need advise on the right site to set up the project, budget, develop proposal and infrastructure needed depending on land size? You don't need to worry anymore. We offer this solution.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-28 bg-gradient-earth relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-3">
            How We Help
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-secondary-foreground">
            Our Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group bg-secondary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-secondary-foreground/10 hover:bg-secondary-foreground/10 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/30 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-secondary-foreground mb-3">
                {service.title}
              </h3>
              <p className="font-body text-sm text-secondary-foreground/70 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
