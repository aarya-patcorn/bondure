// Each user-facing string is now an { en, de } object.
// Non-translatable values (image paths, hrefs) are left as plain strings.
// In your components, read the active language, e.g. article.title[lang],
// section.heading[lang], paragraph[lang], point.label[lang], etc.

export const serviceArticles = {
  "application-training-risk-management": {
    title: {
      en: "Application Training as Risk Management: Why Most Site Failures Aren't About the Product",
      de: "Verarbeitungsschulung als Risikomanagement: Warum die meisten Baustellenmängel nicht am Produkt liegen",
    },
    summary: {
      en: "Product performance on site depends on repeatable application skill, not product data alone.",
      de: "Die Produktleistung auf der Baustelle hängt von reproduzierbarem Verarbeitungskönnen ab, nicht allein von Produktdaten.",
    },
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=85",
    imageAlt: {
      en: "Construction team working together on site",
      de: "Bauteam bei der gemeinsamen Arbeit auf der Baustelle",
    },
    sections: [
      {
        paragraphs: [
          {
            en: "When a tiled floor debonds, a screed cracks unevenly, or an AAC wall shows joint failures, the instinct is often to question the product. In practice, a meaningful share of on-site failures trace back not to the formulation, but to how it was mixed, applied, or given time to cure — steps that a technical data sheet documents but doesn't enforce.",
            de: "Wenn sich ein Fliesenbelag ablöst, ein Estrich ungleichmäßig reißt oder eine Porenbetonwand Fugenschäden zeigt, wird instinktiv oft das Produkt in Frage gestellt. In der Praxis lässt sich ein erheblicher Teil der Baustellenschäden jedoch nicht auf die Rezeptur zurückführen, sondern darauf, wie das Material angemischt, verarbeitet oder ausgehärtet wurde — Schritte, die ein technisches Datenblatt dokumentiert, aber nicht erzwingt.",
          },
          {
            en: "This isn't a criticism of site crews. It's a structural gap: product instructions are written documents, and applying them consistently — across different crews, different site conditions, and different levels of experience — is a skill that has to be built and maintained, not assumed.",
            de: "Das ist keine Kritik an den Verarbeitern. Es ist eine strukturelle Lücke: Produktanweisungen sind schriftliche Dokumente, und sie konsistent umzusetzen — über verschiedene Kolonnen, unterschiedliche Baustellenbedingungen und verschiedene Erfahrungsstufen hinweg — ist eine Fähigkeit, die aufgebaut und gepflegt werden muss, nicht vorausgesetzt werden kann.",
          },
        ],
      },
      {
        heading: {
          en: "Where the gap actually shows up",
          de: "Wo die Lücke tatsächlich auftritt",
        },
        points: [
          {
            label: { en: "Mixing consistency.", de: "Anmischkonsistenz." },
            text: {
              en: "Water-to-powder ratios, mixing time, and rest periods (slaking) for cementitious products are specified precisely for a reason — get them wrong and the product's designed performance characteristics change, even though the bag on-site is identical to the one used correctly elsewhere. This is one of the most common, and most preventable, sources of inconsistent results between a passed lab test and a failed site outcome.",
              de: "Wasser-Pulver-Verhältnisse, Mischzeit und Reifezeiten (Sumpfen) sind bei zementären Produkten aus gutem Grund präzise vorgegeben — werden sie falsch eingehalten, ändern sich die vorgesehenen Leistungseigenschaften des Produkts, obwohl der Sack auf der Baustelle mit dem anderswo korrekt verarbeiteten identisch ist. Das ist eine der häufigsten und am besten vermeidbaren Ursachen für inkonsistente Ergebnisse zwischen einem bestandenen Labortest und einem fehlgeschlagenen Baustellenergebnis.",
            },
          },
          {
            label: { en: "Trowel technique and notch selection.", de: "Kellentechnik und Zahnungswahl." },
            text: {
              en: "Coverage, bond strength, and void formation are all directly affected by trowel angle, notch size, and application pressure. Two applicators using the same product, on the same substrate, can produce meaningfully different results based on technique alone — particularly on large-format tile, where full-contact coverage is critical to prevent hollow spots and long-term failure.",
              de: "Verbrauch, Haftzugfestigkeit und Hohlraumbildung werden allesamt direkt von Kellenwinkel, Zahnungsgröße und Andruck beeinflusst. Zwei Verarbeiter mit demselben Produkt auf demselben Untergrund können allein aufgrund der Technik deutlich unterschiedliche Ergebnisse erzielen — besonders bei Großformatfliesen, wo eine vollflächige Verklebung entscheidend ist, um Hohlstellen und Langzeitschäden zu vermeiden.",
            },
          },
          {
            label: { en: "Open time and working time discipline.", de: "Disziplin bei offener Zeit und Verarbeitungszeit." },
            text: {
              en: "Every adhesive has a window during which it remains workable after application, and skinning — where the surface forms a film before the tile is set — silently reduces effective bond strength even when the installation looks fine on the day. Crews under schedule pressure are the group most likely to push past this window, which makes it a training and site-discipline issue as much as a technical one.",
              de: "Jeder Kleber hat ein Zeitfenster, in dem er nach dem Auftragen verarbeitbar bleibt, und Hautbildung — wenn sich an der Oberfläche ein Film bildet, bevor die Fliese eingelegt wird — mindert unbemerkt die effektive Haftzugfestigkeit, selbst wenn die Verlegung am selben Tag einwandfrei aussieht. Kolonnen unter Zeitdruck überschreiten dieses Fenster am ehesten, was es ebenso zu einer Schulungs- und Baustellendisziplinfrage wie zu einer technischen macht.",
            },
          },
          {
            label: { en: "Cure and drying time before load or covering.", de: "Aushärte- und Trocknungszeit vor Belastung oder Belegung." },
            text: {
              en: "Rushing the schedule — walking on a floor, applying a second layer, or covering a screed before it's ready — is a common, avoidable cause of premature failure that has nothing to do with the product's inherent performance.",
              de: "Das Überstürzen des Zeitplans — einen Boden begehen, eine zweite Schicht auftragen oder einen Estrich belegen, bevor er bereit ist — ist eine häufige, vermeidbare Ursache für vorzeitiges Versagen, die nichts mit der eigentlichen Produktleistung zu tun hat.",
            },
          },
        ],
      },
      {
        heading: {
          en: "Why this is a specification concern, not just a contractor concern",
          de: "Warum dies eine Frage der Ausschreibung ist, nicht nur des Verarbeiters",
        },
        paragraphs: [
          {
            en: "It's tempting to treat application quality as entirely the contractor's responsibility, separate from the specification. But a specification that names a high-performance product without addressing how consistently it will be applied is only solving half the problem. The product's tested performance and the site's actual performance are only the same thing if the application process is controlled.",
            de: "Es ist verlockend, die Verarbeitungsqualität ausschließlich als Verantwortung des Verarbeiters zu betrachten, getrennt von der Ausschreibung. Doch eine Ausschreibung, die ein Hochleistungsprodukt benennt, ohne zu berücksichtigen, wie konsistent es verarbeitet wird, löst nur das halbe Problem. Die geprüfte Produktleistung und die tatsächliche Leistung auf der Baustelle sind nur dann dasselbe, wenn der Verarbeitungsprozess kontrolliert wird.",
          },
          {
            en: "This is why application training functions as risk management rather than a value-added courtesy: it closes the gap between what a product is capable of and what a site crew consistently delivers, which is the gap where most claims and callbacks originate.",
            de: "Deshalb fungiert Verarbeitungsschulung als Risikomanagement und nicht als bloße Serviceleistung: Sie schließt die Lücke zwischen dem, wozu ein Produkt fähig ist, und dem, was eine Baustellenkolonne konsistent liefert — genau die Lücke, aus der die meisten Reklamationen und Nachbesserungen entstehen.",
          },
        ],
      },
      {
        heading: {
          en: "What structured training actually changes",
          de: "Was strukturierte Schulung tatsächlich verändert",
        },
        paragraphs: [
          {
            en: "Bondure's application training programs are built around turning written product instructions into repeatable, demonstrated practical skill — for applicators, supervisors, and project teams together, rather than applicators in isolation. That distinction matters: a supervisor who understands why open time and mixing consistency matter is positioned to catch a deviation in real time, rather than only after the tile is set and the problem is buried under grout.",
            de: "Die Verarbeitungsschulungen von Bondure sind darauf ausgerichtet, schriftliche Produktanweisungen in reproduzierbares, demonstriertes praktisches Können zu verwandeln — für Verarbeiter, Poliere und Projektteams gemeinsam, statt für Verarbeiter isoliert. Dieser Unterschied ist wesentlich: Ein Polier, der versteht, warum offene Zeit und Anmischkonsistenz wichtig sind, kann eine Abweichung in Echtzeit erkennen, statt erst nachdem die Fliese verlegt und das Problem unter der Fuge verborgen ist.",
          },
          {
            en: "Structured demonstrations — rather than written instructions alone — also surface site-specific questions that a generic manual can't anticipate: how to handle an unusually porous substrate, what to do when ambient temperature is running high, how to adjust technique for a difficult tile format. Those are exactly the conditions most likely to produce a failure if left to individual judgment without a shared, demonstrated standard.",
            de: "Strukturierte Demonstrationen — statt schriftlicher Anweisungen allein — bringen zudem baustellenspezifische Fragen ans Licht, die ein allgemeines Handbuch nicht vorhersehen kann: wie man mit einem ungewöhnlich saugfähigen Untergrund umgeht, was bei hohen Umgebungstemperaturen zu tun ist, wie man die Technik an ein schwieriges Fliesenformat anpasst. Genau das sind die Bedingungen, die am ehesten zu einem Schaden führen, wenn sie ohne einen gemeinsamen, demonstrierten Standard dem individuellen Ermessen überlassen bleiben.",
          },
        ],
      },
      {
        heading: {
          en: "The practical takeaway",
          de: "Das Fazit für die Praxis",
        },
        paragraphs: [
          {
            en: "If a project has a history of application-related callbacks, is using an unfamiliar product or format for the first time, or is running on a schedule tight enough to create pressure to skip steps, structured application training is one of the highest-leverage, lowest-cost risk reductions available — cheaper than remedial work, and considerably cheaper than a warranty claim.",
            de: "Wenn ein Projekt in der Vergangenheit verarbeitungsbedingte Nachbesserungen hatte, erstmals ein unbekanntes Produkt oder Format einsetzt oder unter einem so knappen Zeitplan läuft, dass Druck entsteht, Schritte zu überspringen, dann ist eine strukturierte Verarbeitungsschulung eine der wirkungsvollsten und kostengünstigsten Risikoreduzierungen überhaupt — günstiger als Nacharbeit und deutlich günstiger als ein Gewährleistungsfall.",
          },
        ],
      },
    ],
    action: {
      label: {
        en: "Explore Bondure's application training programs",
        de: "Bondures Verarbeitungsschulungen entdecken",
      },
      href: "/services",
    },
  },
  "mobile-testing-lab": {
    title: {
      en: "What a Mobile Testing Lab Can Tell You Before You Ever Specify a Product",
      de: "Was Ihnen ein mobiles Prüflabor sagen kann, bevor Sie ein Produkt überhaupt ausschreiben",
    },
    summary: {
      en: "A data sheet sets the baseline. On-site evidence shows how a system performs for your project.",
      de: "Ein Datenblatt legt die Ausgangsbasis fest. Der Nachweis vor Ort zeigt, wie ein System bei Ihrem Projekt tatsächlich funktioniert.",
    },
    image: "/blog/van_lab.jpeg",
    imageAlt: {
      en: "Bondure mobile testing laboratory van",
      de: "Bondure mobiles Prüflabor-Fahrzeug",
    },
    sections: [
      {
        paragraphs: [
          {
            en: "Most construction chemical decisions are made from a technical data sheet: bond strength figures, open time, slip resistance ratings, all generated under standardized laboratory conditions. That data is necessary — it's how products get compared and specified in the first place — but it answers a narrower question than the one a specifier actually needs answered: how will this perform on this substrate, in these site conditions, applied by this crew?",
            de: "Die meisten Entscheidungen über Bauchemie werden auf Basis eines technischen Datenblatts getroffen: Haftzugfestigkeitswerte, offene Zeit, Rutschfestigkeitsklassen — alle unter standardisierten Laborbedingungen ermittelt. Diese Daten sind notwendig — nur so lassen sich Produkte überhaupt vergleichen und ausschreiben — doch sie beantworten eine engere Frage als die, die ein Planer tatsächlich beantwortet braucht: Wie verhält sich das auf diesem Untergrund, unter diesen Baustellenbedingungen, verarbeitet von dieser Kolonne?",
          },
          {
            en: "A data sheet can't fully answer that. Live, on-site testing can.",
            de: "Ein Datenblatt kann das nicht vollständig beantworten. Eine praktische Prüfung vor Ort schon.",
          },
        ],
      },
      {
        heading: {
          en: "The gap between lab conditions and site conditions",
          de: "Die Lücke zwischen Labor- und Baustellenbedingungen",
        },
        paragraphs: [
          {
            en: "Technical data sheets are generated under controlled conditions for a reason — it's the only way to produce comparable, repeatable figures across products. Standard substrate, standard humidity, standard cure time, standard testing method. That standardization is exactly what makes the numbers useful for comparison, and exactly why they can diverge from real-world performance on a specific project.",
            de: "Technische Datenblätter werden aus gutem Grund unter kontrollierten Bedingungen erstellt — nur so lassen sich vergleichbare, reproduzierbare Werte über Produkte hinweg erzeugen. Standarduntergrund, Standardluftfeuchte, Standardaushärtezeit, Standardprüfmethode. Genau diese Standardisierung macht die Werte für einen Vergleich nützlich — und genau deshalb können sie von der realen Leistung bei einem konkreten Projekt abweichen.",
          },
          {
            en: "Site conditions rarely match the lab. Substrate porosity varies by concrete mix and curing history. Ambient humidity and temperature shift bond development time. Local water quality affects mix consistency for cementitious products. None of this means the data sheet is wrong — it means the data sheet describes a starting point, not a guarantee, for a specific project's exact conditions.",
            de: "Baustellenbedingungen entsprechen selten dem Labor. Die Saugfähigkeit des Untergrunds variiert je nach Betonmischung und Aushärteverlauf. Umgebungsfeuchte und Temperatur verschieben die Zeit der Haftungsentwicklung. Die lokale Wasserqualität beeinflusst bei zementären Produkten die Mischkonsistenz. Nichts davon bedeutet, dass das Datenblatt falsch ist — es bedeutet, dass das Datenblatt einen Ausgangspunkt beschreibt, keine Garantie für die exakten Bedingungen eines konkreten Projekts.",
          },
        ],
      },
      {
        heading: {
          en: "What changes when testing moves on-site",
          de: "Was sich ändert, wenn die Prüfung auf die Baustelle verlagert wird",
        },
        paragraphs: [
          {
            en: "Bondure's mobile technical unit — the lab on wheels — exists specifically to close that gap. Rather than asking a specifier to extrapolate lab data onto site conditions, it brings testing, demonstration, and direct product comparison into the environment where the work will actually happen.",
            de: "Bondures mobile Technikeinheit — das Labor auf Rädern — existiert speziell, um diese Lücke zu schließen. Statt von einem Planer zu verlangen, Labordaten auf Baustellenbedingungen hochzurechnen, bringt sie Prüfung, Demonstration und direkten Produktvergleich in die Umgebung, in der die Arbeit tatsächlich stattfindet.",
          },
          {
            en: "Three things become possible on-site that aren't possible from a data sheet alone:",
            de: "Vor Ort werden drei Dinge möglich, die ein Datenblatt allein nicht leisten kann:",
          },
        ],
        points: [
          {
            label: {
              en: "Direct, transparent comparison against the current spec.",
              de: "Direkter, transparenter Vergleich mit der aktuellen Ausschreibung.",
            },
            text: {
              en: "When a project team is deciding between systems — or validating whether a currently specified product is genuinely the right fit for the substrate at hand — a side-by-side application test on the actual project substrate, using the actual project conditions, produces a comparison a data sheet simply can't offer. The process is transparent: the same substrate, the same conditions, methods visible to everyone involved.",
              de: "Wenn ein Projektteam zwischen Systemen entscheidet — oder überprüft, ob ein derzeit ausgeschriebenes Produkt wirklich zum vorliegenden Untergrund passt — liefert ein direkter Vergleichstest auf dem tatsächlichen Projektuntergrund unter den tatsächlichen Projektbedingungen einen Vergleich, den ein Datenblatt schlicht nicht bieten kann. Der Ablauf ist transparent: derselbe Untergrund, dieselben Bedingungen, für alle Beteiligten nachvollziehbare Methoden.",
            },
          },
          {
            label: {
              en: "Substrate-specific validation before commitment.",
              de: "Untergrundspezifische Validierung vor der Festlegung.",
            },
            text: {
              en: "A quick on-site bond test on the actual substrate — rather than a reference substrate from a lab — surfaces adhesion issues, moisture problems, or preparation gaps before a full specification is locked in and material is ordered at scale.",
              de: "Ein schneller Haftungstest vor Ort auf dem tatsächlichen Untergrund — statt auf einem Referenzuntergrund aus dem Labor — deckt Haftungsprobleme, Feuchtigkeitsprobleme oder Mängel in der Untergrundvorbereitung auf, bevor eine vollständige Ausschreibung festgelegt und Material in großen Mengen bestellt wird.",
            },
          },
          {
            label: {
              en: "Immediate, practical technical guidance.",
              de: "Sofortige, praxisnahe technische Beratung.",
            },
            text: {
              en: "Lab data comes with a data sheet. On-site testing comes with a technical team standing next to the result, able to explain what the outcome means for this specific project and adjust a recommendation accordingly — rather than a specifier working backward from a generic document alone.",
              de: "Labordaten kommen mit einem Datenblatt. Die Prüfung vor Ort kommt mit einem Technikteam, das neben dem Ergebnis steht, erklären kann, was das Resultat für dieses konkrete Projekt bedeutet, und die Empfehlung entsprechend anpasst — statt dass ein Planer allein aus einem allgemeinen Dokument rückwärts schließen muss.",
            },
          },
        ],
      },
      {
        heading: {
          en: "Where this fits in the specification process",
          de: "Wo dies in den Ausschreibungsprozess passt",
        },
        paragraphs: [
          {
            en: "The highest-value point to bring on-site testing into a project is early — during specification development or value engineering, before material quantities are locked and ordered. At that stage, on-site validation is a low-cost way to de-risk a decision. Once material is on-site and installation has started, testing shifts from a planning tool to a diagnostic one — still useful, but reactive rather than preventive.",
            de: "Der wertvollste Zeitpunkt, um Prüfungen vor Ort in ein Projekt einzubringen, ist früh — während der Ausschreibungserstellung oder des Value Engineering, bevor Materialmengen festgelegt und bestellt werden. In dieser Phase ist die Validierung vor Ort eine kostengünstige Möglichkeit, eine Entscheidung abzusichern. Sobald das Material vor Ort und die Verlegung angelaufen ist, wird die Prüfung vom Planungs- zum Diagnosewerkzeug — weiterhin nützlich, aber reaktiv statt präventiv.",
          },
          {
            en: "For projects with unusual substrate conditions, tight performance tolerances (large-format tile, high-traffic commercial flooring, marine or high-moisture environments), or a genuine open question about which system best fits the project, requesting an on-site visit during the specification phase — rather than after — is where this kind of testing earns its value.",
            de: "Bei Projekten mit ungewöhnlichen Untergrundbedingungen, engen Leistungstoleranzen (Großformatfliesen, stark frequentierte gewerbliche Böden, maritime oder feuchtigkeitsbelastete Umgebungen) oder einer echten offenen Frage, welches System am besten passt, entfaltet diese Art von Prüfung ihren Wert, wenn ein Vor-Ort-Termin während der Ausschreibungsphase angefragt wird — und nicht danach.",
          },
        ],
      },
      {
        heading: {
          en: "The underlying principle",
          de: "Das zugrunde liegende Prinzip",
        },
        paragraphs: [
          {
            en: "A data sheet tells you what a product is capable of. On-site, transparent testing tells you what it will actually do on your project. For a specifier making a decision that a building will live with for decades, that's not a minor distinction — it's the difference between specifying on documentation and specifying on evidence.",
            de: "Ein Datenblatt sagt Ihnen, wozu ein Produkt fähig ist. Eine transparente Prüfung vor Ort sagt Ihnen, was es bei Ihrem Projekt tatsächlich leistet. Für einen Planer, der eine Entscheidung trifft, mit der ein Gebäude über Jahrzehnte leben wird, ist das kein kleiner Unterschied — es ist der Unterschied zwischen einer Ausschreibung auf Basis von Dokumentation und einer Ausschreibung auf Basis von Nachweisen.",
          },
        ],
      },
    ],
    action: {
      label: { en: "Book a free site visit", de: "Kostenlosen Vor-Ort-Termin buchen" },
      href: "/connect",
    },
  },
  "diagnosing-recurring-tile-debonding": {
    title: {
      en: "Diagnosing a Recurring Tile Debonding Issue: An On-Site Quality Audit Walkthrough",
      de: "Diagnose eines wiederkehrenden Fliesenablöseproblems: ein Leitfaden zum Qualitätsaudit vor Ort",
    },
    summary: {
      en: "A structured audit separates a product issue from the substrate and application conditions that may be causing it.",
      de: "Ein strukturiertes Audit trennt ein Produktproblem von den Untergrund- und Verarbeitungsbedingungen, die es verursachen können.",
    },
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=85",
    imageAlt: {
      en: "Construction site quality inspection",
      de: "Qualitätsprüfung auf der Baustelle",
    },
    sections: [
      {
        paragraphs: [
          {
            en: "The following is an illustrative scenario, built from common on-site conditions, showing how Bondure's onsite quality support process is designed to work. It represents a composite of recurring, real-world debonding patterns rather than a single named project.",
            de: "Das Folgende ist ein illustratives Szenario, aufgebaut aus typischen Baustellenbedingungen, das zeigt, wie Bondures Qualitätssupport vor Ort konzipiert ist. Es stellt eine Zusammenführung wiederkehrender, realer Ablösemuster dar und nicht ein einzelnes, konkret benanntes Projekt.",
          },
          {
            en: "A mid-rise commercial retail-and-restaurant fit-out, several months into occupancy, began showing isolated tile debonding in the ground-floor kitchen and back-of-house areas — a handful of tiles per zone, hollow-sounding when tapped, some fully detached. The tile adhesive in use met recognized performance standards, and the initial assumption on-site was a product defect.",
            de: "Bei einem mittelhohen gewerblichen Ausbau mit Einzelhandel und Gastronomie zeigten sich mehrere Monate nach Bezug vereinzelte Fliesenablösungen in der Erdgeschossküche und den rückwärtigen Bereichen — eine Handvoll Fliesen pro Zone, hohl klingend beim Abklopfen, einige vollständig gelöst. Der eingesetzte Fliesenkleber erfüllte anerkannte Leistungsstandards, und die anfängliche Annahme vor Ort war ein Produktfehler.",
          },
          {
            en: "This is a common — and commonly misdiagnosed — pattern. Isolated, recurring debonding in specific zones rather than uniform failure across an installation is a strong signal that the cause is condition-specific rather than product-wide, which changes how the problem needs to be investigated.",
            de: "Das ist ein häufiges — und häufig falsch diagnostiziertes — Muster. Vereinzelte, wiederkehrende Ablösungen in bestimmten Zonen statt eines gleichmäßigen Versagens über die gesamte Fläche sind ein starkes Signal dafür, dass die Ursache bedingungsspezifisch und nicht produktweit ist — was verändert, wie das Problem untersucht werden muss.",
          },
        ],
      },
      {
        heading: {
          en: "Start with the pattern, not the assumption",
          de: "Beginnen Sie mit dem Muster, nicht mit der Annahme",
        },
        paragraphs: [
          {
            en: "When debonding is localized rather than universal, three categories of cause are statistically far more likely than a systemic product failure. A proper audit needs to rule each one in or out before drawing conclusions.",
            de: "Wenn eine Ablösung lokal begrenzt statt flächendeckend auftritt, sind statistisch drei Ursachenkategorien weitaus wahrscheinlicher als ein systemisches Produktversagen. Ein sachgemäßes Audit muss jede davon bestätigen oder ausschließen, bevor Schlüsse gezogen werden.",
          },
        ],
        points: [
          {
            label: {
              en: "Substrate condition at the point of failure.",
              de: "Untergrundzustand am Schadenspunkt.",
            },
            text: {
              en: "Kitchen and back-of-house zones carry moisture, temperature cycling, and grease exposure that differ meaningfully from surrounding areas. If the substrate wasn't fully cured, was contaminated, or experienced moisture ingress specific to that zone, adhesion can fail locally even when the product performed correctly everywhere else.",
              de: "Küchen- und rückwärtige Bereiche sind Feuchtigkeit, Temperaturwechseln und Fettbelastung ausgesetzt, die sich deutlich von den umliegenden Flächen unterscheiden. War der Untergrund nicht vollständig ausgehärtet, verunreinigt oder zonenspezifischer Feuchtigkeitseinwirkung ausgesetzt, kann die Haftung lokal versagen, selbst wenn das Produkt überall sonst korrekt funktioniert hat.",
            },
          },
          {
            label: {
              en: "Application inconsistency in a specific zone or by a specific crew.",
              de: "Verarbeitungsinkonsistenz in einer bestimmten Zone oder durch eine bestimmte Kolonne.",
            },
            text: {
              en: "Large installations often involve crew rotation across zones. If open-time discipline, trowel technique, or mixing consistency varied by crew or by shift, failure patterns can cluster geographically in ways that mimic a product problem without being one.",
              de: "Bei großen Verlegungen werden häufig Kolonnen über Zonen hinweg gewechselt. Variierten Disziplin bei der offenen Zeit, Kellentechnik oder Anmischkonsistenz je nach Kolonne oder Schicht, können sich Schadensmuster geografisch häufen und ein Produktproblem vortäuschen, ohne eines zu sein.",
            },
          },
          {
            label: {
              en: "Service conditions exceeding the original design assumption.",
              de: "Nutzungsbedingungen, die die ursprüngliche Planungsannahme übersteigen.",
            },
            text: {
              en: "Kitchen and back-of-house areas often see thermal cycling, grease, and cleaning-chemical exposure that differ from the conditions assumed in the original specification. If the zone's actual service environment wasn't fully accounted for in the original product selection, that's a specification-condition mismatch — not a product defect.",
              de: "Küchen- und rückwärtige Bereiche sind oft Temperaturwechseln, Fett und Reinigungschemikalien ausgesetzt, die von den in der ursprünglichen Ausschreibung angenommenen Bedingungen abweichen. Wurde das tatsächliche Nutzungsumfeld der Zone bei der ursprünglichen Produktauswahl nicht vollständig berücksichtigt, handelt es sich um eine Diskrepanz zwischen Ausschreibung und Bedingungen — nicht um einen Produktfehler.",
            },
          },
        ],
      },
      {
        heading: {
          en: "What the audit looks at",
          de: "Was das Audit betrachtet",
        },
        points: [
          {
            label: {
              en: "1. Zone mapping, not spot inspection.",
              de: "1. Zonenkartierung statt Stichprobenprüfung.",
            },
            text: {
              en: "Rather than inspecting only the failed tiles, the audit maps every debonded and hollow-sounding tile across the full installation to establish whether the pattern is genuinely localized or actually more widespread than initially reported.",
              de: "Statt nur die schadhaften Fliesen zu begutachten, kartiert das Audit jede abgelöste und hohl klingende Fliese über die gesamte Fläche, um festzustellen, ob das Muster tatsächlich lokal begrenzt oder in Wirklichkeit weiter verbreitet ist als zunächst gemeldet.",
            },
          },
          {
            label: {
              en: "2. Substrate investigation at the failure points.",
              de: "2. Untergrunduntersuchung an den Schadenspunkten.",
            },
            text: {
              en: "This includes checking for moisture presence, contamination, and adhesion of the remaining bond layer to both the substrate and tile back — since the location of the failure plane narrows the likely cause considerably.",
              de: "Dazu gehört die Prüfung auf Feuchtigkeit, Verunreinigung und die Haftung der verbliebenen Kleberschicht sowohl am Untergrund als auch an der Fliesenrückseite — da die Lage der Bruchebene die wahrscheinliche Ursache erheblich eingrenzt.",
            },
          },
          {
            label: {
              en: "3. Live, side-by-side comparison via the mobile technical unit.",
              de: "3. Direkter Vergleichstest vor Ort mithilfe der mobilen Technikeinheit.",
            },
            text: {
              en: "Bringing the mobile lab on-site to run a controlled application test on the actual substrate, using the specified product under correct application conditions, isolates whether the product performs correctly when application variables are controlled. If the same product bonds correctly under controlled application in the same zone, the cause shifts decisively away from the product itself.",
              de: "Wird das mobile Labor vor Ort eingesetzt, um einen kontrollierten Verarbeitungstest auf dem tatsächlichen Untergrund mit dem ausgeschriebenen Produkt unter korrekten Verarbeitungsbedingungen durchzuführen, lässt sich isolieren, ob das Produkt bei kontrollierten Verarbeitungsvariablen korrekt funktioniert. Haftet dasselbe Produkt unter kontrollierter Verarbeitung in derselben Zone einwandfrei, verlagert sich die Ursache eindeutig weg vom Produkt selbst.",
            },
          },
          {
            label: {
              en: "4. Crew and process review.",
              de: "4. Überprüfung von Kolonne und Ablauf.",
            },
            text: {
              en: "Where application inconsistency is suspected, reviewing mixing practice, open-time management, and trowel technique against the product's technical data sheet — ideally by observing a live application — either confirms or rules out application as a contributing factor.",
              de: "Besteht Verdacht auf Verarbeitungsinkonsistenz, bestätigt oder widerlegt die Überprüfung von Anmischpraxis, Umgang mit der offenen Zeit und Kellentechnik anhand des technischen Datenblatts — idealerweise durch Beobachtung einer laufenden Verarbeitung — die Verarbeitung als mitwirkenden Faktor.",
            },
          },
        ],
      },
      {
        heading: {
          en: "What the evidence can change",
          de: "Was der Nachweis verändern kann",
        },
        paragraphs: [
          {
            en: "In cases with this failure pattern — localized, zone-specific, isolated tiles rather than widespread failure — the cause is more often a combination of substrate condition and application inconsistency in the affected zone than a defect in the specified product itself. A controlled, side-by-side application test that succeeds where the original installation failed is strong, visible evidence of exactly that.",
            de: "Bei Fällen mit diesem Schadensmuster — lokal begrenzt, zonenspezifisch, vereinzelte Fliesen statt flächendeckendem Versagen — ist die Ursache häufiger eine Kombination aus Untergrundzustand und Verarbeitungsinkonsistenz in der betroffenen Zone als ein Fehler im ausgeschriebenen Produkt selbst. Ein kontrollierter Vergleichstest, der dort gelingt, wo die ursprüngliche Verlegung versagte, ist ein starker, sichtbarer Nachweis genau dafür.",
          },
          {
            en: "Misdiagnosing a localized application or substrate issue as a product failure has real downstream costs: a full re-specification and re-tender is slow, expensive, and doesn't actually fix the root cause if that cause was never the product to begin with. Correctly diagnosing the cause allows remediation to be targeted: repair the affected zone with corrected substrate preparation and application process, rather than re-specifying an entire installation that's performing correctly everywhere else.",
            de: "Ein lokales Verarbeitungs- oder Untergrundproblem fälschlich als Produktversagen zu diagnostizieren, hat reale Folgekosten: eine vollständige Neuausschreibung und Neuvergabe ist langsam, teuer und behebt die eigentliche Ursache nicht, wenn diese von vornherein nie das Produkt war. Eine korrekte Ursachendiagnose ermöglicht eine gezielte Sanierung: die betroffene Zone mit korrigierter Untergrundvorbereitung und korrektem Verarbeitungsprozess instand zu setzen, statt eine gesamte Verlegung neu auszuschreiben, die überall sonst einwandfrei funktioniert.",
          },
        ],
      },
      {
        heading: {
          en: "The practical takeaway",
          de: "Das Fazit für die Praxis",
        },
        paragraphs: [
          {
            en: "Isolated, recurring failure is a diagnostic problem before it's a product problem. A structured on-site audit — zone mapping, substrate investigation, and a live, transparent comparison test under controlled conditions — separates genuine product issues from substrate and application issues far more reliably than inspection alone. The evidence is visible to every party involved in the project, rather than a judgment call based on the data sheet alone.",
            de: "Ein vereinzeltes, wiederkehrendes Versagen ist zunächst ein Diagnoseproblem, bevor es ein Produktproblem ist. Ein strukturiertes Audit vor Ort — Zonenkartierung, Untergrunduntersuchung und ein transparenter Vergleichstest unter kontrollierten Bedingungen — trennt echte Produktprobleme weitaus zuverlässiger von Untergrund- und Verarbeitungsproblemen als eine bloße Begutachtung. Der Nachweis ist für alle am Projekt Beteiligten sichtbar und nicht eine Ermessensentscheidung allein auf Basis des Datenblatts.",
          },
        ],
      },
    ],
    action: {
      label: { en: "Request an on-site quality audit", de: "Qualitätsaudit vor Ort anfragen" },
      href: "/connect",
    },
  },
};

