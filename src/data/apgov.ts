
export interface Document {
  id: string;
  name: string;
  year?: string;
  author?: string;
  summary: string;
  parts?: string[];
  quotes?: { quote: string; explanation: string }[];
}

export interface Case {
  id: string;
  name: string;
  year: string;
  situation: string;
  question: string;
  opinion: string;
  significance: string;
  constitution?: string[];
}

export interface UnitContent {
  id: string;
  title: string;
  topics: {
    title: string;
    content: string;
    deepDive?: string;
  }[];
}

export interface QuizQuestion {
  id: string;
  category: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Amendment {
  number: string;
  title: string;
  summary: string;
  year: string;
}

export interface FRQRule {
  id: string;
  title: string;
  steps: {
    label: string;
    description: string;
    points?: string;
    examples?: string[];
  }[];
}

export const examInfo = {
  date: "May 5, 2026",
  sections: [
    {
      name: "Section I: Multiple Choice",
      format: "55 questions | 80 minutes | 50% of score",
      details: "Individual questions and sets based on scenarios, charts, or maps."
    },
    {
      name: "Section II: Free Response",
      format: "4 questions | 100 minutes | 50% of score",
      details: "Includes: Concept Application, Quantitative Analysis, SCOTUS Comparison, and Argumentative Essay."
    }
  ]
};

export const amendments: Amendment[] = [
  { number: "1", title: "Freedom of Religion, Speech, Press, Assembly, and Petition", year: "1791", summary: "Protects basic individual liberties and the right to criticize the government." },
  { number: "2", title: "Right to Bear Arms", year: "1791", summary: "The right of the people to keep and bear arms shall not be infringed." },
  { number: "3", title: "Quartering of Soldiers", year: "1791", summary: "Prohibits the government from forcing citizens to house soldiers in their homes during peacetime." },
  { number: "4", title: "Search and Seizure", year: "1791", summary: "Protects against unreasonable searches and seizures; requires probable cause for warrants." },
  { number: "5", title: "Grand Jury, Double Jeopardy, Self-Incrimination, Due Process", year: "1791", summary: "Protects the rights of the accused; includes the 'Takings Clause' (eminent domain)." },
  { number: "6", title: "Right to a Speedy Trial by Jury, Counsel", year: "1791", summary: "Ensures fair trial procedures for criminal defendants." },
  { number: "7", title: "Jury Trial in Civil Lawsuits", year: "1791", summary: "Guarantees a jury trial in civil cases where the value exceeds $20." },
  { number: "8", title: "Excessive Bail, Cruel and Unusual Punishment", year: "1791", summary: "Prohibits excessive bail and fines, and cruel or unusual punishments." },
  { number: "9", title: "Non-Enumerated Rights", year: "1791", summary: "The listing of certain rights doesn't mean other rights held by the people don't exist." },
  { number: "10", title: "Rights Reserved to States or People", year: "1791", summary: "Powers not delegated to the federal government belong to the states or the people (Federalism)." },
  { number: "11", title: "Suits Against States", year: "1795", summary: "Restricts the ability of individuals to sue states in federal court." },
  { number: "12", title: "Election of President and Vice President", year: "1804", summary: "Created separate ballots for President and VP to avoid ties (Result of 1800 election)." },
  { number: "13", title: "Abolition of Slavery", year: "1865", summary: "Abolished slavery and involuntary servitude except as punishment for a crime." },
  { number: "14", title: "Citizenship, Due Process, Equal Protection", year: "1868", summary: "Key for selective incorporation; defines citizenship and guarantees equal protection." },
  { number: "15", title: "Right to Vote Not Abridged by Race", year: "1870", summary: "Suffrage for African American men." },
  { number: "16", title: "Income Tax", year: "1913", summary: "Gave Congress the power to levy an individual income tax." },
  { number: "17", title: "Popular Election of Senators", year: "1913", summary: "Senators are now elected directly by the people instead of state legislatures." },
  { number: "18", title: "Prohibition of Liquor", year: "1919", summary: "Banned the manufacture, sale, or transportation of intoxicating liquors." },
  { number: "19", title: "Women's Suffrage", year: "1920", summary: "Guaranteed women the right to vote." },
  { number: "20", title: "Lame Duck Period", year: "1933", summary: "Shortened the time between election and inauguration (Moved to Jan 20)." },
  { number: "21", title: "Repeal of Prohibition", year: "1933", summary: "Repealed the 18th Amendment." },
  { number: "22", title: "Presidential Term Limits", year: "1951", summary: "Limited presidents to two elected terms in office (Post-FDR)." },
  { number: "23", title: "Electoral Votes for DC", year: "1961", summary: "Gave residents of Washington D.C. the right to vote in presidential elections." },
  { number: "24", title: "Abolition of Poll Taxes", year: "1964", summary: "Prohibited the use of poll taxes in federal elections." },
  { number: "25", title: "Presidential Disability and Succession", year: "1967", summary: "Clarified the process for replacing a President or Vice President." },
  { number: "26", title: "Right to Vote at Age 18", year: "1971", summary: "Lowered the voting age from 21 to 18 (Result of Vietnam War)." },
  { number: "27", title: "Congressional Pay Increases", year: "1992", summary: "Changes to congressional pay don't take effect until the next session." }
];

export const frqRules: FRQRule[] = [
  {
    id: "frq1",
    title: "FRQ 1: Concept Application",
    steps: [
      { label: "Part A (0-1 pt)", description: "Describe a political institution, behavior, or process connected with the scenario (e.g., committee hearing, lobbying, oversight)." },
      { label: "Part B (0-1 pt)", description: "Explain how the response in part (A) affects or is affected by a political process, government entity, or citizen behavior." },
      { label: "Part C (0-1 pt)", description: "Explain how the scenario relates to a political institution, behavior, or process in the course." }
    ]
  },
  {
    id: "frq2",
    title: "FRQ 2: Quantitative Analysis",
    steps: [
      { label: "Identify Data", description: "Identify or describe the data in the visual (1 complete sentence).", points: "1" },
      { label: "Describe Pattern", description: "Describe a pattern, trend, or similarity/difference as prompted (2-3 sentences).", points: "1" },
      { label: "Draw Conclusion", description: "Draw a conclusion for that trend or pattern (2-3 sentences).", points: "1" },
      { label: "Demonstrate Principle", description: "Explain how specific data demonstrates a course principle (~5 sentences).", points: "1" }
    ]
  },
  {
    id: "frq3",
    title: "FRQ 3: SCOTUS Comparison",
    steps: [
      { label: "Identify Commonality", description: "Identify the Area of Constitution (rights/protection) both cases have in common. Rewrite the prompt including this commonality.", points: "1" },
      { label: "Explain Holdings", description: "Combine both cases into one paragraph. Start with the required case holding/reasoning, then follow with the non-required case.", points: "2" },
      { label: "Describe Impact", description: "Relate the non-required case to future actions or course concepts.", points: "1" }
    ]
  },
  {
    id: "frq4",
    title: "FRQ 4: Argumentative Essay",
    steps: [
      { label: "Step 1: Topic", description: "Identify what the question is about." },
      { label: "Step 2: Claim/Thesis", description: "Write a defensible claim using a 'because' statement.", points: "1" },
      { label: "Step 3: Evidence #1", description: "Use a foundational document to support your claim with reasoning.", points: "1-3" },
      { label: "Step 4: Evidence #2", description: "Use another piece of evidence (foundational doc or course concept).", points: "1" },
      { label: "Step 5: Counter Claim", description: "Identify an alternative view and refute or rebut it.", points: "1" }
    ]
  }
];

export const mockQuizzes: QuizQuestion[] = [
  {
    id: "q1",
    category: "Unit 1",
    question: "Which of the following documents argued that a large republic would best control the 'mischiefs of faction'?",
    options: ["Brutus No. 1", "Federalist No. 10", "Articles of Confederation", "Declaration of Independence"],
    correctAnswer: 1,
    explanation: "In Federalist No. 10, James Madison argues that factions are natural but can be mitigated in a large republic where many competing interests prevent a single group from dominating."
  },
  {
    id: "q2",
    category: "Unit 2",
    question: "Which Supreme Court case established the principle of judicial review?",
    options: ["McCulloch v. Maryland", "U.S. v. Lopez", "Marbury v. Madison", "Baker v. Carr"],
    correctAnswer: 2,
    explanation: "Marbury v. Madison (1803) established the power of the federal courts to declare laws and executive actions unconstitutional."
  },
  {
    id: "q3",
    category: "Amendments",
    question: "Which amendment was primarily used to selectively incorporate the Bill of Rights to state governments?",
    options: ["10th Amendment", "14th Amendment", "5th Amendment", "1th Amendment"],
    correctAnswer: 1,
    explanation: "The 14th Amendment's Due Process clause is the primary mechanism through which the Supreme Court has applied most Bill of Rights protections to the states."
  }
];

export const units: UnitContent[] = [
  {
    id: "1",
    title: "Foundation of American Democracy",
    topics: [
      {
        title: "The State",
        content: "4 characteristics: Population, Borders, Sovereignty, Government. Theories of development include Divine Right, Evolutionary (family-based), Force, and Social Contract (agreement among people).",
        deepDive: "Sovereignty is the most critical element—it means the state has supreme and absolute power within its own territory. The Social Contract theory, popularized by intellectuals like Locke and Rousseau, is the cornerstone of American democracy, asserting that government legitimacy comes from an agreement among the governed to protect their natural rights."
      },
      {
        title: "Types & Systems of Government",
        content: "Types: Autocracy (one), Oligarchy (few), Democracy (the people - direct or republic). Systems: Unitary (centralized), Federal (shared), Confederacy (member states hold primary power).",
        deepDive: "A Federal system, like the US, divides power between a central government and regional governments (states). This differs from a Unitary system (like France) where the central government is supreme, or a Confederacy (like the early US Articles of Confederation) where states retain most power and the central government is weak."
      },
      {
        title: "Early Influences",
        content: "Greeks (direct democracy), Romans (Republic), Magna Carta (limited government), Parliament (representative), English Bill of Rights. Enlightenment thinkers: Hobbes (absolute rule for order), Locke (consent of governed, natural rights), Rousseau (voluntary social contract, majority rule), Montesquieu (separation of powers, checks and balances).",
        deepDive: "John Locke's 'Second Treatise of Civil Government' heavily influenced Thomas Jefferson. Locke argued that if a government fails to protect natural rights (life, liberty, property), the people have a right to overthrow it. Baron de Montesquieu's 'The Spirit of the Laws' provided the blueprint for the US system of checks and balances to prevent any one branch from becoming tyrannical."
      },
      {
        title: "Revolution & Articles of Confederation",
        content: "Path to Constitution: French-Indian War debt led to taxes, colonial rebellion. The AOC created a league of friendship with supreme states and a weak national government. Weaknesses: no national taxing power, no executive/judicial branches, required 13/13 to amend. Shay's Rebellion highlighted the need for a stronger national government."
      },
      {
        title: "Constitutional Convention",
        content: "55 delegates in Philadelphia. Plans: Virginia (large state, bicameral by pop), New Jersey (small state, unicameral, equal rep). The Great Compromise (Connecticut) created a bicameral legislature: House (pop) and Senate (equal). Other compromises: 3/5ths (slaves for representation), Importation (slave trade not banned until 1808), Electoral College."
      }
    ]
  },
  {
    id: "2",
    title: "US Constitution, Civil Liberties & Federalism",
    topics: [
      {
        title: "Principles of the Constitution",
        content: "Popular sovereignty, Limited government, Judicial review, Federalism, Separation of powers, Checks & balances."
      },
      {
        title: "Separation of Powers & Checks and Balances",
        content: "Congress (makes laws, budget), President (enforces laws, military), Courts (interprets laws). Each has specific checks (e.g., Congress can impeach or override vetoes; President can veto or appoint judges; Courts use Judicial Review).",
        deepDive: "Madison argued in Federalist 51 that 'Ambition must be made to counteract ambition.' Because humans aren't angels, the system is designed to pit branches against each other to prevent tyranny."
      },
      {
        title: "The Bill of Rights & Amendments",
        content: "1st: Speech, Press, Religion, Petition, Assembly. 2nd: Arms. 4th: Search/Seizure. 5th: Due Process, Self-incrimination. 6th: Fair trial. 8th: No cruel/unusual punishment. 9th: Unenumerated rights. 10th: Reserved powers to states. 14th: Citizenship, Due Process (incorporation), Equal Protection.",
        deepDive: "The 14th Amendment's Due Process clause is essential for 'selective incorporation'—the process by which the Supreme Court applies the Bill of Rights to the states case by case."
      },
      {
        title: "Federalism & Grants",
        content: "Dual (layer cake) vs Cooperative (marble cake) Federalism. Fiscal Federalism via grants: Categorical (strict, project or formula) and Block (flexible). Devolution: giving power back to the states (common in 1970s-2000s).",
        deepDive: "The Supremacy Clause ensures federal law prevails in conflicts, while the 10th Amendment protects state sovereignty. McCulloch v. Maryland expanded federal power through the necessary and proper clause, whereas U.S. v. Lopez rolled back federal power using the Commerce Clause."
      }
    ]
  },
  {
    id: "3",
    title: "US Congress",
    topics: [
      {
        title: "Structure & Qualifications",
        content: "House: 435 members, 2-year terms, min age 25, 7yr citizen. Senate: 100 members, 6-year staggered terms, min age 30, 9yr citizen.",
        deepDive: "Bicameralism resulted from the Connecticut Compromise and serves as an intra-branch check. The House is closer to the people (cup) with high turnover, while the Senate is more insulated and deliberative (saucer)."
      },
      {
        title: "Powers of Congress",
        content: "Expressed/Enumerated (tax, coin money, declare war, regulate commerce). Implied (Elastic clause). Checks on other branches: oversight, impeachment, refusing appointments."
      },
      {
        title: "House vs Senate Rules",
        content: "House: Centralized, strict rules, House Rules Committee (open/closed rules), 5 min debates. Revenue bills start here. Senate: Less centralized, unlimited debate (filibuster), cloture (60 votes to end debate)."
      },
      {
        title: "Redistricting & Gerrymandering",
        content: "Census every 10 years -> Reapportionment -> State legislatures redraw districts. Gerrymandering (packing, cracking, stacking) protects incumbents. Baker v Carr (one person one vote), Shaw v Reno (no strict racial gerrymandering)."
      },
      {
        title: "Committees & Lawmaking",
        content: "Committees (Standing, Select, Joint, Conference) do the bulk of Congressional work. A bill must pass both chambers in identical form before reaching the President."
      },
      {
        title: "The Federal Budget & Fiscal Policy",
        content: "Fiscal policy uses taxing and spending to manage the economy. Spending is split into Mandatory (entitlements, ~2/3) and Discretionary (appropriations). Deficit is annual overspending; National Debt is the total accumulation."
      }
    ]
  },
  {
    id: "4",
    title: "Executive Branch & Bureaucracy",
    topics: [
      {
        title: "Roles of the President",
        content: "Chief of State, Chief Executive (appoints officials, executive orders), Chief Legislator (State of the Union, vetoes), Chief Diplomat (treaties, exec agreements), Commander in Chief, Party Chief."
      },
      {
        title: "Informal Powers & Imperial Presidency",
        content: "The presidency has grown stronger over time due to crises, media, and foreign policy demands. Informal powers include executive orders, executive agreements, executive privilege, and signing statements."
      },
      {
        title: "Checks on the President",
        content: "Congress can override a veto (2/3), run investigations (oversight), impeach, reject appointments, or refuse treaties (Senate 2/3). The War Powers Act tries to limit troop deployments to 60 days without Congressional approval."
      },
      {
        title: "The Federal Bureaucracy",
        content: "Agencies that carry out the government's work. Includes Cabinet Departments, Independent Executive Agencies (NASA), Regulatory Commissions (FCC, FEC), and Government Corporations (AMTRAK).",
        deepDive: "Originally relying on patronage (spoils system), the assassination of Garfield led to the Pendleton Act, shifting the bureaucracy to a merit-based civil service system."
      },
      {
        title: "Iron Triangles & Issue Networks",
        content: "The interdependent relationship between Congressional Committees, Bureaucratic Agencies, and Special Interest Groups. Today, many complex points of influence are known as Issue Networks."
      }
    ]
  },
  {
    id: "5",
    title: "Judicial Branch & Civil Rights",
    topics: [
      {
        title: "The Federal Court System",
        content: "Dual system (Fed/State). Supreme Court (9 justices), Appellate Courts, District Courts. Original vs Appellate jurisdiction. Justices serve life terms on 'good behavior'."
      },
      {
        title: "SCOTUS Process & Decision Making",
        content: "Only ~1% of cases accepted via Writ of Certiorari (Rule of Four). Stare Decisis means 'let the precedent stand'. Judicial Activism (updating interpretation for modern times) vs Judicial Restraint (original intent)."
      },
      {
        title: "Marbury v. Madison & Judicial Review",
        content: "Established Judicial Review: the power to strike down unconstitutional laws or executive actions. Federalist 78 predicted this, calling the courts the 'least dangerous' branch."
      },
      {
        title: "Civil Rights Movement",
        content: "Protecting populations from discrimination. The 14th Amendment's Equal Protection Clause is key. Major milestones: Brown v Board, Civil Rights Act of 1964, Voting Rights Act of 1965.",
        deepDive: "MLK's 'Letter from a Birmingham Jail' argued for civil disobedience against unjust laws, noting that 'injustice anywhere is a threat to justice everywhere' and challenging the complacency of white moderates."
      },
      {
        title: "Other Minority Movements",
        content: "Feminist movement (Title IX, 19th Amendment), people with disabilities (ADA 1990), LGBTQ+ rights (Obergefell v. Hodges 2015)."
      }
    ]
  },
  {
    id: "6",
    title: "Political Ideology & Elections",
    topics: [
      {
        title: "American Political Culture",
        content: "Shared core beliefs: Individualism, Equality of Opportunity, Free Enterprise, Rule of Law, Limited Government. Despite shared values, interpretations vary wildly."
      },
      {
        title: "Political Socialization & Public Opinion",
        content: "Family is the most important factor in political socialization. Other factors: education, media, generational effects (e.g., Vietnam, 9/11), and life-cycle effects.",
        deepDive: "To accurately measure public opinion, scientific polling requires a random, representative sample (approx. 1,500 people) and neutral wording to achieve a low margin of error (+/- 3%)."
      },
      {
        title: "Left vs Right (Ideology)",
        content: "Liberals (Left): Favor government intervention to ensure economic equality, support social freedom, rely on Keynesian fiscal policy. Conservatives (Right): Favor free market, traditional social values, supply-side economics, strong military."
      },
      {
        title: "Elections & Voting Behavior",
        content: "Voting models include Rational Choice, Retrospective (looking back), Prospective (looking forward), and Party-Line. Demographics: Older, wealthier, highly educated individuals vote most often."
      }
    ]
  },
  {
    id: "7",
    title: "Linkage Institutions",
    topics: [
      {
        title: "The Media",
        content: "Serves as a watchdog and gatekeeper. Has evolved into narrowcasting (cable/internet) resulting in polarization. Often focuses on 'horse race' journalism (who is winning) rather than policy."
      },
      {
        title: "Special Interest Groups",
        content: "Organizations seeking to influence policy via Lobbying, Electioneering, Litigation, and Going Public. Can suffer from the 'free-rider' problem."
      },
      {
        title: "Campaign Finance",
        content: "PACs have limits on contributions ($5,000 per election). Super PACs can raise and spend unlimited funds independently. Citizens United v. FEC ruled corporate funding of independent broadcasts is protected free speech."
      },
      {
        title: "Political Parties",
        content: "Vehicles to win elections and organize government. Provide cues to voters. Party Eras are punctuated by critical elections leading to party realignment. Third parties often act as spoilers or issue-awareness raisers."
      }
    ]
  }
];

export const foundationalDocuments: Document[] = [
  {
    id: "doi",
    name: "Declaration of Independence",
    year: "1776",
    author: "Thomas Jefferson",
    summary: "Formal statement of separation from Great Britain. Influenced by Locke (natural rights, consent of governed, social contract).",
    parts: ["Introduction (Human rights)", "Body (27 Grievances)", "Conclusion (Separation)"],
    quotes: [
      { quote: "We hold these truths to be self-evident, that all men are created equal...", explanation: "Established foundational belief in equality and natural rights (life, liberty, pursuit of happiness)." },
      { quote: "That to secure these rights, governments are instituted among men, deriving their just powers from the consent of the governed...", explanation: "Popular sovereignty and the purpose of government." }
    ]
  },
  {
    id: "aoc",
    name: "Articles of Confederation",
    year: "1781",
    summary: "First US government. Created a 'firm league of friendship' where states remained sovereign. Weak central government (no tax, no exec, no court).",
    quotes: [
      { quote: "Each state retains its sovereignty, freedom and independence...", explanation: "Emphasized state power over national power." }
    ]
  },
  {
    id: "constitution",
    name: "US Constitution",
    year: "1787",
    author: "James Madison (mostly)",
    summary: "Established the supreme law of the land and current framework of government. 7 Articles and 27 Amendments.",
    parts: ["Preamble (Purpose)", "Article I (Legislative)", "Article II (Executive)", "Article III (Judicial)", "Article IV (State relations)", "Article V (Amending)", "Article VI (Supremacy Clause)", "Article VII (Ratification)", "Bill of Rights (First 10 Amendments)"]
  },
  {
    id: "brutus1",
    name: "Brutus No. 1",
    author: "Robert Yates (Anti-Federalist)",
    summary: "Argued against a strong central government. Feared the country was too large for a republic, and that the Supremacy and Necessary/Proper clauses would abolish state governments.",
    quotes: [
      { quote: "...this government is to possess absolute and uncontrollable power...", explanation: "Warning about the broad scope of federal authority." }
    ]
  },
  {
    id: "fed10",
    name: "Federalist No. 10",
    author: "James Madison",
    summary: "Addressed factions (interest groups). Argued that a large republic would mitigate the dangers of factions because many competing groups would prevent any one from dominating.",
    quotes: [
      { quote: "Liberty is to faction what air is to fire...", explanation: "Factions are natural; you cannot remove causes without removing liberty." }
    ]
  },
  {
    id: "fed51",
    name: "Federalist No. 51",
    author: "James Madison",
    summary: "Addressed checks and balances and separation of powers. 'Ambition must be made to counteract ambition.' Argued that government by humans requires internal limits.",
    quotes: [
      { quote: "If men were angels, no government would be necessary.", explanation: "Humans are flawed, so government must be restricted." }
    ]
  },
  {
    id: "fed70",
    name: "Federalist No. 70",
    author: "Alexander Hamilton",
    summary: "Argued for a energetic, single executive (President). Unity, duration, and competent powers are essential for accountability and quick decision-making.",
    quotes: [
      { quote: "Energy in the Executive is essential to the protection...", explanation: "A weak president leads to a bad government." }
    ]
  },
  {
    id: "fed78",
    name: "Federalist No. 78",
    author: "Alexander Hamilton",
    summary: "Addressed the Judicial branch. Argued it is the 'least dangerous' branch because it lacks 'sword or purse'. Established the basis for Judicial Review.",
    quotes: [
      { quote: "The judiciary... will always be the least dangerous to the political rights of the Constitution...", explanation: "It only has judgment, not will or force." }
    ]
  },
  {
    id: "mlk",
    name: "Letter from Birmingham Jail",
    year: "1963",
    author: "Dr. Martin Luther King Jr.",
    summary: "Defended non-violent civil disobedience. Argued that individuals have a moral responsibility to break unjust laws. Criticized the 'silent' white moderates.",
    quotes: [
      { quote: "Injustice anywhere is a threat to justice everywhere.", explanation: "Universal call for moral action." },
      { quote: "An unjust law is a code that is out of harmony with the moral law.", explanation: "Definition of an unjust law that should be resisted." }
    ]
  }
];

export const scotusCases: Case[] = [
  {
    id: "marbury",
    name: "Marbury v. Madison",
    year: "1803",
    situation: "Jefferson refused to deliver commissions for Adams' 'midnight judges'. Marbury sued.",
    question: "Does Marbury have a right to his commission? Does SCOTUS have authority to order it?",
    opinion: "Marbury has the right, but the Judiciary Act of 1789 was unconstitutional for expanding original jurisdiction.",
    significance: "Established Judicial Review (power to declare laws unconstitutional).",
    constitution: ["Article III"]
  },
  {
    id: "mcculloch",
    name: "McCulloch v. Maryland",
    year: "1819",
    situation: "Maryland tried to tax a branch of the National Bank.",
    question: "Can Congress create a bank? Can a state tax it?",
    opinion: "Yes, Congress can (Necessary and Proper). No, states cannot tax a federal entity (Supremacy Clause).",
    significance: "Strengthened federal power and established the supremacy of federal law.",
    constitution: ["Elastic Clause", "Supremacy Clause"]
  },
  {
    id: "schenck",
    name: "Schenck v. U.S.",
    year: "1919",
    situation: "Schenck mailed fliers to draftees encouraging them to evade the draft during WWI.",
    question: "Does the Espionage Act violate the 1st Amendment?",
    opinion: "No, speech that creates a 'clear and present danger' is not protected.",
    significance: "Limited free speech during wartime.",
    constitution: ["1st Amendment"]
  },
  {
    id: "brown",
    name: "Brown v. Board of Education",
    year: "1954",
    situation: "Black children denied admission to white public schools under 'separate but equal'.",
    question: "Does segregation violate the 14th Amendment?",
    opinion: "Yes, separate educational facilities are inherently unequal.",
    significance: "Overturned Plessy v. Ferguson; began desegregation.",
    constitution: ["14th Amendment (Equal Protection)"]
  },
  {
    id: "baker",
    name: "Baker v. Carr",
    year: "1962",
    situation: "Tennessee had not redrawn districts in 60 years despite population shifts.",
    question: "Do federal courts have jurisdiction over legislative apportionment?",
    opinion: "Yes, redistricting is justiceable under the 14th Amendment.",
    significance: "Established 'one man, one vote' principle.",
    constitution: ["14th Amendment (Equal Protection)"]
  },
  {
    id: "engel",
    name: "Engel v. Vitale",
    year: "1962",
    situation: "New York schools had students recite a state-drafted prayer.",
    question: "Does school prayer violate the Establishment Clause?",
    opinion: "Yes, it is a government program to advance religious beliefs.",
    significance: "Limited religious activities in public schools.",
    constitution: ["1st Amendment (Establishment Clause)"]
  },
  {
    id: "gideon",
    name: "Gideon v. Wainwright",
    year: "1963",
    situation: "Gideon was denied a lawyer in state court because he couldn't afford one.",
    question: "Does the 6th Amendment's right to counsel apply to states?",
    opinion: "Yes, through the 14th Amendment's Due Process clause.",
    significance: "States must provide attorneys for indigent defendants.",
    constitution: ["6th Amendment", "14th Amendment (Due Process)"]
  },
  {
    id: "tinker",
    name: "Tinker v. Des Moines",
    year: "1969",
    situation: "Students wore black armbands to protest Vietnam War and were suspended.",
    question: "Does wearing armbands violate 1st Amendment?",
    opinion: "No, students do not shed their rights at the schoolhouse gate.",
    significance: "Protected symbolic speech in schools unless it causes 'substantial disruption'.",
    constitution: ["1st Amendment (Free Speech)"]
  },
  {
    id: "nyt",
    name: "New York Times v. U.S.",
    year: "1971",
    situation: "Nixon tried to block publication of the Pentagon Papers.",
    question: "Does prior restraint violate the 1st Amendment?",
    opinion: "Yes, the government failed to justify the need for censorship.",
    significance: "Strengthened freedom of the press; heavy presumption against prior restraint.",
    constitution: ["1st Amendment (Freedom of Press)"]
  },
  {
    id: "wisconsin",
    name: "Wisconsin v. Yoder",
    year: "1972",
    situation: "Amish parents refused to send kids to high school due to religious beliefs.",
    question: "Does compulsory education violate Free Exercise clause?",
    opinion: "Yes, religious interests outweighed states' interest in schooling after age 14.",
    significance: "Incorporated Free Exercise clause to states.",
    constitution: ["1st Amendment (Free Exercise)"]
  },
  {
    id: "roe",
    name: "Roe v. Wade",
    year: "1973",
    situation: "Texas law prohibited abortion except to save the mother's life.",
    question: "Does the Constitution protect abortion rights?",
    opinion: "Yes, privacy is inferred via several amendments and 14th Due Process.",
    significance: "Legalized abortion nationwide (later overruled by Dobbs in 2022).",
    constitution: ["4th Amendment", "9th Amendment", "14th Amendment"]
  },
  {
    id: "shaw",
    name: "Shaw v. Reno",
    year: "1993",
    situation: "North Carolina created a bizarrely shaped majority-minority district.",
    question: "Does racial gerrymandering raise a constitutional issue?",
    opinion: "Yes, districts drawn based solely on race violate the 14th Amendment.",
    significance: "Limited racial gerrymandering; Constitution must be 'color-blind'.",
    constitution: ["14th Amendment (Equal Protection)"]
  },
  {
    id: "lopez",
    name: "U.S. v. Lopez",
    year: "1995",
    situation: "Student brought a gun to school, violating federal 'Gun-Free School Zones' act.",
    question: "Does Congress have the power to regulate guns in schools via Commerce Clause?",
    opinion: "No, carrying a gun in a school zone is not an economic activity.",
    significance: "Placed limits on the Commerce Clause; win for states' rights.",
    constitution: ["Article I (Commerce Clause)"]
  },
  {
    id: "citizens",
    name: "Citizens United v. FEC",
    year: "2010",
    situation: "FEC tried to block a movie critical of Hillary Clinton funded by corporations.",
    question: "Can govt limit corporate spending on candidate elections?",
    opinion: "No, corporate funding of independent broadcasts cannot be limited.",
    significance: "Led to the rise of Super PACs; money is speech.",
    constitution: ["1st Amendment (Free Speech)"]
  },
  {
    id: "mcdonald",
    name: "McDonald v. Chicago",
    year: "2010",
    situation: "Chicago essentially banned handguns.",
    question: "Does the 2nd Amendment apply to states?",
    opinion: "Yes, right to bear arms is fundamental for self-defense.",
    significance: "Incorporated the 2nd Amendment to states.",
    constitution: ["2nd Amendment", "14th Amendment (Due Process)"]
  }
];
