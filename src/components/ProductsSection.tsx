import { motion } from "framer-motion";
import honeyImg from "@/assets/honey.jpg";
import propolisImg from "@/assets/propolis.jpg";
import waxImg from "@/assets/wax-sheets.jpg";
import pollenImg from "@/assets/bee-pollen.jpg";

const products = [
  {
    name: "Honey",
    price: "Ksh 800/kg",
    image: honeyImg,
    description:
      "Our honey is predominantly made from the divserfied multifloral nectar of Western Kenya region. This diversity enriches the medicinal aspect of the honey making it have a sweet unique taste.",
  },
  {
    name: "Propolis",
    price: "Ksh 20/g",
    image: propolisImg,
    description:
      "Propolis is used in treatment of rheumatoid arthritis and other medical conditions. Before purchasing seek medical advise from your physician. Propolis is also useful in making beauty products and skin lotions.",
  },
  {
    name: "Wax Sheets",
    price: "Ksh 250/sheet",
    image: waxImg,
    description:
      "Foundation wax sheet are often used by bee hive manufacturers and placed inside the frames so as to ensure bees build combs properly. The debate on foundation versus foundationless comb formation has been there for long. Though we say for every building it is important that there is a plan and foundation. Our foundation sheets are made from natural bee wax.",
  },
  {
    name: "Bee Pollen",
    price: "Ksh 20/g",
    image: pollenImg,
    description:
      "Bee pollen is considered a highly nutritious food source, containing essential vitamins, minerals, and proteins. Bee pollen is known for its potential health benefits, including providing antioxidants and potential relief from allergy symptoms. However, it's important to note that individual responses to bee pollen may vary, and it can cause allergic reactions in some individuals, so it should be consumed with caution, particularly by those with known pollen allergies.",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-28 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="font-body text-sm uppercase tracking-[0.2em] text-primary mb-3">
            What We Offer
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground">
            Our Products
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-500"
            >
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-2/5 aspect-square sm:aspect-auto overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="sm:w-3/5 p-6 sm:p-8 flex flex-col justify-center">
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <span className="font-body font-bold text-primary text-lg">
                    {product.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
