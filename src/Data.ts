import { IHTML } from "./Interfaces";

export const Paragraphs: IHTML[] = [
    {
        id: 0,

        text1: `Au nord du royaume du Sommerlund, il est de tradition depuis des siècles
            d'envoyer les fils des Seigneurs de la Guerre au monastère Kaï. C'est là
            qu'on leur enseigne l'art et la science de leurs nobles ancêtres. Les
            Moines Kaï sont de grands maîtres dans l'art qu'ils enseignent. Pour
            transmettre leurs connaissances, ils doivent faire subir à leurs
            disciples de rudes épreuves au cours de leur apprentissage, mais ces
            derniers ne s'en plaignent jamais. Ils leur témoignent au contraire
            amour et respect, sachant très bien qu'ils quitteront un jour le
            monastère en possédant tous les secrets de la tradition Kaï : ils
            pourront alors rentrer chez eux, l'esprit et le corps formés aux
            techniques de la guerre. Profondément attachés à leur patrie, ils seront
            ainsi prêts à la défendre contre le danger constant qui la menace : la
            soif de conquête des Maîtres des Ténèbres venus de l'ouest. Au temps
            jadis, à l'époque de la Lune Noire, les Maîtres des Ténèbres menèrent
            une guerre sans merci contre le royaume du Sommerlund. Ce fut une longue
            et douloureuse épreuve de force à l'issue de laquelle les guerriers du
            Sommerlund remportèrent la victoire lors de la grande bataille de
            Maaken. Le roi Ulnar et ses alliés de Durenor anéantirent l'armée des
            Maîtres des Ténèbres dans le défilé de Moytura et précipitèrent l'ennemi
            au fond de la gorge de Maaken. Vashna, le plus puissant parmi les
            Maîtres des Ténèbres, périt d'un coup mortel que le roi Ulnar lui porta
            de sa puissante épée, l'Epée du Soleil, que l'on désigne généralement
            sous le nom de "Glaive de Sommer". Depuis ce temps, les Maîtres des
            Ténèbres ont juré de prendre leur revanche sur le royaume du Sommerlund
            et la Maison d'Ulnar.`,

        text2:
            `Lorsque l'aube se lève sur le premier jour de votre aventure, tous les
            Seigneurs Kaï sont présents au monastère : on doit, en effet, célébrer
            aujourd'hui même la grande fête de Fehmarn et l'on se prépare tôt le
            matin aux réjouissances. Mais soudain, un immense nuage noir s'élève au
            ciel d'occident : d'énormes créatures aux ailes sombres emplissent les
            nues en si grand nombre que le soleil semble s'éteindre. Cette invasion
            porte la marque des Maîtres des Ténèbres. Les ennemis jurés du Royaume
            du Sommerlund passent une nouvelle fois à l'attaque : la guerre a
            recommencé. En ce matin fatal, Loup Silencieux (c'est le nom qui vous a
            été donné par les Moines Kaï) est allé chercher du bois dans la forêt :
            c'est la corvée qu'on vous a assignée pour vous punir de votre
            inattention en classe. Or, sur le chemin du retour, vous apercevez tout
            à coup ce gigantesque nuage de créatures noires qui fond sur le
            monastère et semble l'engloutir aussitôt. Vous laissez tomber votre bois
            à terre et vous vous précipitez sur le lieu de la bataille. Mais les
            monstres noirs ont obscurci le soleil et il fait à présent si sombre que
            vous trébuchez contre une racine en tombant tête la première. Dans votre
            chute, vous heurtez violemment du front une branche basse qui vous
            assomme. Une fraction de seconde avant de perdre connaissance, vous avez
            cependant le temps de saisir du regard un terrifiant spectacle : les
            murs du monastère Kaï sont en train de s'écrouler sur eux-mêmes dans un
            fracas de tonnerre. Vous ne reprenez conscience qu'au bout de plusieurs
            heures et, les larmes aux yeux, vous contemplez avec horreur le tas de
            ruines que l'ennemi a laissé derrière lui. Les Guerriers Kaï ont été
            ensevelis sous les décombres et il ne reste plus aucun survivant parmi
            vos compagnons. Avec une infinie douleur, vous levez alors votre visage
            vers le ciel, à nouveau clair, et vous faites le serment de venger la
            mort des Moines et des Seigneurs Kaï. Vous ferez payer leur crime aux
            Maîtres des Ténèbres ! Votre tâche d'ailleurs commence à l'instant même
            : il vous faut, en effet, gagner la capitale du royaume pour prévenir le
            Roi en personne de l'effroyable péril qui menace le pays ; car
            maintenant, l'ennemi est en marche, et si vous n'agissez pas à temps,
            votre patrie tombera sous son joug. Vous êtes le dernier des Seigneurs
            Kaï et le sort de votre peuple repose désormais entre vos seules mains :
            le Loup Silencieux est devenu Loup Solitaire et les envahisseurs feront
            tout pour vous empêcher d'atteindre le Palais du Roi.`,

        decision: `Rendez-vous au 1.`,

        links: [1]
    },
    {
        id: 1,

        text1: `Il faut vous hâter, car quelque chose vous dit qu'il serait imprudent de
            vous attarder parmi les ruines fumantes du monastère détruit. Les
            monstres volants peuvent, en effet, reparaître à tout moment. Il n'y a
            d'ailleurs pas de temps à perdre : vous devez au plus vite prendre la
            route de Holmgard, la capitale du Sommerlund, pour aller annoncer au Roi
            cette terrible nouvelle : les Guerriers Kaï, l'élite du pays, ont tous
            été massacrés, à l'exception de vous-même. Or sans l'autorité et le
            savoir des Seigneurs Kaï pour commander l'armée, le royaume du
            Sommerlund se trouve à la merci de ses plus anciens ennemis : les
            Maîtres des Ténèbres. En retenant vos larmes à grand-peine, vous dites
            adieu à vos compagnons morts et vous faites le serment de les venger.
            Vous tournez alors le dos aux ruines et vous descendez avec précaution
            le sentier escarpé qui s'ouvre devant vous. Au pied de la colline, le
            chemin aboutit à une bifurcation. Là, deux autres sentiers mènent l'un
            et l'autre à une grande forêt en empruntant deux directions différentes.`,

        decision: `Si vous souhaitez prendre le sentier de droite, rendez-vous
            au 85. Si vous préférez suivre celui de gauche,
            rendez-vous au 275. Enfin, si vous maîtrisez la
            Discipline Kaï du Sixième Sens, rendez-vous au 141.`,

        links: [85, 275, 141]
    },
    {
        id: 2,

        text1: `Tandis que vous courez à perdre haleine dans la forêt qui s'épaissit,
        les cris des Gloks s'évanouissent peu à peu derrière vous. Vous les avez
        presque semés lorsque vous trébuchez soudain en tombant tête la première
        dans un enchevêtrement de branches basses.`,

        decision: `Utilisez la Table de Hasard
        pour obtenir un chiffre. Si vous tirez entre 0 et 4, rendez-vous au 343.
        Entre 5 et 9, rendez-vous au 276.`,

        links: [343, 276]
    },
    {
        id: 3,

        text1: `Vous emboîtez le pas à l'officier qui franchit une porte en arcade, puis
        monte quelques marches menant à un grand hall. Des soldats courent en
        tous sens, porteurs de parchemins ornés qu'ils doivent remettre à des
        officiers postés le long des murs de la ville. Un homme au visage
        couturé de cicatrices, l'air hagard, s'approche de vous et vous offre de
        le suivre jusqu'à la citadelle. Il porte la toge blanche et pourpre en
        usage à la cour du Roi.`,

        decision: `Si vous souhaitez suivre cet homme, rendez-vous
        au 196. Si vous préférez décliner son offre et
        retourner dans les rues populeuses, rendez-vous au 144.`,

        links: [196, 144]
    },
    {
        id: 4,

        text1: `C'est un petit canoë à une place, en très mauvais état. Des pièces de
        bois disjointes laissent apparaître des trous en plusieurs endroits de
        la coque et il vous faut les boucher à la hâte avec de l'argile. Vous
        videz ensuite l'embarcation de son eau et il vous semble alors qu'elle
        est en état de flotter. Vous rangez votre équipement à l'avant du canoë,
        puis vous descendez le cours de la rivière en pagayant à l'aide d'un
        débris de bois ramassé à la surface de l'eau. Un instant plus tard, vous
        entendez des chevaux galoper dans votre direction, le long de la rive
        gauche.`,

        decision: `Si vous souhaitez vous cacher au fond du canoë, rendez-vous au 75.
        Si vous préférez au contraire attirer l'attention des cavaliers, rendez-vous au 175.
        Si vous maîtrisez la Discipline Kaï du Sixième Sens, rendez-vous au 218.`,

        links: [75, 175, 218]
    },
    {
        id: 5,

        text1: `Vous avez marché pendant environ une heure lorsque le sentier s'oriente
        peu à peu vers l'est. Vous atteignez bientôt un gué qui traverse un
        ruisseau coulant vers le sud. Le courant en est rapide et le lit,
        rocheux et escarpé. Au-delà du gué, le sentier que vous suivez croise un
        chemin plus large, orienté nord-sud. En allant vers le nord, vous vous
        éloigneriez de la capitale et vous décidez donc de prendre à droite, en
        direction du sud.`,

        decision: `Rendez-vous au 111.`,

        links: [111]
    },
    {
        id: 6,

        text1: `Vous entendez au loin des chevaux dont le galop se rapproche et vous
        vous accroupissez derrière un arbre pour voir passer les cavaliers sans
        être vu. Bientôt, vous reconnaissez l'uniforme blanc de l'armée du
        Sommerlund : ce sont des soldats de la Garde du Roi.`,

        decision: `Si vous souhaitez les appeler, rendez-vous au 183. Si vous préférez les laisser passer et
        poursuivre votre chemin à travers la forêt, rendez-vous au 200.`,

        links: [183, 200]
    },
    {
        id: 7,

        text1: `Pendant un moment qui vous semble une éternité, le flot de la foule vous
        entraîne comme une feuille au fil du courant. Vous essayez désespérément
        de rester debout, mais vos épreuves vous ont affaibli, vous avez le
        vertige et vos jambes sont lourdes comme du plomb. Soudain, vous
        apercevez un escalier de pierre, long et étroit, qui mène sur le toit
        d'une auberge. Rassemblant vos dernières forces, vous vous frayez un
        chemin jusqu'à ces marches que vous grimpez péniblement. Parvenu au
        sommet, vous contemplez alors une vue magnifique : les toits et les
        tours de Holmgard s'étendent sous vos yeux et les hauts murs de pierre
        de la citadelle resplendissent au soleil. Les maisons et tous les
        bâtiments de la capitale ont été construits très près les uns des autres
        et il est tout à fait possible de sauter de toit en toit. Autrefois, les
        habitants de Holmgard empruntaient volontiers ce « Chemin des Toits »
        (comme on l'appelle ici) lorsque de trop fortes pluies rendaient
        impraticables certaines rues non pavées.`,
        
        text2: `Mais les accidents ont été si
        nombreux qu'il est désormais interdit, par décret du Roi, de se déplacer
        ainsi. Dans votre cas, cependant, seul le Chemin des Toits peut vous
        mener jusqu'au souverain, et vous décidez donc de vous rendre au palais
        de cette manière. Après avoir bondi et sauté de maison en maison, vous
        parvenez au bout d'une rangée de toits et il ne vous reste bientôt plus
        qu'une seule rue à franchir pour atteindre la citadelle. Cette rue,
        malheureusement, est plus large que les autres et il vous faudra réussir
        un bond spectaculaire si vous voulez passer de l'autre côté. La gorge un
        peu serrée, le sang battant à vos tempes, vous prenez donc votre élan en
        courant sur toute la longueur du toit, puis vous vous élancez, le regard
        fixé sur la maison d'en face.`,

        decision: `Utilisez la Table de Hasard pour obtenir
        un chiffre. Si vous tirez un chiffre entre 0 et 2, rendez-vous au 108.
        Entre 3 et 9, rendez-vous au 25.`,

        links: [108, 25]
    },
    {
        id: 8,

        text1: `Votre Sixième Sens vous avertit qu'une terrible bataille fait rage dans
        le sud. Mais votre simple bon sens vous rappelle également que le chemin
        le plus court pour rejoindre la capitale passe précisément par le sud.`,

        decision: `Rendez-vous au 70 pour établir votre itinéraire.`,

        links: [70]
    },
    {
        id: 9,

        text1: `Vous ne pouvez plus bouger : une force mystérieuse vous immobilise et
        vos yeux sont attirés par la bouche du squelette. Montant des
        profondeurs de la terre, vous entendez alors un bourdonnement grave,
        comme si des millions d'abeilles en fureur étaient rassemblées là. Puis
        une lueur rougeâtre s'allume dans les orbites vides du roi mort et le
        bourdonnement augmente d'intensité jusqu'à devenir assourdissant. Vous
        êtes en présence d'une force maléfique plus ancienne et plus puissante
        encore que celle des Maîtres des Ténèbres.`,

        decision: `Si vous possédez une Pierre de Vordak, rendez-vous au 236. Sinon, rendez-vous
        au 292.`,

        links: [236, 292]
    },
    {
        id: 10,

        text1: `Vous êtes en sueur et vos jambes vous font mal. Un peu plus loin, vous
        apercevez quelques maisonnettes rassemblées.`,

        decision: `Si vous souhaitez entrer
        dans l'une de ces maisonnettes pour y prendre quelque repos, rendez-vous
        au 115. Si vous préférez poursuivre votre chemin,
        rendez-vous au 83.`,

        links: [115, 83]
    },
    {
        id: 11,

        text1: `Vous vous dissimulez dans l'entrée d'une écurie et vous cachez votre
        blouse de médecin dans la paille. Il est en effet préférable
        d'apparaître comme un Seigneur Kaï que comme un charlatan. Puis, sans
        perdre une seconde, vous vous dirigez vers l'Entrée Principale, située
        de l'autre côté de la cour.`,

        decision: `Rendez-vous au 139.`,

        links: [139]
    },
    {
        id: 12,

        text1: `Le garde du corps vous observe d'un regard soupçonneux puis vous claque
        la porte au nez. Vous entendez alors des voix à l'intérieur de la
        roulotte, puis, soudain, la porte s'ouvre à nouveau et un marchand à
        l'allure prospère apparaît devant vous. Il exige 10 Couronnes pour prix
        de votre transport.`,

        decision: `Si vous avez ces 10 Couronnes et que vous désirez
        les lui donner, rendez-vous au 262. Si vous
        n'avez pas cette somme, ou si vous ne souhaitez pas la lui payer,
        rendez-vous au 247.`,

        links: [262, 247]
    },
    {
        id: 13,

        text1: `Le chemin aboutit bientôt à une vaste clairière. En son centre se dresse
        un arbre plus haut et plus large que les autres. Nichée dans son
        feuillage, à quelque huit mètres au-dessus du sol, se trouve une grande
        maison. Aucune échelle ne permet d'y accéder, mais l'écorce noueuse de
        l'arbre offre de nombreux points d'appui et il ne doit pas être trop
        difficile de grimper là-haut.`,

        decision: `Si vous souhaitez escalader cet arbre pour
        inspecter la maison, rendez-vous au 307. Si vous
        préférez poursuivre votre chemin, rendez-vous au 213.`,

        links: [307, 213]
    },
    {
        id: 14,

        text1: `Vous parvenez au sommet d'une petite colline boisée. De gros rocs y sont
        disposés les uns à côté des autres, formant un cercle grossier. Soudain,
        vous entendez un grognement sonore qui s'élève de derrière un rocher
        situé à votre gauche.`,

        decision: `Si vous voulez dégainer votre arme et vous
        préparer à combattre, rendez-vous au 43. Si vous préférez prendre la fuite en courant
        le plus vite possible au bas de la colline, rendez-vous au 106.`,

        links: [43, 106]
    },
    {
        id: 15,

        text1: `Vous longez un long tunnel sombre formé par des branches d'arbres qui
        s'entrecroisent au-dessus de votre tête et vous arrivez enfin dans une
        vaste clairière. En son centre se dresse un socle de pierre sur lequel
        est posée une épée, rangée dans un fourreau de cuir noir. Un mot
        manuscrit est attaché à la garde de l'épée, mais il est écrit dans une
        langue qui vous est étrangère. Vous pouvez prendre cette
        Epée si vous le désirez en n'oubliant pas de l'inscrire
        sur votre Feuille d'Aventure.`,

        decision: `Trois chemins permettent de quitter la
        clairière : si vous voulez aller à l'est, rendez-vous au 207. A l'ouest, rendez-vous au 201.
        Au sud, rendez-vous au 35.`,

        links: [207, 201, 35]
    },
    {
        id: 16,

        text1: `Vous parvenez à détacher l'un des chevaux de la roulotte. L'odeur des
        Loups Maudits et les cris des Gloks qui les chevauchent semblent
        l'effrayer, mais vous arrivez malgré tout à le lancer au galop en
        direction des monstrueuses créatures qui s'approchent de vous. Les Gloks
        et leurs montures sataniques ne sont plus qu'à une cinquantaine de
        mètres, la lance pointée en avant. Face à face à présent, vous foncez
        les uns vers les autres.`,

        decision: `Rendez-vous au 192.`,

        links: [192]
    },
    {
        id: 17,

        text1: `Vous levez votre arme pour frapper la créature, dont la gueule hérissée
        de crocs tranchants comme des rasoirs vient de se refermer d'un
        claquement sec à quelques centimètres de votre tête. Gêné par le
        battement de ses ailes, vous avez du mal à vous tenir debout. Réduisez
        d'un point votre total d'HABILETÉ, et combattez ce Kraan.`,

        text2: `[KRAAN] HABILETÉ : 16 / ENDURANCE : 24`,

        text3: `Si vous parvenez à tuer votre adversaire, hâtez-vous de descendre le
        flanc opposé de la colline afin d'éviter les Gloks.`,

        decision: `Utilisez la Table de
        Hasard pour obtenir un chiffre. Si vous tirez le 0, rendez-vous au 53.
        Si vous tirez 1 ou 2, rendez-vous au 274. Si vous tirez entre 3 et 9, rendez-vous au 331.`,

        links: [53, 274, 331]
    },
    {
        id: 18,

        text1: `Vous êtes réveillé par l'approche d'une troupe au lointain. Vous
        apercevez alors, de l'autre côté du lac, des silhouettes de Drakkarims
        vêtus de capes noires et une meute de Loups Maudits chevauchés par leurs
        habituels cavaliers. Un Kraan apparaît bientôt au-dessus des arbres et
        atterrit sur le toit de la petite cabane de bois. Il est monté par une
        créature habillée de rouge. Un instant plus tard, le Kraan prend à
        nouveau son vol et traverse le lac en s'approchant de l'endroit où vous
        êtes caché.`,

        decision: `Si vous souhaitez vous enfoncer plus profondément dans la
        forêt, rendez-vous au 239. Si vous maîtrisez la
        Discipline Kaï du Camouflage, rendez-vous au 114.
        Si vous préférez combattre la créature, rendez-vous au
        29.`,

        links: [239, 114, 29]
    },
    {
        id: 19,

        text1: `Un peu plus loin, à travers les arbres, vous apercevez des buissons de
        couleur rouge. Ce sont des Brosses à Potence dont les épines écarlates
        et pointues sont communément appelées des Dents de Sommeil : elles ont
        en effet la propriété, lorsqu'on s'y pique, de provoquer faiblesse et
        engourdissement.`,

        decision: `Vous pouvez éviter les Dents de Sommeil en revenant sur
        le sentier. Rendez-vous alors au 272. Vous pouvez
        au contraire essayer de vous frayer un chemin parmi ces buissons pour
        pénétrer plus profondément dans la forêt. Rendez-vous dans ce cas au 119. Enfin, si vous maîtrisez la Discipline Kaï
        de l'Orientation, rendez-vous au 69.`,

        links: [272, 119, 69]
    },
    {
        id: 20,

        text1: `Il semble que le ou les occupants de la péniche soient partis en toute
        hâte il y a peu de temps. Les restes d'un repas à moitié mangé traînent
        sur la table ainsi qu'une tasse de Jala encore chaud. En fouillant un
        coffre et un petit placard, vous trouvez un Sac à Dos,
        de la Nourriture (l'équivalent de 2 Repas) et un Poignard. Si vous souhaitez emporter l'un ou l'autre de
        ces objets (ou tous les trois), n'oubliez pas de les inscrire sur votre
        Feuille d'Aventure.`,

        decision: `Rendez-vous ensuite au 272.`,

        links: [272]
    },
    {
        id: 21,

        text1: `Vous avez parcouru trois kilomètres à cheval parmi les arbres touffus
        lorsque le sol devient soudain marécageux.`,

        decision: `Utilisez la Table de Hasard
        pour obtenir un chiffre : Si vous tirez un chiffre inférieur à 5, votre
        cheval s'est enfoncé jusqu'au ventre dans une boue épaisse. Si le
        chiffre obtenu est égal ou supérieur à 5, vous parvenez à vous éloigner
        de ce bourbier et vous vous rendez au 189. Si
        votre cheval s'est enlisé, utilisez à nouveau la Table de Hasard pour
        tirer un autre chiffre. Si vous obtenez cette fois un chiffre égal ou
        inférieur à 7, vous vous enfoncez dans la boue jusqu'aux aisselles. En
        poussant un ultime hennissement désespéré, votre cheval, quant à lui,
        disparaît définitivement dans la vase. Si le chiffre que vous avez tiré
        est supérieur à 7, vous réussissez tant bien que mal à vous hisser sur
        un sol plus ferme et vous vous rendez au 189. Si
        vous êtes enlisé jusqu'aux aisselles, voici votre dernière chance !
        Tirez un autre chiffre à l'aide de la Table de Hasard. Si vous obtenez
        tout autre chiffre que le 9, le marécage vous engloutit définitivement
        et votre mission s'achève ici, en même temps que votre vie. Si en
        revanche vous tirez un 9, rendez-vous au 312.`,

        links: [189, 312]
    },
    {
        id: 22,

        text1: `D'un coup d'épaule, vous bousculez le chef et vous vous enfuyez à toutes
        jambes le long de la route. Vous entendez aussitôt derrière vous le
        déclic menaçant d'une arbalète que l'on tend.`,

        decision: `Un frisson vous parcourt
        l'échiné et vous saisissez d'un geste prompt votre Table de Hasard afin
        de tirer un chiffre. Si vous obtenez entre 0 et 4, rendez-vous au 181. Entre 5 et 9, rendez-vous au 145.`,

        links: [181, 145]
    },
    {
        id: 23,

        text1: `Le couloir aboutit bientôt à une vaste chambre mortuaire dont les murs
        sont gravés de motifs anciens. Dans le coin opposé, un escalier de
        pierre mène à une porte immense. De chaque côté des marches, deux
        chandelles noires diffusent une faible clarté. Vous remarquez alors
        qu'aucune cire ne coule le long des chandelles, et tandis que vous vous
        approchez, vous constatez que leurs flammes ne diffusent aucune chaleur.
        Soucieux de quitter au plus vite cet endroit sinistre, vous examinez la
        serrure de la porte. Une broche sculptée semble fermer le panneau, mais
        un trou de serrure apparaît également.`,

        decision: `Si vous souhaitez retirer la
        broche, rendez-vous au 337. Si vous possédez la
        Discipline Kaï de la Maîtrise Psychique de la Matière, rendez-vous au 151. Enfin, si vous avez une Clé d'Or,
        rendez-vous au 326.`,

        links: [337, 151, 326]
    },
    {
        id: 24,

        text1: `Le marchand crie au conducteur de la roulotte de sauter. « On nous
        attaque ! » s'exclame-t-il. Puis il se jette au-dehors par une fenêtre
        circulaire.`,

        decision: `Si vous souhaitez sauter à votre tour de la roulotte,
        rendez-vous au 234. Si vous préférez essayer
        d'attraper les rênes des chevaux pour prendre le contrôle de
        l'attelage,rendez-vous au 184.`,

        links: [234, 184]
    },
    {
        id: 25,

        text1: ` Vous atterrissez si brutalement sur l'autre toit que vous en avez le
        souffle coupé. La tête vous tourne, et vous restez étendu sur le dos. Au
        bout d'une minute environ, vous comprenez enfin que vous avez réussi à
        passer de l'autre côté et que vous êtes indemne. Lorsque vous êtes
        vraiment sûr que tout va bien, vous vous relevez d'un bond et vous
        poussez un cri de victoire pour saluer votre adresse et votre audace.
        Puis vous vous hâtez de gagner le bord opposé du toit où une longue
        gouttière vous permet de descendre dans la rue. Les hautes portes de fer
        de la citadelle sont ouvertes et un chariot, tiré par deux grands
        chevaux, essaie de sortir dans la rue. Mais les chevaux effrayés par le
        bruit de la foule se cabrent soudain et l'une des roues avant du
        véhicule se brise en heurtant violemment la porte. Profitant de la
        confusion, vous vous glissez à l'intérieur de la citadelle juste avant
        que les gardes aient refermé les lourds battants métalliques.`,

        decision: `Rendez-vous au 139.`,

        links: [139]
    },
    {
        id: 26,

        text1: `Vous avancez prudemment le long du couloir qui tourne bientôt à angle
        droit en direction de l'est. Au loin, vous apercevez une étrange lueur
        verdâtre.`,

        decision: `Si vous souhaitez continuer dans cette direction, rendez-vous
        au 249. Si vous préférez rebrousser chemin et prendre le couloir orienté au sud, rendez-vous au 100.`,

        links: [249, 100]
    },
    {
        id: 27,

        text1: `Vous suivez ce chemin pendant plus d'une heure en surveillant le ciel de
        peur que le Kraan n'attaque à nouveau. A quelque distance devant vous,
        un grand arbre s'est abattu en travers du sentier, et lorsque vous vous
        en approchez, vous entendez des voix qui s'élèvent de l'autre côté du
        tronc massif.`,

        decision: `Si vous souhaitez passer à l'attaque, rendez-vous au 250. Si vous préférez écouter ce que disent
        ces voix, rendez-vous au 52.`,

        links: [250, 52]
    },
    {
        id: 28,

        text1: `Une centaine de mètres plus loin, le sentier en croise un autre orienté
        nord-sud.`,

        decision: `Si vous souhaitez prendre la direction du nord, rendez-vous au 130. Si vous préférez aller au sud,
        rendez-vous au 147.`,

        links: [130, 147]
    },
    {
        id: 29,

        text1: `Vous vous approchez de la rive du lac en vous préparant à combattre. Le
        Kraan et la créature qui le chevauche vous aperçoivent aussitôt et
        foncent vers vous en volant à ras de l'eau. C'est alors que le maître du
        Kraan lance un cri qui vous glace le sang. Cette créature est un Vordak,
        un féroce lieutenant des Maîtres des Ténèbres. Il se rue sur vous, et il
        vous faut le combattre. Votre adversaire vous attaque à l'aide d'une
        grosse Masse d'Armes, mais il est également doué d'une redoutable
        Puissance Psychique dont il va faire usage au cours de l'affrontement.
        Si vous ne maîtrisez pas la Discipline Kaï du Bouclier Psychique, sa
        force mentale vous fera perdre 2 points d'HABILETÉ pendant toute la
        durée du combat.`,

        text2: `[VORDAK] HABILETÉ : 17 / ENDURANCE : 25`,

        decision: `Si vous êtes vainqueur, rendez-vous au 270.`,

        links: [270]
    },
    {
        id: 30,

        text1: `Tous ces gens semblent fatigués et affamés. Ils ont parcouru des
        dizaines de kilomètres pour fuir leur ville incendiée. Soudain, vous
        entendez en direction du nord de forts battements d'ailes. « Des Kraans
        ! Cachez-vous ! » hurlent des voix tout au long du chemin. En face de
        vous, un chariot transportant des enfants casse un essieu : l'une des
        roues s'est coincée dans une ornière profonde. Les enfants, saisis de
        panique, se mettent à hurler.`,

        decision: `Si vous souhaitez aider ces enfants,
        rendez-vous au 194. Si vous préférez vous mettre
        àl'abri des arbres, rendez-vous au 261.`,

        links: [194, 261]
    },
]