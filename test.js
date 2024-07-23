const React = require("react");
const { renderToFile } = require("@react-pdf/renderer");
const Pdf = require("./dist/index").default;

const pdfs = {
  id: 1,
  colour: false,
  content: `<p><br></p><p>&nbsp;</p><p><br></p><p><br></p><p><br></p><p><strong>Objet : </strong>Client acquéreur cherche à {{client_ville}}</p><p>&nbsp;</p><p><br></p><p>A {{client_ville}}, le {{aujourdhui}}</p><p><br></p><p><br></p><p>Madame, Monsieur {{client_prenom}} {{client_nom}},</p><p><br></p><p>Je vous contacte de la part d'un client qui recherche activement <strong>une maison à {{client_ville}} d'une surface d'environ {{bien_surface_arrondi_dizaine}}m².</strong></p><p>En passant devant votre maison la semaine dernière, il m'a semblé que votre bien pourrait correspondre parfaitement à cette recherche.</p><p><br></p><p>Je suis pour ma part {{agent_titre}} depuis <strong style="color: rgb(0, 102, 204);">[NOMBRE_ANNEE_A_COMPLETER]</strong><strong> années</strong> et expert de {{client_ville}}. J'ai par ailleurs vendu plusieurs bien à proximité du {{client_adresse_ligne1}}.</p><p><br></p><p>Je ne sais pas si vous avez un projet immobilier mais si c'est le cas, n'hésitez pas à me contacter <strong>{{agent_tel_mobile}} </strong>ou par email à <strong>{{agent_email}}. </strong>Je serai ravi de pouvoir échanger avec vous pour comprendre davantage votre projet et vous en dire plus sur la recherche de mon client.</p><p><br></p><p>En vous remerciant par avance pour l'attention portée à la demande de mon client, je reste à votre disposition pour toute information complémentaire.</p><p>&nbsp;</p><p>Sincèrement,</p><p>&nbsp;</p><p><br></p><p><strong>{{agent_prenom}} {{agent_nom}}</strong></p><p>{{agent_titre}}</p><p>{{agent_tel_mobile}}</p><p>{{agent_email}}</p>`,
  cost: null,
  nbPages: null,
  propertyType: "apartment",
  surface: 121,
  toCivility: "mister",
  toFirstName: "valentin",
  toLastName: "crozet",
  toAddressLine1: "1811 Route de Nuits",
  toAddressLine2: null,
  toCity: "Saint-Georges-de-Reneins",
  toZipCode: "69830",
  toCountry: "France",
  dpeId: null,
  successionId: null,
  agencyId: 1,
  senderId: 2,
  sentAt: null,
  createdAt: "2024-07-12T12:49:09.167Z",
  updatedAt: "2024-07-12T12:49:20.078Z",
  sender: {
    id: 2,
    username: "valentin+test@bunji.fr",
    email: "valentin+test@bunji.fr",
    notifications: "weekly",
    password: "$2a$10$9lYvy7/nS5nb7xIdEDXRNeZQZVdK3U30.LnHU.fV7qjuuE9rIw3.G",
    lastname: "test",
    firstname: "valentin",
    telMobile: "+33 6 37 87 93 60",
    telFixed: "",
    image: null,
    type: "directeur_agence",
    active: true,
    isBunjiActivated: true,
    isBunjiActivatedToken: null,
    trialEndDate: null,
    title: "Agent Immobilier",
    lastConnection: "2024-07-12T15:03:28.522Z",
    legalNotice: null,
    googleId: null,
    microsoftId: null,
    agencyId: 1,
    customAdvStartPages: null,
    customAdvEndPages: null,
    isVerified: true,
    verifyToken: null,
    verifyExpires: null,
    verifyChanges: {},
    resetToken: null,
    resetExpires: null,
    createdAt: "2024-06-28T14:28:01.823Z",
    updatedAt: "2024-07-12T15:03:28.528Z",
    deletedAt: null,
    leadGeos: [],
    hasGoogleId: false,
    hasMicrosoftId: false,
  },
};

const agency = {
  id: 1,
  name: "Agence Valentino",
  address: "1811 Route de Nuits",
  zipCode: "69830",
  city: "Saint-Georges-de-Reneins",
  logo: null,
  website: "",
  colour: "#1f5e9f",
  estimationsEnabled: false,
  salesPredictionEnabled: false,
  isStripeEnabled: false,
  hasStripePaymentMethod: false,
  createdAt: "2024-06-26T12:12:13.377Z",
  updatedAt: "2024-06-26T12:12:13.377Z",
  companyId: null,
};

const main = async () => {
  await renderToFile(
    <Pdf pdfs={[pdfs]} agency={agency} advSetting={null} />,
    `./my-doc-2.pdf`
  );
};

main();
