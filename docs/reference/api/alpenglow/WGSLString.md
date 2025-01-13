# WGSLString

## Overview

Represents a string of WGSL code (which may have dependencies which it can add to a blueprint).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class WGSLString {: #WGSLString }


```js
import { WGSLString } from 'scenerystack/alpenglow';
```
### Instance Methods

#### withBlueprint( blueprint : <span style="font-weight: 400;">[PipelineBlueprint](../alpenglow/PipelineBlueprint.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #withBlueprint data-toc-label='withBlueprint' }



## Class WGSLMainModule {: #WGSLMainModule }


```js
import { WGSLMainModule } from 'scenerystack/alpenglow';
```
### Constructor

#### new WGSLMainModule( slots : <span style="font-weight: 400;">[WGSLSlot](../alpenglow/WGSLString.md#WGSLSlot)[]</span>, declarations : <span style="font-weight: 400;">[WGSLModuleDeclarations](../alpenglow/WGSLString.md#WGSLModuleDeclarations)</span> ) {: #WGSLMainModule-constructor data-toc-label='WGSLMainModule-constructor' }

### Instance Methods

#### withBlueprint( blueprint : <span style="font-weight: 400;">[PipelineBlueprint](../alpenglow/PipelineBlueprint.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #WGSLMainModule-withBlueprint data-toc-label='WGSLMainModule-withBlueprint' }



## Class WGSLModule {: #WGSLModule }


TODO: use this where we need

```js
import { WGSLModule } from 'scenerystack/alpenglow';
```
### Constructor

#### new WGSLModule( name : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, declarations : <span style="font-weight: 400;">[WGSLModuleDeclarations](../alpenglow/WGSLString.md#WGSLModuleDeclarations)</span> ) {: #WGSLModule-constructor data-toc-label='WGSLModule-constructor' }

### Instance Methods

#### withBlueprint( blueprint : <span style="font-weight: 400;">[PipelineBlueprint](../alpenglow/PipelineBlueprint.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #WGSLModule-withBlueprint data-toc-label='WGSLModule-withBlueprint' }



## Class WGSLReferenceModule {: #WGSLReferenceModule }


```js
import { WGSLReferenceModule } from 'scenerystack/alpenglow';
```
### Constructor

#### new WGSLReferenceModule( name : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, declarations : <span style="font-weight: 400;">[WGSLModuleDeclarations](../alpenglow/WGSLString.md#WGSLModuleDeclarations)</span> ) {: #WGSLReferenceModule-constructor data-toc-label='WGSLReferenceModule-constructor' }

### Instance Methods

#### withBlueprint( blueprint : <span style="font-weight: 400;">[PipelineBlueprint](../alpenglow/PipelineBlueprint.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #WGSLReferenceModule-withBlueprint data-toc-label='WGSLReferenceModule-withBlueprint' }



## Class WGSLSlot {: #WGSLSlot }


```js
import { WGSLSlot } from 'scenerystack/alpenglow';
```
### Constructor

#### new WGSLSlot( name : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, slot : <span style="font-weight: 400;">[ResourceSlot](../alpenglow/ResourceSlot.md)</span>, bindingType : <span style="font-weight: 400;">[BindingType](../alpenglow/BindingType.md)</span> ) {: #WGSLSlot-constructor data-toc-label='WGSLSlot-constructor' }

### Instance Methods

#### withBlueprint( blueprint : <span style="font-weight: 400;">[PipelineBlueprint](../alpenglow/PipelineBlueprint.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #WGSLSlot-withBlueprint data-toc-label='WGSLSlot-withBlueprint' }



## Class WGSLStringAccumulator {: #WGSLStringAccumulator }


```js
import { WGSLStringAccumulator } from 'scenerystack/alpenglow';
```
### Instance Methods

#### add( value : <span style="font-weight: 400;">[WGSLString](../alpenglow/WGSLString.md)</span> ) {: #WGSLStringAccumulator-add data-toc-label='WGSLStringAccumulator-add' }

#### withBlueprint( blueprint : <span style="font-weight: 400;">[PipelineBlueprint](../alpenglow/PipelineBlueprint.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #WGSLStringAccumulator-withBlueprint data-toc-label='WGSLStringAccumulator-withBlueprint' }

### Instance Properties

#### values : <span style="font-weight: 400;">[WGSLString](../alpenglow/WGSLString.md)[]</span> {: #WGSLStringAccumulator-values data-toc-label='WGSLStringAccumulator-values' }

(readonly)



## Class WGSLStringFunction {: #WGSLStringFunction }


```js
import { WGSLStringFunction } from 'scenerystack/alpenglow';
```
### Constructor

#### new WGSLStringFunction( value : <span style="font-weight: 400;">( blueprint: [PipelineBlueprint](../alpenglow/PipelineBlueprint.md) ) =&gt; <span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) {: #WGSLStringFunction-constructor data-toc-label='WGSLStringFunction-constructor' }

### Instance Methods

#### withBlueprint( blueprint : <span style="font-weight: 400;">[PipelineBlueprint](../alpenglow/PipelineBlueprint.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #WGSLStringFunction-withBlueprint data-toc-label='WGSLStringFunction-withBlueprint' }



## Class WGSLStringLiteral {: #WGSLStringLiteral }


```js
import { WGSLStringLiteral } from 'scenerystack/alpenglow';
```
### Constructor

#### new WGSLStringLiteral( value : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> ) {: #WGSLStringLiteral-constructor data-toc-label='WGSLStringLiteral-constructor' }

### Instance Methods

#### withBlueprint( blueprint : <span style="font-weight: 400;">[PipelineBlueprint](../alpenglow/PipelineBlueprint.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #WGSLStringLiteral-withBlueprint data-toc-label='WGSLStringLiteral-withBlueprint' }



## Class WGSLStringModule {: #WGSLStringModule }


```js
import { WGSLStringModule } from 'scenerystack/alpenglow';
```
### Constructor

#### new WGSLStringModule( name : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span>, string : <span style="font-weight: 400;">[WGSLString](../alpenglow/WGSLString.md)</span>, declarations : <span style="font-weight: 400;">[WGSLModuleDeclarations](../alpenglow/WGSLString.md#WGSLModuleDeclarations)</span> ) {: #WGSLStringModule-constructor data-toc-label='WGSLStringModule-constructor' }

### Instance Methods

#### withBlueprint( blueprint : <span style="font-weight: 400;">[PipelineBlueprint](../alpenglow/PipelineBlueprint.md)</span> ) : <span style="font-weight: 400;"><span style="color: hsla(calc(var(--md-hue) + 180deg),80%,40%,1);">string</span></span> {: #WGSLStringModule-withBlueprint data-toc-label='WGSLStringModule-withBlueprint' }



## Source Code

See the source for [WGSLString.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/WGSLString.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
