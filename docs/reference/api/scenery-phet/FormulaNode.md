# FormulaNode

!!! warning "Under Construction"
    This documentation is auto-generated, and is a work in progress. Please see the source code at
    [https://github.com/phetsims/scenery-phet/blob/main/js/FormulaNode.js](https://github.com/phetsims/scenery-phet/blob/main/js/FormulaNode.js) for the most up-to-date information.

## Overview

Displays a LaTeX-style mathematical formula with KaTeX.

IMPORTANT: Using this will require including the KaTeX preloads, and may require generation of a custom bundle for
the simulation. Currently two preloads will be needed, one for the CSS/font-files, and one for the JS, e.g.:
- katex-0.11.0-css-all.js
- katex-0.11.0.min.js

IMPORTANT: See packageKatexCSS.js for more information, particularly about generating a particular customized preload
file that includes only the font-files needed.

@author Jonathan Olson &lt;jonathan.olson@colorado.edu&gt;
@author Saurabh Totey

## Class FormulaNode {: #FormulaNode }


```js
import { FormulaNode } from 'scenerystack/scenery-phet';
```
### Constructor

#### new FormulaNode( formula, options ) {: #FormulaNode-constructor data-toc-label='new FormulaNode' }

### Instance Methods

#### calculateDOMBounds() {: #calculateDOMBounds data-toc-label='calculateDOMBounds' }

We need to have a fairly custom bounds measurement method, since it's a block-level element.
@protected
@override

@returns {Bounds2}

#### invalidateDOM() {: #invalidateDOM data-toc-label='invalidateDOM' }


FormulaNode needs this override in order to render formulas correctly in DOM's invalidateDOM method, the
temporaryContainer is given a size temporaryContainer having a size affects the size of the formula and renders
calculateDOMBounds useless this method is almost the same as the one it overrides, but it just removes
temporaryContainer's size so that calculateDOMBounds can work and this can render correctly
@public
@override

#### setFormula( formula ) {: #setFormula data-toc-label='setFormula' }

Updates the formula to display. It should be a string, formatted with the general LaTeX style. Particular
function support is available at https://github.com/Khan/KaTeX/wiki/Function-Support-in-KaTeX.
@public

@param {string} formula - The particular formula to display.

#### getFormula() {: #getFormula data-toc-label='getFormula' }

@public

@returns {string} - The string for the formula that is currently displayed.

#### setDisplayMode( mode ) {: #setDisplayMode data-toc-label='setDisplayMode' }

Updates the {boolean} display mode.
@private

@param {boolean} mode
  If true, the formula will be displayed in the display-mode ($$ in LaTeX) style, which is typically separated from
  other text, and on its own line.
  If false, the formula will be displayed in the 'inline math' ($ in LaTeX) style, which is typically
  meant to be embedded within flowed text.

#### getDisplayMode() {: #getDisplayMode data-toc-label='getDisplayMode' }

Whether the displayMode is currently true.
@public

@returns {boolean}

#### updateFormula() {: #updateFormula data-toc-label='updateFormula' }

Updates the displayed formula and its bounds.
@private



## Source Code

See the source for [FormulaNode.js](https://github.com/phetsims/scenery-phet/blob/main/js/FormulaNode.js) in the [scenery-phet](https://github.com/phetsims/scenery-phet) repository.
