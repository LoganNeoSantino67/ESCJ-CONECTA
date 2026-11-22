import { defineConfig } from 'astro/config';

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const [ownerFromRepository, repositoryNameFromRepository] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const repositoryOwner = process.env.GITHUB_REPOSITORY_OWNER ?? ownerFromRepository;
const repositoryName = repositoryNameFromRepository || 'escj-conecta';
const isUserOrOrganizationSite = repositoryName === `${repositoryOwner}.github.io`;

export default defineConfig({
  site: isGitHubActions && repositoryOwner
    ? `https://${repositoryOwner}.github.io`
    : 'https://www.ue-escjcba.edu.bo',
  base: isGitHubActions && !isUserOrOrganizationSite ? `/${repositoryName}` : '/',
});
