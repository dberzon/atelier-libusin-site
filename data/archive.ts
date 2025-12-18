export type ArchiveStatus = 'featured' | 'standard';
export type Discipline = 'Sound' | 'Light' | 'Land Art' | 'Digital' | 'Community' | 'Other';
export type EUGoal = 'Sustainability' | 'Innovation' | 'International Mobility' | 'Capacity Building' | 'Digital Innovation';

export interface ArchiveItem {
    id: string;
    year: number;
    title: string;
    partners?: string;
    eu_alignment?: EUGoal[];
    impact_summary?: string;
    media?: string[]; // Array of image paths
    status: ArchiveStatus;
    discipline: Discipline[];
    link?: string;
}

export const archiveItems: ArchiveItem[] = [
    // FEATURED CASE STUDIES
    {
        id: "2018-ars-electronica",
        year: 2018,
        title: "Digital Projections & International Mobility",
        partners: "OMAi (AT) / Ars Electronica",
        eu_alignment: ["Digital Innovation", "International Mobility"],
        impact_summary: "Incubated light-art techniques (Tagtool) in a 'Dark Sky' rural setting, later showcased at Ars Electronica. This project proved Libušín as a viable launchpad for global digital arts, connecting rural experimentation with major European cultural institutions.",
        media: ["/feature-ars.jpg"], // Placeholder path
        status: "featured",
        discipline: ["Light", "Digital"]
    },
    {
        id: "2018-omai-infra",
        year: 2018,
        title: "Digital Infrastructure & Capacity Building",
        partners: "OMAi (AT)",
        eu_alignment: ["Digital Innovation", "Capacity Building"],
        impact_summary: "Proves the facility can support complex, high-bandwidth digital art projects. The residency established the technical baseline for future digital media works at the atelier.",
        media: ["/feature-tagtool.jpg"], // Placeholder path
        status: "featured",
        discipline: ["Light", "Digital"]
    },
    {
        id: "2021-2023-land-art",
        year: 2021, // Representing range 2021-2023
        title: "Sustainable Practice & Summer Lab",
        partners: "Diverse Global Artists",
        eu_alignment: ["Sustainability", "Capacity Building"],
        impact_summary: "Shows long-term commitment to ecological art and rural 'Summer Lab' development. Integration of art production with local ecology (permaculture garden context).",
        media: [],
        status: "featured",
        discipline: ["Land Art", "Community"]
    },

    // STANDARD ITEMS (Timeline remap)
    {
        id: "2025-orpheus",
        year: 2025,
        title: "Orpheus & Eurydice — audiovisual work with Ewa Żurakowska",
        status: "standard",
        discipline: ["Sound", "Light", "Digital"],
        eu_alignment: ["Innovation"]
    },
    {
        id: "2024-friedland",
        year: 2024,
        title: "Light Painting at Friedland Castle — Kafka-inspired live projection",
        status: "standard",
        discipline: ["Light", "Digital"],
        eu_alignment: ["Digital Innovation"]
    },
    {
        id: "2024-concert-rec",
        year: 2024,
        title: "Orpheus & Eurydice concert recording",
        status: "standard",
        discipline: ["Sound"],
        link: "https://www.youtube.com/watch?v=gE34pcyBScU"
    },
    {
        id: "2024-governance",
        year: 2024,
        title: "Legal Transition to z.s. (Institutional Governance)",
        status: "standard",
        discipline: ["Community"],
        eu_alignment: ["Capacity Building"],
        impact_summary: "Official professionalization of the organization."
    },
    {
        id: "2023-tagtool-sessions",
        year: 2023,
        title: "Tagtool sessions with OMAi at the studio",
        status: "standard",
        discipline: ["Light", "Digital"],
        partners: "OMAi",
        link: "https://www.omai.at/posts/session-with-frances-sander-at-atelier-libusin"
    },
    {
        id: "2019-omai-week",
        year: 2019,
        title: "OMAi / Tagtool residency week",
        status: "standard",
        discipline: ["Light", "Digital"],
        partners: "OMAi",
        link: "https://www.omai.at/posts/artist-in-residency-at-atelier-libusin"
    },
    {
        id: "2017-omai-sphere",
        year: 2017,
        title: "OMAi artist week (Interactive Sphere)",
        status: "standard",
        discipline: ["Light", "Digital"],
        impact_summary: "Project later shown at Ars Electronica 2018."
    },
    {
        id: "2014-lunchmeat",
        year: 2014,
        title: "Participation at Lunchmeat Festival (Prague)",
        status: "standard",
        discipline: ["Digital", "Light"]
    },
    {
        id: "2010-filmfest",
        year: 2010,
        title: "Libušín Art & Film Festival hosted at the atelier",
        status: "standard",
        discipline: ["Community", "Other"],
        link: "https://fmera.org/design/libusinfilmfest/index.html"
    },
    {
        id: "2008-passing-through",
        year: 2008,
        title: "Short film 'Passing Through' (IFFR selection)",
        status: "standard",
        discipline: ["Digital", "Other"],
        link: "https://iffr.com/en/iffr/2008/films/passing-through"
    },
    {
        id: "2003-forest",
        year: 2003,
        title: "Artists in the Forest — Lapak Forest Park, Kladno",
        status: "standard",
        discipline: ["Land Art", "Community"]
    },
    {
        id: "2002-mayrau",
        year: 2002,
        title: "Drawings for Mayrau — works responding to the mining museum",
        status: "standard",
        discipline: ["Other"]
    }
];
