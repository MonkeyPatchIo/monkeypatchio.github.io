---
title: Retour SunnyTech 2018
authors:
  - ilaborie
tags: [SunnyTech, conf, Kotlin, DoD, ]
comments: true
published: true
---


Les grosses chaleurs, le chant des cigales, la philo du Bac., les grèves de la SNCF, et [**SunnyTech**]() : voilà l'été !
Cette année, les communautés Montpelliéraines organisent la première édition de SunnyTech. Pour les toulousains c'est génial d'avoir une conférence aussi proche.


Voici une petite sélection de ce j'ai trouvé super dans la conférence, mais forcément avec quatres salles en parallèles, ce n'est qu'un petit aperçu.
<!--more-->


![Team](https://lh3.googleusercontent.com/GEJ_LQviDIPSLGrvKUebtQOQ6hputryLqbODSjQkuJCGW44-KlnKP_Sotli7Dz2vtw2sqWDpTaSOcLt8v_L0dIfPVQouz4PVjzQGhfwDRKQx8ikRfIWE_xXwjGYJraXG4S7bFSLu9EAermukxELZyC8TFO6vhtUK5s-YRwIsw14lAU6wlBLIv_mRi6iVoe8wHKSbPn_UCvAkgJ_105UJCJqHN9OL75vQgnLhurt39v6ehsaZLZhLTI58BXzBb2ZsqDqPWODEk0bO37_qqItQOxotHwRRUwXTtp3y9DBS0fQMVqdWRALNiIDpuDYYnDktogDjMH6mHMe9IhmLbGDR-X1hpbZutPKC0oPlPAkNQDb2Yk63EH5aIcVWCwJ9cqKdtvImooHK2FlPE0dY6rxqMia9V6wjRLK-l5avBN8J3TSjNMhKcZ2Kex7losuZga0ppW-ni2anzd3_cc_4SNSt5viVcsZ7yi4XrCs3k55ewzXV7pHW4Z-kChMVajjeghYxjk8s-Dd5XBzl1rRHiNNQioPq6y4T_ouqI-MWahrGhYSvCeWQxRYhf1TsCicYnGrCcvLJCFl6HaZ7jzL2AW0tRLmtpaiBBRpCYlbhER31dmrpOyrFXwd59nxjD2GlJ6FQ4NQ4ilo4uJ5ht0ZRujNcqob1SvDlwQSd=w586-h390-no)

-----

## L'interopérabilité des Web Components, mythe ou réalité ?

Les [slides](https://noti.st/lostinbrittany/xyJkQe/the-web-components-interoperability-challenge), le dépôt (github)[https://github.com/LostInBrittany/web-components-interop].

![Horacio Gonzalez](https://lh3.googleusercontent.com/l5vtYsb6Rxz8Phmz-HCdXJA1SiQSE97XEwsQvIBgiBXtfMyW7vxhC3eS-8VxoVP12mknxY62Q6pN-gipwexls7xzx2rpD0hxd3eu3-DHZxlCZy2i95_3IHLWt-Yr6_DuTGK4Ov6e4ZELVGlZPYN_87o3lt09UbB8UAJw7EopVI21VkT_Col1cXXj8PJlZUwdTMVhZa9ah5jVO2RmhXMlBN2kSuRJiTF4WWr0tvly4j_IovWKtu2NNkKHkOwCeVdV9QWnDHelJI2kknS5TWmfBTRFEWmj2bl-1Y_EjgFnmIVTVE5ojzk3xuZyOvzATZVZDARWvopLfvVkqmQ_ElMvipIjV2uqAyB67mvV0rYKYTOxpRelsWdzbrx-8g_W3mFZ1XO-bS8siI2DZI-boeLcLNvljdo0ycRPnn-OCp17t7Gn7dMPgGYoEezFDiOLC9GIC7tBoKz2DHO95mKuVmJaTGvRL_oEGBix4fZDVpwtHvC2tRJCRIYYc1zTRlEXTyMsjnpVVhPXGyPmRIfYYSD3Eud7rv5qp14DHv4XeZ-P-fLWc5H-o95bYHXt6x2nfAdsX3SJv2ZVZLIr4ho7qdD1KZLjYh_MybKvjsHTEyGctO8l-sKB8HFyQtaCiS-6Vw6aeROVIVzbJErBtOviYZ9ibEDXHtbbDrLI=w736-h1104-no)

[Horacio Gonzalez](https://twitter.com/LostInBrittany) nous fait un rappel sur les _Web Components_, en parcourant les spécifications de _Custom Elements_, du _Shadow DOM_, et des _HTML Templates_.
En montrant comment on écrit des composants web natif (vanillia), Horcacio nous explique le principe de fonctionnement, mais aussi tout le _boilerplate_ nécessaire.

Ensuite il nous parle rapidement de [Polymer](https://www.polymer-project.org/), mais nous présente surtout les autres façons de faire des _Web Component_ avec [Slim.js](http://slimjs.com/), [Bram](https://bramjs.org/), [SkateJS](http://skatejs.netlify.com/), [Stencil](https://stenciljs.com/).

La démo est convaincante : l'intérêt majeur des Web Components c'est leur interopérabilité. En effet, c'est la meilleur façon aujourd'hui pour intégrer des composants créés par des bibliothèques différentes. C'est d'autant plus vrais s'il on utilise des _frameworks_ de plus haut niveau comme [VueJS](https://vuejs.org/) ou Angular (avec le projet encore expérimentale [Angular Elements](https://blog.ninja-squad.com/2018/05/29/angular-elements/)).

`#shamelessplug`: le sujet du prochain MKTD concerne les Web Components: [native vs Stencil](https://www.meetup.com/fr-FR/MonkeyTechDays/events/251431123/)


## Kotlin Parsec

Les [slides](https://github.com/d-plaindoux/parsec.kotlin), le dépôt [github](https://github.com/d-plaindoux/parsec.kotlin)

![Dider Plaindoux](https://lh3.googleusercontent.com/8PvvAEV64YI4AOPDNWOAKexZXDr0ezF0iM0UTwhoPNXho1f0I_8APwDCy-6N3dvSOV86nVYcXZ1shGFCvyeekkcj8DQWCG1nWz4q4ATnh85slu3KdkA4VP5YuMtCcn3Me0Wrudq2res5XFySSmBFIXUl5yFevMC0PrRyf1duInDIofm8fMfhc3n9WheMqX2MzSVd0eANWGxx7MfCF5iNvecvlrjW3QgNAMPf2nH8YWN7qjjSxaIcGvcDG_MPygtqw_BB2vi8q9najR-5MwLjewD13igBR8nzukhcWBARt5Fh7uSoW8vY1gWZ4WPgreEyHyjwnAtUdd6roHAHskXFqicZcGTPASjGnuQaEc0vErmUs5Pb92roI8xfveAONXs7NfQcR1IQlHldvYnZOaNTjuOW1QhL1dxBmVzG24NtPN87FJx-rx40CQDI-kUr1Gd-kzZQcmsrIznAGebiDfYMa8u-BNfArO4v09URRfTrtHG9QFJnskv6P46MWKevObe_HlQfv25xLltARf8MXWc5fvWe1FRG1HtMY3XgnhRMirhw2a0HL4f0hQ3VEhLJt_8UqxMtFl8f8VhXKW0Bk4LgAjjFnfWjZxbACX0Jn0IqlXg2gZltm_2pTB2FP7YLHZ7td0FsBlKvdyd3kdooULzBeJuePqiCSBWs=w477-h318-no) 

Pour ceux qui ne connaissent pas encore [Dider Plaindoux](https://twitter.com/dplaindoux), c'est un speaker singulier. Pour faire simple, à toutes ses présentations on apprend des tonnes de trucs, mais on sort aussi avec un petit mal au crâne.

A partir du papier [Parsec: Direct Style Monadic Parser Combinators For The Real World - Daan Leijen & Erik Meijer - 2001](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/parsec-paper-letter.pdf) et au travers d'un live-coding dirigé par les tests, il nous montre comment une grammaire écrite sous la forme   [EBNF](https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form) peut se traduire _simplement_ en Kotlin. Voici un exemple 

```ebnf
Expr  ::= SExp [('+' | '*') Expr]
SExpr ::= NUMBER | ('(' Expr ')')
```

Donne avec le DSL Kotlin

```kotlin
fun Expr()  = SExp() then opt(charIn('+','*') then Expr())
fun SExpr() = NUMBER or (char('(') then Expr() char(')')
```

Avec la passion qui le caractérise, Didier nous montre qu'en combinant des opérations assez simples, avec la puissance offerte par les extensions de fonctions de Kotlin (💖) on peut facilement créer des parsers par combinaisons de simple parser comme `returns`, `fails`, `any`, `lazy`, `doTry`, `lookahead`, ...

Une présentation à voir pour tout les amoureux des monades.

## S'aider du Data-Oriented Design pour écrire des applications performantes

Les [slides](https://docs.google.com/presentation/d/14IBNbjYnCYrNdMq6hnYdUc2GLbrhS3godn6Nv93fmnA/edit).

![Alessio Coltellacci](https://lh3.googleusercontent.com/018xd7xaWWcL-RRpokjObWrGUpAfbP-MYCIs7e1ia6bn8h4Cbb4MjpWaF9sE9xddhybwfQgzyc2bdV7dWDNx2Msc786m5vKhQKySzbiMbbl6Ufz6TstlFTrpqp7hGzIQvmXDbCG62YB2sRX77R9xPb_SVAhtZgZTAanJqeiIZ5XQI8gSi2iVNC0p1cNMRS9egICJCaTlMSeI2mRBS3bG2f_320C_rNBEaOpfZCOjnnQ7pfJdcQlFVXsH5LBhq494WBf0_jlCuTo8dCqaz_qJTi-ufVMy05wsSQLdQ1cVKTy7-emAJ64XOjF-S_bTZC12zbVutRelbvU-sBictOTrErD0HBSsigC1e7WjAFueuL7oM-Be0dSePmhGWTJLVVTA5lG6gUc5LdVVn_rls2i4JArDcHLI-rCdZ0osUPbOJ-pEOZPOvlxoCL5yznFAqCX0CebeH8DrY7X0e6k_v1gKkjv3wrfieCPW8lEj7i9ds7H02GX8JBgAIYbmQwTnU6A-tSLtxxG6OpZEbweuL9E_aOA62e8P_gXIoLewrCtP46PvhL9Ebz7Jy3kSlMsxaOfPUC6WLkCFabLykhvMiLZIdJl1O8JyFoUShk-C1e-QOkHhnymQVVePeLBzW6KU8qSRk93DkKXQyQaZqpa9A-tHItTns4dd169m=w477-h318-no)

[Alessio Coltellacci](https://twitter.com/lightplay8) nous parle du _Data-Oriented Design_, une approche pour améliorer les performances de nos applications.

Pour mieux comprendre ces performances, il faut descendre en bas, au niveau du CPU et de ses caches, et comprendre que la latence de la récupération nos données est clef pour les performances. Un peu de code `C` ou assembleur ne fait pas de mal (tant que ça reste sur des slides).

Ensuite on peut remonter dans nos couches, comme dans les structures de données.
Pour finir un exemple en JavaScript nous montre aussi que cela concerne aussi des langages de plus haut niveau.

En sélectionnant les structures de données qui marche bien avec notre hardware, on peut facilement améliorer les performances de nos parcours de données, il n'y a pas que la complexité algorithmique qui entre en jeu.
Attention, bien sur à effectuer les bonnes mesures.


## Fear the ponies

Pour finir j'ai fait un atelier animé par [Raphaël Wach](https://twitter.com/raphaelwac) et [Mickael Metesreau](https://twitter.com/MiKaDo_O) sur la cryptographie.

Le sujet peut faire peur, mais l'atelier était très accessible, on code avec le langage de votre choix, et on parcourt différentes situations : déchiffrage, chiffrage, avec différents algorithme.

Je préfère ne pas en dire beaucoup plus sur le contenu, car ça risquerait de trop dévoiler de choses, mais je vous recommande chaudement cet atelier si vous avez l'occasion de le faire.

Je recommande aussi la lecture du livre de Simon Singh: _Histoire des codes secrets_.

## Conclusion


J'ai passé de super moments à Sunny-Tech, c'est assez génial dans une conférences de pouvoir passer du temps dehors dans une ambiance décontractée. Et encore je n'ai pas parlé du repas des _speakers_, de la keynote d'ouverture, de CQRS, de la soirée, d'[Arrow](https://arrow-kt.io/), des chocolatines, du ☀️ ...
Pour vous faire une idée, vous pouvez consulter [les photos](https://photos.google.com/share/AF1QipP0gVKc2UuMSadr7u-4IUnOdQjgY_4d0PRTIsx-Y1XDQIW2J8Ufrjp-iFW3AX2u5g?key=VVJiUGVsQl9PalFlSmpkRVJ1WGh0eWhoRW9JU253).

Un grand merci à MonkeyPatch, aux organisateurs, aux sponsors (merci Klanik pour le chapeau), aux speakers, et à tous les gens avec qui j'ai eu la chance d'échanger.

Vivement l'an prochain !


![Merci](https://lh3.googleusercontent.com/jEXHIuv9rANpkXDPr5Io9n48UVzOtFFK11RbTr3OtnEwhk_duGZvAPxY7YiN3YZV3ZGR9KXlQtB2wEPCSEQ-vJ1zLdX8JrnLOHH1mOui2ZnKijMTBgpU6BYt5q46fVqlu9dTarBV92-DTVNRrnIkbNFZMA96R6M3L6pS6iyK3JkpwZ17lYeEIyCywvRltOgIVbmF2IKmQl1NUnzJQPIiwkGEgBXRVl6YAxbY1bRNp4zFChS-cq24fDBODrkdkLnt6HZQd8wcOvpcXJNzMjLRy73K_keYbfvr5BZyy06CRYYn6OTQlJ8brPkRE8e3a7fZ58Fo3qU76mYxipYGot8G9DQ4AuB9ATf7VhAUb8-keyvzr7mBgOqtTwSOWGPbpn84KqtgiZU_N4AeUN6iB-VCt5c5L9JAmsF0Gds9nntNzBbnhZV65VtnEmW8WuyhgZ5LjAGrLilE0femidM_rZZCbShqUXmTwAXU528VGo_ykQOLdNxDHiMWv6tZ8YGHtXuT9VSp4HvZDSMErHc4jUqYJQHkKsfaqqCKlDLqrATxKcugiMsYeV9pnUugPsNm6NWXRBC69_FK_5L1LXEi1DwkbpnhiQ8OguAvIuNAI1PFcYW0S_iS4cnHawLjhYzy5ApA35giR717Mn-OkWhtNyI8yrcymR93piKA=w1657-h1104-no)
