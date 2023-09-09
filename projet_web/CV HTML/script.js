function verif() 
{ 	

		if (document.formulaire.nom.value == "")
	{
		alert ('Veuillez entrer votre nom!');
		document.formulaire.nom.focus();
		return false;
	}

	if(document.formulaire.prenom.value == "")
	{
		alert ('Veuillez entrer votre prenom!');
		document.formulaire.prenom.focus();
		return false;
	}

	if(document.formulaire.email.value == "")
	{
		alert ('Veuillez entrer votre email!');
		document.formulaire.email.focus();
		return false;
	}

    if(document.formulaire.Message.length =="")
	{ 
		alert ('Message non valider!'); 
		document.formulaire.Message.focus();
		return false; 
	}

	
	
	else { 
        alert('Formulaire envoyé!');
    }
  
}


