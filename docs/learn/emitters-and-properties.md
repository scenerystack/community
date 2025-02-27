--8<-- "api-reference-snippets.md"

# Emitters and Properties

PhET's [Axon] library provides a simple way to make your simulation respond to changes. Axon includes observable [Property] (for state that can change) and [Emitter] (for events or signals). This guide introduces these concepts and shows when to use each, with examples, and comparisons to similar patterns in other frameworks.

## What are Properties?

[Property] in [Axon] represent a value that can change over time and notify listeners when it changes. A [Property] wraps a value (e.g. a number or object), and other parts of your code can **observe** it. When the value updates, the [Property] automatically notifies all registered observers. This is PhET's implementation of the **Observer pattern** for model-view communication.

### Creating and Using a Property

To create a Property, import it from Axon and initialize it with an initial value. You can then *link* a listener function to react whenever the value changes, and you can update the Property's value through its API:

```js
import Property from 'axon/Property.js';

// Create a new Property with initial value 0
const scoreProperty = new Property( 0 );

// Observe changes to the property
scoreProperty.link( newScore => {
  console.log( 'Score changed to:', newScore );
} );

// Update the property's value
scoreProperty.value = 5;            // triggers listener, prints "Score changed to: 5"
scoreProperty.set( 10 );           // another way to set, triggers listener
console.log( scoreProperty.get() );// prints 10, the current value
```

**Key points:**

- **`.link( listener )`:** Registers an observer. It immediately calls `listener` with the current value and then again on every change. This ensures (for example) that a view is in sync with the model's initial state.
- **`.lazyLink( listener )`:** Similar to link, but **does not** call the listener right away – it only calls on future changes. Use this when you only care about updates, not the initial state.
- **`.unlink( listener )`:** Removes a previously added listener. Always remove listeners you no longer need (e.g. when disposing a view) to prevent memory leaks.
- You can get or set the value with `.value` (as shown) or use `.get()` and `.set( newValue )` methods. Setting a new value triggers notifications to listeners.

### Property Subtypes: NumberProperty, BooleanProperty, etc.

Axon provides convenient subclasses like [NumberProperty], [StringProperty], [BooleanProperty], etc., which are simply Properties that expect a specific value type. For example, [NumberProperty] ensures the value is always a number (and can include range validation), [Vector2Property] holds a 2D point ([Vector2]) as in many physics sims. Using these is optional but can provide built-in validation and self-documenting code. For instance:

```js
import NumberProperty from 'axon/NumberProperty.js';

const speedProperty = new NumberProperty( 0, {
  // Optionally, provide validation options specific to numbers:
  range: { min: 0, max: 100 },    // only allow values between 0 and 100
  units: 'm/s'                    // units metadata (for documentation or tools)
} );
```

In general, choose a subtype if it fits your data (for clarity and built-in validation); otherwise, [Property] works for any type.

### ReadOnlyProperty: Exposing State without Allowing Changes

Sometimes you want to allow other parts of the code to **read** a Property's value, but not change it. [ReadOnlyProperty] is designed for this. A [ReadOnlyProperty]`<T>` has the same interface for reading and listening as a regular Property, **but it has no public setter** – it can't be directly changed by external code.

**How to use ReadOnlyProperty:** You typically create a normal Property internally, and then pass around a [ReadOnlyProperty] reference to it. In Axon, a [Property] actually inherits from [ReadOnlyProperty] (so every Property *is* a ReadOnlyProperty for observing). You can upcast or use utility methods to get a read-only view. For example:

```js
import Property from 'axon/Property.js';
import ReadOnlyProperty from 'axon/ReadOnlyProperty.js';

class Person {
  constructor( name ) {
    // private mutable property
    this.nameProperty = new Property( name );
    // public read-only property (others can observe but not change)
    this.namePropertyRO = /** @type {ReadOnlyProperty<string>} */ ( this.nameProperty );
  }

  setName( newName ) {
    this.nameProperty.value = newName; // internal update
  }
}

const person = new Person( 'Ada' );
// External code can listen:
person.namePropertyRO.link( name => console.log( `Name is ${name}` ) );
// person.namePropertyRO.value = 'Bob'; // ERROR: no setter on ReadOnlyProperty
person.setName( 'Bob' ); // correct way to change, will trigger listener
```

