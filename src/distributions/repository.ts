import { URL } from 'url';

import { Distributions } from "./constants";
import { NodeInputs } from "./base-models";

export type DistributionRepositoryInputs = Pick<NodeInputs, 'versionSpec' | 'repositoryBaseUrl'>;

function resolveDistributionUrlFromVersionSpec(versionSpec: string, baseUrl: string = 'https://nodejs.org'): string {
  if (versionSpec.includes(Distributions.NIGHTLY)) {
    return new URL('download/nightly', baseUrl).href;
  }

  if (versionSpec.includes(Distributions.CANARY)) {
    return new URL('download/v8-canary', baseUrl).href;
  }

  if (versionSpec.includes(Distributions.RC)) {
    return new URL('download/rc', baseUrl).href;
  }

  return new URL('dist', baseUrl).href;
}

export class NodeJsDistributionRepository {
    readonly #distributionUrl: string;

    constructor(inputs: DistributionRepositoryInputs) {
        this.#distributionUrl = resolveDistributionUrlFromVersionSpec(inputs.versionSpec, inputs.repositoryBaseUrl);
    }

    get distributionUrl() {
        return this.#distributionUrl;
    }
}
