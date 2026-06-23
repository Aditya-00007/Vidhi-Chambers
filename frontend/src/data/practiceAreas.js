import crl from "../assets/CRIMINAL-LITIGATION-1.png";
import cvl from "../assets/civil-law.png";
import mat from "../assets/MATRIMONIAL-LITIGATION.png";
import nri from "../assets/NRI_LEGAL_SERVICES.png";
import corp from "../assets/CORPORATE.png";
import intl from "../assets/INTELLECTUAL-PROPERTY-RIGHTS.png";
import res from "../assets/REAL-ESTATE.png";
import arbt from "../assets/ARBITRATION_AND_MEDIATION.png";

export const practiceAreas = [
  {
    id: 1,
    slug: "criminal-litigation",

    title: "Criminal Litigation",

    category: "Litigation",

    image: crl,

    shortDescription:
      "Strategic legal representation in criminal investigations, trials, bail matters, and appellate proceedings.",

    overview:
      "Our Criminal Litigation team provides comprehensive legal assistance in criminal matters ranging from bail applications and trial representation to appeals and revisions. We focus on protecting the rights of individuals and organizations while ensuring effective courtroom advocacy.",

    services: [
      "Anticipatory & Regular Bail",
      "Criminal Trials",
      "Appeals & Revisions",
      "White Collar Crime Defence",
      "Cheque Bounce Cases",
      "Cyber Crime Matters",
      "Economic Offences",
      "Police Complaint Assistance",
    ],

    whoWeAssist: [
      "Individuals",
      "Business Owners",
      "Corporate Executives",
      "NRIs",
    ],

    icon: "Scale",

    featured: true,
  },

  {
    id: 2,
    slug: "civil-litigation",

    title: "Civil Litigation",

    category: "Litigation",

    image: cvl,

    shortDescription:
      "Representation in property, contract, recovery, and injunction disputes.",

    overview:
      "We represent clients in a wide range of civil disputes including contractual disagreements, property conflicts, recovery proceedings, and injunction matters before courts and tribunals.",

    services: [
      "Property Disputes",
      "Recovery Suits",
      "Injunction Proceedings",
      "Contractual Disputes",
      "Specific Performance Matters",
      "Consumer Litigation",
    ],

    whoWeAssist: ["Individuals", "Families", "Companies", "Developers"],

    icon: "Briefcase",

    featured: true,
  },

  {
    id: 3,
    slug: "matrimonial-law",

    title: "Matrimonial Law",

    category: "Family Law",

    image: mat,

    shortDescription:
      "Sensitive and practical legal support for family and matrimonial disputes.",

    overview:
      "We provide compassionate yet strategic legal guidance in matrimonial and family law matters including divorce, maintenance, custody, and domestic violence proceedings.",

    services: [
      "Mutual Consent Divorce",
      "Contested Divorce",
      "Child Custody",
      "Maintenance & Alimony",
      "Domestic Violence Cases",
      "Family Settlements",
    ],

    whoWeAssist: ["Husbands", "Wives", "Families", "NRIs"],

    icon: "Scale",

    featured: false,
  },

  {
    id: 4,
    slug: "arbitration-and-mediation",

    title: "Arbitration & Mediation",

    category: "Alternative Dispute Resolution",

    image: arbt,

    shortDescription:
      "Efficient dispute resolution outside traditional court proceedings.",

    overview:
      "Our ADR practice assists clients in resolving disputes through arbitration and mediation, offering cost-effective and time-efficient alternatives to litigation.",

    services: [
      "Domestic Arbitration",
      "Commercial Arbitration",
      "Mediation Proceedings",
      "Settlement Negotiations",
      "Award Enforcement",
    ],

    whoWeAssist: ["Businesses", "Startups", "Contractors", "Individuals"],

    icon: "Briefcase",

    featured: false,
  },

  {
    id: 5,
    slug: "nri-legal-services",

    title: "NRI Legal Services",

    category: "NRI Services",

    image: nri,

    shortDescription:
      "Comprehensive legal assistance for Non-Resident Indians across India.",

    overview:
      "We assist NRIs with property disputes, documentation, family matters, and court representation without requiring frequent travel to India.",

    services: [
      "Property Verification",
      "Power of Attorney",
      "Inheritance Matters",
      "Property Disputes",
      "Document Registration",
      "Court Representation",
    ],

    whoWeAssist: ["NRIs", "OCI Holders", "Foreign Citizens of Indian Origin"],

    icon: "Briefcase",

    featured: true,
  },

  {
    id: 6,
    slug: "real-estate",

    title: "Real Estate",

    category: "Property Law",

    image: res,

    shortDescription:
      "Legal solutions for property transactions, disputes, and compliance.",

    overview:
      "Our real estate practice advises clients on acquisitions, title verification, development projects, registrations, and dispute resolution.",

    services: [
      "Title Verification",
      "Property Due Diligence",
      "Sale Deeds",
      "Lease Agreements",
      "RERA Matters",
      "Property Litigation",
    ],

    whoWeAssist: ["Property Buyers", "Developers", "Investors", "NRIs"],

    icon: "Briefcase",

    featured: false,
  },

  {
    id: 7,
    slug: "corporate-law",

    title: "Corporate Law",

    category: "Corporate Advisory",

    image: corp,

    shortDescription:
      "Legal advisory and compliance support for businesses and startups.",

    overview:
      "We provide strategic legal counsel on company formation, governance, contracts, regulatory compliance, and commercial transactions.",

    services: [
      "Company Incorporation",
      "Shareholder Agreements",
      "Contract Drafting",
      "Compliance Advisory",
      "Due Diligence",
      "Startup Legal Support",
    ],

    whoWeAssist: ["Startups", "SMEs", "Corporations", "Investors"],

    icon: "Briefcase",

    featured: true,
  },

  {
    id: 8,
    slug: "intellectual-property",

    title: "Intellectual Property",

    category: "IP Law",

    image: intl,

    shortDescription:
      "Protection and enforcement of intellectual property rights.",

    overview:
      "We help businesses and creators secure, manage, and enforce their intellectual property rights through registrations and litigation support.",

    services: [
      "Trademark Registration",
      "Copyright Protection",
      "Patent Advisory",
      "IP Licensing",
      "Brand Protection",
      "IP Litigation",
    ],

    whoWeAssist: ["Startups", "Creators", "Businesses", "Technology Companies"],

    icon: "Briefcase",

    featured: true,
  },
];

export default practiceAreas;
