import type { Project } from "@/types";

const response = await fetch("https://api.github.com/users/jsparkdev/repos");
const json = await response.json();

const myProjects = json.filter((repo: Project) => repo.fork);
const contributedProjects = json.filter((repo: Project) => !repo.fork);

export { myProjects, contributedProjects };
