
export interface Article {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  summary: string;
  body: string;
}

export const ARTICLES: Article[] = [
  {
    id: "1",
    title: "React Native Brings a New Architecture",
    category: "Tech",
    author: "Sarah Chen",
    date: "June 15, 2025",
    summary: "The New Architecture aims to improve React Native performance.",
    body: "React Native continues to improve its architecture and performance.\n\nThese improvements help developers build smoother mobile applications."
  },
  {
    id: "2",
    title: "Bangladesh Launches National AI Strategy",
    category: "Policy",
    author: "Rashida Khanam",
    date: "June 10, 2025",
    summary: "A roadmap outlines AI adoption across important sectors.",
    body: "Bangladesh is exploring artificial intelligence in education, healthcare and public services.\n\nResponsible implementation and skills development are important parts of AI adoption."
  },
  {
    id: "3",
    title: "What's New in Expo Router",
    category: "Tech",
    author: "James Watkins",
    date: "June 5, 2025",
    summary: "Expo Router provides file-based navigation for React Native apps.",
    body: "Expo Router maps files and folders to application routes.\n\nDynamic routes and nested layouts help developers organize navigation between screens."
  },
  {
    id: "4",
    title: "AIUB Team Studies Bangla NLP",
    category: "Research",
    author: "Dr. Fahmida Akter",
    date: "May 28, 2025",
    summary: "Researchers explore language models for Bangla text.",
    body: "Natural language processing can support many Bangla language tasks.\n\nResearch datasets and evaluation methods help measure model quality."
  },
  {
    id: "5",
    title: "TypeScript Tools for Developers",
    category: "Tech",
    author: "Elena Vasquez",
    date: "May 20, 2025",
    summary: "TypeScript provides types that help developers maintain code.",
    body: "TypeScript adds static type checking to JavaScript development.\n\nTypes can make application code easier to understand and maintain."
  },
  {
    id: "6",
    title: "Mobile Internet in Bangladesh",
    category: "Industry",
    author: "Tanvir Hossain",
    date: "May 14, 2025",
    summary: "Mobile connectivity creates opportunities for digital services.",
    body: "Mobile internet supports communication, commerce and digital services.\n\nReliable mobile applications are important as more people use phones to access online services."
  },
  {
    id: "7",
    title: "New Developments in Multimodal AI",
    category: "AI",
    author: "Marcus Johnson",
    date: "May 8, 2025",
    summary: "Multimodal AI systems can work with different types of data.",
    body: "Multimodal AI can process combinations of text, images and audio.\n\nThese capabilities create new possibilities for mobile application features."
  },
  {
    id: "8",
    title: "Dhaka Startup Ecosystem Grows",
    category: "Business",
    author: "Nadia Islam",
    date: "May 1, 2025",
    summary: "Startups are building services in fintech, health tech and agritech.",
    body: "Bangladesh has a growing startup ecosystem across several industries.\n\nMobile applications help businesses connect with customers and deliver digital services."
  }
];
