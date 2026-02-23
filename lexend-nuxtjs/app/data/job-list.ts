

interface JobListType {
    id: number;
    slug: string;
    job_title: string;
    category: string;
}[]


const job_list:JobListType[] = [
  { id: 1, slug: "senior-frontend-engineer-core", job_title: "Senior Frontend Engineer, Core", category: "Remotly" },
  { id: 2, slug: "senior-frontend-engineer-ai", job_title: "Senior Frontend Engineer, AI", category: "Remotly" },
  { id: 3, slug: "senior-python-engineer-growth", job_title: "Senior Python Engineer, Growth", category: "In-house" },
  { id: 4, slug: "director-of-accounting", job_title: "Director of Accounting", category: "In-house" },
  { id: 5, slug: "director-marketing-operations", job_title: "Director, Marketing Operations", category: "In-house (Preferably), Remotly" },
  { id: 6, slug: "team-lead-data-science", job_title: "Team Lead, Data Science", category: "Remotly" },
  { id: 7, slug: "director-of-product-research", job_title: "Director of Product Research", category: "In-house (Preferably), Remotly" },
]

export default job_list