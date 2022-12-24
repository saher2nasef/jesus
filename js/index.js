let text = document.getElementById("Text");
let btn = document.getElementById("btn");
let acceptJesus = document.getElementById("acceptJesus");
let Username = document.getElementById("Username");
let BtnSend = document.getElementById("BtnSend");
let changeLanguages = document.querySelectorAll(".changeLanguages");
let changeLanguage = document.querySelector(".changeLanguage");
let desktop = document.querySelector(".desktop");
let body = document.querySelector("body");
let Language = "ar";
let UsernameText = "";
for (let i = 0; i < changeLanguages.length; i++) {
  changeLanguages[i].addEventListener("change", () => {
    if (changeLanguages[i].value == "ar") {
      Username.placeholder = LoadAr("").Username;
      Username.className = "ar";
      Language = "ar";
      body.className = "ar";
      //   Change Language
      text.innerHTML = LoadAr(UsernameText).Text;
      btn.innerHTML = LoadAr(UsernameText).btn;
      Username.placeholder = LoadAr(UsernameText).Username;
      acceptJesus.innerHTML = LoadAr("").acceptChrist;
    } else if (changeLanguages[i].value == "en") {
      Username.placeholder = LoadEn("").Username;
      Username.className = "en-fr-gm";
      Language = "en";
      body.className = "en-fr-gm";
      //   Change Language
      text.innerHTML = LoadEn(UsernameText).Text;
      btn.innerHTML = LoadEn(UsernameText).btn;
      Username.placeholder = LoadEn(UsernameText).Username;
      acceptJesus.innerHTML = LoadEn("").acceptChrist;
    } else if (changeLanguages[i].value == "fr") {
      Username.placeholder = LoadFr("").Username;
      Username.className = "en-fr-gm";
      Language = "fr";
      body.className = "en-fr-gm";
      //   Change Language
      text.innerHTML = LoadFr(UsernameText).Text;
      btn.innerHTML = LoadFr(UsernameText).btn;
      Username.placeholder = LoadFr(UsernameText).Username;
      acceptJesus.innerHTML = LoadFr("").acceptChrist;
    } else if (changeLanguages[i].value == "ge") {
      Username.placeholder = LoadEm("").Username;
      Username.className = "en-fr-gm";
      Language = "ge";
      body.className = "en-fr-gm";
      //   Change Language
      text.innerHTML = LoadEm(UsernameText).Text;
      btn.innerHTML = LoadEm(UsernameText).btn;
      Username.placeholder = LoadEm(UsernameText).Username;
      acceptJesus.innerHTML = LoadEm("").acceptChrist;
    }
  });
}
window.addEventListener("load", () => {
  text.innerHTML = LoadAr("").Text;
  btn.innerHTML = LoadAr("").btn;
  Username.placeholder = LoadAr("").Username;
});
Username.addEventListener("keyup", () => {
  if (Username.value.replaceAll(" ", "").length !== 0) {
    BtnSend.classList.add("active");
    UsernameText = Username.value;
  } else {
    BtnSend.classList.remove("active");
  }
});
BtnSend.addEventListener("click", () => {
  text.innerHTML = LoadAr(Username).Text;
  btn.innerHTML = LoadAr(Username).btn;
  Username.placeholder = LoadAr(Username).Username;
  changeLanguage.classList.add("hide");
  desktop.classList.add("active");
  if (Language == "ar") {
    text.innerHTML = LoadAr(UsernameText).Text;
    btn.innerHTML = LoadAr(UsernameText).btn;
    Username.placeholder = LoadAr(UsernameText).Username;
  } else if (Language == "en") {
    text.innerHTML = LoadEn(UsernameText).Text;
    btn.innerHTML = LoadEn(UsernameText).btn;
    Username.placeholder = LoadEn(UsernameText).Username;
  } else if (Language == "fr") {
    text.innerHTML = LoadFr(UsernameText).Text;
    btn.innerHTML = LoadFr(UsernameText).btn;
    Username.placeholder = LoadFr(UsernameText).Username;
  } else if (Language == "ge") {
    text.innerHTML = LoadEm(UsernameText).Text;
    btn.innerHTML = LoadEm(UsernameText).btn;
    Username.placeholder = LoadEm(UsernameText).Username;
  }
  for (let i = 0; i < changeLanguages.length; i++) {
    changeLanguages[i].value = Language;
  }
});
btn.addEventListener("click", () => {
  acceptJesus.classList.add("active");
  text.classList.add("active");
  if (Language == "ar") {
    acceptJesus.innerHTML = LoadAr("").acceptChrist;
  } else if (Language == "en") {
    acceptJesus.innerHTML = LoadEn("").acceptChrist;
  } else if (Language == "fr") {
    acceptJesus.innerHTML = LoadFr("").acceptChrist;
  } else if (Language == "ge") {
    acceptJesus.innerHTML = LoadEm("").acceptChrist;
  }
});
function LoadAr(Name) {
  let dir = "ar";
  let btn = `اقبل المسيح`;
  let placeholderUsername = `ما اسمك ؟`;
  let text = `مرحبا اخي العزيز ${Name} لو انت مش شاعر بأمان او سلام وعدم طمأنينا في حل وايضا لو مش حابب تعيش في حل وهو المسيح وايضا لو انت مش مؤمن به دعني اقدم لك اختباري الشخصي انا كان عندي 15 سنة عندما حصل لي هذا . انا كنت في شهر 6 في 2022 كنت حاسس بألام خفيفة في رجلي اليمني وفي ذالك اليوم في الشهر كنت بلعب وكان لازم ارفع واحد من هذا الفريق الذي انا منه فرفعت واحد اتقل مني بكثير عشان افوز وبعد ما رفعته حسيت بألام شديد جدا جدا جدا في ظهري ورجلي اكثر من قبل وبعد ذلك رجعت الي بيتي ونمت علي السرير لم استطيع الوقوف مرة اخري وظل هذا الوضع مدة خمسة اشهر طبعا ذهب الي اكثر من خمسة اطباء ولا في اي نتيجة لكن الرب يسوع كان بيقلي انا هشفيك باي طريقة وفعلا ذهب الي المستشفي وعملت العملية وقبل ما اعمل العملية كنت فرحان جدا عشان بابا يسوع قلي انا هشفيك وانا واثق من هاذ الوعد وبعد ما عملت العملية اصبحت بصحة جيدا اكثر من الاول لان الرب كان معي انا . صديقي انا لا اكتب لك هذا لكي تؤمن فقط بل لتصبح صاحب دعوي الرب بيقولك يا ${Name} انا بحبك من قبل ما تاتي الي هذا العالم انا مختارك ان تكون ابني  . اخي لو تريد انا تقبل هذه الدعوة اضغط علي الزر القادم ان تقبل المسيح مخلصا شخصيا لحياتك`;
  let acceptChrist = `تحدث وقول يارب انا جايلك بكل قلبي وكل فكري عشان اسلمك قلبي واقولك انا اسف علي كل شي انا فعلته في الماضي سامحني انا عايزك تسكن في قلبي وتملائه بيك الهم ارحمني انا الخاطي انا اثق بك امين . لو انت عايز تكمل مع الله تواصل مع الرقم ده +201207636191 واتساب`;
  return {
    Text: text,
    btn: btn,
    Username: placeholderUsername,
    dir: dir,
    acceptChrist: acceptChrist,
  };
}
function LoadEn(Name) {
  let dir = "en";
  let btn = `accept Christ`;
  let placeholderUsername = `What is your name`;
  let text = `Hello, my dear brother ${Name}, if you do not feel safe or peaceful and do not reassure us, there is a solution, and also if you do not want to live in a solution, which is Christ, and also if you do not believe in Him, let me present to you my personal experience. I was 15 years old when this happened to me. I was in the month of 6 in 2022, I was feeling a slight pain in my right leg, and on that day in the month I was playing and I had to lift one from this team that I am from, so I lifted one that was much heavier than me in order to win, and after I lifted it, I felt very, very, very, very severe pain in my back and my legs More than before, and after that I went home and slept on the bed, I could not stand again, and this situation remained for five months. Doing the operation, I was very happy because Papa Jesus told me that I will heal you, and I am confident of this promise. After I did the operation, I became healthier than the first, because the Lord was with me. My friend, I am not writing this for you to believe only, but to become the owner of my prayer. The Lord says to you, ${Name}, I love you before you came into this world. My brother, if you want me to accept this invitation, press the next button to accept Christ as a personal Savior for your life`;
  let acceptChrist = `Speak and say, Lord, I come to you with all my heart and all my thoughts to surrender my heart to you and say to you that I am sorry for everything I did in the past. Forgive me. I want you to live in my heart and fill it with you. If you want to continue with God, contact this number +201207636191 whatsapp`;
  return {
    Text: text,
    btn: btn,
    Username: placeholderUsername,
    dir: dir,
    acceptChrist: acceptChrist,
  };
}
function LoadFr(Name) {
  let dir = "fr";
  let btn = `accepter Christ`;
  let placeholderUsername = `comment tu t'appelle ?`;
  let text = `Bonjour, mon cher frère ${Name}, si vous ne vous sentez pas en sécurité ou en paix et ne nous rassurez pas, il y a une solution, et aussi si vous ne voulez pas vivre dans une solution, qui est le Christ, et aussi si vous ne croyez pas en Lui, permettez-moi de vous présenter mon expérience personnelle. J'avais 15 ans quand ça m'est arrivé. J'étais au mois de 6 en 2022, je ressentais une légère douleur à la jambe droite, et ce jour-là du mois je jouais et j'ai dû en soulever un de cette équipe dont je suis, alors j'en ai soulevé un qui était beaucoup plus lourd que moi pour gagner, et après l'avoir soulevé, j'ai ressenti une douleur très, très, très, très intense dans le dos et les jambes Plus qu'avant, et après cela, je suis rentré chez moi et j'ai dormi sur le lit, je ne pouvait plus supporter, et cette situation est restée pendant cinq mois. En faisant l'opération, j'étais très content parce que Papa Jésus m'a dit que je te guérirai, et je suis confiant de cette promesse. Après avoir fait l'opération, je suis devenu plus sain que le premier, parce que le Seigneur était avec moi. Mon ami, je n'écris pas ceci pour que tu croies seulement, mais pour devenir le propriétaire de ma prière. Le Seigneur te dit, ${Name}, je t'aime avant que tu ne viennes au monde. Mon frère, si vous voulez que j'accepte cette invitation, appuyez sur le bouton suivant pour accepter Christ comme Sauveur personnel pour votre vie`;
  let acceptChrist = `Parle et dis : Seigneur, je viens à toi de tout mon cœur et de toutes mes pensées pour t'abandonner mon cœur et te dire que je suis désolé pour tout ce que j'ai fait dans le passé. Pardonne-moi. Je veux que tu vives dans mon cœur et que tu le remplisses de toi. Si vous voulez continuer avec Dieu, contactez ce numéro +201207636191 whatsapp`;
  return {
    Text: text,
    btn: btn,
    Username: placeholderUsername,
    dir: dir,
    acceptChrist: acceptChrist,
  };
}
function LoadEm(Name) {
  let dir = "ge";
  let btn = `Christus annehmen`;
  let placeholderUsername = `Wie heissen Sie ?`;
  let text = `Hallo, mein lieber Bruder ${Name}, wenn Sie sich nicht sicher oder friedlich fühlen und uns nicht beruhigen, gibt es eine Lösung, und auch wenn Sie nicht in einer Lösung leben wollen, die Christus ist, und auch wenn Sie nicht glauben in Ihm, lass mich dir meine persönliche Erfahrung präsentieren. Ich war 15 Jahre alt, als mir das passierte. Ich war im Monat 6 im Jahr 2022, ich hatte leichte Schmerzen in meinem rechten Bein, und an diesem Tag im Monat, in dem ich spielte, musste ich einen von dieser Mannschaft heben, aus der ich stamme, also habe ich einen von diesem gehoben war viel schwerer als ich, um zu gewinnen, und nachdem ich es hochgehoben hatte, fühlte ich sehr, sehr, sehr, sehr starke Schmerzen in meinem Rücken und meinen Beinen, mehr als zuvor, und danach ging ich nach Hause und schlief auf dem Bett, ich konnte nicht wieder stehen, und diese Situation blieb fünf Monate lang bestehen. Bei der Operation war ich sehr glücklich, weil Papa Jesus mir gesagt hat, dass ich dich heilen werde, und ich bin von diesem Versprechen überzeugt. Nachdem ich die Operation durchgeführt hatte, wurde ich gesünder als die erste, weil der Herr mit mir war. Mein Freund, ich schreibe dies nicht nur, damit du es glaubst, sondern um Eigentümer meines Gebets zu werden. Der Herr sagt zu dir, ${Name}, ich liebe dich, bevor du auf diese Welt kamst. Mein Bruder, wenn Sie möchten, dass ich diese Einladung annehme, drücken Sie die Schaltfläche „Weiter“, um Christus als persönlichen Retter für Ihr Leben anzunehmen`;
  let acceptChrist = `Sprich und sage: Herr, ich komme mit meinem ganzen Herzen und all meinen Gedanken zu dir, um dir mein Herz zu übergeben und dir zu sagen, dass es mir leid tut für alles, was ich in der Vergangenheit getan habe. Vergib mir. Ich möchte, dass du in meinem Herzen lebst und es mit dir füllst. Wenn Sie mit Gott fortfahren möchten, kontaktieren Sie diese Nummer +201207636191 whatsapp`;
  return {
    Text: text,
    btn: btn,
    Username: placeholderUsername,
    dir: dir,
    acceptChrist: acceptChrist,
  };
}
