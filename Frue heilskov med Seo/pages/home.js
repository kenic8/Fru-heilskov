let q = 0;
let disdis;
export default class HomePage {
  constructor() {
    this.template();
  }

  template() {
    document.getElementById("content").innerHTML += /*html*/ `
      <section id="home" class="page">
      <div id="underlay"></div>
        <div id="frontpage">
        <div id="fronthead">
        <div id="frontheadolay"></div>
        <div id="introwrap">
        <h1>Fru Heilskovs Rengøring
        <br>
        Når rengøring er en sport</h1>
        <div id="kontaktknap" onclick="jumptoform()">
        <p>kontakt</p>
        </div>
        </div>
        <p id="hvorbesked">Rengøring i Slagelse for 350kr i timen.</p>
        </div>
        <div id="fronticons">
          <div id="iconwrap">
          <div id="ico1">
          <img src="../images/illustrations/migverdi.svg">
          <p><a class="greentekst">Prefessionelt & personligt</a></p>
          </div>

            <div id="brlineH"></div>

            <div id="ico2">
            <img src="../images/illustrations/erhvav.svg">
            <p><a class="greentekst">Erhvervs rengøring</a></p>
            </div>
  

          <div id="brlineH"></div>

          <div id="ico3">
          <img src="../images/illustrations/privat.svg">
          <p><a class="greentekst">Privat rengøring</a> </p>
          </div>
        
          
        </div>

        <div id="anmeldelsessection">
        <div id="anmendpart">
        <div id="anmendpartOlay"></div>
        <div id="anmendpartboxwrap">
        <p id="anmeldelsetekst"></p>
        <div id="anmeldelsestars"></div>
        </div>
        </div>
        </div>
        </div>



        <div id="bigsec">
        <div id="part1">
        <div id="infwrap">
        <div id="infbox">
        <div id="sectionheaderwrap">
        <h3>Hvem er jeg?</h3>
        <div id="emnehline"></div>
        </div>
        <p class="sectiontext">
        Jeg er en glad og smilene person der altid har tid til snak.
        Derudover sætter jeg stor stolthed i mit arbejde og jeg elsker når folk bliver glade af resultatet.   
        </p>
        <a href="#OmMig">
        <div class="merknap">
        <p>læs mere</p>
        </div>
        </a>
        
        </div>


        </div>
        <div id="imgwrap">
        <div id="imgfade"></div>
        <div id="part1img"></div>
        </div>
        </div>
        


        <div id="part2">
        <div id="imgwrap2">
        <div id="imgclip"></div>
        <div id="borderclip"></div>
        </div>
        <div id="infwrap2">

        <div id="infbox2">
        <div id="sectionheaderwrap2">
        <h3>Mit arbejde</h3>
        <div id="emnehline2"></div>
        </div>
        <p class="sectiontext2">
          Det er vigtigt for mig at kvaliteten af mit arbejde er i top,
          derfor gør jeg altid grundigt rent i alle kroge med professionelt udstyr.
          
        </p>
        <a href="#OmMig"><div class="merknap2">
        <p>læs mere</p>
        </div>
        </a>

        </div>
        </div>
        </div>


        <div id="part4">
        <div id="part4Oskrift"> 
        <h3>Mine historier</h3>
        <div id="emnehline"></div>
        </div>
        <div id="magridwrap" onmouseover="mouseoverHbox()" onmouseleave="mouseleaveHbox()">
        <div class="Hbox" onclick="openOpslag()"><div class="HboxOlaywrap"><p>222</p></div></div>
        <div class="Hbox" onclick="openOpslag()"><div class="HboxOlaywrap"><p>222</p></div></div>
        <div class="Hbox" onclick="openOpslag()"><div class="HboxOlaywrap"><p>222</p></div></div>
        <div class="Hbox" onclick="openOpslag()"><div class="HboxOlaywrap"><p>222</p></div></div>
        </div>
        <a href="#galleri">
        <div class="merknapH">
        <p>læs mere</p>
        </div>
        <a/>
        </div>

        <footer>
        <div id="howtosection1" class="howtosection">
        <div id="howto1">
        <img src="../images/illustrations/howto1.svg">
        <p>Kontakt mig</p>
        </div>

        <div id="arrow"></div>

        <div id="howto2">
        <img src="../images/illustrations/howto2.svg">
        <p>Kundemøde</p>
        </div>

        <div id="arrow"></div>

        <div id="howto3">
        <img src="../images/illustrations/howto3.svg">
        <p>Første rengøring</p>
        </div>

        <div id="arrow"></div>

        <div id="howto4">
        <img src="../images/illustrations/howto4.svg">
        <p>Bestem aftale</p>
        </div>
        </div>


        <div id="footerwrapp">
        <div id="footerwrappOlay"></div>
        <div id="formsection">
        <h3>Kontakt mig</h3>
        <div id="formwrap">
        <div id="formapart1">
        <h6>Extra rengøring:<h6>
        
        <div id="extraformwrap">
        <label class="container">Ovn rengøring
        <input type="checkbox" class="checkbox" value="Ovn rengøring">
        <span class="checkmark"></span>
      </label>

      <label class="container">Bruseniche og/eller badeværelse
      <input type="checkbox" class="checkbox" value="Bruseniche og/eller badeværelse">
      <span class="checkmark"></span>
    </label>

    <label class="container">Plantepasning
    <input type="checkbox" class="checkbox" value="Plantepasning">
    <span class="checkmark"></span>
  </label>

  <label class="container">Vask og stryg
  <input type="checkbox" class="checkbox" value="Vask og stryg">
  <span class="checkmark"></span>
</label>

<label class="container">Køleskab
<input type="checkbox" class="checkbox" value="Køleskab">
<span class="checkmark"></span>
</label>

  </div>
        <h6>Andet:<h6>
        <textarea name="Text1" cols="40" rows="5" id="textarea"></textarea>
        </div>


      
        <div id="formapart2">
        <div id="inputwrap">
        <h6>Navn:<h6>
        <input type="text" id="fname" class="Pinput" name="firstname" placeholder="Navn">
        </div>
        <div id="inputwrap">
        <h6>Email:<h6>
        <input type="text" id="femail" class="Pinput" name="firstname" placeholder="Email">
        </div>
        <div id="inputwrap">
        <h6>Tlf: (valgfrit)<h6>
        <input type="text" id="ftlf" class="Pinput" name="firstname" placeholder="Tlf nr">
       </div>

        <div id="sendformknap" onclick="sendform()"> 
        <p>Send</p>
        </div>
        </div>
        
        </div>
        </div>
        <div id="realfooter">
        <div id="footerline"></div>
        <div id="footercontent">
        <div>
        <a><p>Tlf: +4529398366</p></a>
        <a><p>Email:  frueHeilskov@hotmail.dk</p></a>
        <a><p>CVR: 3387992133</p></a>
        </div>
        <div>
        <a href ="https://www.facebook.com/fruheilskov/">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 200 200" style="enable-background:new 0 0 200 200;" xml:space="preserve">
<g>
	<path class="st0" d="M100.4,7.8c51-0.5,93.5,42.1,92.7,94.2c-0.8,50.4-42.8,91.9-94.3,91.1c-50.5-0.8-91.9-42.9-91-94.3
		C8.6,48.6,50.1,7.4,100.4,7.8z M112.1,135.5c0-11.1,0-22.3,0-33.4c0-1.4,0.3-1.9,1.8-1.8c5.7,0.1,11.5,0,17.2,0.1
		c1.2,0,1.8-0.1,1.9-1.6c0.7-6.7,1.5-13.4,2.4-20.1c0.2-1.5-0.2-1.7-1.5-1.7c-6.6,0.1-13.3,0-19.9,0.1c-1.4,0-1.9-0.3-1.9-1.8
		c0.1-3.7,0-7.4,0-11.1c0-8.4,2.1-10.5,10.6-10.6c3.8,0,7.6,0,11.3,0c0.8,0,1.5,0.1,1.5-1.2c0-7,0-14.1,0-21.1
		c0-0.8-0.2-1.2-1.1-1.1c-9.2,0.2-18.5-0.5-27.7,0.5c-5.5,0.6-10.7,2.1-15.2,5.5C85,41,82.7,48,82,55.7c-0.6,6.4-0.3,12.9-0.3,19.3
		c0,1.7-0.5,2-2.1,2c-4.2-0.1-8.5,0-12.7-0.1c-1.3,0-1.8,0.2-1.8,1.6c0.1,6.8,0.1,13.5,0,20.3c0,1.3,0.4,1.5,1.5,1.5
		c4.3-0.1,8.6,0.1,12.9-0.1c1.7-0.1,2.1,0.4,2.1,2.1c-0.1,22,0,44-0.1,66c0,1.7,0.2,2.3,2.2,2.3c8.7-0.1,17.4-0.1,26.2,0
		c1.8,0,2.1-0.6,2.1-2.2C112,157.6,112.1,146.5,112.1,135.5z"/>
</g>
</svg>

        
        </a>
        </div>
        
        </div>
        
        </div>
      </footer>
      </section>

      
    `;
    this.reviews();
    this.historier();
    disdis = this;
  }

