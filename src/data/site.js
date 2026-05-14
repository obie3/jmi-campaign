// Central content for the campaign website.
export const candidate = {
  name: 'Dr. JohnMary Ochigbo Idoko',
  shortName: 'Dr. JohnMary',
  initials: 'JI',
  office: 'House of Representatives',
  constituency: 'Ado / Okpokwu / Ogbadibo Federal Constituency',
  constituencyShort: 'Ado · Okpokwu · Ogbadibo',
  state: 'Benue State',
  party: 'All Progressives Congress (APC)',
  slogan: "Ella L'Eko",
  sloganYear: '2027',
  sloganMeaning: 'It Is Our Time',
  sloganLanguage: 'Idoma',
  identity: 'The People’s Voice',
  ballotPosition: 'APC · Broom Symbol',
  electionDate: 'February 2027',
  campaignEmail: 'campaign@ellaleko2027.ng',
  campaignPhone: '+234 800 000 0000',
  whatsapp: '2348000000000',
  hq: 'Campaign HQ, Okpoga, Benue State',
  socials: {
    twitter: 'https://x.com/ellaleko2027',
    facebook: 'https://facebook.com/ellaleko2027',
    instagram: 'https://instagram.com/ellaleko2027',
    youtube: 'https://youtube.com/@ellaleko2027'
  },
  volunteerEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',
  supportUrl: 'https://bit.ly/EllaLEko2027'
}

export const aboutBadges = [
  { title: 'Banker',     body: 'Rose to Regional Manager at UBA — a career built on discipline, integrity and results.' },
  { title: 'Scholar',    body: 'PhD holder who brings rigorous, evidence-based thinking to public policy.' },
  { title: 'Servant',    body: 'Son of Okpoga, Okpokwu LGA — rooted in the community he seeks to represent.' },
  { title: 'Bridge',     body: 'Connects finance, governance and grassroots development across the three LGAs.' }
]

// The mandate: 3 narrative pillars (mirrors "Rebuilding Trust / Reviving Productivity / Reclaiming Pride")
export const mandate = [
  {
    title: 'Restoring Voice',
    body: 'Bringing Benue South back to the federal conversation — with a representative who shows up, speaks up and follows through. Constituency Liaison Offices in each LGA, monthly town halls, and quarterly public scorecards.'
  },
  {
    title: 'Renewing Prosperity',
    body: 'Jobs, enterprise and agriculture for our people — a Skills & Innovation Hub, a Youth Enterprise Fund, and federal partnerships that turn our cassava, yam and rice into real income for our farmers.'
  },
  {
    title: 'Reclaiming Dignity',
    body: 'Healthcare, education and infrastructure that treat our people with the respect they deserve. A functional PHC in every ward, scholarships for indigent students, and roads, water and power that work.'
  }
]

export const pillars = [
  {
    id: 'jobs',
    icon: 'briefcase',
    title: 'Jobs, Enterprise & Youth',
    summary:
      'A constituency where every young person has a clear path to dignified work — through skills, capital and access to markets.',
    promises: [
      'Establish a Benue South Skills & Innovation Hub with free training in tech, agribusiness and trades.',
      'A Youth Enterprise Fund seeding micro-grants for 1,000 small businesses in our first two years.',
      'Partnerships with NDE, ITF and private employers to place 5,000 graduates in paid apprenticeships.',
      'Federal legislation that protects gig, platform and informal workers across Nigeria.'
    ]
  },
  {
    id: 'education',
    icon: 'book',
    title: 'Education for Every Child',
    summary:
      'Every child in Ado, Okpokwu and Ogbadibo deserves a safe classroom, a trained teacher and a real shot at the future.',
    promises: [
      'Rehabilitate 50 dilapidated primary and secondary schools across the three LGAs.',
      "Annual Ella L'Eko Scholarship covering tuition for 500 indigent students every year.",
      'Teacher Excellence Awards and welfare top-ups for the 100 best teachers in the constituency.',
      'Free coding, STEM and Idoma-language enrichment programs in 20 model schools.'
    ]
  },
  {
    id: 'health',
    icon: 'heart',
    title: 'Healthcare that Reaches',
    summary:
      'No mother should die in childbirth because the clinic is too far. No child should suffer because medicine is too expensive.',
    promises: [
      'Equip and staff one functional Primary Health Centre in every ward — 37 PHCs in four years.',
      'Sponsor 20,000 vulnerable residents into the NHIA health insurance scheme.',
      'Quarterly free outreach: maternal care, eye care, and non-communicable disease screening.',
      'A constituency ambulance network — GPS-tracked, 24/7, one per LGA at minimum.'
    ]
  },
  {
    id: 'infrastructure',
    icon: 'road',
    title: 'Roads, Power & Water',
    summary:
      'Hard infrastructure is the floor on which prosperity is built. We will fix it — ward by ward, road by road.',
    promises: [
      'Oversight push for the rehabilitation of the Otukpo–Ugbokolo–Ogbadibo road corridor.',
      'Solar mini-grids and street lights in 30 off-grid communities through the REA.',
      'Boreholes and motorised water schemes in every ward — clean water within walking distance.',
      'Open constituency projects portal: budgets, contractors and timelines published online.'
    ]
  }
]

