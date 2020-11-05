# Test backend nestjs

### 1 - Implementer une feature de demande d'avance sur salaire

Les gojobbers ont parfois besoin d'une avance sur salaire.
Aujourd'hui, l'equipe de la paie s'occupe manuellement du traitement de ces avances.

Le but de la feature est de permettre aux gojobbers de faire une demande sur salaire d'un montant choisi.

Les avances sur salaires sont accordees sous conditions:
- Une avance sur salaire ne peut etre effectuee que sur le salaire du mois courant.
- Le montant doit etre inferieur ou egal a 50% du total de l'argent gagne par le gojobber sur le mois.
- Le gojobber ne doit pas avoir fait d'autre demande sur le mois courant

### 2 - Permettre a un staff de valider la demande

Les demandes d'avance peuvent etre validees par un membre du staff.
Lors de la validation, le montant de l'avance sur salaire doit etre envoye sur le compte du gojobber
Le montant du salaire doit prendre en compte la demande.

### 3 - Permettre de faire plusieurs demandes

Le but de la feature est de permettre au gojobber de faire plusieurs demandes consecutivement, 
tant que le total ne depasse pas 50% du total de l'argent gagne sur le mois.

### 4 - Permettre d'annuler une demande specifique

Le gojobber s'est trompe en effectuant une demande, il veut pouvoir en corriger le montant en annulant une demande precedante.

### 5 - Bonus 1

Implementer l'utilisation d'une base de donnee