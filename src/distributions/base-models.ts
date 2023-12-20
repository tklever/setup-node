export interface NodeInputs {
  versionSpec: string;
  arch: string;
  auth?: string;
  checkLatest: boolean;
  stable: boolean;
  repositoryBaseUrl?: string;
}

export interface INodeVersionInfo {
  downloadUrl: string;
  resolvedVersion: string;
  arch: string;
  fileName: string;
}

export interface INodeVersion {
  version: string;
  files: string[];
}