// Gallery: placeholder tiles. Drop real photos into /public/gallery/ and reference by filename.
export const gallery = [
  { caption: 'Grassroots Mobilization', tone: 'green', big: true },
  { caption: 'Town Hall — Okpoga',        tone: 'gold' },
  { caption: 'Ward Walk — Okpokwu',      tone: 'green' },
  { caption: 'Women & Trade Roundtable', tone: 'cream' },
  { caption: 'Medical Outreach — Ogbadibo', tone: 'green' },
  { caption: 'Youth Skills Hub Launch',  tone: 'gold' },
  { caption: 'APC Stakeholders Forum',   tone: 'green' },
  { caption: 'Idoma Cultural Day',       tone: 'cream' }
]

export const news = [
  {
    date: '2026-05-04',
    category: 'Press Release',
    tone: 'green',
    title: 'Dr. JohnMary Idoko unveils four-pillar plan for Benue South',
    excerpt: 'Speaking at the APC secretariat in Okpoga, the candidate laid out a four-pillar plan covering jobs, education, healthcare and infrastructure.',
    body: `At a packed gathering at the APC secretariat in Okpoga, Dr. JohnMary Ochigbo Idoko formally unveiled his four-pillar legislative agenda for the Ado / Okpokwu / Ogbadibo Federal Constituency.\n\nThe plan — anchored on Jobs & Enterprise, Education for Every Child, Healthcare that Reaches, and Roads, Power & Water — was developed after eight weeks of listening sessions across all 37 wards in the constituency.\n\n"I have walked these roads. I have sat in these classrooms. I have seen the clinics with empty shelves. This plan is not written in Abuja — it is written by the voices of our people," Dr. Idoko told the crowd.\n\nKey among the commitments is a Benue South Skills & Innovation Hub to train 5,000 young people annually, and a Youth Enterprise Fund seeding micro-grants for 1,000 small businesses in the first two years.\n\nThe candidate also pledged full transparency through an open constituency projects portal where every budget, contractor and timeline will be published online.`
  },
  {
    date: '2026-04-18',
    category: 'Community',
    tone: 'gold',
    title: "500 students benefit from Ella L'Eko Scholarship pilot",
    excerpt: "Tuition and exam fees were covered for 500 indigent students across the three LGAs in the constituency pilot.",
    body: `In a landmark demonstration of his campaign's commitment to education, Dr. JohnMary Idoko's team covered tuition and examination fees for 500 indigent students across Ado, Okpokwu and Ogbadibo LGAs.\n\nThe pilot — named the Ella L'Eko Scholarship — targeted final-year secondary school students whose families could not afford WAEC and NECO registration fees, as well as first-year university students from the constituency.\n\nBeneficiaries were selected through ward-level committees in partnership with school principals and community leaders, ensuring transparency and fairness in the process.\n\n"Education is not a luxury. Every child in this constituency deserves a chance, regardless of what their parents can afford," said Dr. Idoko at the distribution event in Ugbokolo.\n\nIf elected, the full scholarship programme will cover 500 students annually, funded through the constituency's capital project allocation and federal education intervention funds.`
  },
  {
    date: '2026-03-29',
    category: 'On the Trail',
    tone: 'green',
    title: 'Listening tour reaches all 37 wards',
    excerpt: 'After eight weeks on the road, the campaign has now held listening sessions in every ward across Ado, Okpokwu and Ogbadibo.',
    body: `After eight weeks and thousands of kilometres on the roads of Benue South, the Ella L'Eko campaign completed its historic listening tour — holding community sessions in all 37 wards across Ado, Okpokwu and Ogbadibo LGAs.\n\nThe sessions, which drew farmers, traders, teachers, youth groups, women's cooperatives and traditional rulers, produced a detailed constituency needs assessment that directly shaped Dr. Idoko's four-pillar legislative agenda.\n\nTop concerns raised by residents included the poor state of rural roads, lack of functional primary health centres, unemployment among graduates, and the need for a reliable federal representative who attends National Assembly sessions and files bills that benefit the constituency.\n\n"In some wards, no federal representative had visited in four years. We changed that. And when I get to Abuja, I will change it permanently — with quarterly town halls and monthly constituency offices that are actually open," said Dr. Idoko.\n\nThe campaign will publish a full Ward Needs Report before the 2027 elections.`
  },
  {
    date: '2026-03-10',
    category: 'Policy',
    tone: 'gold',
    title: 'Campaign releases detailed healthcare blueprint for the constituency',
    excerpt: 'A functional Primary Health Centre in every ward — 37 PHCs fully equipped and staffed within four years. That is the commitment.',
    body: `The Ella L'Eko campaign has released a detailed healthcare blueprint outlining plans to transform primary healthcare delivery across the Ado / Okpokwu / Ogbadibo Federal Constituency.\n\nThe centrepiece of the plan is a commitment to equip and staff one functional Primary Health Centre (PHC) in every ward — 37 PHCs across the three LGAs — within the first four years in office.\n\nThe blueprint also includes: sponsoring 20,000 vulnerable residents into the NHIA health insurance scheme; quarterly free medical outreach covering maternal care, eye care and non-communicable disease screening; and a constituency ambulance network with at least one GPS-tracked vehicle per LGA available 24 hours a day.\n\n"As a PhD scholar who has studied health systems, I know that the data is damning. Maternal mortality in our constituency is preventable. Child deaths from treatable conditions are preventable. We will fix this through the federal budget — because that is what a representative is there to do," said Dr. Idoko.`
  },
  {
    date: '2026-02-20',
    category: 'Youth',
    tone: 'green',
    title: 'Over 2,000 young people attend Okpokwu youth summit',
    excerpt: 'The constituency youth summit brought together students, entrepreneurs and job-seekers for a frank conversation on the future of Benue South.',
    body: `More than 2,000 young people from across Okpokwu, Ado and Ogbadibo converged on Ugbokolo for the Ella L'Eko Youth Summit — the largest political youth engagement event in the constituency in recent memory.\n\nPanels covered skills acquisition, federal job creation programmes, the NDE and ITF apprenticeship schemes, and the campaign's proposed Benue South Skills & Innovation Hub.\n\nDr. Idoko, who spent over three hours in direct Q&A with attendees, challenged young people to hold every elected representative accountable: "Do not vote for a face. Vote for a plan. And when the plan is not delivered, return to the streets and demand answers."\n\nThe summit produced a Youth Charter — a set of ten demands from Benue South youth to their next federal representative — which the campaign has formally adopted as part of its manifesto.\n\nRegistrations for the youth volunteer network grew by 800 sign-ups on the day of the event.`
  },
  {
    date: '2026-02-05',
    category: 'Infrastructure',
    tone: 'gold',
    title: 'Campaign flags dangerous state of Ogbadibo road network',
    excerpt: 'A report submitted to the Federal Roads Maintenance Agency highlights five critical road corridors in urgent need of rehabilitation.',
    body: `The Ella L'Eko campaign has formally submitted a constituency infrastructure dossier to the Federal Roads Maintenance Agency (FERMA) and the Ministry of Works, documenting the dangerous state of five critical road corridors in Ogbadibo and Ado LGAs.\n\nThe dossier — compiled with photographic evidence from ward-level field teams — highlights collapsed bridges, erosion-damaged surfaces and communities cut off for months during the rainy season.\n\n"Roads are not cosmetic. When a road collapses, a farmer cannot take his yams to market. A pregnant woman cannot reach the clinic. A child cannot get to school. This is a federal responsibility and I will not rest in Abuja until these roads are fixed," said Dr. Idoko.\n\nThe campaign has also pledged an oversight push for the rehabilitation of the Otukpo–Ugbokolo–Ogbadibo road corridor, which has been allocated federal funds three times in the past decade without completion.\n\nA public infrastructure tracker will be launched on the campaign website showing the status of each project commitment.`
  }
]

