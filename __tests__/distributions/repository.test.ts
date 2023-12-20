import { NodeJsDistributionRepository } from "../../src/distributions/repository";

describe('node repository', () => {
  it.each([
      [{versionSpec: '20', expectedDistributionUrl: 'https://nodejs.org/dist'}],
      [{versionSpec: 'INVALID', expectedDistributionUrl: 'https://nodejs.org/dist'}],
      [{versionSpec: '19.0.0-v8-canary', expectedDistributionUrl: 'https://nodejs.org/download/v8-canary'}],
      [{versionSpec: '10.13.1-nightly20200415947ddec091', expectedDistributionUrl: 'https://nodejs.org/download/nightly'}],
      [{versionSpec: '12.0.0-rc.1', expectedDistributionUrl: 'https://nodejs.org/download/rc'}]
  ])('resolves distribution url %p', ({ versionSpec, expectedDistributionUrl}) => {
    const sut = new NodeJsDistributionRepository({ versionSpec });
    expect(sut.distributionUrl).toBe(expectedDistributionUrl);
  });

    it.each([
        [{versionSpec: '20', repositoryBaseUrl: 'https://mirrorjs.local', expectedDistributionUrl: 'https://mirrorjs.local/dist'}],
        [{versionSpec: '20', repositoryBaseUrl: 'https://mirrorjs.local/', expectedDistributionUrl: 'https://mirrorjs.local/dist'}],
        [{versionSpec: 'INVALID', repositoryBaseUrl: 'https://mirrorjs.local', expectedDistributionUrl: 'https://mirrorjs.local/dist'}],
        [{versionSpec: '19.0.0-v8-canary', repositoryBaseUrl: 'https://mirrorjs.local', expectedDistributionUrl: 'https://mirrorjs.local/download/v8-canary'}],
        [{versionSpec: '10.13.1-nightly20200415947ddec091', repositoryBaseUrl: 'https://mirrorjs.local', expectedDistributionUrl: 'https://mirrorjs.local/download/nightly'}],
        [{versionSpec: '12.0.0-rc.1', repositoryBaseUrl: 'https://mirrorjs.local', expectedDistributionUrl: 'https://mirrorjs.local/download/rc'}]
    ])('resolves mirror distribution url %p', ({ versionSpec, repositoryBaseUrl, expectedDistributionUrl}) => {
        const sut = new NodeJsDistributionRepository({ versionSpec, repositoryBaseUrl });
        expect(sut.distributionUrl).toBe(expectedDistributionUrl);
    });
});
