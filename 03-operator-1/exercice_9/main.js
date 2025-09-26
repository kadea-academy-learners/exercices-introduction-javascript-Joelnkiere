// Répartition de l'héritage de Monsieur Jean MUKUNA
// Objectif: calculer et afficher la part de chaque héritier selon les règles fournies

// Données du patrimoine (CDF) - variables simples
const maison = 60000000;
const terrains = 40000000;
const liquidites = 20000000;

// Paramètres de répartition (en pourcentage entiers)
// Catégorie 1: 75% (enfants)
// Catégorie 2: 25% (conjoint + frères/soeurs)

// Calcul du total sans méthodes avancées
const totalPatrimoine = maison + terrains + liquidites;

// Catégorie 1: Enfants (75%)
const enveloppeCat1 = (totalPatrimoine * 75) / 100;

// Branches (représentation): Paul, Marie, Alain (représenté par Éric et Claire)
const nbBranchesCat1 = 3;
const partParBrancheCat1 = enveloppeCat1 / nbBranchesCat1;

const paul = partParBrancheCat1; // 1 branche
const marie = partParBrancheCat1; // 1 branche

// Branche d'Alain partagée entre Éric et Claire à parts égales
const eric = partParBrancheCat1 / 2;
const claire = partParBrancheCat1 / 2;

// Catégorie 2: Conjoint + frères/soeurs (25%) -> 3 parts égales (Madame MUKUNA, Joseph, Sarah)
const enveloppeCat2 = (totalPatrimoine * 25) / 100;
const nbPartsCat2 = 3;
const partCat2 = enveloppeCat2 / nbPartsCat2;

const madameMukuna = partCat2;
const joseph = partCat2;
const sarah = partCat2;

// Affichages
console.log('Répartition de l\'héritage de Monsieur Jean MUKUNA');
console.log('-----------------------------------------------');
console.log('Patrimoine total: ' + totalPatrimoine + ' CDF');
console.log('Catégorie 1 (Enfants, 75%): ' + enveloppeCat1 + ' CDF');
console.log('Catégorie 2 (Conjoint + frères/soeurs, 25%): ' + enveloppeCat2 + ' CDF');
console.log('');

console.log('Parts par héritier:');
console.log('- Paul: ' + paul + ' CDF');
console.log('- Marie: ' + marie + ' CDF');
console.log('- Éric: ' + eric + ' CDF');
console.log('- Claire: ' + claire + ' CDF');
console.log('- Madame MUKUNA: ' + madameMukuna + ' CDF');
console.log('- Joseph: ' + joseph + ' CDF');
console.log('- Sarah: ' + sarah + ' CDF');

// Vérification (optionnelle): somme des parts
const sommeParts = paul + marie + eric + claire + madameMukuna + joseph + sarah;
console.log('');
console.log('Vérification - somme des parts listées: ' + sommeParts + ' CDF');

