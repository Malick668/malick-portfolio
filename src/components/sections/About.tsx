export default function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            À propos
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            Qui suis-je ?
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2">

          {/* Parcours */}
          <div className="rounded-2xl border border-gray-200 p-8 shadow-sm">

            <h3 className="mb-6 text-2xl font-bold text-gray-900">
              Mon parcours
            </h3>

            <p className="text-lg leading-8 text-gray-600">
              Je suis étudiant en Master 2 Ingénierie Mathématique pour la
              Science des Données à l&apos;Université de Lorraine. Mon parcours
              en statistique et en informatique décisionnelle m&apos;a permis
              de développer une solide base en analyse de données,
              modélisation statistique et Business Intelligence.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              À travers mes expériences et mes projets, je travaille sur
              l&apos;extraction, la préparation, l&apos;analyse et la
              visualisation des données afin de produire des informations
              utiles à la prise de décision.
            </p>

          </div>

          {/* Domaines */}
          <div className="rounded-2xl border border-gray-200 p-8 shadow-sm">

            <h3 className="mb-6 text-2xl font-bold text-gray-900">
              Mes domaines
            </h3>

            <ul className="space-y-4 text-lg text-gray-600">
              <li> Data Analysis</li>
              <li> Business Intelligence</li>
              <li> Data Visualization</li>
              <li> SQL & Data Management</li>
              <li> ETL & Data Engineering</li>
              <li> Machine Learning</li>
            </ul>

          </div>

        </div>
      </div>
    </section>
  );
}