export const toolArticles = {
  "under-ordering-tile-adhesive": {
    title: {
      en: "The Real Cost of Under-Ordering Tile Adhesive: A Specifier's Guide to Accurate Coverage Calculations",
      de: "Die wahren Kosten einer zu geringen Fliesenkleber-Bestellung: ein Planerleitfaden für präzise Verbrauchsberechnungen",
    },
    summary: {
      en: "Accurate adhesive ordering starts with site conditions, not a single data-sheet coverage figure.",
      de: "Eine präzise Kleberbestellung beginnt mit den Baustellenbedingungen, nicht mit einem einzelnen Verbrauchswert aus dem Datenblatt.",
    },
    image: "/blog/real-cost.webp",
    imageAlt: {
      en: "Tile installation materials prepared on site",
      de: "Auf der Baustelle vorbereitete Materialien für die Fliesenverlegung",
    },
    sections: [
      {
        paragraphs: [
          {
            en: "Every tile adhesive bag carries a coverage figure on the back. Multiply it by the area, add a contingency percentage, and you have a material order. In practice, that shortcut is where most site-level cost overruns quietly begin.",
            de: "Jeder Fliesenkleber-Sack trägt auf der Rückseite einen Verbrauchswert. Multiplizieren Sie ihn mit der Fläche, schlagen Sie einen Sicherheitszuschlag auf, und schon haben Sie eine Materialbestellung. In der Praxis ist genau diese Abkürzung der Punkt, an dem die meisten Kostenüberschreitungen auf Baustellenebene unbemerkt beginnen.",
          },
          {
            en: "The published coverage rate on a technical data sheet is measured under controlled conditions — a specific trowel notch size, a flat and properly prepared substrate, a standard tile format, and an experienced applicator. Real substrates are rarely that cooperative. Uneven screeds, oversized or textured tile backs, and variable trowel technique across a crew can all push actual consumption well beyond the data sheet number, and by the time that gap shows up, it usually shows up as a stalled crew waiting on a second delivery.",
            de: "Der auf einem technischen Datenblatt angegebene Verbrauchswert wird unter kontrollierten Bedingungen ermittelt — eine bestimmte Zahnungsgröße, ein ebener und fachgerecht vorbereiteter Untergrund, ein Standardfliesenformat und ein erfahrener Verarbeiter. Reale Untergründe sind selten so kooperativ. Unebene Estriche, übergroße oder strukturierte Fliesenrückseiten und eine schwankende Kellentechnik innerhalb einer Kolonne können den tatsächlichen Verbrauch deutlich über den Datenblattwert treiben — und wenn sich diese Lücke zeigt, dann meist in Form einer stillstehenden Kolonne, die auf eine zweite Lieferung wartet.",
          },
        ],
      },
      {
        heading: {
          en: "Why the formula isn't the hard part",
          de: "Warum die Formel nicht das Schwierige ist",
        },
        paragraphs: [
          {
            en: "A coverage calculator is only as accurate as the assumptions fed into it. The arithmetic — area × consumption rate ÷ bag yield — takes seconds. Getting a number a site team can actually rely on means getting four inputs right before you touch the calculator at all.",
            de: "Ein Verbrauchsrechner ist nur so genau wie die Annahmen, die man ihm zugrunde legt. Die Rechnung — Fläche × Verbrauchswert ÷ Ergiebigkeit pro Sack — dauert Sekunden. Eine Zahl zu erhalten, auf die sich ein Baustellenteam tatsächlich verlassen kann, bedeutet, vier Eingaben richtig zu bekommen, bevor man den Rechner überhaupt anrührt.",
          },
        ],
        points: [
          {
            label: { en: "Substrate flatness.", de: "Ebenheit des Untergrunds." },
            text: {
              en: "Coverage rates assume a substrate within standard flatness tolerances. A screed that's out of level by even a few millimeters forces the applicator to build up thicker adhesive beds in low spots, which increases consumption in ways no calculator input captures unless you build in a flatness-based contingency.",
              de: "Verbrauchswerte setzen einen Untergrund innerhalb der üblichen Ebenheitstoleranzen voraus. Ein Estrich, der auch nur um wenige Millimeter aus der Ebene läuft, zwingt den Verarbeiter, in Tiefstellen dickere Kleberbetten aufzubauen, was den Verbrauch auf eine Weise erhöht, die keine Rechnereingabe erfasst — es sei denn, Sie kalkulieren einen ebenheitsbezogenen Zuschlag ein.",
            },
          },
          {
            label: { en: "Tile format and back texture.", de: "Fliesenformat und Rückseitenstruktur." },
            text: {
              en: "Large-format and heavily textured porcelain tiles need deeper, more generous trowel notches to achieve full contact and eliminate voids — particularly critical for exterior, wet-area, or high-traffic installations where lippage or hollow spots become failure points. A calculator built around standard-format tile assumptions will consistently underestimate large-format jobs.",
              de: "Großformatige und stark strukturierte Feinsteinzeugfliesen benötigen tiefere, großzügigere Zahnungen, um vollflächigen Kontakt zu erreichen und Hohlräume zu vermeiden — besonders kritisch bei Außen-, Nass- oder stark frequentierten Verlegungen, wo Kantenüberstände oder Hohlstellen zu Schadenspunkten werden. Ein Rechner, der auf Annahmen für Standardformate ausgelegt ist, unterschätzt Großformataufträge durchgängig.",
            },
          },
          {
            label: { en: "Application method.", de: "Verarbeitungsmethode." },
            text: {
              en: "Back-buttering, full-bed or thin-bed application, and trowel notch size — typically specified in millimeters — each change consumption meaningfully. A change from a 6mm to a 10mm notch can shift consumption by 30–40%.",
              de: "Beidseitiges Verkleben (Buttering-Floating), Dick- oder Dünnbettverlegung sowie die Zahnungsgröße — üblicherweise in Millimetern angegeben — verändern den Verbrauch jeweils erheblich. Ein Wechsel von einer 6-mm- auf eine 10-mm-Zahnung kann den Verbrauch um 30–40 % verschieben.",
            },
          },
          {
            label: { en: "Wastage and cut loss.", de: "Verschnitt und Zuschnittverlust." },
            text: {
              en: "Perimeter cuts, pattern layouts such as diagonal, herringbone, or running bond with offset, and breakage during handling all consume material that never reaches a wall or floor. Standard industry contingency sits between 5–10%, but complex layouts and irregular room geometries can justify more.",
              de: "Randzuschnitte, Verlegemuster wie diagonal, Fischgrät oder Läuferverband mit Versatz sowie Bruch beim Handling verbrauchen allesamt Material, das nie an eine Wand oder einen Boden gelangt. Der branchenübliche Zuschlag liegt zwischen 5–10 %, doch komplexe Verlegemuster und unregelmäßige Raumgeometrien können mehr rechtfertigen.",
            },
          },
        ],
      },
      {
        heading: {
          en: "What a well-built calculator should ask for",
          de: "Wonach ein gut konzipierter Rechner fragen sollte",
        },
        paragraphs: [
          {
            en: "A coverage tool that only asks for square footage is a rough guess wearing the costume of a calculation. A tool built for specifiers and site teams should prompt for:",
            de: "Ein Verbrauchstool, das nur nach der Quadratmeterfläche fragt, ist eine grobe Schätzung im Kostüm einer Berechnung. Ein Tool für Planer und Baustellenteams sollte nach Folgendem fragen:",
          },
        ],
        points: [
          {
            label: { en: "Area to be tiled.", de: "Zu verfliesende Fläche." },
            text: {
              en: "Break this down by room or zone when the job spans different substrates.",
              de: "Gliedern Sie diese nach Raum oder Zone, wenn der Auftrag unterschiedliche Untergründe umfasst.",
            },
          },
          {
            label: { en: "Trowel notch size and shape.", de: "Zahnungsgröße und -form." },
            text: {
              en: "Match the notch to the specified tile format.",
              de: "Stimmen Sie die Zahnung auf das ausgeschriebene Fliesenformat ab.",
            },
          },
          {
            label: { en: "Substrate condition and flatness tolerance.", de: "Untergrundzustand und Ebenheitstoleranz." },
            text: {
              en: "Use the actual site condition, not an ideal assumption.",
              de: "Verwenden Sie den tatsächlichen Baustellenzustand, nicht eine Idealannahme.",
            },
          },
          {
            label: { en: "Tile size and back texture.", de: "Fliesengröße und Rückseitenstruktur." },
            text: {
              en: "These directly affect the required adhesive bed and coverage.",
              de: "Diese beeinflussen das erforderliche Kleberbett und den Verbrauch direkt.",
            },
          },
          {
            label: { en: "Layout pattern and expected cut wastage.", de: "Verlegemuster und erwarteter Zuschnittverschnitt." },
            text: {
              en: "Make contingency a deliberate input rather than an afterthought.",
              de: "Machen Sie den Zuschlag zu einer bewussten Eingabe statt zu einem nachträglichen Gedanken.",
            },
          },
        ],
        paragraphsAfter: [
          {
            en: "Bondure's Tile Adhesive Calculator is built around these variables specifically so that the output reflects site reality rather than a data-sheet best case. The goal isn't a smaller number or a bigger one — it's a number a project manager can order against without a follow-up call.",
            de: "Bondures Fliesenkleber-Rechner ist gezielt um diese Variablen herum aufgebaut, damit das Ergebnis die Baustellenrealität abbildet und nicht den Idealfall aus dem Datenblatt. Das Ziel ist keine kleinere oder größere Zahl — es ist eine Zahl, gegen die ein Projektleiter ohne Nachfrage bestellen kann.",
          },
        ],
      },
      {
        heading: {
          en: "Ordering accuracy is a specification issue, not just a procurement one",
          de: "Bestellgenauigkeit ist eine Frage der Ausschreibung, nicht nur der Beschaffung",
        },
        paragraphs: [
          {
            en: "It's tempting to treat material estimation as a contractor-side logistics problem, separate from the technical specification. In practice, the two are connected. A specification that names a product and application method but leaves coverage assumptions to guesswork transfers cost risk onto the contractor — and on a tight program, that risk often resurfaces as a request for substitution to a more economical product that may not meet the original performance intent.",
            de: "Es ist verlockend, die Materialermittlung als logistisches Problem des Verarbeiters zu behandeln, getrennt von der technischen Ausschreibung. In der Praxis hängen beide zusammen. Eine Ausschreibung, die ein Produkt und eine Verarbeitungsmethode benennt, aber die Verbrauchsannahmen dem Rätselraten überlässt, verlagert das Kostenrisiko auf den Verarbeiter — und bei einem engen Zeitplan taucht dieses Risiko oft als Antrag auf Substitution durch ein günstigeres Produkt wieder auf, das der ursprünglichen Leistungsabsicht möglicherweise nicht entspricht.",
          },
          {
            en: "Building coverage guidance into the specification package — expected consumption range by trowel size, substrate tolerance requirements, and a stated wastage allowance — closes that gap before it becomes a change order.",
            de: "Verbrauchsvorgaben in das Ausschreibungspaket aufzunehmen — erwarteter Verbrauchsbereich je Zahnungsgröße, Anforderungen an die Untergrundtoleranz und ein ausgewiesener Verschnittzuschlag — schließt diese Lücke, bevor sie zu einem Nachtrag wird.",
          },
        ],
      },
      {
        heading: {
          en: "The practical takeaway",
          de: "Das Fazit für die Praxis",
        },
        paragraphs: [
          {
            en: "Coverage calculators are useful precisely because they force the inputs that actually govern consumption into the open before ordering happens, rather than after a crew runs short mid-installation. Treat the substrate condition, tile format, and application method as first-class inputs, not footnotes, and the number that comes out the other end will hold up on site — which is the only real test a calculator has to pass.",
            de: "Verbrauchsrechner sind gerade deshalb nützlich, weil sie die Eingaben, die den Verbrauch tatsächlich bestimmen, vor der Bestellung offenlegen — und nicht erst, wenn einer Kolonne mitten in der Verlegung das Material ausgeht. Behandeln Sie Untergrundzustand, Fliesenformat und Verarbeitungsmethode als vollwertige Eingaben, nicht als Fußnoten, und die Zahl, die am Ende herauskommt, hält auf der Baustelle stand — der einzige echte Test, den ein Rechner bestehen muss.",
          },
        ],
      },
    ],
    action: {
      label: { en: "Open the Tile Adhesive Calculator", de: "Fliesenkleber-Rechner öffnen" },
      href: "/tools#adhesive",
    },
  },
  "floor-screed-estimation": {
    title: {
      en: "Floor Screed Estimation: Getting Thickness and Coverage Right Before the Pour",
      de: "Bodenestrich-Berechnung: Dicke und Materialverbrauch vor dem Einbau korrekt bestimmen",
    },
    summary: {
      en: "Reliable screed quantities begin with actual slab levels and a planned allowance for variation.",
      de: "Verlässliche Estrichmengen beginnen mit den tatsächlichen Rohdeckenhöhen und einem geplanten Zuschlag für Schwankungen.",
    },
    image: "/blog/screed-estimation.webp",
    imageAlt: {
      en: "Floor screed installation in progress",
      de: "Estricheinbau im Gange",
    },
    sections: [
      {
        paragraphs: [
          {
            en: "Screed is one of the few construction materials where the estimation error and the structural consequence are separated by weeks. Order the wrong quantity of tile adhesive and a crew waits a day for more bags. Underestimate screed and the shortfall often isn't visible until it's already been poured thin in places — showing up later as inadequate falls to drain, inconsistent finish levels, or a floor that won't take the specified floor covering without remedial leveling work.",
            de: "Estrich ist eines der wenigen Baumaterialien, bei denen zwischen dem Berechnungsfehler und der baulichen Folge Wochen liegen. Bestellen Sie die falsche Menge Fliesenkleber, wartet eine Kolonne einen Tag auf mehr Säcke. Unterschätzen Sie den Estrich, wird der Fehlbetrag oft erst sichtbar, wenn er bereits stellenweise zu dünn eingebaut ist — und zeigt sich später als unzureichendes Gefälle zum Ablauf, uneinheitliche Fertighöhen oder ein Boden, der den ausgeschriebenen Bodenbelag ohne nachträgliche Ausgleichsarbeiten nicht aufnimmt.",
          },
        ],
      },
      {
        heading: {
          en: "Thickness is a range, not a number",
          de: "Die Dicke ist ein Bereich, keine feste Zahl",
        },
        paragraphs: [
          {
            en: "Screed quantity depends on average thickness across the full floor area, and average thickness depends on what's underneath it — which is precisely the variable most estimates treat as fixed.",
            de: "Die Estrichmenge hängt von der durchschnittlichen Dicke über die gesamte Bodenfläche ab, und die durchschnittliche Dicke hängt davon ab, was darunter liegt — genau die Variable, die die meisten Berechnungen als fest behandeln.",
          },
          {
            en: "A structural slab is rarely perfectly flat. Deflection, formwork tolerances, and construction sequencing all leave a slab with high and low points across its surface. A screed poured to a nominal 40mm thickness on paper might realistically range from 25mm in high spots to 60mm or more in low ones, once it's leveled to a true, flat finished surface. Estimating from the nominal thickness alone — rather than the actual slab survey — is the single most common source of screed quantity shortfalls.",
            de: "Eine Rohdecke ist selten perfekt eben. Durchbiegung, Schalungstoleranzen und der Bauablauf hinterlassen an der Deckenoberfläche Hoch- und Tiefpunkte. Ein Estrich, der auf dem Papier mit einer Nenndicke von 40 mm eingebaut wird, kann realistisch von 25 mm an Hochpunkten bis zu 60 mm oder mehr an Tiefpunkten reichen, sobald er zu einer wirklich ebenen Fertigfläche nivelliert ist. Die Berechnung allein aus der Nenndicke — statt aus der tatsächlichen Deckenaufmessung — ist die mit Abstand häufigste Ursache für Estrichmengen-Fehlbeträge.",
          },
          {
            en: "Falls to drain in wet areas, bathrooms, balconies, and terraces compound this further: thickness deliberately varies across the pour by design, and a flat average-thickness estimate will consistently undercount material for any floor with engineered slope.",
            de: "Gefälle zum Ablauf in Nassbereichen, Bädern, Balkonen und Terrassen verschärfen dies zusätzlich: Die Dicke variiert planmäßig über die Fläche, und eine Berechnung mit gleichmäßiger Durchschnittsdicke zählt bei jedem Boden mit eingeplantem Gefälle das Material durchgängig zu niedrig.",
          },
        ],
      },
      {
        heading: {
          en: "What changes the numbers",
          de: "Was die Zahlen verändert",
        },
        points: [
          {
            label: {
              en: "Bonded vs. unbonded vs. floating screed.",
              de: "Verbund-, Trenn- und schwimmender Estrich.",
            },
            text: {
              en: "The application method affects both minimum thickness requirements and how forgiving the system is to slab irregularity. Bonded screeds can generally go thinner; unbonded and floating systems over a membrane or insulation layer typically require greater minimum thickness to maintain structural integrity and resist cracking.",
              de: "Die Einbauart beeinflusst sowohl die Mindestdickenanforderungen als auch, wie tolerant das System gegenüber Unebenheiten der Rohdecke ist. Verbundestriche können in der Regel dünner ausgeführt werden; Trennlagen- und schwimmende Systeme über einer Membran oder Dämmschicht erfordern üblicherweise eine größere Mindestdicke, um die strukturelle Integrität zu wahren und Rissbildung zu widerstehen.",
            },
          },
          {
            label: {
              en: "Substrate survey data.",
              de: "Aufmessdaten des Untergrunds.",
            },
            text: {
              en: "A level survey — even a basic grid of spot measurements across the floor plate — turns estimated thickness into measured thickness and removes the single biggest source of estimation error. On larger commercial floor plates, this is worth the half-day it takes.",
              de: "Eine Höhenaufmessung — selbst ein einfaches Raster von Punktmessungen über die Bodenfläche — verwandelt eine geschätzte Dicke in eine gemessene Dicke und beseitigt die mit Abstand größte Fehlerquelle. Bei größeren gewerblichen Bodenflächen ist das den halben Tag Aufwand wert.",
            },
          },
          {
            label: {
              en: "Screed type and yield.",
              de: "Estrichtyp und Ergiebigkeit.",
            },
            text: {
              en: "Cementitious, self-leveling, and fast-track screed products have different densities and different yields per bag or per batch. Self-leveling systems in particular are sensitive to exact water-to-powder ratios, which affect final coverage.",
              de: "Zementäre, selbstverlaufende und schnelltrocknende Estrichprodukte haben unterschiedliche Dichten und unterschiedliche Ergiebigkeiten pro Sack oder pro Charge. Insbesondere selbstverlaufende Systeme reagieren empfindlich auf das exakte Wasser-Pulver-Verhältnis, das den endgültigen Verbrauch beeinflusst.",
            },
          },
          {
            label: {
              en: "Curing and drying program.",
              de: "Aushärte- und Trocknungsverlauf.",
            },
            text: {
              en: "This doesn't change the material quantity, but it does change project sequencing risk. Underestimating drying time before floor covering installation is a related, equally common estimation failure that shows up as adhesion problems in the finished floor.",
              de: "Dies verändert nicht die Materialmenge, wohl aber das Risiko im Bauablauf. Die Trocknungszeit vor dem Verlegen des Bodenbelags zu unterschätzen, ist ein verwandter, ebenso häufiger Kalkulationsfehler, der sich als Haftungsprobleme im fertigen Boden zeigt.",
            },
          },
        ],
      },
      {
        heading: {
          en: "Using a calculator without letting it hide the assumptions",
          de: "Einen Rechner nutzen, ohne die Annahmen darin zu verstecken",
        },
        paragraphs: [
          {
            en: "Bondure's Floor Screed Calculator is built to take average thickness, area, and product yield as direct inputs — which means the accuracy of the output depends entirely on the accuracy of the thickness figure entered. That's a feature, not a limitation: it puts the judgment call where it belongs, with whoever has surveyed the slab, rather than burying it inside a black-box formula.",
            de: "Bondures Bodenestrich-Rechner ist so konzipiert, dass er durchschnittliche Dicke, Fläche und Produktergiebigkeit als direkte Eingaben aufnimmt — was bedeutet, dass die Genauigkeit des Ergebnisses vollständig von der Genauigkeit des eingegebenen Dickenwerts abhängt. Das ist ein Merkmal, keine Einschränkung: Es legt die Beurteilung dorthin, wo sie hingehört — zu demjenigen, der die Decke aufgemessen hat — statt sie in einer Blackbox-Formel zu verstecken.",
          },
          {
            en: "For any floor plate larger than a small residential room, or any area with engineered falls, the recommended sequence is:",
            de: "Für jede Bodenfläche, die größer ist als ein kleiner Wohnraum, oder jeden Bereich mit eingeplantem Gefälle wird folgende Reihenfolge empfohlen:",
          },
        ],
        points: [
          {
            label: { en: "1. Survey actual slab levels.", de: "1. Tatsächliche Rohdeckenhöhen aufmessen." },
            text: {
              en: "Take measurements at a reasonable grid spacing.",
              de: "Nehmen Sie Messungen in einem sinnvollen Rasterabstand vor.",
            },
          },
          {
            label: { en: "2. Establish the required finished floor level.", de: "2. Die erforderliche Fertigfußbodenhöhe festlegen." },
            text: {
              en: "Calculate true average thickness from the difference.",
              de: "Berechnen Sie die wahre durchschnittliche Dicke aus der Differenz.",
            },
          },
          {
            label: { en: "3. Add a contingency for low-spot buildup.", de: "3. Einen Zuschlag für den Aufbau in Tiefstellen einplanen." },
            text: {
              en: "Typically allow 10–15% beyond the calculated average.",
              de: "Rechnen Sie üblicherweise 10–15 % über den berechneten Durchschnitt hinaus.",
            },
          },
          {
            label: { en: "4. Confirm screed type and yield.", de: "4. Estrichtyp und Ergiebigkeit bestätigen." },
            text: {
              en: "Check the specific product's technical data sheet, not a generic assumption.",
              de: "Prüfen Sie das technische Datenblatt des konkreten Produkts, nicht eine allgemeine Annahme.",
            },
          },
        ],
      },
      {
        heading: {
          en: "The takeaway for specifiers",
          de: "Das Fazit für Planer",
        },
        paragraphs: [
          {
            en: "A screed quantity estimate is only as good as the slab data behind it. Treat the finished-level survey as a required input rather than an optional refinement, build contingency into low spots deliberately rather than as an afterthought, and the number that lands on the delivery note will match the number the floor actually needs.",
            de: "Eine Estrichmengenberechnung ist nur so gut wie die Deckendaten dahinter. Behandeln Sie die Fertighöhenaufmessung als erforderliche Eingabe statt als optionale Verfeinerung, planen Sie Zuschläge für Tiefstellen bewusst ein statt nachträglich, und die Zahl auf dem Lieferschein entspricht der Zahl, die der Boden tatsächlich braucht.",
          },
        ],
      },
    ],
    action: {
      label: { en: "Open the Floor Screed Calculator", de: "Bodenestrich-Rechner öffnen" },
      href: "/tools#screed",
    },
  },
  "high-rise-material-estimation": {
    title: {
      en: "How Accurate Material Estimation Prevented a Mid-Project Stoppage on a High-Rise Residential Tower",
      de: "Wie präzise Materialermittlung einen Baustopp mitten im Projekt bei einem Wohnhochhaus verhinderte",
    },
    summary: {
      en: "Zone-specific quantities and phased deliveries turn estimation into a practical schedule safeguard.",
      de: "Zonenspezifische Mengen und phasenweise Lieferungen machen die Mengenermittlung zu einer praktischen Absicherung des Zeitplans.",
    },
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=85",
    imageAlt: {
      en: "High-rise construction project team",
      de: "Projektteam eines Hochhausbaus",
    },
    sections: [
      {
        paragraphs: [
          {
            en: "The following is an illustrative scenario, built from realistic project conditions, showing how Bondure's estimation tools are designed to be used on a large-scale project. It represents a composite of common site conditions rather than a single named project.",
            de: "Das Folgende ist ein illustratives Szenario, aufgebaut aus realistischen Projektbedingungen, das zeigt, wie Bondures Mengenermittlungs-Tools bei einem großmaßstäblichen Projekt eingesetzt werden sollen. Es stellt eine Zusammenführung typischer Baustellenbedingungen dar und nicht ein einzelnes, konkret benanntes Projekt.",
          },
          {
            en: "A 32-storey residential high-rise, mid-construction, with AAC block masonry underway on upper floors and large-format porcelain tile installation beginning on completed lower floors. Two trades, two material systems, two separate procurement schedules — and a compressed handover timeline that left almost no slack for a mid-project material shortfall.",
            de: "Ein 32-geschossiges Wohnhochhaus im Bau, mit Porenbeton-Mauerwerk in Ausführung in den oberen Geschossen und beginnender Großformat-Feinsteinzeugverlegung in den fertiggestellten unteren Geschossen. Zwei Gewerke, zwei Materialsysteme, zwei getrennte Beschaffungspläne — und ein komprimierter Übergabezeitplan, der kaum Puffer für einen Materialengpass mitten im Projekt ließ.",
          },
          {
            en: "This is precisely the kind of project where estimation errors compound rather than stay isolated. A tile crew running short on adhesive on one floor doesn't just lose a day; on a tower with a rolling floor-by-floor handover schedule, it can push back every subsequent trade queued behind it.",
            de: "Genau bei dieser Art von Projekt summieren sich Kalkulationsfehler, statt isoliert zu bleiben. Wenn einer Fliesenkolonne in einem Geschoss der Kleber ausgeht, verliert sie nicht nur einen Tag; bei einem Turm mit rollierendem, geschossweisem Übergabezeitplan kann das jedes nachfolgende Gewerk, das dahinter ansteht, verzögern.",
          },
        ],
      },
      {
        heading: {
          en: "Why high-rise estimates carry more risk",
          de: "Warum Mengenermittlungen im Hochhausbau mehr Risiko bergen",
        },
        points: [
          {
            label: {
              en: "Repetition amplifies small errors.",
              de: "Wiederholung verstärkt kleine Fehler.",
            },
            text: {
              en: "A 5% under-calculation on a single apartment floor plan is a minor inconvenience. Repeated across 28 typical floors, it becomes a shortfall large enough to stall a delivery schedule and force an emergency reorder — often at a premium, and often with a lead time the program can't absorb.",
              de: "Eine Unterberechnung von 5 % bei einem einzelnen Wohnungsgrundriss ist eine geringe Unannehmlichkeit. Über 28 Regelgeschosse wiederholt, wird daraus ein Fehlbetrag, der groß genug ist, um einen Lieferplan zum Stillstand zu bringen und eine Notbestellung zu erzwingen — oft mit Aufpreis und oft mit einer Lieferzeit, die der Zeitplan nicht auffangen kann.",
            },
          },
          {
            label: {
              en: "AAC block jointing mortar consumption varies with block tolerance.",
              de: "Der Verbrauch an Porenbeton-Fugenmörtel schwankt mit der Steintoleranz.",
            },
            text: {
              en: "AAC blocks are manufactured to tighter dimensional tolerances than conventional masonry units, but block batches still carry some dimensional variance. Joint thickness assumptions built on a typical block size can run short if a batch runs slightly outside tolerance.",
              de: "Porenbetonsteine werden mit engeren Maßtoleranzen gefertigt als herkömmliche Mauersteine, doch die Steinchargen weisen dennoch eine gewisse Maßschwankung auf. Annahmen zur Fugendicke, die auf einer typischen Steingröße beruhen, können zu knapp ausfallen, wenn eine Charge leicht außerhalb der Toleranz liegt.",
            },
          },
          {
            label: {
              en: "Large-format tile needs format-specific coverage assumptions.",
              de: "Großformatfliesen erfordern formatspezifische Verbrauchsannahmen.",
            },
            text: {
              en: "Tall buildings increasingly specify large-format porcelain for both durability and aesthetic reasons. Large-format tile has meaningfully different adhesive coverage requirements than standard formats — a variable that generic, format-agnostic estimates consistently underweight.",
              de: "Hohe Gebäude schreiben zunehmend Großformat-Feinsteinzeug aus, sowohl aus Haltbarkeits- als auch aus ästhetischen Gründen. Großformatfliesen haben deutlich andere Anforderungen an den Kleberverbrauch als Standardformate — eine Variable, die allgemeine, formatunabhängige Kalkulationen durchgängig untergewichten.",
            },
          },
        ],
      },
      {
        heading: {
          en: "A practical planning sequence",
          de: "Eine praktische Planungsreihenfolge",
        },
        paragraphs: [
          {
            en: "Working from architectural drawings and the project's floor-by-floor construction sequence, the technical planning process for a project of this scale typically follows four steps:",
            de: "Ausgehend von den Architekturplänen und dem geschossweisen Bauablauf des Projekts folgt der technische Planungsprozess bei einem Projekt dieser Größenordnung typischerweise vier Schritten:",
          },
        ],
        points: [
          {
            label: { en: "1. Segment by zone, not by whole building.", de: "1. Nach Zone segmentieren, nicht nach ganzem Gebäude." },
            text: {
              en: "Calculate material quantities per floor type and per zone — typical floor, amenity floor, ground-level retail, and roof terrace — since each carries different tile formats, substrate conditions, and AAC block specifications.",
              de: "Berechnen Sie Materialmengen je Geschosstyp und je Zone — Regelgeschoss, Gemeinschaftsgeschoss, Einzelhandel im Erdgeschoss und Dachterrasse — da jede unterschiedliche Fliesenformate, Untergrundbedingungen und Porenbeton-Spezifikationen aufweist.",
            },
          },
          {
            label: { en: "2. Build estimates from actual specified inputs, not defaults.", de: "2. Kalkulationen aus tatsächlich ausgeschriebenen Eingaben aufbauen, nicht aus Standardwerten." },
            text: {
              en: "Use the actual specified notch size, tile format, and block dimensions in the Tile Adhesive and AAC Mortar Calculators. This separates a workable order quantity from an optimistic one.",
              de: "Verwenden Sie die tatsächlich ausgeschriebene Zahnungsgröße, das Fliesenformat und die Steinmaße im Fliesenkleber- und im Porenbeton-Mörtelrechner. Das unterscheidet eine belastbare Bestellmenge von einer optimistischen.",
            },
          },
          {
            label: { en: "3. Stagger delivery against the construction sequence.", de: "3. Lieferungen gegen den Bauablauf staffeln." },
            text: {
              en: "Schedule material in phases matched to the floor sequence, each carrying its own contingency rather than one lump-sum buffer at the end.",
              de: "Planen Sie das Material in Phasen, die auf die Geschossfolge abgestimmt sind, jede mit eigenem Zuschlag statt eines pauschalen Puffers am Ende.",
            },
          },
          {
            label: { en: "4. Validate assumptions on-site before the bulk order is placed.", de: "4. Annahmen vor der Großbestellung vor Ort validieren." },
            text: {
              en: "Confirm actual substrate flatness and block batch tolerance against the assumptions used in the calculator while discrepancies are still cheap to correct.",
              de: "Prüfen Sie die tatsächliche Untergrundebenheit und die Toleranz der Steincharge gegen die im Rechner verwendeten Annahmen, solange Abweichungen noch kostengünstig zu korrigieren sind.",
            },
          },
        ],
      },
      {
        heading: {
          en: "What the approach prevents",
          de: "Was dieser Ansatz verhindert",
        },
        paragraphs: [
          {
            en: "The value of this approach isn't visible in a normal project — it's visible in the project that doesn't happen: the one where a crew on floor 14 runs out of adhesive on a Thursday afternoon, the next delivery slot is four days out, and every trade scheduled behind tiling on that floor slides with it.",
            de: "Der Wert dieses Ansatzes zeigt sich nicht bei einem normalen Projekt — er zeigt sich bei dem Projekt, das nicht eintritt: jenem, bei dem einer Kolonne im 14. Geschoss an einem Donnerstagnachmittag der Kleber ausgeht, der nächste Liefertermin vier Tage entfernt ist und jedes Gewerk, das hinter der Verfliesung dieses Geschosses eingeplant ist, mitverschoben wird.",
          },
          {
            en: "On a compressed high-rise handover schedule, a single floor-level stoppage of even a few days can ripple into weeks of cumulative delay once it interacts with dependent trades, inspection scheduling, and unit handover commitments to buyers or tenants. Phased, zone-specific estimation — built on actual specified materials rather than generic assumptions — is what keeps that risk out of the schedule in the first place.",
            de: "Bei einem komprimierten Übergabezeitplan im Hochhausbau kann ein einzelner Stillstand auf Geschossebene von nur wenigen Tagen zu Wochen kumulierter Verzögerung anwachsen, sobald er mit abhängigen Gewerken, der Terminierung von Abnahmen und Übergabezusagen an Käufer oder Mieter zusammenwirkt. Eine phasenweise, zonenspezifische Mengenermittlung — aufgebaut auf tatsächlich ausgeschriebenen Materialien statt auf allgemeinen Annahmen — hält dieses Risiko von vornherein aus dem Zeitplan heraus.",
          },
        ],
      },
      {
        heading: {
          en: "The practical takeaway",
          de: "Das Fazit für die Praxis",
        },
        paragraphs: [
          {
            en: "High-rise projects don't fail on material estimation because the arithmetic is hard. They fail because a single, building-wide estimate gets applied across dozens of floors that don't actually share identical conditions, and because contingency gets treated as a rounding error rather than a deliberate part of the plan. Segmenting by zone, using project-specific inputs rather than defaults, and phasing delivery against the construction sequence turns estimation from a one-time calculation into an ongoing part of the project's risk management.",
            de: "Hochhausprojekte scheitern nicht an der Mengenermittlung, weil die Rechnung schwer wäre. Sie scheitern, weil eine einzige, gebäudeweite Kalkulation auf Dutzende Geschosse angewendet wird, die in Wirklichkeit keine identischen Bedingungen teilen, und weil der Zuschlag als Rundungsfehler statt als bewusster Teil der Planung behandelt wird. Die Segmentierung nach Zone, die Verwendung projektspezifischer Eingaben statt Standardwerte und die phasenweise Lieferung entlang des Bauablaufs machen aus der Mengenermittlung statt einer einmaligen Berechnung einen laufenden Teil des Risikomanagements des Projekts.",
          },
        ],
      },
    ],
    action: {
      label: { en: "Explore Bondure site tools", de: "Bondures Baustellen-Tools entdecken" },
      href: "/tools",
    },
  },
};

