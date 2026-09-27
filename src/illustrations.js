/* Illustrations de Frigourmand, dessinées à la main en SVG (aucune image externe).
   Les couleurs passent par des classes CSS (voir « Illustrations » dans styles.css),
   pour s'adapter au mode sombre. Toutes sont décoratives : aria-hidden. */
'use strict';

(function () {
  const svg = (vb, corps, classe) =>
    `<svg class="illu ${classe || ''}" viewBox="${vb}" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">${corps}</svg>`;

  /* ─── Grand frigo ouvert (page de présentation) ─── */
  const frigo = () => svg('0 0 420 340', `
    <ellipse class="f-ombre" cx="215" cy="322" rx="175" ry="12"/>
    <!-- panier de pain -->
    <path class="f-ocre t" d="M22 262h74l-8 52H30z"/>
    <path class="t" d="M26 276h66M28 290h62M30 303h58" fill="none"/>
    <path class="f-pain t" d="M40 262c-6-30 10-62 22-70 6-4 12 0 10 7-6 20-10 44-8 63z"/>
    <path class="t" d="M52 214l8 4M49 230l9 4M48 246l9 3" fill="none"/>
    <!-- frigo -->
    <rect class="f-blanc t" x="110" y="18" width="190" height="300" rx="18"/>
    <rect class="f-interieur t" x="124" y="32" width="162" height="272" rx="10"/>
    <path class="t" d="M124 104h162M124 176h162M124 244h162" fill="none"/>
    <!-- porte ouverte -->
    <path class="f-blanc t" d="M300 22l76 26v254l-76 16z"/>
    <path class="t" d="M308 96l60 12M308 170l60 8M308 240l60 4" fill="none"/>
    <rect class="f-bleu t" x="316" y="66" width="14" height="32" rx="4"/>
    <rect class="f-vert t" x="338" y="72" width="12" height="30" rx="4"/>
    <rect class="f-rouge t" x="318" y="140" width="12" height="32" rx="3"/>
    <rect class="f-jaune t" x="340" y="146" width="14" height="26" rx="3"/>
    <path class="t" d="M366 150v70" fill="none"/>
    <!-- étage 1 : œufs et fromage -->
    <rect class="f-carton t" x="136" y="80" width="70" height="22" rx="4"/>
    <ellipse class="f-oeuf t" cx="150" cy="78" rx="8" ry="10"/>
    <ellipse class="f-oeuf t" cx="171" cy="78" rx="8" ry="10"/>
    <ellipse class="f-oeuf t" cx="192" cy="78" rx="8" ry="10"/>
    <path class="f-jaune t" d="M222 102l52-2-6-34z"/>
    <circle class="f-trou" cx="252" cy="88" r="3"/><circle class="f-trou" cx="262" cy="94" r="2.2"/>
    <!-- étage 2 : lait, tomates, pot -->
    <path class="f-blanc t" d="M140 174v-48l8-12h18l8 12v48z"/>
    <rect class="f-bleu" x="141" y="140" width="32" height="16"/>
    <path class="t" d="M140 140h34M140 156h34" fill="none"/>
    <circle class="f-rouge t" cx="198" cy="160" r="14"/>
    <circle class="f-rouge t" cx="226" cy="163" r="11"/>
    <path class="f-vert t" d="M192 147l6 4 6-4-6-2z"/>
    <path class="f-vert t" d="M221 152l5 3 5-3-5-2z"/>
    <rect class="f-confiture t" x="248" y="140" width="26" height="34" rx="5"/>
    <rect class="f-blanc t" x="246" y="134" width="30" height="9" rx="3"/>
    <!-- étage 3 : carottes, beurre, poireau -->
    <path class="f-orange t" d="M136 232l54-14-50 22z"/>
    <path class="f-orange t" d="M140 240l56-8-54 14z"/>
    <path class="f-vert t" d="M190 218l12-8M196 232l12-4" fill="none"/>
    <rect class="f-jaune t" x="212" y="222" width="36" height="20" rx="3"/>
    <path class="t" d="M212 230h36" fill="none"/>
    <path class="f-poireau t" d="M254 240l26-44 6 3-24 43z"/>
    <path class="f-vert t" d="M280 196l-2-18 8 4 2 16z"/>
    <!-- bac à légumes -->
    <rect class="f-bac t" x="132" y="254" width="146" height="42" rx="8"/>
    <path class="f-vert t" d="M150 266c4-12 20-14 26-4 8-8 22-2 20 8-2 10-40 12-46-4z"/>
    <circle class="f-pomme t" cx="228" cy="272" r="12"/>
    <circle class="f-pomme t" cx="252" cy="274" r="11"/>
    <path class="t" d="M228 260l2-6M252 263l2-5" fill="none"/>
    <!-- poignée et pieds -->
    <rect class="f-trait" x="116" y="120" width="4" height="40" rx="2"/>
    <path class="t" d="M130 318v8M280 318v8" fill="none"/>
  `, 'illu-frigo');

  /* ─── Petites illustrations de plats (cartes de recettes) ─── */
  const assiette = '<ellipse class="f-ombre" cx="60" cy="80" rx="46" ry="6"/><ellipse class="f-blanc t" cx="60" cy="56" rx="50" ry="22"/><ellipse class="t" cx="60" cy="56" rx="36" ry="15" fill="none"/>';
  const PLATS = {
    bol: `<ellipse class="f-ombre" cx="60" cy="82" rx="40" ry="5"/>
      <path class="f-blanc t" d="M16 40h88c0 24-18 40-44 40S16 64 16 40z"/>
      <ellipse class="f-soupe t" cx="60" cy="40" rx="44" ry="11"/>
      <circle class="f-vert" cx="48" cy="38" r="3"/><circle class="f-vert" cx="66" cy="42" r="2.5"/><circle class="f-creme" cx="74" cy="36" r="3.5"/>
      <path class="t" d="M44 22c-4-6 4-8 0-14M60 20c-4-6 4-8 0-14M76 22c-4-6 4-8 0-14" fill="none"/>`,
    assiette: `${assiette}
      <path class="f-brun t" d="M42 58c0-10 14-14 24-10 8 3 10 12 2 16-10 5-26 4-26-6z"/>
      <circle class="f-vert t" cx="78" cy="52" r="6"/><circle class="f-vert t" cx="84" cy="60" r="5"/>
      <path class="f-orange t" d="M34 50l14 4-12 2z"/>`,
    tarte: `<ellipse class="f-ombre" cx="60" cy="80" rx="46" ry="6"/>
      <ellipse class="f-pate t" cx="60" cy="56" rx="50" ry="20"/>
      <ellipse class="f-jaune t" cx="60" cy="53" rx="40" ry="14"/>
      <path class="f-pate t" d="M60 53l40 3c-2 10-18 16-40 16z"/>
      <circle class="f-rouge" cx="44" cy="50" r="4"/><circle class="f-vert" cx="58" cy="46" r="3"/><circle class="f-rouge" cx="72" cy="50" r="3.5"/>`,
    salade: `<ellipse class="f-ombre" cx="60" cy="82" rx="42" ry="5"/>
      <path class="f-blanc t" d="M14 44h92c-2 22-20 36-46 36S16 66 14 44z"/>
      <path class="f-vert t" d="M20 44c2-14 16-20 26-12 6-12 24-12 28 0 10-8 26-2 26 12z"/>
      <circle class="f-rouge t" cx="42" cy="36" r="6"/><circle class="f-rouge t" cx="76" cy="38" r="5"/>
      <path class="f-jaune t" d="M56 32l10 2-4 8z"/>`,
    pates: `${assiette}
      <path class="t f-jaune" d="M34 58c6-10 16-12 26-8 10-6 22-2 26 8-6 10-46 10-52 0z"/>
      <path class="t" d="M40 56c6-4 12-4 18 0s12 4 18 0M44 61c6-3 10-3 16 0s12 3 18 0" fill="none"/>
      <path class="f-rouge t" d="M50 50c4-6 16-6 20 0-6 4-14 4-20 0z"/>
      <circle class="f-vert" cx="62" cy="48" r="2.5"/>`,
    poisson: `${assiette}
      <path class="f-bleu-clair t" d="M30 56c10-12 32-14 46-4l14-8-2 12 2 12-14-8c-14 10-36 8-46-4z"/>
      <circle class="f-trait" cx="40" cy="54" r="2"/>
      <path class="t" d="M54 48c4 4 4 12 0 16" fill="none"/>
      <path class="f-jaune t" d="M84 64c4-2 10 0 10 4-4 2-10 0-10-4z"/>`,
    viande: `${assiette}
      <path class="f-brun t" d="M36 54c2-12 22-16 34-10 10 5 12 16 2 20-12 5-38 4-36-10z"/>
      <path class="t" d="M46 50l8 6M56 48l8 6" fill="none"/>
      <path class="f-orange t" d="M76 58l14-6 2 6-14 4z"/>
      <circle class="f-vert t" cx="88" cy="64" r="4"/>`,
    volaille: `${assiette}
      <path class="f-dore t" d="M34 58c0-12 18-16 30-8l14 2c4-6 12-4 12 2s-6 8-10 6l-14 4c-10 10-32 8-32-6z"/>
      <circle class="f-vert t" cx="80" cy="66" r="4"/><circle class="f-vert t" cx="72" cy="68" r="3.5"/>`,
    oeuf: `${assiette}
      <path class="f-blanc-oeuf t" d="M30 56c0-10 12-14 20-10 8-8 26-6 30 2 10 0 14 10 6 14-10 8-50 8-56-6z"/>
      <circle class="f-jaune-oeuf t" cx="56" cy="54" r="9"/>
      <circle class="f-vert" cx="76" cy="54" r="2.5"/><circle class="f-vert" cx="40" cy="58" r="2"/>`,
    gateau: `<ellipse class="f-ombre" cx="60" cy="82" rx="40" ry="5"/>
      <ellipse class="f-blanc t" cx="60" cy="74" rx="44" ry="8"/>
      <path class="f-choco t" d="M26 42l58-12 10 12v26H26z"/>
      <path class="f-creme t" d="M26 42l58-12 10 12z"/>
      <path class="t" d="M26 56h68" fill="none"/>
      <path class="f-creme" d="M27 55h66v3H27z"/>
      <circle class="f-rouge t" cx="72" cy="30" r="6"/>
      <path class="t" d="M72 24c0-6 4-8 6-10" fill="none"/>`,
    verrine: `<ellipse class="f-ombre" cx="60" cy="84" rx="30" ry="4"/>
      <path class="f-verre t" d="M36 20h48l-6 60H42z"/>
      <path class="f-choco" d="M41 62h38l-1.8 17H42.8z"/>
      <path class="f-creme" d="M39 42h42l-2 20H41z"/>
      <path class="t" d="M39 42h42M41 62h38" fill="none"/>
      <circle class="f-rouge t" cx="60" cy="36" r="6"/>
      <path class="f-vert t" d="M62 30l8-6 2 6z"/>`,
    crepe: `<ellipse class="f-ombre" cx="60" cy="82" rx="44" ry="5"/>
      <ellipse class="f-blanc t" cx="60" cy="70" rx="48" ry="12"/>
      <ellipse class="f-pate t" cx="60" cy="64" rx="38" ry="9"/>
      <ellipse class="f-pate t" cx="60" cy="57" rx="38" ry="9"/>
      <ellipse class="f-pate t" cx="60" cy="50" rx="38" ry="9"/>
      <path class="f-choco t" d="M36 48c8-6 40-6 48 0-2 4-8 3-10 8-3-4-8-3-10 2-3-5-10-4-12 0-2-6-12-4-16-10z"/>
      <circle class="f-rouge t" cx="70" cy="44" r="4"/>`,
    biscuit: `<ellipse class="f-ombre" cx="60" cy="82" rx="46" ry="5"/>
      <ellipse class="f-blanc t" cx="60" cy="68" rx="50" ry="14"/>
      <ellipse class="f-pate t" cx="40" cy="60" rx="16" ry="8"/>
      <ellipse class="f-pate t" cx="74" cy="62" rx="16" ry="8"/>
      <ellipse class="f-pate t" cx="58" cy="50" rx="16" ry="8"/>
      <circle class="f-choco" cx="36" cy="59" r="2.2"/><circle class="f-choco" cx="45" cy="61" r="2"/><circle class="f-choco" cx="72" cy="61" r="2.2"/>
      <circle class="f-choco" cx="80" cy="63" r="2"/><circle class="f-choco" cx="55" cy="49" r="2.2"/><circle class="f-choco" cx="63" cy="51" r="2"/>`,
    pain: `<ellipse class="f-ombre" cx="60" cy="82" rx="46" ry="5"/>
      <path class="f-bois t" d="M10 62h100v14H10z"/>
      <path class="f-pain t" d="M16 60c0-14 16-22 44-22s44 8 44 22z"/>
      <path class="t" d="M36 46l8 8M54 42l8 10M72 44l8 8" fill="none"/>`
  };

  const REGLES = [
    ['bol', /soupe|velout|potage|gaspach|bouillon|ph[oở]\b|ramen|harira|minestrone|garbure|bouillabaisse|tom |miso|chorba|dal\b|bortsch|udon/],
    ['verrine', /mousse|cr[eè]me (br[uû]l|caramel|chocolat|dessert|anglaise|catalan)|panna|tiramisu|[iî]le flottante|verrine|riz au lait|zabaione|teurgoule|flan|cheesecake|pots? de cr/],
    ['tarte', /tarte|quiche|pizza|flammekueche|pissaladi|tourte|feuillet|galette|flamiche|clafoutis/],
    ['salade', /salade|tabou|carpaccio|ceviche|coleslaw|fattouch|tartare|crudit|c[eé]leri r[eé]moulade|vitello/],
    ['pates', /spagh|p[aâ]tes|lasagn|linguin|tagliat|penne|nouilles|gnocchi|risotto|cannellon|ravioli|macaroni|pad tha|coquillette/],
    ['oeuf', /omelette|[oœ]ufs?\b|[oœ]eufs|frittata|shakshuka|tortilla/],
    ['pain', /croque|sandwich|burger|bruschett|tartine|banh|pan bagnat|kebab|tacos|wrap|pita|focaccia|crostini/],
    ['crepe', /cr[eê]pe|pancake|gaufre|blinis/],
    ['biscuit', /cookie|madeleine|financier|chouquette|churros|beignet|macaron|sabl[eé]|tuile|biscuit|palmier|cannel|m[eé]ringue|langue/],
    ['gateau', /g[aâ]teau|cake|fondant|brownie|cookie|madeleine|financier|crêpe|crepe|gaufre|far |kouign|quatre|charlotte|paris-brest|mille-feuille|cannel|kougelhopf|muffin|pancake|churros|beignet|chouquette|éclair|eclair|moelleux|clafoutis|tatin|forêt|for[eê]t|brioche/]
  ];

  /** Choisit une petite illustration d'après le nom de la recette et ses ingrédients. */
  function pourRecette(r, ing) {
    const nom = String(r.nom || '').toLowerCase();
    let cle = null;
    for (const [c, re] of REGLES) if (re.test(nom)) { cle = c; break; }
    if (!cle && r.type === 'Dessert') cle = 'gateau';
    if (!cle && r.type === 'Entrée') cle = 'salade';
    if (!cle && ing) {
      const rayons = r.ingredients.filter(([, , , opt]) => !opt).map(([id]) => ing(id));
      if (rayons.some((i) => i.rayon === 'poi')) cle = 'poisson';
      else if (rayons.some((i) => /poulet|canard|dinde|pintade|caille|volaille/.test(i.id))) cle = 'volaille';
      else if (rayons.some((i) => i.rayon === 'bou')) cle = 'viande';
    }
    return svg('0 0 120 90', PLATS[cle || 'assiette'], 'illu-plat');
  }

  const plat = (cle) => svg('0 0 120 90', PLATS[cle] || PLATS.assiette, 'illu-plat');

  window.FrigourmandIllustrations = { frigo, pourRecette, plat };
})();
