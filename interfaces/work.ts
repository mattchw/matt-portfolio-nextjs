interface Work {
  company: string;
  positions: WorkPosition[];
}

interface WorkPosition {
  title: string;
  startDate: string;
  endDate?: string;
  description: string[];
}

export default Work;