export const events = [
  { date: '2026-05-22', title: 'Town Hall — Youth, Skills & Jobs', location: 'Okpoga Civic Centre',         tag: 'Town Hall',     description: 'An open conversation with young people across Ado, Okpokwu and Ogbadibo on jobs and the Skills Hub.' },
  { date: '2026-06-05', title: 'Ward Walk — Okpokwu LGA',          location: 'Ugbokolo Market Square',       tag: 'Door-to-door',  description: 'Walking the wards of Okpokwu — markets, schools and clinics — listening directly to constituents.' },
  { date: '2026-06-18', title: 'Women & Trade Roundtable',         location: 'Chamber of Commerce, Okpoga', tag: 'Roundtable',    description: 'Market women, cooperatives and SME owners on access to capital, land and federal trade policy.' },
  { date: '2026-07-02', title: 'Free Medical Outreach',            location: 'Ogbadibo LGA Primary Health Centre', tag: 'Outreach', description: 'Free consultations, eye care, maternal screening and BP/diabetes testing for 1,000 residents.' }
]

// Anchor-style nav (single-page scroll, mirrors andrewabu.ng)
export const navLinks = [
  { href: '/#home',     label: 'Home' },
  { href: '/#about',    label: 'About' },
  { href: '/#mandate',  label: 'The Mandate' },
  { href: '/#policy',   label: 'Policy' },
  { href: '/#gallery',  label: 'Gallery' },
  { href: '/#social',   label: 'Feed' },
  { href: '/#updates',  label: 'Updates' },
  { href: '/#join',     label: 'Join Us' }
]
