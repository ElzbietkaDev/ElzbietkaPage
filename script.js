
function SetCharacter(index) {

  var name = document.getElementById("charName");
  var img = document.getElementById("charImg");
  var info = document.getElementById("charInfo");
  var role = document.getElementById("charRole");
  var status = document.getElementById("charStatus");
  var persona = document.getElementById("charPersona");
  var a = document.getElementById("charA");
  var weakness = document.getElementById("charWeakness");
  var creator = document.getElementById("charCreator");
  
  switch (index)
    {
      case 1:
        name.innerHTML = "Elżbietka Liczba";
        img.src = "../characters/Senpai.png";
        info.innerHTML = "...";

        role.innerHTML = "Protagonistka";
        status.innerHTML = "Juzek Trol";
        persona.innerHTML = "Zjebuska";
        a.innerHTML = "Każdy tydzień";
        weakness.innerHTML = "Juzek i suty";
        creator.innerHTML = "Tsuwukiz";
        break;
      case 2:
        name.innerHTML = "Juzek Trol";
        img.src = "../characters/Senpai.png";
        info.innerHTML = "Juzek to człowiek, który ma szczęście do dziewczyn. Elżbietka jest w nim zakochana, ale co tydzień inna dziewczyna próbuje go jej odebrać. Elżbietka zrobi wszystko, żeby go zdobyć.";

        role.innerHTML = "Senpai";
        status.innerHTML = "?????";
        persona.innerHTML = "Przyjazny";
        a.innerHTML = "Każdy tydzień";
        weakness.innerHTML = "?????";
        creator.innerHTML = "Amesu";
        break;
      case 3:
        name.innerHTML = "Dagmara Zregnoj";
        img.src = "../characters/Dagmarka.png";
        info.innerHTML = "Najlepsza przyjaciółka Juzka z podstawówki. Dagmarka nie lubi rozmawiać o uczuciach, więc zachowuje się chamsko wobec Juzka.";

        role.innerHTML = "Rywalka";
        status.innerHTML = "Juzek Trol";
        persona.innerHTML = "Tsundere";
        a.innerHTML = "1 Tydzień";
        weakness.innerHTML = "?????";
        creator.innerHTML = "Amesu";
        break;
      case 4:
        name.innerHTML = "Katarzyna Liczba";
        img.src = "../characters/Mother.png";
        info.innerHTML = "Dyrektor szkoły i mama Elżbietki. Kasia nie jest taka jak inni dyrektorzy - jest miła, sympatyczna, pomocna, a każdy uczeń jest dla niej ważny... a tym bardziej Elżbietka. Cały czas wierzy, że uda jej się zmienić Elżbietkę w normalną osobę.";

        role.innerHTML = "Dyrektor";
        status.innerHTML = "Nikt";
        persona.innerHTML = "Miła";
        a.innerHTML = "Każdy tydzień";
        weakness.innerHTML = "Elżbietka";
        creator.innerHTML = "Amesu";
        break;
    }
};

function SetProject(index) {
  var Logo = document.getElementById("pjLogo");
  var pjInfo = document.getElementById('pjInfo');
  var Link = document.getElementById('pjLink');

  switch(index)
  {
      case 1:
        Link.href = "https://elzbietkasimulator.com/";
        Logo.src = "../images/Logo.png";
        pjInfo.innerHTML = "Mój teraźniejszy projekt. Jestem z niego bardzo dumny i cieszę się że zyskał taką popularność. Możesz zobaczyć tą grę na kanale Urhary! Gra jest aktywnie rozwijana z krótkimi przerwami.";
        break;

      case 2:
        Link.href = "https://elzbietkadev.itch.io/yankari-life-simulator";
        Logo.src = "../images/yls.png";
        pjInfo.innerHTML = "Mój pierwszy projekt. Anulowany. Na tym projekcie uczyłem się kodować (kod jest gówniany). Ten projekt miał 3 odsłony ale teoretycznie tylko ten pod linkiem jest najbardziej dopracowany. (Może kiedyś pokaże reszte). Bardzo nie lubie o nim mówić więc nie pytaj...";
        break;
  }
}