# WGSLString

## Overview

Represents a string of WGSL code (which may have dependencies which it can add to a blueprint).

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;

## Class WGSLString {: #WGSLString }


```js
import { WGSLString } from 'scenerystack/alpenglow';
```
### Instance Methods

#### withBlueprint( blueprint : <span style="font-weight: 400; opacity: 80%;">PipelineBlueprint</span> ) : <span style="font-weight: 400; opacity: 80%;">string</span> {: #withBlueprint data-toc-label='withBlueprint' }



## Class WGSLMainModule {: #WGSLMainModule }


```js
import { WGSLMainModule } from 'scenerystack/alpenglow';
```
### Constructor

#### new WGSLMainModule( slots : <span style="font-weight: 400; opacity: 80%;">WGSLSlot[]</span>, declarations : <span style="font-weight: 400; opacity: 80%;">WGSLModuleDeclarations</span> ) {: #WGSLMainModule-constructor data-toc-label='WGSLMainModule-constructor' }

### Instance Methods

#### withBlueprint( blueprint : <span style="font-weight: 400; opacity: 80%;">PipelineBlueprint</span> ) : <span style="font-weight: 400; opacity: 80%;">string</span> {: #WGSLMainModule-withBlueprint data-toc-label='WGSLMainModule-withBlueprint' }



## Class WGSLModule {: #WGSLModule }


TODO: use this where we need

```js
import { WGSLModule } from 'scenerystack/alpenglow';
```
### Constructor

#### new WGSLModule( name : <span style="font-weight: 400; opacity: 80%;">string</span>, declarations : <span style="font-weight: 400; opacity: 80%;">WGSLModuleDeclarations</span> ) {: #WGSLModule-constructor data-toc-label='WGSLModule-constructor' }

### Instance Methods

#### withBlueprint( blueprint : <span style="font-weight: 400; opacity: 80%;">PipelineBlueprint</span> ) : <span style="font-weight: 400; opacity: 80%;">string</span> {: #WGSLModule-withBlueprint data-toc-label='WGSLModule-withBlueprint' }



## Class WGSLReferenceModule {: #WGSLReferenceModule }


```js
import { WGSLReferenceModule } from 'scenerystack/alpenglow';
```
### Constructor

#### new WGSLReferenceModule( name : <span style="font-weight: 400; opacity: 80%;">string</span>, declarations : <span style="font-weight: 400; opacity: 80%;">WGSLModuleDeclarations</span> ) {: #WGSLReferenceModule-constructor data-toc-label='WGSLReferenceModule-constructor' }

### Instance Methods

#### withBlueprint( blueprint : <span style="font-weight: 400; opacity: 80%;">PipelineBlueprint</span> ) : <span style="font-weight: 400; opacity: 80%;">string</span> {: #WGSLReferenceModule-withBlueprint data-toc-label='WGSLReferenceModule-withBlueprint' }



## Class WGSLSlot {: #WGSLSlot }


```js
import { WGSLSlot } from 'scenerystack/alpenglow';
```
### Constructor

#### new WGSLSlot( name : <span style="font-weight: 400; opacity: 80%;">string</span>, slot : <span style="font-weight: 400; opacity: 80%;">ResourceSlot</span>, bindingType : <span style="font-weight: 400; opacity: 80%;">BindingType</span> ) {: #WGSLSlot-constructor data-toc-label='WGSLSlot-constructor' }

### Instance Methods

#### withBlueprint( blueprint : <span style="font-weight: 400; opacity: 80%;">PipelineBlueprint</span> ) : <span style="font-weight: 400; opacity: 80%;">string</span> {: #WGSLSlot-withBlueprint data-toc-label='WGSLSlot-withBlueprint' }



## Class WGSLStringAccumulator {: #WGSLStringAccumulator }


```js
import { WGSLStringAccumulator } from 'scenerystack/alpenglow';
```
### Instance Methods

#### add( value : <span style="font-weight: 400; opacity: 80%;">WGSLString</span> ) : <span style="font-weight: 400; opacity: 80%;">void</span> {: #WGSLStringAccumulator-add data-toc-label='WGSLStringAccumulator-add' }

#### withBlueprint( blueprint : <span style="font-weight: 400; opacity: 80%;">PipelineBlueprint</span> ) : <span style="font-weight: 400; opacity: 80%;">string</span> {: #WGSLStringAccumulator-withBlueprint data-toc-label='WGSLStringAccumulator-withBlueprint' }

### Instance Properties

#### values : <span style="font-weight: 400; opacity: 80%;">WGSLString[]</span> {: #WGSLStringAccumulator-values data-toc-label='WGSLStringAccumulator-values' }

(readonly)



## Class WGSLStringFunction {: #WGSLStringFunction }


```js
import { WGSLStringFunction } from 'scenerystack/alpenglow';
```
### Constructor

#### new WGSLStringFunction( value : <span style="font-weight: 400; opacity: 80%;">( blueprint: PipelineBlueprint ) =&gt; string</span> ) {: #WGSLStringFunction-constructor data-toc-label='WGSLStringFunction-constructor' }

### Instance Methods

#### withBlueprint( blueprint : <span style="font-weight: 400; opacity: 80%;">PipelineBlueprint</span> ) : <span style="font-weight: 400; opacity: 80%;">string</span> {: #WGSLStringFunction-withBlueprint data-toc-label='WGSLStringFunction-withBlueprint' }



## Class WGSLStringLiteral {: #WGSLStringLiteral }


```js
import { WGSLStringLiteral } from 'scenerystack/alpenglow';
```
### Constructor

#### new WGSLStringLiteral( value : <span style="font-weight: 400; opacity: 80%;">string</span> ) {: #WGSLStringLiteral-constructor data-toc-label='WGSLStringLiteral-constructor' }

### Instance Methods

#### withBlueprint( blueprint : <span style="font-weight: 400; opacity: 80%;">PipelineBlueprint</span> ) : <span style="font-weight: 400; opacity: 80%;">string</span> {: #WGSLStringLiteral-withBlueprint data-toc-label='WGSLStringLiteral-withBlueprint' }



## Class WGSLStringModule {: #WGSLStringModule }


```js
import { WGSLStringModule } from 'scenerystack/alpenglow';
```
### Constructor

#### new WGSLStringModule( name : <span style="font-weight: 400; opacity: 80%;">string</span>, string : <span style="font-weight: 400; opacity: 80%;">WGSLString</span>, declarations : <span style="font-weight: 400; opacity: 80%;">WGSLModuleDeclarations</span> ) {: #WGSLStringModule-constructor data-toc-label='WGSLStringModule-constructor' }

### Instance Methods

#### withBlueprint( blueprint : <span style="font-weight: 400; opacity: 80%;">PipelineBlueprint</span> ) : <span style="font-weight: 400; opacity: 80%;">string</span> {: #WGSLStringModule-withBlueprint data-toc-label='WGSLStringModule-withBlueprint' }



## Source Code

See the source for [WGSLString.ts](https://github.com/phetsims/alpenglow/blob/main/js/webgpu/wgsl/WGSLString.ts) in the [alpenglow](https://github.com/phetsims/alpenglow) repository.