  reviews() {
    let reviews = [];
    fetch("../json/reviews.json")
      .then((Response) => {
        return Response.json();
      })
      .then(function (json) {
        reviews = json;
        document.getElementById("anmeldelsetekst").innerHTML =
          reviews[q].review;
        for (let i = 0; i < reviews[q].stjerner; i++) {
          document.getElementById(
            "anmeldelsestars"
          ).innerHTML += `<div><img src="../images/illustrations/starr.svg"></div>`;
        }
        setTimeout(() => {
          document
            .getElementById("anmendpartboxwrap")
            .classList.remove("reviewenter");
          document
            .getElementById("anmendpartboxwrap")
            .classList.add("reviewleave");
          setTimeout(() => {
            if (q + 1 < reviews.length) {
              q++;
            } else {
              q = 0;
            }
            disdis.__proto__.reviews();

            document
              .getElementById("anmendpartboxwrap")
              .classList.remove("reviewleave");
            document
              .getElementById("anmendpartboxwrap")
              .classList.add("reviewenter");
            document.getElementById("anmeldelsestars").innerHTML = "";
          }, 750);
        }, 10000);
      });
  }

  historier() {
    const url =
      "https://kevinnicholas.eu/wordpress/wp-json/wp/v2/posts?categories=3";
    fetch(url)
      .then((Response) => {
        return Response.json();
      })
      .then(function (json) {
        for (
          let i = 0;
          i < document.getElementsByClassName("Hbox").length;
          i++
        ) {
          document.getElementsByClassName("Hbox")[i].style.background =
            "url(" + json[i].acf.billedehent.url + ")";
          document.getElementsByClassName("Hbox")[
            i
          ].childNodes[0].childNodes[0].innerHTML = json[i].title.rendered;
          document.getElementsByClassName("Hbox")[i].id = i;
          console.log(json);
        }
      });
  }
}

{
  /* <div id="part3">
<div id="part3Olay"></div>
<div class="infbox"><h6>Den her rengøring</h6><p>bal lblalbll lblal lblal lblal lbalbl lalbal llabla</p></div>
<div class="infbox"><h6>Den her rengøring</h6><p>bal lblalbll lblal lblal lblal lbalbl lalbal llabla</p></div>
<div class="infbox"><h6>Den her rengøring</h6><p>bal lblalbll lblal lblal lblal lbalbl lalbal llabla</p></div>
</div> */
}
