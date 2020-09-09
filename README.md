# vote-sm

c'est mon projet de fin de cycle a l'UAC, c'est la partie serveur qui communique avec la base de donnees Postgresql
Dans ce projet nous developpons un web service REST pour nous permettre la communication avec notre application mobile de vote.
# comment sa marche
- Creer un electeur:
    Method:"POST"
    endpoint:"/electeurs"
    body:{
      full_name:String,
      promotion:String,
      faculte:String,
      matricule:String // de la forme 2017GI44
    }
- Voir tout les electeurs:
    Method:"GET"
    endpoint:"/electeurs"
    response:[
    {
      id:int
      full_name:String,
      promotion:String,
      faculte:String,
      matricule:String // de la forme 2017GI44
    },
   ...    ]
- Voir un seul electeur:
    Method:"GET"
    endpoint:"/electeurs/{matricule}"
    response:
    {
      id:int
      full_name:String,
      promotion:String,
      faculte:String,
      matricule:String // de la forme 2017GI44
    },
    
 - pour Efacer un electeur:
  Method:"DELETE"
    endpoint:"/electeurs/{id}"
    response:{}
  
  Nous avons assis la partie des canditats qui resemble presque a la partie des electeur.
  Pour le vote voici comment sa marche:
    nous avons deux endpoint:
    
    - Creer un electeur:
        Method:"POST"
        endpoint:"/votes"
        body:{
          electeur_id:int,
          candidat_id:id
        }
    - Voir tout les electeurs:
        Method:"GET"
        endpoint:"/votes"
        response:{
    <<"count": 1,
    "data": [
        {
            "id": 2,
            "candidat_id": 2,
            "electeur_id": 1,
            "created_at": 1956313753,
            "candidat": {
                "id": 2,
                "full_name": "Alex Muhindo",
                "promotion": "L1",
                "faculte": "GI",
                "numero": 1,
                "matricule": "2015GI44",
                "created_at": 1955348686,
                "avatar": null
            },
            "electeur": {
                "id": 1,
                "full_name": "Syntiche mulumba",
                "promotion": "G3",
                "faculte": "GI",
                "matricule": "2017GI55",
                "created_at": 1954443762
            }
        }
    ]
}>>// en terme d'example d'objet vode de retour. 
nous continue de mener des recherches pour que nos hypotheses trouves des conclusions
Syntiche Mulumba G3 UAC.
    
    
