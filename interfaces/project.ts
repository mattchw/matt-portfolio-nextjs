interface Project {
  name: string;
  description: string;
  url?: string;
  github: string;
  image: string;
  tags: ProjectTag[];
}

interface ProjectTag {
  name: string;
  color: string;
}

export default Project;
