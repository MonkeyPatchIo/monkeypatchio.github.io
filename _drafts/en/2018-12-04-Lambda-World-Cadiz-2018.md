---
title: Lambda World Cadiz 2018 - A Review
tags: [conf, FunctionalProgramming, LambdaWorld]
authors:
  - gandrieu
comments: true
published: true
---

The Spanish city of [Cádiz](https://en.wikipedia.org/wiki/C%C3%A1diz) is an amazing place, with a great history (from Roman ruins, to the [first Spanish constitution](https://en.wikipedia.org/wiki/Spanish_Constitution_of_1812) which was written there back in 1812). It is a great location choice for the [Lambda World conference](http://www.lambda.world/), although a quite remote one. Due to train troubles following the recent Aude flooding back here in France, I missed the first morning unconference and the first workshop (which I sorely regretted since I highly awaited to attend the [eta-lang](https://eta-lang.org/) workshop).
<!--more-->

The welcoming staff was amazing, the food was good, and globally the ambiance was warm. The audience was fine too, but I keep being amazed by the carelessness of some people, for instance not caring about the talks and working on their own projects, or sitting at the very end of a row, blocking all the middle seats, even failing to comply when staff members asked repeatedly to "defragment" the seating positions.

The conference had a pretty well stuffed [schedule](http://cadiz.lambda.world/schedule) and the choices were often hard to make. In order to keep this article not too long, I will only pick a few highlights, but all the presentations I had the chance to see were of good quality.

----

# Workshops

## Liquid Haskell Workshop

I first attended the [Liquid Haskell](https://wiki.haskell.org/Liquid_Haskell) workshop, by [Jan Schulte](https://twitter.com/janschultecom) and [Adrián González](https://twitter.com/adriangonzl). 

Liquid Haskell is a kind of layer of [predicate logic](https://en.wikipedia.org/wiki/Satisfiability_modulo_theories) over Haskell, allowing the type checker to verify properties.

In order to provide these properties, you write some `{-@ ... @-}` comments, and liquid Haskell interprets them and verifies them.

The workshop "spirit" was themed with alcoholic beverages: develop a simple model of glasses, shakers and cocktail recipes, and provide more type checking with liquid Haskell. For instance, if you define this datatype of shakers:

```haskell
data Shaker = Boston | French | Cobbler
```

you can assign volumes to them with liquid Haskell like this:

```haskell
{-@ type ShakerR S = { v: Shaker | S == volume v } @-}
{-@ measure volume @-}
volume :: Shaker -> Int
volume Boston  = 28
volume French  = 20
volume Cobbler = 24
```

What this *means* would be:

> Let's have some type `ShakerR` which takes an `Int` as a parameter. Let's call this `Int` "`S`". Now when you have a `Shaker` value, you can infer a `ShakerR` whose value for `S` is given by the measure function named `volume`, applied to the `Shaker` value you have.

This allows to lift values to the type level, and then write predicates which will ensure some properties on these values.

Liquid Haskell also allows some totality checking, which is quite nifty.

The workshop went at a nice pace, and went as far as defining alcoholic beverage recipes and verifying they could actually be done in a given shaker (by verifying that the mixed ingredients had a combined volume lower than the shaker's).

----

# Keynotes

## Diagrammatic execution models

\[[video](https://www.youtube.com/watch?v=sgmpVedCsNM)\]

[Koko Muroya](http://www.cs.bham.ac.uk/~kxm538/) and [Steven Cheung](http://www.cs.bham.ac.uk/~wtc488/), working under the direction of [Dan Ghica](https://twitter.com/danghica), gave a fantastic overview of their work on diagrammatic execution model. This keynote was somewhat on the theoric side, and applied to standard untyped $\lambda$-calculus (but hey, that's where it all began).

There is a nice demo of their work [hosted on github](https://koko-m.github.io/GoI-Visualiser/), which was used during the presentation.

In $\lambda$-calculus, just like in any programming context, you need an [evaluation strategy](https://en.wikipedia.org/wiki/Evaluation_strategy) of a program. There are several such strategies (for instance Haskell is lazy, and uses "call by need" strategy, whereas OCaml is strict and uses "call by value" strategy). Muroya and Cheung's presentation was on representing programs as diagrams, and then transform these diagrams using specific rewriting rules, depending on the strategy. This allows to visualize (and compare visually) how different strategies perform for a given problem in several dimensions (space, time, depths, etc.).

In order to determine how to rewrite the program diagram, one must enrich it with a focus on one of the wires of the diagram (the focus is located at the red wire in the demo). Choosing where to put the focus first, and then how to reposition it after rewrites is a whole part of the strategy. When asked, Koko Muroya confirmed that the language described could be extended to simply typed $\lambda$-calculus by attaching types to the diagram wires. 

Applied category theory is [booming](http://www.compositionality-journal.org/) right now, and this work led me to wonder if they were considering describing their work in a categoretic way (yes, it seems). Some of the demos they showed were reminiscent of [chemlambda](https://github.com/chorasimilarity/chemlambda-gui/blob/gh-pages/dynamic/README.md): a graph evolving given rewriting rules (which incidently provided the illustration for [the ACT 2019 announcement](https://johncarlosbaez.wordpress.com/2018/10/02/applied-category-theory-2019/)).

## How does code sound?

\[[video](https://www.youtube.com/watch?v=q5wJtk5Afck)\]

This presentation by [Felienne Hermans](https://twitter.com/felienne), in a huge spoiling nutshell:
- Felienne is interested in spreadsheets as a good model for FRP (by the way, [this tutorial on FRP in Haskell](https://wiki.haskell.org/FRP_explanation_using_reactive-banana) agrees, and [this recent paper and code](https://github.com/snowleopard/build) about build systems, by famous people, provides another good take on spreadsheets as serious stuff as well),
- elitist programmers reject her work as "not real programming",
- Felienne turns to teaching programming to kids, and reads Piaget, questions how the young learn to code,
- Felienne meets [Alexandra](https://twitter.com/birdsncherries) and they merge art and code, and code and art ; and they think about how to talk about code by translating programs into poems,
- Felienne sees that people don't agree on how to pronounce code out loud,
- Felienne digs and finds that generally, having a consistent way to pronounce things helps learning them,
- Felienne suggests that we should agree on ways to pronounce operators and language constructs as this would make it then easier to learn and share, *especially* for visually impaired people who rely on automatic text to speech translation, but not only for them.

Ok, I'm convinced, but let's go further, we need a phonology per natural language, *n'est-ce pas ?*

----

# Regular talks

## What Haskell taught us while we were not looking

\[[video](https://www.youtube.com/watch?v=Pmhap3acJvs)\]

In this talk, [Eric Torreborre](https://twitter.com/etorreborre) did not intend to talk about Haskell itself, but what its influence has been on other languages. (In the end however, a lot of stuff in the talk is still about Haskell proper.)

He first describes his journey from C++, to the Java world, to the Ruby/Groovy fad, to Scala, and finally to Haskell, which he now uses daily at work.

Eric then highlights two salient features or Haskell: laziness and purity
Eric proceeds with talking about data, and immutability, concluding that Haskell has smart functions and dumb data (*although we may highlight that functions __are__ also data in Haskell*).

An interesting thing is when Eric talks about objects (as in Object Oriented): he presents them as state machines (as they hold some state), and how it is hard to reason about several of them interacting. The exact same point is done from the other angle later in the talk about Elixir, where state machines interacting is actually promoted: the emergent behavior being, sometimes, the right level of abstraction, and the desired effect.

Then Eric talks about types. 
He reminds the audience how Java generics were designed by, among others, Wadler, and how generics were hard to make in Java because of subtyping, making type inference undecidable ; also quoting [Dolan and Mycroft 2017](https://dl.acm.org/citation.cfm?id=3009882).

Eric ends his talks with the "less good" stuff in Haskell: 
- not very user-friendly documentation,
- lack of proper modules (although backpack, and the yet hardly implemented [Shields and Peyton Jones 2002](https://www.microsoft.com/en-us/research/publication/first-class-modules-for-haskell/)),
- the occasional bad mix of garbage collection and laziness,
- the record namespace problem (*by the way nicely solved by Idris, with get/set lenses kinda built-in too*),
- and the lack of proper IDEs (*even though [`hie`](https://github.com/haskell/haskell-ide-engine) advances with large strides*).

A very engaging presentation overall, informative and fun without overdoing the comedy.

## The Complexity Trap: Think Before You Leap

\[[video](https://www.youtube.com/watch?v=Pmhap3acJvs)\]

So the presentation starts, like many others during the conference, with the notion of complexity (etymologically *made of several parts*). In order to avoid complexity, we often jump on seemingly attractive abstractions, but may fall in complexity traps:
* neglecting the cost of the abstraction (and moving the complexity at a different layer),
* embracing the industry standards/latest fads, which may be misguided in the context (like abstracting over monads may be interesting in library code, but not really in business code),
* foregoing the abstraction altogether (like using a nice functional library in eventually imperative business code).

Daniel then pleas for more exposure to tradeoffs and boring solutions: conferences and blog posts should not focus solely on the new and shiny, but leave room to the ugly that represents most of our daily routine anyway.

As tools to help in this daily routine, Daniel refers to classical root cause analysis, but also to [aim42](http://aim42.github.io/), a "collection of practices and patterns to support software evolution, modernization, maintenance, migration and improvement of software systems".

All in all, a nice talk by [Daniel Westheide](https://twitter.com/kaffeecoder). The presentation was boring (as was humorously noted by a member of the audience during the Q/A session), which gives it even more value in my opinion ([coherence matters](https://en.wikipedia.org/wiki/Principle_of_explosion)). Everything in engineering is neither shiny nor exciting, and conferences are not holidays at the beach (even though Cadiz' is beautiful).

Two quotes from the end of the talk that I wish to keep in mind more often:

> Projects do not fail for lack of higher kinded types, but because of architecture, politics, etc.

> As software engineers, our job is to solve problems, not to write code.

## Also...

Some of the talks are better suited for watching than commenting. For those inclined in the topics, special mentions to:

* [Andre Leopardi](https://twitter.com/whatyouhide)'s [presentation](https://www.youtube.com/watch?v=e3O0R5_69Pg) about *[Elixir](https://elixir-lang.org/) - functional, concurrent, distributed programming for the rest of us*, providing the reasons why the Elixir platform has been designed as it is,

* [Itamar Ravid](https://twitter.com/itrvd)'s presentation entitled *Boring use cases for exciting types*, explaining in detail some use cases for `WriterT`, `IxStateT` and `Codensity`,

* [Romain Calascibetta](https://twitter.com/Dinoosaure)'s presentation about *[MirageOS](https://mirage.io/), towards a smaller and safer OS* ; an ambitious OS written in OCaml, focused on modularity and security.

* [Oskar Wickström](https://twitter.com/owickstrom)'s [presentation](https://www.youtube.com/watch?v=psasUATsjQw) about the "yack-shave of his life" (as he called it himself): *Writing a [Screencast Video Editor](https://owickstrom.github.io/komposition/) in Haskell*, which is a great return on experience on writing a useful, non trivial program in Haskell.

----

# Conclusion

The conference was well balanced between very practical presentations, some more theoric, some more poetic or philosophical.

Some messages that were repeated again and again during the conference:
* watch out for accidental complexity,
* find the right level of abstraction to solve your problem,
* don't be an elitist dick.

All those points are about a single same theme: be careful of the context (*i.e.* you're not alone).