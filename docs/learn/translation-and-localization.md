--8<-- "api-reference-snippets.md"

# Translation and Localization

## Overview

For handling translation, SceneryStack uses a combination of string Properties and message Properties (see the guide on
[Emitters and Properties](./emitters-and-properties.md)). String Properties can be directly passed to Scenery `Text`
nodes. The Properties will automatically switch values based on the
global [localeProperty](https://scenerystack.org/reference/api/joist/localeProperty/), and for simulations there will
be an interface to manipulate the current locale.

String Properties are used for simpler translation strings, while message Properties are used for more complex strings,
particularly those that are used for static or dynamic accessible descriptions. If you are not constructing complex
dynamic sentences, you will likely only need to use string Properties.

## Locale

SceneryStack uses a somewhat custom Locale system, which was originally based on Java's Locale object. Available locales
are declared in [localeData.json](https://github.com/phetsims/babel/blob/main/localeData.json). For many popular locales,
this is the ISO-639-1 language code with an optional ISO-3166-1 alpha2 country code. For example, `en` is English,
`es`, is Spanish, and `zh_CN` is Chinese (Simplified). Some locales do not match the ISO standards.

There will be [more information](https://github.com/phetsims/chipper/issues/1332#issuecomment-2613663079) on converting 
between locales.

## String Properties

The majority of translation strings in SceneryStack are simple and can be handled with string Properties.

A simple way to create translated content is to create a simple JSON structure that maps keys to strings. There is
typically one structure for each locale:

English (strings_en.json):
```json
{
  "title": "Demo Simulation",
  "screen": {
    "magnets": "Magnets",
    "particles": "Particles"
  }
}
```

Spanish (strings_es.json):
```json
{
  "title": "Simulación de Demostración",
  "screen": {
    "magnets": "Imanes",
    "particles": "Partículas"
  }
}
```

Then (depending on whether your bundler supports JSON imports), you can import these files and pass them to
`LocalizedString.getNestedStringProperties` and use them:

```ts
import en_strings from "./strings_en.json";
import es_strings from "./strings_es.json";

const StringProperties = LocalizedString.getNestedStringProperties( {
  en: en_strings,
  es: es_strings
} );

// Access a string Property (it gets the `StringProperty` suffix):
StringProperties.titleStringProperty;

// Access a nested string Property:
StringProperties.screen.magnetsStringProperty;

// Pass a string Property to a Text node:
const titleNode = new Text( StringProperties.titleStringProperty );
```

These can also be used in conjunction with [`DerivedProperty`](https://scenerystack.org/reference/api/axon/DerivedProperty/)
or [`PatternStringProperty`](https://scenerystack.org/reference/api/axon/PatternStringProperty/) to manipulate strings, or to
fill in basic patterns.

[`PatternStringProperty`](https://scenerystack.org/reference/api/axon/PatternStringProperty/) is useful for filling in
simple patterns. For example, given a string that is similar to `"Hello, {name}"`, you can replace `{name}` with a
string Property or string that contains the name:

```ts
new PatternStringProperty( helloPatternStringProperty, { name: nameStringProperty } );
new PatternStringProperty( helloPatternStringProperty, { name: 'Fred' } );
```

## Message Properties

Message Properties use [Fluent](https://projectfluent.org/) to handle more complex strings. These are typically used for
static or dynamic accessible descriptions.

Fluent files are stored with a `.ftl` suffix, and their syntax is defined by the [Fluent Syntax Guide](https://projectfluent.org/fluent/guide/).

For example, a simple Fluent file might look like this:

```ftl
simple = Hello, world!

complexPattern = Wow, a { $object ->
  [cow] Cow
  *[dog] Dog
} ran at { $speed } km/h.
```

To get message Properties from these, a similar process to the string Properties is used:

```ts
import en_strings from "./strings_en.ftl";
import es_strings from "./strings_es.ftl";

const MessageProperties = getFluentModule( {
  en: en_strings,
  es: es_strings
} );

// Access a message Property (it gets the `MessageProperty` suffix):
MessageProperties.simpleMessageProperty;

// Get a string from a message:
const string = FluentUtils.formatMessage( MessageProperties.complexPatternMessageProperty, {
  object: 'cow',
  speed: 200
} );

// Get a string Property from a message with substitutions:
const stringProperty = new PatternMessageProperty( MessageProperties.complexPattern, {
  object: 'cow',
  speed: 200
} );
const stringProperty2 = new PatternMessageProperty( MessageProperties.complexPattern, {
  object: objectProperty,
  speed: speedProperty
} );
```

## RTL and Bidirectional Language Support

[Text] and [RichText] both support directional embedded marks (e.g. `\u202A` for LTR and `\u202B` for RTL, with `\u202C` to POP).
For example, `"\u202AHello, world!\u202C"` will force the text to be LTR, while `"\u202BHello, world!\u202C"` will force the text to be RTL.

[RichText] also supports `<span dir="rtl">` and `<span dir="ltr">` tags.

[HBox] supports the `forward` property, that can be toggled to false to reverse items for layout. This can be automated
to automatically reverse the layout by using [localeProperty]:

```ts
new HBox( {
  forwardProperty: localeProperty,
  // ...
} );
```

## Region and Culture

There is also a global [regionAndCultureProperty] that can be used to control the displayed region and culture.
This supports creating [LocalizedImageProperty] instances which can switch between different images based on the region.