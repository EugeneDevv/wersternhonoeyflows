import { motion } from "framer-motion";
import flowHive from "@/assets/images/flow_hive.jpeg";
import langstroth from "@/assets/images/langstroth_bee_hive.jpeg";
import topBar from "@/assets/images/kenya_top_bar_hive.jpeg";
import beeSuit from "@/assets/images/bee_suit.jpeg";
import doubleSieve from "@/assets/images/double_sieve.jpeg";
import extractor from "@/assets/images/honey_extractor.jpeg";
import plasticExtractor from "@/assets/images/plastic_honey_extractor.jpeg";
import pressMachine from "@/assets/images/honey_press_machine.jpeg";
import queenKit from "@/assets/images/queen_rearing_kit.jpeg";
import pollenTrap from "@/assets/images/pollen_trap.jpeg";
import smoker from "@/assets/images/smoker.jpeg";
import hivetool from "@/assets/images/hivetool.jpeg";
import beeBrush from "@/assets/images/bee_brush.jpeg";

const equipment = [
  { name: "Flow Hive", price: "Ksh 50,000", image: flowHive },
  { name: "Langstroth Bee Hive", price: "Ksh 4,500", image: langstroth },
  { name: "Kenya Top Bar Hive", price: "Ksh 4,000", image: topBar },
  { name: "Bee Suit", price: "Ksh 4,000", image: beeSuit },
  { name: "Double Sieve", price: "Ksh 3,500", image: doubleSieve },
  { name: "3 Frame Honey Extractor", price: "Ksh 45,000", image: extractor },
  { name: "3 Frame Plastic Honey Extractor", price: "Ksh 25,000", image: plasticExtractor },
  { name: "Honey Press Machine", price: "Ksh 45,000", image: pressMachine },
  { name: "Queen Rearing Kit", price: "Ksh 12,000", image: queenKit },
  { name: "Pollen Trap", price: "Ksh 2,000", image: pollenTrap },
  { name: "Smoker", price: "Ksh 3,500", image: smoker },
  { name: "Hivetool", price: "Ksh 800", image: hivetool },
  { name: "Bee Brush", price: "Ksh 800", image: beeBrush },
];

const EquipmentSection = () => {
  return (
    <section id="equipment" className="py-28 bg-muted">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-3">
            Tools of the Trade
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground">
            Equipment
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipment.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6 flex items-center justify-between">
                <h3 className="font-heading text-lg font-bold text-foreground">
                  {item.name}
                </h3>
                <span className="font-body font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full text-sm">
                  {item.price}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;