export const rdArticles = {
  "inside-700000-tests": {
    title: {
      en: "Inside 700,000+ Tests: What Rigorous Product Validation Actually Looks Like",
      de: "Ein Blick hinter 700.000+ Prüfungen: Wie eine rigorose Produktvalidierung tatsächlich aussieht",
    },
    summary: {
      en: "A performance figure is only the visible summary of the many conditions tested behind it.",
      de: "Ein Leistungswert ist nur die sichtbare Zusammenfassung der vielen dahinter geprüften Bedingungen.",
    },
    image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1800&q=85",
    imageAlt: {
      en: "Laboratory testing equipment",
      de: "Laborprüfausstattung",
    },
    sections: [
      {
        paragraphs: [
          {
            en: "A technical data sheet reduces a formulation to a handful of figures: bond strength in N/mm², open time in minutes, slip resistance under a load. Those numbers look simple because they're meant to be usable at a glance — but each one represents a testing process that's considerably less simple than the final figure suggests, run and re-run across variables most specifiers never see documented.",
            de: "Ein technisches Datenblatt reduziert eine Rezeptur auf eine Handvoll Werte: Haftzugfestigkeit in N/mm², offene Zeit in Minuten, Rutschfestigkeit unter Last. Diese Zahlen wirken einfach, weil sie auf einen Blick nutzbar sein sollen — doch jede einzelne steht für einen Prüfprozess, der erheblich weniger einfach ist, als der Endwert vermuten lässt, durchgeführt und wiederholt über Variablen hinweg, die die meisten Planer nie dokumentiert zu sehen bekommen.",
          },
          {
            en: "Bondure's testing volume — more than 700,000 tests to date — isn't a marketing statistic so much as a reflection of what genuine formulation validation actually requires, run across raw materials, environmental conditions, and application scenarios before a product reaches a site.",
            de: "Bondures Prüfvolumen — bis heute mehr als 700.000 Prüfungen — ist weniger eine Marketingstatistik als vielmehr ein Spiegel dessen, was eine echte Rezepturvalidierung tatsächlich erfordert, durchgeführt über Rohstoffe, Umgebungsbedingungen und Verarbeitungsszenarien hinweg, bevor ein Produkt eine Baustelle erreicht.",
          },
        ],
      },
      {
        heading: {
          en: "What sits behind a published figure",
          de: "Was hinter einem veröffentlichten Wert steht",
        },
        paragraphs: [
          {
            en: "Take bond strength — arguably the single most scrutinized figure on any tile adhesive data sheet. A published number isn't the result of one test; it's a statistically defensible average, run across:",
            de: "Nehmen wir die Haftzugfestigkeit — wohl der am genauesten geprüfte Einzelwert auf jedem Fliesenkleber-Datenblatt. Eine veröffentlichte Zahl ist nicht das Ergebnis einer einzigen Prüfung; sie ist ein statistisch belastbarer Durchschnitt, ermittelt über:",
          },
        ],
        points: [
          {
            label: { en: "Multiple substrate types.", de: "Mehrere Untergrundarten." },
            text: {
              en: "Concrete, cement board, existing tile for overlay applications, and various masonry substrates all bond differently. A formulation validated only on one substrate type doesn't tell a specifier what will happen on another.",
              de: "Beton, Zementbauplatte, Altfliesen für Überklebungen und verschiedene mauerwerksartige Untergründe haften alle unterschiedlich. Eine nur auf einer Untergrundart validierte Rezeptur sagt einem Planer nicht, was auf einer anderen geschieht.",
            },
          },
          {
            label: { en: "Multiple conditioning regimes.", de: "Mehrere Konditionierungsregime." },
            text: {
              en: "Standard cure, water immersion, heat aging, and freeze-thaw cycling where relevant to climate each subject the same formulation to different stress conditions. A product that performs well immediately after cure but degrades under prolonged moisture exposure has a real, practical limitation that a single dry-cure test wouldn't reveal.",
              de: "Standardaushärtung, Wasserlagerung, Wärmealterung und Frost-Tau-Wechsel, wo klimatisch relevant, setzen dieselbe Rezeptur jeweils unterschiedlichen Belastungsbedingungen aus. Ein Produkt, das unmittelbar nach der Aushärtung gut abschneidet, sich aber unter längerer Feuchtigkeitseinwirkung verschlechtert, hat eine reale, praktische Einschränkung, die eine einzelne Trockenaushärtungsprüfung nicht offenbaren würde.",
            },
          },
          {
            label: { en: "Multiple raw material batches.", de: "Mehrere Rohstoffchargen." },
            text: {
              en: "Cement, polymers, and mineral fillers carry natural batch-to-batch variation from their own suppliers. Validating against that variation, rather than a single ideal batch, separates a lab result from a product that performs consistently at production scale, bag after bag, over years of manufacturing.",
              de: "Zement, Polymere und mineralische Füllstoffe weisen von ihren eigenen Lieferanten eine natürliche Charge-zu-Charge-Schwankung auf. Die Validierung gegen diese Schwankung — statt gegen eine einzige Idealcharge — unterscheidet ein Laborergebnis von einem Produkt, das im Produktionsmaßstab konsistent funktioniert, Sack für Sack, über Jahre der Fertigung.",
            },
          },
          {
            label: { en: "Real-world tile and substrate combinations.", de: "Praxisnahe Fliesen- und Untergrundkombinationen." },
            text: {
              en: "Beyond standardized lab substrates, formulations are tested against the range of tile formats, backs, and substrate conditions a product is likely to encounter on real projects — because a standardized test substrate and a genuinely difficult site substrate don't always behave the same way.",
              de: "Über standardisierte Laboruntergründe hinaus werden Rezepturen gegen die Bandbreite an Fliesenformaten, Rückseiten und Untergrundzuständen geprüft, die ein Produkt bei realen Projekten wahrscheinlich antrifft — denn ein standardisierter Prüfuntergrund und ein wirklich schwieriger Baustellenuntergrund verhalten sich nicht immer gleich.",
            },
          },
        ],
      },
      {
        heading: {
          en: "Why validation depth matters",
          de: "Warum die Tiefe der Validierung zählt",
        },
        paragraphs: [
          {
            en: "Multiply this across the practical range of open time, workability, slip resistance, and durability testing a single formulation requires, and it becomes clear why a testing volume in the hundreds of thousands isn't excessive — it's closer to the baseline required to stand behind a performance claim with genuine confidence, rather than a single favorable result.",
            de: "Multipliziert man dies über die praktische Bandbreite an Prüfungen zu offener Zeit, Verarbeitbarkeit, Rutschfestigkeit und Dauerhaftigkeit, die eine einzelne Rezeptur erfordert, wird deutlich, warum ein Prüfvolumen in den Hunderttausenden nicht übertrieben ist — es kommt eher dem Mindestmaß nahe, das nötig ist, um mit echter Zuversicht hinter einer Leistungsangabe zu stehen, statt hinter einem einzelnen günstigen Ergebnis.",
          },
          {
            en: "It's reasonable for a specifier to ask why testing rigor behind a data sheet figure should matter, when the published number is what appears on the specification either way. The answer is about what happens when site conditions inevitably diverge from the exact conditions of a single reference test.",
            de: "Es ist berechtigt, wenn ein Planer fragt, warum die Prüfstrenge hinter einem Datenblattwert überhaupt eine Rolle spielen sollte, wo doch ohnehin die veröffentlichte Zahl in der Ausschreibung steht. Die Antwort betrifft das, was geschieht, wenn die Baustellenbedingungen zwangsläufig von den exakten Bedingungen einer einzelnen Referenzprüfung abweichen.",
          },
          {
            en: "A formulation validated across a wide range of substrates, conditioning regimes, and raw material variation is far more likely to perform consistently when a specific project's substrate, climate, or application method sits slightly outside the ideal test scenario — which describes the overwhelming majority of real projects. A formulation validated narrowly, against a single best-case scenario, carries more hidden risk of underperforming once real-world variables are introduced, even if its headline data sheet figure looks identical on paper.",
            de: "Eine Rezeptur, die über eine breite Palette von Untergründen, Konditionierungsregimen und Rohstoffschwankungen validiert wurde, funktioniert weitaus wahrscheinlicher konsistent, wenn Untergrund, Klima oder Verarbeitungsmethode eines konkreten Projekts leicht außerhalb des Idealszenarios liegen — was die überwältigende Mehrheit realer Projekte beschreibt. Eine eng, gegen ein einziges Best-Case-Szenario validierte Rezeptur trägt ein größeres verborgenes Risiko, unter realen Variablen schlechter abzuschneiden, selbst wenn ihr Datenblatt-Kennwert auf dem Papier identisch aussieht.",
          },
          {
            en: "In other words: two products can carry the same published bond strength figure and represent meaningfully different levels of confidence in how that figure was earned.",
            de: "Mit anderen Worten: Zwei Produkte können denselben veröffentlichten Haftzugfestigkeitswert tragen und dennoch deutlich unterschiedliche Grade an Zuversicht darüber verkörpern, wie dieser Wert zustande kam.",
          },
        ],
      },
      {
        heading: {
          en: "Validation continues after launch",
          de: "Die Validierung geht nach der Markteinführung weiter",
        },
        paragraphs: [
          {
            en: "Rigorous validation isn't a one-time gate before a product launches — it's an ongoing process. Raw material sourcing changes, and reformulation testing has to confirm that a supplier or batch change hasn't shifted performance. New tile formats and application methods emerge, and formulations get validated against them specifically rather than assumed to still apply. Field feedback from technical services and application training surfaces edge cases lab testing alone might not anticipate, which then feeds back into further validation.",
            de: "Eine rigorose Validierung ist kein einmaliges Tor vor der Markteinführung eines Produkts — sie ist ein fortlaufender Prozess. Die Rohstoffbeschaffung ändert sich, und Nachprüfungen der Rezeptur müssen bestätigen, dass ein Lieferanten- oder Chargenwechsel die Leistung nicht verändert hat. Neue Fliesenformate und Verarbeitungsmethoden entstehen, und Rezepturen werden gezielt dagegen validiert, statt anzunehmen, dass sie weiterhin gelten. Rückmeldungen aus dem Feld von technischem Service und Verarbeitungsschulung bringen Grenzfälle ans Licht, die Laborprüfungen allein womöglich nicht vorhersehen, was dann in weitere Validierung einfließt.",
          },
          {
            en: "This is also where Bondure's on-site testing capability connects back to the lab: live, side-by-side application testing on an actual project substrate is, in effect, an additional validation data point under real-world conditions — feeding practical insight back into the formulation and testing process, rather than testing existing purely as a pre-launch checkpoint.",
            de: "Genau hier verbindet sich auch Bondures Prüfkompetenz vor Ort wieder mit dem Labor: Ein Vergleichstest der Verarbeitung auf einem tatsächlichen Projektuntergrund ist im Grunde ein zusätzlicher Validierungsdatenpunkt unter realen Bedingungen — er speist praktische Erkenntnisse zurück in Rezeptur und Prüfprozess, statt dass die Prüfung rein als Kontrollpunkt vor der Markteinführung existiert.",
          },
        ],
      },
      {
        heading: {
          en: "The takeaway",
          de: "Das Fazit",
        },
        paragraphs: [
          {
            en: "A data sheet figure is a summary, not the full picture. When evaluating a product, asking what range of conditions a performance figure was validated against — rather than accepting the number at face value — is a reasonable, useful question, and one that a manufacturer with genuine testing depth should be able to answer specifically rather than generally.",
            de: "Ein Datenblattwert ist eine Zusammenfassung, nicht das vollständige Bild. Bei der Bewertung eines Produkts ist die Frage, gegen welche Bandbreite von Bedingungen ein Leistungswert validiert wurde — statt die Zahl für bare Münze zu nehmen — eine berechtigte, nützliche Frage, und eine, die ein Hersteller mit echter Prüftiefe konkret statt allgemein beantworten können sollte.",
          },
        ],
      },
    ],
    action: {
      label: { en: "Explore Bondure's R&D approach", de: "Bondures Forschungs- und Entwicklungsansatz entdecken" },
      href: "/rd",
    },
  },
  "adhesive-classification-standards": {
    title: {
      en: "C2, TE, S1, S2: A Specifier's Plain-English Guide to Adhesive Classification Standards",
      de: "C2, TE, S1, S2: ein verständlicher Planerleitfaden zu den Klassifizierungsnormen für Kleber",
    },
    summary: {
      en: "Classification codes are compressed performance specifications — and reading them correctly prevents mismatches on site.",
      de: "Klassifizierungscodes sind verdichtete Leistungsangaben — und sie richtig zu lesen verhindert Fehlpassungen auf der Baustelle.",
    },
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=85",
    imageAlt: {
      en: "Construction material testing on site",
      de: "Prüfung von Baumaterial auf der Baustelle",
    },
    sections: [
      {
        paragraphs: [
          {
            en: "A tile adhesive bag or data sheet often carries a code like C2TE S1 — a string of letters and numbers that compresses a considerable amount of performance information into a shorthand most people outside a formulation lab have to look up every time they see it. For a specifier, understanding what those characters actually mean is the difference between checking a box on a document and confirming a product is genuinely fit for the project's conditions.",
            de: "Ein Fliesenkleber-Sack oder Datenblatt trägt oft einen Code wie C2TE S1 — eine Folge von Buchstaben und Zahlen, die eine beträchtliche Menge an Leistungsinformationen in ein Kürzel verdichtet, das die meisten Menschen außerhalb eines Rezepturlabors jedes Mal nachschlagen müssen. Für einen Planer ist das Verständnis dessen, was diese Zeichen tatsächlich bedeuten, der Unterschied zwischen dem Abhaken eines Kästchens in einem Dokument und der Bestätigung, dass ein Produkt wirklich für die Bedingungen des Projekts geeignet ist.",
          },
          {
            en: "These classifications derive from the EN 12004 standard for cementitious, dispersion, and reaction resin adhesives for tiles, and similar classification logic appears in equivalent standards internationally, including ANSI A118 series classifications in the United States. While exact code letters differ between standards, the underlying performance categories they describe are broadly consistent.",
            de: "Diese Klassifizierungen leiten sich aus der Norm EN 12004 für zementäre, dispersions- und reaktionsharzbasierte Fliesenkleber ab, und eine ähnliche Klassifizierungslogik findet sich in gleichwertigen Normen international, darunter die Klassifizierungen der ANSI-A118-Reihe in den USA. Zwar unterscheiden sich die genauen Codebuchstaben zwischen den Normen, doch die zugrunde liegenden Leistungskategorien, die sie beschreiben, sind weitgehend übereinstimmend.",
          },
        ],
      },
      {
        heading: {
          en: "Breaking down the code",
          de: "Den Code aufschlüsseln",
        },
        points: [
          {
            label: { en: "The first letter — adhesive type.", de: "Der erste Buchstabe — Klebertyp." },
            text: {
              en: "C means cementitious adhesive: cement-based and the most common type for standard applications. D means dispersion adhesive: ready-mixed and polymer-based. R means reaction resin adhesive: epoxy or similar, for chemical resistance or heavy-duty applications.",
              de: "C steht für zementären Kleber: zementgebunden und der häufigste Typ für Standardanwendungen. D steht für Dispersionskleber: gebrauchsfertig und polymerbasiert. R steht für Reaktionsharzkleber: Epoxid oder ähnlich, für Chemikalienbeständigkeit oder Hochbeanspruchung.",
            },
          },
          {
            label: { en: "The number — performance class.", de: "Die Zahl — Leistungsklasse." },
            text: {
              en: "1 indicates a normal-set adhesive meeting base performance requirements. 2 indicates an improved adhesive, meeting enhanced bond strength and additional performance criteria beyond the base class.",
              de: "1 kennzeichnet einen Kleber mit normalem Abbindeverhalten, der die Grundanforderungen an die Leistung erfüllt. 2 kennzeichnet einen verbesserten Kleber, der erhöhte Haftzugfestigkeit und zusätzliche Leistungskriterien über die Grundklasse hinaus erfüllt.",
            },
          },
          {
            label: { en: "The following letters — additional characteristics.", de: "Die folgenden Buchstaben — Zusatzmerkmale." },
            text: {
              en: "F is fast-setting for accelerated schedules. T is reduced slip, important for wall applications and large-format tile where sag resistance matters. E is extended open time, giving applicators more working time before the adhesive skins over. S1 and S2 mean deformable and highly deformable, indicating the ability to flex without losing bond on substrates prone to movement.",
              de: "F steht für schnellabbindend, für beschleunigte Zeitpläne. T steht für verringertes Abrutschen, wichtig bei Wandanwendungen und Großformatfliesen, bei denen Standfestigkeit zählt. E steht für verlängerte offene Zeit, die Verarbeitern mehr Arbeitszeit gibt, bevor der Kleber Haut bildet. S1 und S2 bedeuten verformbar und hochverformbar und kennzeichnen die Fähigkeit, sich zu verformen, ohne die Haftung auf bewegungsanfälligen Untergründen zu verlieren.",
            },
          },
        ],
        paragraphsAfter: [
          {
            en: "So a C2TE S1 adhesive, decoded, is a cementitious adhesive meeting improved performance requirements, with reduced slip for vertical applications, extended open time, and deformable characteristics suited to substrates with some movement.",
            de: "Ein C2TE-S1-Kleber ist also, entschlüsselt, ein zementärer Kleber, der erhöhte Leistungsanforderungen erfüllt, mit verringertem Abrutschen für vertikale Anwendungen, verlängerter offener Zeit und verformbaren Eigenschaften, die für Untergründe mit gewisser Bewegung geeignet sind.",
          },
        ],
      },
      {
        heading: {
          en: "Why this matters more than it might appear to",
          de: "Warum das mehr zählt, als es scheinen mag",
        },
        paragraphs: [
          {
            en: "It's tempting to treat classification codes as a compliance formality — confirm the code matches the specification, move on. In practice, the code is doing real work describing whether a product actually fits the project's specific conditions, and mismatches here are a genuine, recurring source of site failures.",
            de: "Es ist verlockend, Klassifizierungscodes als bloße Konformitätsformalität zu behandeln — bestätigen, dass der Code mit der Ausschreibung übereinstimmt, und weiter. In der Praxis leistet der Code echte Arbeit, indem er beschreibt, ob ein Produkt tatsächlich zu den spezifischen Bedingungen des Projekts passt, und Fehlpassungen sind hier eine reale, wiederkehrende Ursache für Baustellenschäden.",
          },
        ],
        points: [
          {
            label: {
              en: "Deformability class and substrate movement are directly linked.",
              de: "Verformbarkeitsklasse und Untergrundbewegung sind direkt verknüpft.",
            },
            text: {
              en: "Specifying a standard, non-deformable adhesive on a substrate subject to thermal cycling, vibration, or structural movement — a rooftop terrace, heated floor, or timber substructure — removes a safety margin the project may actually need.",
              de: "Einen standardmäßigen, nicht verformbaren Kleber auf einem Untergrund auszuschreiben, der Temperaturwechseln, Vibrationen oder Bauwerksbewegungen ausgesetzt ist — eine Dachterrasse, ein beheizter Boden oder ein Holzunterbau — nimmt eine Sicherheitsreserve, die das Projekt tatsächlich benötigen könnte.",
            },
          },
          {
            label: {
              en: "Slip resistance (T) matters disproportionately for large-format wall tile.",
              de: "Die Abrutschsicherheit (T) zählt bei Großformat-Wandfliesen überproportional.",
            },
            text: {
              en: "As tile formats have trended larger, the T classification has become more relevant. A heavier tile without adequate slip resistance is a genuine installation risk on vertical surfaces, independent of the adhesive's bond strength figure.",
              de: "Da Fliesenformate immer größer werden, ist die T-Klassifizierung relevanter geworden. Eine schwerere Fliese ohne ausreichende Abrutschsicherheit ist auf vertikalen Flächen ein reales Verlegerisiko, unabhängig vom Haftzugfestigkeitswert des Klebers.",
            },
          },
          {
            label: {
              en: "Open time (E) interacts directly with crew scheduling and climate.",
              de: "Die offene Zeit (E) wirkt direkt mit Kolonneneinsatz und Klima zusammen.",
            },
            text: {
              en: "A standard open-time adhesive on a large installation, in hot or dry conditions that accelerate skinning, can create application problems that have nothing to do with inherent adhesive quality and everything to do with a classification mismatch against real site conditions.",
              de: "Ein Kleber mit standardmäßiger offener Zeit bei einer großen Verlegung, unter heißen oder trockenen Bedingungen, die die Hautbildung beschleunigen, kann Verarbeitungsprobleme verursachen, die nichts mit der inhärenten Kleberqualität zu tun haben und alles mit einer Fehlpassung der Klassifizierung gegenüber den realen Baustellenbedingungen.",
            },
          },
        ],
      },
      {
        heading: {
          en: "Using this in a specification",
          de: "Anwendung in einer Ausschreibung",
        },
        paragraphs: [
          {
            en: "Rather than specifying a product by brand name alone, building the required classification directly into the specification — C2TE S1 or equivalent, for example — does two useful things: it defines the actual performance requirement independent of any single manufacturer, and it gives a reviewing specifier or contractor a fast, objective way to confirm whether a substitution genuinely meets the project's needs, rather than relying on brand reputation as a substitute for a stated performance requirement.",
            de: "Statt ein Produkt allein über den Markennamen auszuschreiben, bewirkt es zwei nützliche Dinge, die erforderliche Klassifizierung direkt in die Ausschreibung aufzunehmen — zum Beispiel C2TE S1 oder gleichwertig: Es definiert die tatsächliche Leistungsanforderung unabhängig von einem einzelnen Hersteller, und es gibt einem prüfenden Planer oder Verarbeiter eine schnelle, objektive Möglichkeit zu bestätigen, ob eine Substitution die Anforderungen des Projekts wirklich erfüllt — statt sich auf den Markenruf als Ersatz für eine ausgewiesene Leistungsanforderung zu verlassen.",
          },
        ],
      },
      {
        heading: {
          en: "The takeaway",
          de: "Das Fazit",
        },
        paragraphs: [
          {
            en: "A classification code isn't bureaucratic shorthand — it's a compressed performance specification, and reading it correctly is a five-minute check that can surface a genuine substrate-compatibility issue before it becomes a site problem. For any project with unusual substrate conditions — movement, heat, large-format tile, or tight schedules — decoding the full classification, not just confirming the product exists on an approved list, is worth the five minutes.",
            de: "Ein Klassifizierungscode ist kein bürokratisches Kürzel — er ist eine verdichtete Leistungsangabe, und ihn richtig zu lesen ist eine Fünf-Minuten-Prüfung, die ein echtes Untergrundverträglichkeitsproblem aufdecken kann, bevor es zum Baustellenproblem wird. Bei jedem Projekt mit ungewöhnlichen Untergrundbedingungen — Bewegung, Wärme, Großformatfliesen oder engen Zeitplänen — lohnt es sich, die vollständige Klassifizierung zu entschlüsseln, statt nur zu bestätigen, dass das Produkt auf einer Freigabeliste steht.",
          },
        ],
      },
    ],
    action: {
      label: { en: "See Bondure's product classifications", de: "Bondures Produktklassifizierungen ansehen" },
      href: "/products",
    },
  },
  "sustainability-construction-chemicals": {
    title: {
      en: "Sustainability in Construction Chemicals: Measuring What Actually Matters",
      de: "Nachhaltigkeit in der Bauchemie: messen, worauf es wirklich ankommt",
    },
    summary: {
      en: "The most useful sustainability claim is one supported by specific, current, verifiable data.",
      de: "Die nützlichste Nachhaltigkeitsangabe ist eine, die durch spezifische, aktuelle und überprüfbare Daten belegt ist.",
    },
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85",
    imageAlt: {
      en: "Sustainable modern office and building environment",
      de: "Nachhaltiges modernes Büro- und Gebäudeumfeld",
    },
    sections: [
      {
        paragraphs: [
          {
            en: "Sustainability claims on construction chemical packaging have multiplied faster than the standards for verifying them. Eco-friendly, green, and low-impact appear on data sheets with varying degrees of substantiation behind them — which puts specifiers in the position of having to distinguish a genuinely measured environmental profile from a marketing description dressed as one.",
            de: "Nachhaltigkeitsangaben auf Verpackungen von Bauchemie haben sich schneller vermehrt als die Standards, um sie zu überprüfen. „Umweltfreundlich“, „grün“ und „ressourcenschonend“ erscheinen auf Datenblättern mit unterschiedlich starker Untermauerung dahinter — was Planer in die Lage versetzt, ein wirklich gemessenes Umweltprofil von einer als solches verkleideten Marketingbeschreibung unterscheiden zu müssen.",
          },
          {
            en: "The distinction matters for reasons beyond principle. Green building certification programs — LEED, IGBC, and similar frameworks internationally — increasingly require documented evidence, not stated claims, to award credits for material selection. A product's sustainability profile is only as useful to a project as the data actually standing behind it.",
            de: "Diese Unterscheidung ist aus mehr als grundsätzlichen Gründen wichtig. Zertifizierungsprogramme für nachhaltiges Bauen — LEED, IGBC und ähnliche Rahmenwerke international — verlangen zunehmend dokumentierte Nachweise, nicht bloße Angaben, um Punkte für die Materialauswahl zu vergeben. Das Nachhaltigkeitsprofil eines Produkts ist für ein Projekt nur so nützlich wie die Daten, die tatsächlich dahinterstehen.",
          },
        ],
      },
      {
        heading: {
          en: "From adjectives to numbers",
          de: "Von Adjektiven zu Zahlen",
        },
        paragraphs: [
          {
            en: "Several frameworks internationally have moved toward quantified, third-party-verified environmental data rather than descriptive claims. The common thread across the more credible ones is a shift from adjectives to numbers:",
            de: "Mehrere Rahmenwerke international haben sich hin zu quantifizierten, von Dritten geprüften Umweltdaten statt beschreibender Angaben bewegt. Der rote Faden bei den glaubwürdigeren ist eine Verschiebung von Adjektiven zu Zahlen:",
          },
        ],
        points: [
          {
            label: { en: "Environmental Product Declarations (EPDs).", de: "Umweltproduktdeklarationen (EPDs)." },
            text: {
              en: "An EPD is a standardized, independently verified document quantifying a product's environmental impact across its full life cycle — raw material extraction, manufacturing, transport, use, and end-of-life — based on Life Cycle Assessment methodology. It reports specific, comparable figures such as carbon footprint and resource use that a specifier or certification reviewer can actually evaluate.",
              de: "Eine EPD ist ein standardisiertes, unabhängig geprüftes Dokument, das die Umweltwirkung eines Produkts über seinen gesamten Lebenszyklus quantifiziert — Rohstoffgewinnung, Herstellung, Transport, Nutzung und Lebensende — auf Basis der Ökobilanz-Methodik. Sie weist spezifische, vergleichbare Werte wie CO₂-Fußabdruck und Ressourcenverbrauch aus, die ein Planer oder Zertifizierungsprüfer tatsächlich bewerten kann.",
            },
          },
          {
            label: { en: "Recycled and regional material content.", de: "Rezyklat- und Regionalmaterialanteil." },
            text: {
              en: "Verifiable percentages of recycled or regionally sourced raw material content are concrete, auditable figures — meaningfully different from a general claim of using sustainable materials without a stated percentage or sourcing radius behind it.",
              de: "Überprüfbare Prozentsätze an recyceltem oder regional bezogenem Rohstoffanteil sind konkrete, prüfbare Werte — deutlich verschieden von einer allgemeinen Behauptung, nachhaltige Materialien zu verwenden, ohne einen ausgewiesenen Prozentsatz oder Bezugsradius dahinter.",
            },
          },
          {
            label: { en: "VOC emissions data.", de: "Daten zu VOC-Emissionen." },
            text: {
              en: "Volatile organic compound emissions affect indoor air quality directly. Low-VOC or VOC-free formulations verified through recognized testing protocols are both a genuine health consideration on occupied projects and a common green-building certification credit category.",
              de: "Emissionen flüchtiger organischer Verbindungen (VOC) beeinflussen die Innenraumluftqualität direkt. Emissionsarme oder VOC-freie Rezepturen, die durch anerkannte Prüfprotokolle verifiziert sind, sind sowohl ein echter Gesundheitsaspekt bei genutzten Projekten als auch eine gängige Punktekategorie bei der Zertifizierung nachhaltigen Bauens.",
            },
          },
          {
            label: { en: "Water and energy use in manufacturing.", de: "Wasser- und Energieverbrauch in der Herstellung." },
            text: {
              en: "Documented reductions in production-stage water and energy consumption round out a genuine environmental profile, since a product's impact begins well before it reaches a jobsite.",
              de: "Dokumentierte Reduzierungen des Wasser- und Energieverbrauchs in der Produktionsphase runden ein echtes Umweltprofil ab, da die Wirkung eines Produkts lange beginnt, bevor es eine Baustelle erreicht.",
            },
          },
        ],
      },
      {
        heading: {
          en: "Questions worth asking",
          de: "Fragen, die sich zu stellen lohnen",
        },
        paragraphs: [
          {
            en: "Not every environmental claim can be fully quantified yet, and not every quantified metric is equally meaningful for every project. A specifier evaluating sustainability claims is better served by asking pointed questions than by looking for a single certification logo to settle the matter:",
            de: "Nicht jede Umweltangabe lässt sich bereits vollständig quantifizieren, und nicht jede quantifizierte Kennzahl ist für jedes Projekt gleich aussagekräftig. Ein Planer, der Nachhaltigkeitsangaben bewertet, ist mit gezielten Fragen besser bedient als mit der Suche nach einem einzelnen Zertifizierungslogo, das die Sache klären soll:",
          },
        ],
        points: [
          {
            label: { en: "Is the claim verifiable?", de: "Ist die Angabe überprüfbar?" },
            text: {
              en: "Ask whether it is backed by a specific, verifiable figure or by a general description.",
              de: "Fragen Sie, ob sie durch einen spezifischen, überprüfbaren Wert oder durch eine allgemeine Beschreibung gestützt wird.",
            },
          },
          {
            label: { en: "Who verified the data?", de: "Wer hat die Daten geprüft?" },
            text: {
              en: "Confirm whether it is third-party verified or self-reported by the manufacturer.",
              de: "Klären Sie, ob sie von Dritten geprüft oder vom Hersteller selbst angegeben ist.",
            },
          },
          {
            label: { en: "Is the metric relevant?", de: "Ist die Kennzahl relevant?" },
            text: {
              en: "Check whether the figure actually supports this project's certification goals, rather than being highlighted simply because it is available.",
              de: "Prüfen Sie, ob der Wert die Zertifizierungsziele dieses Projekts tatsächlich unterstützt, statt nur hervorgehoben zu werden, weil er verfügbar ist.",
            },
          },
          {
            label: { en: "Is the data current?", de: "Sind die Daten aktuell?" },
            text: {
              en: "Make sure it is based on the present formulation, not an older formulation that may have changed.",
              de: "Stellen Sie sicher, dass sie auf der aktuellen Rezeptur beruhen und nicht auf einer älteren, die sich möglicherweise geändert hat.",
            },
          },
        ],
        paragraphsAfter: [
          {
            en: "A manufacturer building genuine measurement infrastructure — tracking recycled content, running LCA-based assessments, testing and reporting VOC emissions — should be able to answer these specifically. A manufacturer relying on descriptive language alone generally can't, and that gap is usually the clearest signal available.",
            de: "Ein Hersteller, der eine echte Messinfrastruktur aufbaut — Rezyklatanteil verfolgt, ökobilanzbasierte Bewertungen durchführt, VOC-Emissionen prüft und ausweist — sollte diese Fragen konkret beantworten können. Ein Hersteller, der sich allein auf beschreibende Sprache stützt, kann das in der Regel nicht, und diese Lücke ist meist das deutlichste verfügbare Signal.",
          },
        ],
      },
      {
        heading: {
          en: "The overlooked impact of site waste",
          de: "Die übersehene Wirkung von Baustellenabfall",
        },
        paragraphs: [
          {
            en: "Sustainability in construction chemicals isn't only a formulation question — it extends into how much material actually gets used as intended versus wasted on-site. Over-ordering due to poor coverage assumptions, or product failure due to incorrect application, both mean more material manufactured, transported, and ultimately discarded than the project actually needed. A product with a strong environmental profile on paper still carries a real environmental cost if a meaningful share ends up as site waste due to estimation error or application failure.",
            de: "Nachhaltigkeit in der Bauchemie ist nicht nur eine Frage der Rezeptur — sie reicht bis dahin, wie viel Material tatsächlich bestimmungsgemäß verwendet und wie viel auf der Baustelle verschwendet wird. Überbestellung aufgrund schlechter Verbrauchsannahmen oder Produktversagen aufgrund fehlerhafter Verarbeitung bedeuten beide, dass mehr Material hergestellt, transportiert und letztlich entsorgt wird, als das Projekt tatsächlich benötigt hat. Ein Produkt mit einem auf dem Papier starken Umweltprofil trägt dennoch reale Umweltkosten, wenn ein erheblicher Anteil aufgrund von Kalkulationsfehlern oder Verarbeitungsversagen als Baustellenabfall endet.",
          },
          {
            en: "This is why sustainability, accurate estimation tools, and application training are more connected than they might initially appear: reducing waste at the point of use is as much a part of a product's real-world environmental impact as the formulation itself.",
            de: "Deshalb hängen Nachhaltigkeit, präzise Mengenermittlungs-Tools und Verarbeitungsschulung enger zusammen, als es zunächst scheinen mag: Abfall am Einsatzort zu reduzieren ist ebenso Teil der realen Umweltwirkung eines Produkts wie die Rezeptur selbst.",
          },
        ],
      },
      {
        heading: {
          en: "The takeaway",
          de: "Das Fazit",
        },
        paragraphs: [
          {
            en: "Treat sustainability claims the way you'd treat a performance claim on any other property: ask for the underlying data, confirm whether it's independently verified, and check whether it's specific enough to actually inform a decision rather than simply reassure one. Measure what matters is a useful standard to hold any manufacturer to — including the one making the claim.",
            de: "Behandeln Sie Nachhaltigkeitsangaben so, wie Sie eine Leistungsangabe zu jeder anderen Eigenschaft behandeln würden: Fragen Sie nach den zugrunde liegenden Daten, klären Sie, ob sie unabhängig geprüft sind, und prüfen Sie, ob sie spezifisch genug sind, um eine Entscheidung tatsächlich zu untermauern, statt sie nur zu beruhigen. „Messen, worauf es ankommt“ ist ein nützlicher Maßstab, an dem sich jeder Hersteller messen lassen sollte — auch derjenige, der die Angabe macht.",
          },
        ],
      },
    ],
    action: {
      label: { en: "See Bondure's approach to sustainability", de: "Bondures Ansatz zur Nachhaltigkeit ansehen" },
      href: "/rd",
    },
  },
};

export const getServiceArticle = (slug) => serviceArticles[slug] || toolArticles[slug] || rdArticles[slug];
export const allArticleSlugs = () => [...Object.keys(serviceArticles), ...Object.keys(toolArticles), ...Object.keys(rdArticles)];