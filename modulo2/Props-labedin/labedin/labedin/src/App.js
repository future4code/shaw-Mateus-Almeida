import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import  CardPequeno from './components/CardGrande/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesar&accessoriesType=Sunglasses&hairColor=Brown&facialHairType=MoustacheFancy&facialHairColor=BlondeGolden&clotheType=GraphicShirt&clotheColor=PastelOrange&graphicType=Pizza&eyeType=Close&eyebrowType=AngryNatural&mouthType=Vomit&skinColor=Pale" 
          nome="Astrodev" 
          descricao="Oi, eu sou o mateus almeida. Sou um dos  alunos da Labenu. Adoro estudar programação e espero vira um dev."
        />
        
        <ImagemButton 
          imagem="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesar&accessoriesType=Sunglasses&hairColor=Brown&facialHairType=MoustacheFancy&facialHairColor=BlondeGolden&clotheType=GraphicShirt&clotheColor=PastelOrange&graphicType=Pizza&eyeType=Close&eyebrowType=AngryNatural&mouthType=Vomit&skinColor=Pale" 
          texto="Ver mais"
        />
      </div>
      <CardPequeno imagem= "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png"
      email="mateusviniciusnunu@gmail.com" />

     <CardPequeno       imagem="https://logodownload.org/wp-content/uploads/2018/01/google-maps-logo-4-1.png"
     endereço="betim-minas-gerais" />
          

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesar&accessoriesType=Sunglasses&hairColor=Brown&facialHairType=MoustacheFancy&facialHairColor=BlondeGolden&clotheType=GraphicShirt&clotheColor=PastelOrange&graphicType=Pizza&eyeType=Close&eyebrowType=AngryNatural&mouthType=Vomit&skinColor=Pale" 
          nome="minhas exp" 
          descricao=" 2 anos mecanicos de motocicletas ,feio motos,
          1 ano de mecanico de bicicleta  ,bikecenter igarape
          06 meses açogueiro ,demar supermecado,06 meses embalador ,demar supermecado
            6 anos barbeiro " 
        />
        
        
         
          <CardGrande 
          imagem="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairTheCaesar&accessoriesType=Sunglasses&hairColor=Brown&facialHairType=MoustacheFancy&facialHairColor=BlondeGolden&clotheType=GraphicShirt&clotheColor=PastelOrange&graphicType=Pizza&eyeType=Close&eyebrowType=AngryNatural&mouthType=Vomit&skinColor=Pale" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />



      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
