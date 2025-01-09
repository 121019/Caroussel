import "./Caroussel.css"; // Import du fichier CSS

const quotes = [
  {
    text: "Le succès, c'est d'aller d'échec en échec sans perdre son enthousiasme",
    author: "Winston Churchill",
  },
  {
    text: "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre",
    author: "Albert Einstein",
  },
  {
    text: "Le bonheur n'est pas quelque chose de prêt à l'emploi. Il vient de vos propres actions",
    author: "Dalaï Lama",
  },
  {
    text: "La seule limite à notre réalisation de demain sera nos doutes d'aujourd'hui",
    author: "Franklin D. Roosevelt",
  },
  {
    text: "Soyez le changement que vous voulez voir dans le monde",
    author: "Mahatma Gandhi",
  },
  {
    text: "Tout est possible à qui rêve, ose, travaille et n'abandonne jamais",
    author: "Xavier Dolan",
  },
  {
    text: "Les difficultés préparent des personnes ordinaires à des destins extraordinaires",
    author: "C.S. Lewis",
  },
  {
    text: "Votre vie ne s'améliore pas par hasard, elle s'améliore par le changement",
    author: "Jim Rohn",
  },
  {
    text: "Le seul moyen de faire du bon travail est d’aimer ce que vous faites",
    author: "Steve Jobs",
  },
  {
    text: "Quand vous remplacez les pensées négatives par des pensées positives, vous obtenez des résultats positifs",
    author: "Willie Nelson",
  },
];

function Caroussel() {
  return (
    <div className="carousel-container">
      <div className="carousel">
        <div className="carousel1">
          {quotes.map((quote, index) => (
            <div className="carousel2__face" key={index}>
              <h1>{`"${quote.text}"`}</h1>
              <br />
              <h2>{quote.author}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Caroussel;