In this example, `namePropertyRO` is exposed as a ReadOnlyProperty, so external code can observe changes but cannot call `.set()` on it. Use ReadOnlyProperty to enforce that certain state is read-only from the perspective of the rest of your program.

**When to use:** If you have a value that should only be changed by its owning class (encapsulation) but needs to be observed elsewhere, use a ReadOnlyProperty for the public API. This ensures proper control of state changes while still using the observer pattern for updates.

### DerivedProperty: Values Computed from Other Properties

A [DerivedProperty] is a Property whose value is automatically kept in sync as a function of one or more other Properties. You provide an array of "dependency" Properties and a callback that computes the derived value. The DerivedProperty updates whenever any dependency changes. This is useful for values that are essentially formulas of other observables (e.g., computing `force = mass * acceleration` in a physics sim).

**Example:**

```js
import DerivedProperty from 'axon/DerivedProperty.js';
import NumberProperty from 'axon/NumberProperty.js';

const massProperty = new NumberProperty( 5 );        // kg
const accelProperty = new NumberProperty( 2 );       // m/s^2

// Create a DerivedProperty for force = mass * acceleration
const forceProperty = new DerivedProperty(
  [ massProperty, accelProperty ],
  ( mass, accel ) => mass * accel,
  { valueType: 'number' }  // optional: validate that the result is a number
);

// Observe the derived value:
forceProperty.link( force => console.log( 'Force is', force, 'N' ) );

massProperty.value = 10;  // triggers forceProperty to update and print "Force is 20 N"
accelProperty.value = 3;  // triggers update, prints "Force is 30 N"
```

**Key points:**

- A [DerivedProperty] is a subtype of Property, so you use it like any other Property (listeners, `.value`, etc.).
- You cannot manually set a DerivedProperty's value – it's calculated from dependencies (if you try, it will typically throw an error or be ignored).
- Always specify the value type or validation in the options if the default can't be inferred, especially if the derived value has a specific type or constraints.
- Use DerivedProperty when you want to maintain a value that is always consistent with other Properties. This reduces boilerplate of manually updating values in listeners.

### Multilink: Observing Multiple Properties at Once

[Multilink] is a utility for reacting to changes in multiple Properties with one function call. It's similar to DerivedProperty in that it watches multiple dependencies, but instead of producing a new Property, it just invokes a callback. It is *not* itself a Property (so it doesn't have a value) – it's purely for side effects (running some code when any of the dependencies change).

**Example:**

```js
import Multilink from 'axon/Multilink.js';
import NumberProperty from 'axon/NumberProperty.js';

const lengthProperty = new NumberProperty( 2 );
const widthProperty = new NumberProperty( 3 );

// Use Multilink to watch both length and width
Multilink( [ lengthProperty, widthProperty ], ( length, width ) => {
  console.log( `Area is now ${ length * width }` );
} );

lengthProperty.value = 4; // triggers multilink callback, logs "Area is now 12"
widthProperty.value = 5;  // triggers callback, logs "Area is now 20"
```

In the above snippet, the Multilink calls the callback whenever *either* length or width changes. The callback receives the current values of both properties (in the order they were given). This is handy for updating UI elements that depend on multiple model values, without creating a separate derived Property when one isn't needed.

**When to use DerivedProperty vs Multilink:**

- Use [DerivedProperty] if you want to maintain a new value derived from others (especially if that value is used in multiple places or you want to pass it around as a Property).
- Use [Multilink] if you just want to run some code when properties change (e.g., update something in the view) and you don't need a new Property object.

### TinyProperty vs. Property

Axon provides "tiny" versions of some classes, including [TinyProperty] (and also [TinyEmitter], discussed later). [TinyProperty] is a lighter-weight, faster implementation of a Property with a smaller memory footprint. The trade-off is that it lacks some of the advanced features of full Properties, such as PhET-iO instrumentation (for recording and controlling simulations) and built-in validation.

For most use cases, the regular [Property] is recommended because it includes safety checks and tools. [TinyProperty] is typically used in performance-critical scenarios or deep in the library where hundreds or thousands of Properties might be updated and memory/CPU must be minimal.

