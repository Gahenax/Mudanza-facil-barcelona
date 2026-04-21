import { Star } from "lucide-react";

const reviews = [
  {
    name: "María García",
    location: "Barcelona, Eixample",
    rating: 5,
    text: "Increíble servicio. Llegaron puntuales, trataron mis muebles con muchísimo cuidado y dejaron todo perfectamente colocado. Sin duda los mejores de Barcelona.",
    date: "Marzo 2025",
    avatar: "MG",
  },
  {
    name: "Carlos Pérez",
    location: "Barceloneta",
    rating: 5,
    text: "Contraté el Plan VIP y superó todas mis expectativas. Embalaron absolutamente todo, yo no tuve que hacer nada. El precio fue exactamente el acordado, sin sorpresas.",
    date: "Enero 2025",
    avatar: "CP",
  },
  {
    name: "Lucía Martínez",
    location: "Gràcia",
    rating: 5,
    text: "Mudanza de un piso de 3 habitaciones en menos de 4 horas. El equipo fue muy profesional y educado. Los recomendaré siempre a amigos y familia.",
    date: "Febrero 2025",
    avatar: "LM",
  },

  {
    name: "Isabel Romero",
    location: "Sarrià",
    rating: 5,
    text: "Teníamos muebles antiguos muy delicados y los trataron con un cuidado exquisito. El seguro a todo riesgo nos dio muchísima tranquilidad. 100% recomendables.",
    date: "Marzo 2025",
    avatar: "IR",
  },
  {
    name: "David López",
    location: "Poblenou",
    rating: 5,
    text: "Mudanza nacional Barcelona-Madrid sin ningún problema. Todo llegó en perfecto estado y en el tiempo estimado. Comunicación excelente durante todo el proceso.",
    date: "Febrero 2025",
    avatar: "DL",
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-24 bg-gray-50/50" id="resenas">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-black text-foreground uppercase tracking-tighter mb-4">
            Lo que dicen{" "}
            <span className="text-primary">nuestros clientes</span>
          </h2>
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-foreground font-black text-lg">5.0</span>
            <span className="text-muted-foreground font-medium">
              · {reviews.length} reseñas verificadas
            </span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col gap-5"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 font-medium leading-relaxed text-sm flex-grow">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-primary font-black text-xs">
                    {review.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-black text-foreground text-sm leading-none">
                    {review.name}
                  </p>
                  <p className="text-muted-foreground text-[11px] font-medium mt-1">
                    {review.location} · {review.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
