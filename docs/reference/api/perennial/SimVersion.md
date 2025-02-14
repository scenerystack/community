# SimVersion

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/perennial/blob/main/js/browser-and-node/SimVersion.ts](https://github.com/phetsims/perennial/blob/main/js/browser-and-node/SimVersion.ts) for the most up-to-date information.

## Overview

Handles serializing and deserializing versions for simulations.

See https://github.com/phetsims/chipper/issues/560 for discussion on version ID definition.

The canonical description of our general versions:

Each version string has the form: {{MAJOR}}.{{MINOR}}.{{MAINTENANCE}}[-{{TEST_TYPE}}.{{TEST_NUMBER}}] where:

MAJOR: Sequential integer, starts at 1, and is generally incremented when there are significant changes to a simulation.
MINOR: Sequential integer, starts at 0, and is generally incremented when there are smaller changes to a simulation.
  Resets to 0 whenever the major number is incremented.
MAINTENANCE: Sequential integer, starts at 0, and is incremented whenever we build with the same major/minor (but with different SHAs).
  Resets to 0 whenever the minor number is incremented.
TEST_TYPE (when present): Indicates that this is a non-production build when present. Typically will take the values:
  'dev' - A normal dev deployment, which goes to phet-dev.colorado.edu/html/
  'rc' -  A release-candidate deployment (off of a release branch). Also goes to phet-dev.colorado.edu/html/ only.
  anything else - A one-off deployment name, which is the same name as the branch it was deployed from.
TEST_NUMBER (when present): Indicates the version of the test/one-off type (gets incremented for every deployment).
  starts at 0 in package.json, but since it is incremented on every deploy, the first version published will be 1.

It used to be (pre-chipper-2.0) that sometimes a shortened form of the (non-'phet') brand would be added to the end
(e.g. '1.3.0-dev.1-phetio' or '1.3.0-dev.1-adaptedfromphet'), or as a direct prefix for the TEST_TYPE (e.g.
1.1.0-phetiodev.1 or 1.1.0-phetio). We have since moved to a deployment model where there are
subdirectories for each brand, so this is no longer part of the version. Since this was not used for any production sim
builds that we need statistics from, it is excluded in SimVersion.js or its description.

Examples:

1.5.0                - Production simulation version (no test type). Major = 1, minor = 5, maintenance = 0
1.5.0-rc.1           - Example of a release-candidate build version that would be published before '1.5.0' for testing.
1.5.0-dev.1          - Example of a dev build that would be from main.
1.5.0-sonification.1 - Example of a one-off build (which would be from the branch 'sonification')

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;
Include @param and @returns in the JSDoc comments for JSDoc api documentation
/* eslint-disable phet/bad-typescript-text */

## Class SimVersion {: #SimVersion }


eslint-disable-next-line phet/default-export-class-should-register-namespace

```js
import { SimVersion } from 'scenerystack/perennial';
```
### Constructor

#### new SimVersion( major : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, minor : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, maintenance : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, options : <span style="font-weight: 400;">SimVersionOptions</span> ) {: #SimVersion-constructor data-toc-label='new SimVersion' }

### Instance Methods

#### serialize() : <span style="font-weight: 400;">Record&lt;<span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span>, <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">unknown</span>&gt;</span> {: #serialize data-toc-label='serialize' }

Convert into a plain JS object meant for JSON serialization.
@public

@returns {Object} - with properties like major, minor, maintenance, testType, testNumber, and buildTimestamp

#### compareNumber( version : <span style="font-weight: 400;">[SimVersion](../perennial/SimVersion.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #compareNumber data-toc-label='compareNumber' }

Compares versions, returning -1 if this version is before the passed in version, 0 if equal, or 1 if this version
is after.
@public

This function only compares major/minor/maintenance, leaving other details to the client.

@param {SimVersion} version

#### isAfter( version : <span style="font-weight: 400;">[SimVersion](../perennial/SimVersion.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isAfter data-toc-label='isAfter' }

Returns true if the specified version is strictly after this version
@param {SimVersion} version
@returns {boolean}
@public

#### isBeforeOrEqualTo( version : <span style="font-weight: 400;">[SimVersion](../perennial/SimVersion.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">boolean</span></span> {: #isBeforeOrEqualTo data-toc-label='isBeforeOrEqualTo' }

Returns true if the specified version matches or comes before this version.
@param version
@returns {boolean}
@public

#### toString() : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #toString data-toc-label='toString' }

Returns the string form of the version. Like "1.3.5".
@public

@returns {string}

### Instance Properties

#### major : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #major data-toc-label='major' }

(readonly)

#### minor : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #minor data-toc-label='minor' }

(readonly)

#### maintenance : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #maintenance data-toc-label='maintenance' }

(readonly)

#### testType : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #testType data-toc-label='testType' }

(readonly)

#### testNumber : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #testNumber data-toc-label='testNumber' }

(readonly)

#### buildTimestamp : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span> | <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">null</span></span> {: #buildTimestamp data-toc-label='buildTimestamp' }

(readonly)

### Static Methods

#### deserialize( { major, minor, maintenance, testType, testNumber, buildTimestamp } ) : <span style="font-weight: 400;">[SimVersion](../perennial/SimVersion.md)</span> {: #deserialize data-toc-label='deserialize' }

Takes a serialized form of the SimVersion and returns an actual instance.
@public

@param {Object} - with properties like major, minor, maintenance, testType, testNumber, and buildTimestamp
@returns {SimVersion}

#### comparator( a : <span style="font-weight: 400;">[SimVersion](../perennial/SimVersion.md)</span>, b : <span style="font-weight: 400;">[SimVersion](../perennial/SimVersion.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">number</span></span> {: #comparator data-toc-label='comparator' }

Compares versions in standard "comparator" static format, returning -1 if the first parameter SimVersion is
before the second parameter SimVersion in version-string, 0 if equal, or 1 if the first parameter SimVersion is
after.
@public

This function only compares major/minor/maintenance, leaving other details to the client.

@param {SimVersion} a
@param {SimVersion} b

#### parse( versionString : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, buildTimestamp? : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) : <span style="font-weight: 400;">[SimVersion](../perennial/SimVersion.md)</span> {: #parse data-toc-label='parse' }

Parses a sim version from a string form.
@public

@param {string} versionString - e.g. '1.0.0', '1.0.1-dev.3', etc.
@param {string} [buildTimestamp] - Optional build timestamp, like '2015-06-12 16:05:03 UTC' (phet.chipper.buildTimestamp)
@returns {SimVersion}

#### fromBranch( branch : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) : <span style="font-weight: 400;">[SimVersion](../perennial/SimVersion.md)</span> {: #fromBranch data-toc-label='fromBranch' }

Parses a branch in the form {{MAJOR}}.{{MINOR}} and returns a corresponding version. Uses 0 for the maintenance version (unknown).
@public

@param {string} branch - e.g. '1.0'
@returns {SimVersion}

#### ensureReleaseBranch( branch : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) {: #ensureReleaseBranch data-toc-label='ensureReleaseBranch' }

Ensures that a branch name is ok to be a release branch.
@public

@param {string} branch - e.g. '1.0'
@ignore - not needed by PhET-iO Clients



## Source Code

See the source for [SimVersion.ts](https://github.com/phetsims/perennial/blob/main/js/browser-and-node/SimVersion.ts) in the [perennial](https://github.com/phetsims/perennial) repository.