From a usage perspective, [TinyProperty] has a similar API (supports `.link`/`.unlink` etc.), but it does less under the hood. If you find that a normal Property is too heavy for a specific low-level case (and you don't need features like metadata or validation on it), a TinyProperty could be an option. Beginners can safely stick to regular Properties. You might encounter [TinyProperty] in the Axon code or documentation notes, but reach for it only if profiling indicates you need the optimization.

**Summary of Axon Property Types:**

- [Property]: General-purpose observable value. Use for most cases where a model value changes over time. Notifies listeners on change.
- [ReadOnlyProperty]: A Property that external code can't modify. Use to expose state safely (often a Property *is-a* ReadOnlyProperty for public API).
- [DerivedProperty]: Computes its value from other Properties. Use for values that should always be consistent with other state (formula or combined state).
- [Multilink]: Convenience to react to multiple Properties' changes in one callback (no value of its own).
- [TinyProperty]: Lightweight Property without extra features. Use in special cases where performance or memory is critical, and advanced features (instrumentation/validation) are not needed.

## Emitters: Event Signals in Axon

While Properties handle **state** that persists and can be observed, [Emitter] handle **events**. An [Emitter] in Axon represents something that can **emit an event** (optionally with data), and listeners can subscribe to be notified when that event occurs. This is essentially the classic publish-subscribe pattern for events.

Use an Emitter when you want to signal "something happened" (like a button was pressed, a timer ticked, or a collision occurred) and that event is not just a value change of a single property.

### Creating and Using an Emitter

To use an Emitter, import it and create a new instance. You can then add listeners (callbacks) which will fire when the emitter emits. You trigger the event by calling the `.emit()` method:

```js
import Emitter from 'axon/Emitter.js';

// Create an Emitter with no arguments (a simple signal)
const gameOverEmitter = new Emitter();

// Add a listener for the event
gameOverEmitter.addListener( () => {
  console.log( 'Game over!' );
} );

// Somewhere else in code, when game is over:
gameOverEmitter.emit();  // All listeners are invoked, prints "Game over!"
```

You can also have an Emitter carry data to listeners. For example, an emitter that notifies when a score threshold is reached might pass the score value:

```js
// Emitter that passes a number to listeners
const scoreReachedEmitter = new Emitter();

// Listener expecting a number
scoreReachedEmitter.addListener( (score) => {
  console.log( `Threshold reached at score ${score}!` );
} );

// Emitting an event with data
scoreReachedEmitter.emit( 100 );  // prints "Threshold reached at score 100!"
```

**Key points:**

- **`.addListener( listener )`:** Subscribe to the event. The listener will be called whenever `.emit()` is called, with the arguments provided to emit.
- **`.removeListener( listener )`:** Unsubscribe a listener. As with Properties, remove it when you no longer need it to avoid memory leaks.
- **`.emit( ...args )`:** Trigger the event, optionally with data. Every listener will be invoked in the order added.
- Emitters can have multiple listeners; you can also call `.removeAllListeners()` if needed to clear out all subscribers at once.

Emitters are often used in the model for things that are naturally event-based (e.g., "fire projectile now", "simulation reset happened") or in the view for UI events (though many UI events in PhET are handled by Scenery's input system – e.g., button clicks can be wired to emitters or directly to model changes). You may see Emitters in simulation code coordinating between components.

### TinyEmitter vs. Emitter

Similar to Properties, Axon provides [TinyEmitter], a lightweight version of Emitter. A normal [Emitter] in Axon adds extra functionality like support for PhET-iO (instrumentation for data collection or remote control) and argument validation. Under the hood, an Emitter often uses a TinyEmitter to do the actual dispatch. For most usage, [Emitter] is appropriate and convenient.

[TinyEmitter] is a bare-bones event emitter with minimal overhead. If you have an event that will fire extremely frequently (e.g., every frame, or in a tight loop) and profiling shows the overhead of the full Emitter is an issue, you might opt for a TinyEmitter. It forgoes validation and instrumentation to be as fast as possible.

From a developer's perspective, the API of TinyEmitter is similar to Emitter (addListener, emit, etc.), just with fewer options. As a beginner, you likely won't need TinyEmitter; it's more of an optimization tool. Use [Emitter] by default for clarity and debugging support, and only consider [TinyEmitter] in performance hotspots where you truly need to shave off overhead.

### When to Use Properties vs. Emitters

Both Properties and Emitters can be used to communicate changes, but they serve different purposes:

- **Use a Property** if a value might change and you want parts of your program to react *to the current value* of that state. Properties have a notion of a latest value (state over time). For example, the current score, a checkbox's checked state, an object's position – those are best as Properties. Observers of a Property can get the *immediate state* (and `link` ensures they catch the current value on subscribe).
- **Use an Emitter** if something is an instantaneous event or action. For example, a "game over" event, a "user clicked reset" action, or a momentary signal like "particle escaped the box". Emitters do not hold a value; once emitted, there's no record in the Emitter of what happened (apart from any side-effects on listeners). If a listener wasn't connected at the time of emit, it simply doesn't receive that event.

Sometimes, you might decide between a continuous Property vs a one-off Emitter for a given design. For instance, a toggle button could be modeled as:
- a [BooleanProperty] (`true` = on, `false` = off) that flips each time – this way anyone can see the current state at any time, or
- an [Emitter] that emits an event "toggled" each time it's pressed – which is fine if you only care about the action, not the resulting state (though you'd likely still need to track the state internally).

In practice, Properties are used for most model state variables, and Emitters are used for discrete events or actions that aren't just setting a single variable. They complement each other in a simulation architecture.

## Comparison with Other Frameworks

Axon's approach to reactive state and events has parallels in other frameworks. The table below compares Axon's [Property] and [Emitter] patterns with similar concepts in popular libraries:

| **Concept**                 | **Axon (PhET)**                                                | **React** (Web)                              | **Backbone.js**                              | **MobX**                                   | **RxJS**                                      |
|-----------------------------|---------------------------------------------------------------|----------------------------------------------|----------------------------------------------|---------------------------------------------|-----------------------------------------------|
| **Basic reactive unit**     | [Property]: observable value holding state. Listeners (via `link`) are notified on change. | **State & Props:** component state via `useState` or state variables triggers re-renders; props pass data down. React doesn't use separate observer objects – it re-renders UI on state change. | **Model Attributes:** Backbone models trigger events (e.g. `change:name`) when attributes change. No separate Property class, but the model itself emits events for observers. | **Observable Values:** state can be made observable (e.g. `makeAutoObservable` in MobX). Changing an observable triggers reactions or component updates automatically. | **Observables:** e.g. `BehaviorSubject` holds a current value and emits new values to subscribers. Changing the value (`subject.next(val)`) notifies all subscribers. |
| **Listening/Subscription**  | [Property]: use `property.link( value => {...} )` to react immediately (or `lazyLink` to react only on future changes). [Emitter]: use `emitter.addListener( callback )` to subscribe to events. | **React:** components subscribe implicitly to state by rendering. To run side effects on updates, use `useEffect` which watches certain state variables. No manual subscribe needed for UI (React handles it), but for external events one might use custom hooks or an event emitter. | **Backbone:** call `model.on('change:attr', callback)` to listen to a specific attribute change, or `model.on('eventName', ...)` for custom events. Uses an internal event emitter system. | **MobX:** use autorun or reactions. E.g., `autorun(() => { ... use observable values ... })` runs whenever any used observable changes. In React, use the MobX `observer` HOC or component wrapper to re-render on observables. | **RxJS:** call `observable.subscribe( observer )` to listen to new values or events in the stream. RxJS Observables cover both continuous values and event streams with one abstraction. |
| **Derived/computed values** | [DerivedProperty]: combines multiple Properties with a function to produce a new value. [Multilink]: calls a function when any of multiple Properties change. | **React:** compute on the fly in render or use `useMemo` for expensive derived calculations. State derivations are typically handled in rendering logic or separate utility functions (no built-in observable combiner). | **Backbone:** no built-in equivalent of DerivedProperty. Developers manually update other attributes or compute values inside event callbacks (e.g. on change of A, set B). | **MobX:** **computed** values can derive from observables. They update automatically when dependencies change, similar to DerivedProperty. MobX also has when/reaction utilities for responding to multiple observables. | **RxJS:** use operators like `combineLatest` or `map` to derive new Observables from others. For example, combine two streams into one that emits a function result whenever any source changes – similar concept to DerivedProperty. |
| **One-time events**         | [Emitter]: an explicit object for events, with `emit()` and listeners (like a signal). Use for things that happen (e.g., "fired projectile") rather than continuous state. | **React:** typically handled via callbacks passed as props (e.g., an onClick handler). React doesn't have a built-in global event system like Axon's Emitter, but you might use Node's EventEmitter or simple callbacks for non-UI events. | **Backbone:** uses the same event system for custom events. E.g., you can do `this.trigger('fired', data)` in a model or event aggregator, and other parts do `on('fired', ...)` to react. | **MobX:** no direct equivalent; MobX focuses on state. For events, you might just use actions (methods that modify state) or use an [Emitter] from a different library. Some use libraries or simple Pub/Sub for events, or derive events as observable booleans that reset. | **RxJS:** use a `Subject` (or `Observable`) to represent events. A Subject is an observable you can call `.next(data)` on, which emits an event to subscribers – conceptually similar to an Axon Emitter. |
| **Memory & Performance**    | Axon's full [Property]/[Emitter] includes helpful checks (like value validation, reentrancy protection) and instrumentation for PhET-iO. For **low-level optimization**, Axon offers [TinyProperty] and [TinyEmitter] which remove extras for speed. | React's overhead comes from re-rendering components on state change; it's optimized via virtual DOM diffing, but very rapid changes might be costly. React doesn't provide a "lightweight state" alternative, but you can use lower-level state management if needed. | Backbone events are fairly lightweight (just function callbacks), but Backbone as a whole is an older framework; its two-way data binding can get complex. There's no direct "tiny" mode, but you can always use Backbone's EventEmitter independently for simple cases. | MobX is quite optimized for state updates (using proxies/annotation). It batches and minimizes re-computation. There's some overhead in tracking observables, but it's designed for high performance in UIs. No separate "tiny" version, but you might bypass MobX for a very hot loop and use simpler logic if needed. | RxJS can be very efficient for asynchronous or event-heavy scenarios, but it introduces its own overhead per observable and subscription. You can optimize by choosing the right operators. It doesn't have a notion of instrumentation like PhET-iO since it's a general library. |

**Notes:**

- **Axon vs React:** Axon's Properties are like an explicit observable model. In React, the pattern is more implicit: you change state and React re-renders the UI. Axon gives you fine-grained control over when and how listeners fire (and you can have non-UI listeners easily). React's approach is optimized for UI rendering, whereas Axon is a general-purpose observable for any logic (not tied to DOM).
- **Axon vs Backbone:** Backbone's models and collections provided one of the earlier implementations of observer pattern in JS apps. Axon's Properties serve a similar role but in a more granular way (each Property is its own observable, rather than an entire model object with many fields and a single event bus). Axon's Emitters are like Backbone's event aggregator or `Backbone.Events` mixin – but with optional strong typing and better structure.
- **Axon vs MobX:** MobX has concepts very close to Axon: observable state, computed values, and reactions. A difference is MobX automatically tracks dependencies used in computations, whereas Axon's DerivedProperty requires explicitly listing dependencies. Axon's approach is more explicit, which can be simpler to debug for smaller scale, while MobX magic can be convenient but sometimes unpredictable. Both aim to reduce manual wiring of events.
- **Axon vs RxJS:** RxJS is a powerful reactive streams library. You could implement similar behavior to Axon using RxJS (e.g., a Property is like a `BehaviorSubject`, a DerivedProperty like using `combineLatest` with a projection function). RxJS is more heavyweight and general (with notions of completion, error, backpressure, etc.), whereas Axon is focused on the common needs of interactive simulations (simple state observations and events). For a PhET sim developer, Axon is much simpler to use than setting up RxJS streams, and it integrates with PhET's own patterns (like the `link` immediate callback behavior, which isn't standard in Rx).

## Conclusion

Axon's Properties and Emitters provide a clean, beginner-friendly way to make your simulation interactive and responsive to change. To recap:

- Use [Property] for state that changes over time (and use `link` to react to those changes). Choose subtypes like [NumberProperty] for convenience, and expose [ReadOnlyProperty] when you need to prevent external modification.
- Use [DerivedProperty] or [Multilink] to avoid repetitive update logic when one value depends on others.
- Use [Emitter] for events or signals that aren't just stored state (user actions, one-time happenings).
- Understand [TinyProperty] and [TinyEmitter] exist for performance tuning, but start with the full versions.
- Clean up listeners with `unlink`/`removeListener` to keep things tidy.
- Axon's pattern is similar to other observer/reactive patterns in the web ecosystem, but it's tailored to PhET's simulation needs, providing immediate feedback (for initial sync) and integrated validation and instrumentation.

With Properties and Emitters, you can build a simulation where changes in the model automatically reflect in the view, and user interactions seamlessly update the model. This reactive pattern helps keep your code organized and your simulation behavior consistent. Happy coding with Axon!