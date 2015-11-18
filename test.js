import { deepEqual } from 'assert';
import domainLinks from './index';

it('should domainLinks', () =>
  deepEqual(domainLinks([
    'http://what.ever/a/',
    'http://what.ever/b/',
    'http://foo.bar/1/',
    'http://foo.bar/2/',
    'http://foo.bar/3/',
  ]), [
    { domain: 'what.ever',
      links: [
        'http://what.ever/a/',
        'http://what.ever/b/' ]},
    { domain: 'foo.bar',
      links: [
        'http://foo.bar/1/',
        'http://foo.bar/2/',
        'http://foo.bar/3/' ]}
  ]));

it('should domainLinks invalid input', () =>
  deepEqual(domainLinks(), undefined));
