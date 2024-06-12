interface IEnv {
  readonly VITE_AUTHOR: string;
  readonly VITE_SITE_TITLE: string;
  readonly VITE_REPO_NAME: string;
  readonly VITE_GITHUB_URL: string;
  readonly VITE_BASE_ENV: 'development' | 'test' | 'production';
}

interface ImportMeta {
  readonly env: IEnv;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly VITE_AUTHOR: string;
      readonly VITE_SITE_TITLE: string;
      readonly VITE_REPO_NAME: string;
      readonly VITE_GITHUB_URL: string;
      readonly VITE_BASE_ENV: 'development' | 'test' | 'production';
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
