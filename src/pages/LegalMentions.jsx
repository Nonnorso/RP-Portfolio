import "../styles/LegalMention.scss"

export default function LegalMentions (){
    return ( 
      <div className="LegalMentionContainer">
        <div className="LegalMentionContent">
          <h2>Mentions Legales</h2>

          <section>
            <h3><span className="borderUnderline">Proprietaire du site</span></h3>
              <p>Raphael Philippot</p>
              <p>4, place des provinces, 34500 Béziers</p>
              <p>Numéro de Téléphone : 0643775569</p>
              <p>E-mail de Contact : r.philippot@live.fr</p>
            <h3><span className="borderUnderline">Responsable de la Publication</span></h3>
              <p>Raphael Philippot</p>
              <p>4, place des provinces, 34500 Béziers</p>
              <p>Numéro de Téléphone : 0643775569</p>
              <p>E-mail de Contact : r.philippot@live.fr</p>
          </section>

          <section>
          <h3><span className="borderUnderline">Hebergeur</span></h3>
            <p>Le site est hébergé par un fournisseur d'hébergement dont les détails ne sont pas spécifiés pour le moment.</p>
          </section>

          <section>
            <h3><span className="borderUnderline">Numéro d'Identification Fiscale</span></h3>
              <p>Non applicable (en tant que particulier sans activité commerciale).</p>
            <h3><span className="borderUnderline">Numéro SIRET</span></h3>
              <p>Non applicable (en tant que particulier sans activité commerciale).</p>
          </section>

          <section>
            <h3><span className="borderUnderline">Responsabilité</span></h3>
              <p>L'éditeur du site s'efforce de fournir des informations précises et à jour. Cependant, il ne peut garantir l'exactitude, la complétude ou la pertinence des informations fournies. En conséquence, l'utilisateur du site assume l'entière responsabilité de l'utilisation des informations fournies.</p>
            <h3><span className="borderUnderline">Droit d'Auteur</span></h3>
              <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.</p>
              <h3><span className="borderUnderline">Collecte de Données Personnelle</span></h3>
              <p>Les informations collectées par le biais de formulaires sont destinées exclusivement à un usage interne. Conformément à la loi sur la protection des données, vous disposez d'un droit d'accès, de rectification et de suppression des données vous concernant.</p>
          </section>
        </div>
      </div>
      );
}