---
title: MKTD#6, le Stream processing avec &#35;Flink et &#35;Kafka
authors: 
  - afernandez
  - mcaylet
  - abos
  - gandrieu
  
tags: [MonkeyTechDay, Tech days, MKTD, Tech Addicts, Techno, flink, kafka]
---

# MKTD#6, le Stream processing avec #Flink et #Kafka


Vendredi 16 Mars 2018, nous nous sommes retrouvés une fois de plus (pour notre plus grand plaisir) chez [Harrycow Coworking](https://www.harrycow.com/), pour expérimenter 2 technos de Stream processing : Apache Flink et Kafka Streams.

<!--more-->

![PHOTO 1](/public/images/mktd6/1.jpg)

>Nous n’avons plus besoin de vous présenter les MKTD ! Si ? À priori pas pour tout le monde, alors on fait un bref rappel :
Chaque MonkeyTechDays (MKTD) réunit entre 30 et 45 Tech Addicts, passionnés de dév. En équipe, nous expérimentons, évaluons les technos innovantes sous forme de défis techniques. Une journée au plus près du code, fun et décontractée, où des coachs passionnés aident les participants à réaliser des exos de niveau soutenu.
Pour plus de détails sur l’organisation de la journée, on vous invite à regarder [le planning de la journée](https://www.meetup.com/fr-FR/MonkeyTechDays/) ou de parcourir [nos premiers articles.](http://www.monkeypatch.io/2018/02/05/MKTDs-articles-1.html)

Pour le MKTD#6, nous avons choisi le sujet du traitement de flux ("Stream processing") car c’est désormais un concept incontournable du Big Data. Les technos de Stream processing évoluent très vite, on a décidé d’en expérimenter les deux “frères” de la grande famille d’Apache.
Flink et Kafka excellent de plus en plus dans ce domaine. [Arnaud](https://twitter.com/arnaud_bos) et [Guillaume](https://twitter.com/glmxndr), 2 Monkeys confirmés, ont respectivement imaginé et confectionné une série de tp/exos/défis à relever tout au long de ce MKTD.

## les technos expérimentées :

### Flink
[Flink](https://flink.apache.org/) est un framework “Big Data” sortant de l’incubateur Apache qui gagne en popularité, basé sur l’unification du batch et du streaming, et dont la signature est une gestion du temps (event time vs processing time) qui lui confère toute sa puissance. Son API riche permet de découper les étapes de processing en unités de calcul modélisant un dataflow.

Comme les autres frameworks “Big Data”, Flink se déploie sous forme d’un cluster comprenant un master et de workers, le premier distribuant le travail décrit par le dataflow aux seconds. Les couches d’abstraction de l’API masquent alors le travail de Flink consistant à gérer le parallélisme et la gestion de l’état.

Enfin, Flink dispose de nombreux “connecteurs” permettant de collecter ou d’émettre des données de ou vers des systèmes tiers, et de librairies de plus haut niveau permettant :
- d’exécuter des requêtes directement sur un job en cours d’exécution, 
- de construire et requêter des données sous forme de tables (à la SQL) ou de graphes,
- ou encore de Machine Learning.

![PHOTO 2](/public/images/mktd6/2.jpg)

### Kafka Streams
[Kafka Streams](https://kafka.apache.org/documentation/streams/) permet de développer des applications distribuées sans avoir recours à un cluster autre que Kafka, ce qui simplifie leur déploiement. La librairie permet de coder des services de stream processing, et met à disposition une API de type FRP, s’appuyant sur le messaging et la persistance de Kafka.

Kafka Streams introduit le concept de KTables, qui donne accès à la dernière valeur pour une clé donnée, émulant des updates de BDD relationnelles. L’API permet d’effectuer des opérations de transformation, de branchage et de jointures ainsi que de garder de l’état. Tout ceci s’appuie sur des topics Kafka gérés directement par la librairie.

Enfin, Kafka Streams bénéficie également des autres outils de la suite Confluent, tels que le Schema Registry ou Kafka Connect, qui met à disposition de nombreux connecteurs pour traiter des données depuis ou vers des systèmes tiers.

![PHOTO 3](/public/images/mktd6/3.jpg)

[Voir les slides d’introduction](https://docs.google.com/presentation/d/1eeK-15lABBD5DixMUHiKXYWYoJER0_hmDBIx359MNtY/edit?usp=sharing)

### Les exercices
Pour expérimenter ces deux technos, nous avons donné un thème aux exercices pour toute la journée. 

>Tous les problèmes posés s’inscrivent dans un contexte de simulation de marché : le marché de la banane ! Les participants prennent le rôle de singes-traders jouant en bourse sur l’action de la banane.

#### Le matin
Les exercices des deux équipes sont identiques, mais chacun doit les résoudre avec sa techno préférée. Les participants découvrent les opérateurs de base permettant de transformer un flux de données, d’effectuer des branchements avant de réunifier les résultats au sein d’un seul flux de sortie, d’effectuer des traitements d’agrégation sur des fenêtres de temps glissantes ou encore de gérer de l’état. Chaque exercice présente un détail d’implémentation d’un trader, afin de familiariser les participants avec le marché de la banane.


[Voir les exercices Flink](https://github.com/monkeytechdays/mktd6-flink) 
[Voir les exercices Kafka](https://github.com/monkeytechdays/mktd6)



#### L’après-midi
Déjà familiarisés avec les règles du jeu par les exos du matin, le défi de l’après-midi est lancé : les participants doivent coder leur propre algo de trading ! 
Le prix d’une action “banane” fluctue aléatoirement, mais les participants peuvent l’influencer via twitter avec le hashtag #MKTD. Les joueurs s’abonnent au flux du prix des actions et leur algo doit choisir entre plusieurs stratégies : acheter/vendre des actions, investir dans une plantation, ou bien… nourrir des singes avec les bananes ! Le serveur calcule alors les résultats des transactions et re-publie l’état des traders avec un score affiché en temps réel.

> Mais attention, le score n’est pas l’argent ou les actions accumulées, mais le nombre de singes nourris !


## Moments forts et bilan de la journée

Encore merci au sponsor pour sa présence et son soutien lors de cette édition ! [Matthieu Rouget](https://twitter.com/mattrouget), responsable technique chez [Airbus Defence & Space](https://twitter.com/AirbusSpace), nous a présenté plusieurs de leurs projets sur le traitement des données massives issues de satellites d’observation de la terre. (franchement sympa la stack)

On remercie également [Confluent](https://twitter.com/confluentinc) et [dataArtisans](https://twitter.com/dataArtisans) pour les t-shirts et les stickers qu’ils nous ont envoyés. On a profité de ces cadeaux pour lancer un défi commun pour faire gagner à tout le monde un t-Shirt. Défi relevé !

![PHOTO 4](/public/images/mktd6/4.jpg)

On remercie de même l’ensemble des participants. Un spécial grand merci à ceux qui nous ont fait des retours. Ça fait plaisir de voir que l'ambiance était une fois de plus au rendez-vous et que vous voulez tous en refaire :)
Et ceci bien que les exercices étaient parfois un peu compliqués.

![PHOTO 5](/public/images/mktd6/5.jpg)

On se retrouve au prochain MKTD ?

Les géants du Web tels que Google, poussent de plus en plus la démocratisation de ces standards du Web à grande échelle. Vendredi 21 septembre 2018, on tentera au MKTD#7 d'expérimenter les Web Components nativement ou avec Stencil.

[Rdv sur Meetup](https://www.meetup.com/fr-FR/MonkeyTechDays/events/251431123/) pour en savoir plus sur l’événement

N’hésitez pas à vous aussi proposer des sujets pour les prochains MKTD, en détaillant vos idées sur le [Cfp](https://github.com/monkeytechdays/cfp).

← Article précédant [MKTD#5](http://www.monkeypatch.io/2018/02/05/MKTDs-articles-6.html)

