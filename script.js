‏const titleText = "Explore The Arab World";
‏let i = 0;
‏function typeWriter() {
‏  if(i < titleText.length) {
‏    document.getElementById("title").innerHTML += titleText[i];
‏    i++;
‏    setTimeout(typeWriter, 80);
  }
}
‏typeWriter();

‏// Countries
‏const countries = [
‏  "Egypt","Saudi Arabia","UAE","Jordan","Lebanon","Syria","Iraq",
‏  "Palestine","Morocco","Algeria","Tunisia","Libya","Sudan",
‏  "Oman","Qatar","Bahrain","Kuwait","Yemen","Djibouti","Somalia",
‏  "Comoros","Mauritania"
];


‏const countryTextsEn = {
‏  "Egypt": `Egypt has a rich history with ancient pyramids and pharaohs. The Nile river shaped civilization for thousands of years. Cairo blends modern life with deep cultural heritage. Egyptian food, music, and art are famous worldwide. Tourism is very important for the national economy today. Ancient Egyptians excelled in science, medicine, and architecture. Egypt connects Africa and the Middle East culturally and geographically.`,
‏"Saudi Arabia": `Saudi Arabia is the birthplace of Islam and rich culture. It has vast deserts and historic landmarks. Riyadh is modern while preserving tradition. Oil is a major economic driver. Arabic poetry, storytelling, and cuisine flourish. Millions travel for Hajj annually. Ancient trade routes connect it to regional history.`,
‏  "UAE": `The UAE transformed from deserts into a global hub. Dubai and Abu Dhabi feature iconic skyscrapers. Bedouin and maritime traditions are preserved. Economy is based on oil, tourism, and trade. International events and expos attract visitors. Cultural institutions honor Islamic heritage. Leadership emphasizes innovation, tolerance, and progress.`,
‏  "Jordan": `Jordan has a rich history including Petra and Roman ruins. It bridges the Middle East and has diverse landscapes. Amman is modern yet traditional. Jordanian cuisine and hospitality are famous. The Dead Sea is a natural wonder. Jordan preserves cultural heritage and historic sites. Tourism and archaeology are important to the economy.`,
‏  "Lebanon": `Lebanon is known for its mountains, Mediterranean coast, and history. Beirut is a vibrant city with cultural richness. Phoenician heritage shaped ancient trade and navigation. Lebanese cuisine is popular worldwide. Festivals and music celebrate traditions. Arabic literature and arts are valued. Tourism is vital for Lebanon's economy.`,
‏  "Syria": `Syria has ancient cities like Damascus and Aleppo. Its history spans civilizations such as Arameans and Romans. Syrian architecture and art are admired. Traditional crafts and music thrive. Cuisine reflects rich cultural heritage. Historical trade routes enhanced its significance. Modern Syria preserves its unique cultural identity.`,
‏  "Iraq": `Iraq, home to Mesopotamia, is called the cradle of civilization. Ancient Sumerians, Akkadians, and Babylonians lived here. Tigris and Euphrates shaped fertile lands. Baghdad is a historical center of learning. Art, literature, and science flourished. Rich cuisine and traditions remain. Archaeological heritage attracts scholars and tourists.`,
‏  "Palestine": `Palestine has historic sites including Jerusalem and Bethlehem. It was home to the Canaanite civilization. Olive trees and traditional crafts are abundant. Cultural heritage is preserved through music and poetry. Cuisine reflects local traditions. Historical events shaped its identity. Tourism and archaeology remain significant.`,
‏  "Morocco": `Morocco has vibrant cities like Marrakech and Fez. It has Amazigh and Arab cultural heritage. The Atlas Mountains and Sahara shape its landscape. Moroccan cuisine, music, and crafts are famous. Ancient medinas attract tourists. Architecture blends Islamic and traditional styles. Cultural festivals celebrate its rich heritage.`,
‏  "Algeria": `Algeria has rich Amazigh heritage and diverse landscapes. The Sahara Desert dominates much of its territory. Algiers is modern yet historically rich. Cuisine, music, and arts reflect tradition. Ancient Roman ruins are preserved. Cultural festivals highlight history and arts. Tourism is developing alongside natural resources.`,
‏  "Tunisia": `Tunisia has a rich Mediterranean culture and history. Carthage was a significant ancient civilization. Tunis is modern yet historically important. Beaches and archaeological sites attract tourists. Cuisine and music are celebrated. Traditional crafts continue to thrive. Education and cultural heritage are emphasized.`,
‏  "Libya": `Libya has ancient Greek and Roman sites. Tripoli and Benghazi are cultural centers. Sahara desert covers much of the country. Traditional music and crafts remain strong. Mediterranean coast supports fishing and trade. Oil drives the economy. Historical sites reflect diverse heritage.`,
‏  "Sudan": `Sudan has Nubian heritage and ancient civilizations. The Nile River shaped its history. Khartoum blends modernity with tradition. Traditional music, art, and crafts are important. Historical pyramids reflect ancient culture. Agriculture supports livelihoods. Cultural festivals preserve heritage.`,
‏  "Oman": `Oman preserves maritime and desert heritage. Muscat blends modernity with traditional architecture. Forts and castles highlight history. Festivals celebrate music, crafts, and cuisine. Economy relies on oil, trade, and tourism. Natural landscapes are diverse. Cultural preservation is a priority.`,
‏  "Qatar": `Qatar is a small nation with a rich culture. Doha is modern and cosmopolitan. Traditional crafts and heritage are preserved. Economy is based on oil, gas, and trade. International events attract global attention. Museums and art centers promote culture. Education and innovation are emphasized.`,
‏  "Bahrain": `Bahrain is an island nation with historic significance. Manama is the capital with modern developments. Traditional crafts and music are valued. Oil and trade support the economy. Archaeological sites are preserved. Festivals celebrate heritage. Tourism is developing alongside culture.`,
‏  "Kuwait": `Kuwait is a Gulf country with modern cities. Rich history and maritime heritage exist. Cuisine, music, and arts are important. Oil resources drive economic growth. Cultural festivals promote traditions. Architecture blends modern and traditional styles. Education and development are emphasized.`,
‏  "Yemen": `Yemen has ancient civilizations like Saba and Himyar. Sana'a is historically significant. Mountains and deserts shape landscapes. Traditional crafts and architecture are preserved. Cuisine and music reflect heritage. Trade routes shaped its past. Cultural festivals maintain traditions.`,
‏  "Djibouti": `Djibouti has a strategic location on the Red Sea. It has ancient cultural heritage. The landscape includes deserts and lakes. Traditional music and crafts are preserved. Economy relies on trade and ports. French and Arabic influence coexist. Tourism focuses on natural beauty.`,
‏  "Somalia": `Somalia has ancient civilizations along the coast. Mogadishu is a historic city. Pastoralism and trade shaped culture. Music and poetry are highly valued. Cuisine reflects local traditions. Coastal ports support economy. Historical heritage is preserved.`,
‏  "Comoros": `Comoros is an island nation with unique culture. Its history reflects Arab and African influences. Traditional music and dance thrive. Vanilla and spice trade shaped the economy. Islands are known for biodiversity. Heritage is preserved through festivals. Local crafts and cuisine are important.`,
‏  "Mauritania": `Mauritania has desert landscapes and rich heritage. Ancient trade routes passed through it. Traditional music, crafts, and storytelling are important. Arabic and African cultures blend. Economy relies on mining, trade, and livestock. Historical monuments are preserved. Cultural identity is valued.`};

‏const countryTextsAr = {


‏  "Egypt": `مصر لديها تاريخ عريق مع الأهرامات والفراعنة القدماء. نهر النيل شكل الحضارة لآلاف السنين عبر التاريخ. القاهرة تجمع بين الحياة الحديثة والتراث الثقافي العريق. المطبخ والموسيقى والفن المصري مشهور عالميًا. السياحة عنصر مهم جدًا في الاقتصاد المصري الحديث. المصريون القدماء تميزوا في العلوم والطب والهندسة. مصر تربط بين أفريقيا والشرق الأوسط ثقافيًا وجغرافيًا.`,
‏"Saudi Arabia": `المملكة العربية السعودية هي مهد الإسلام والثقافة الغنية. تحتوي على صحاري شاسعة ومعالم تاريخية. الرياض مدينة حديثة مع الحفاظ على التقاليد. النفط هو المحرك الاقتصادي الرئيسي. الشعر العربي والسرد والطعام مزدهر. الملايين يسافرون لأداء الحج سنويًا. طرق التجارة القديمة ربطتها بتاريخ المنطقة.`,
‏  "UAE": `الإمارات تحولت من صحراء إلى محور عالمي. دبي وأبوظبي تتميز بناطحات سحاب أيقونية. تقاليد البدو والبحر محفوظة. الاقتصاد قائم على النفط والسياحة والتجارة. الأحداث والمعارض الدولية تجذب الزوار. المؤسسات الثقافية تكرم التراث الإسلامي. القيادة تركز على الابتكار والتسامح والتقدم.`,
‏  "Jordan": `الأردن له تاريخ غني بما في ذلك البتراء وآثار الرومان. يربط الشرق الأوسط ولديه مناظر طبيعية متنوعة. عمان حديثة وتقليدية في آن واحد. المطبخ والضيافة الأردنية مشهورة. البحر الميت معجزة طبيعية. يحافظ على التراث الثقافي والمواقع التاريخية. السياحة وعلم الآثار مهمان للاقتصاد.`,
‏  "Lebanon": `لبنان مشهور بالجبال والساحل المتوسطي والتاريخ. بيروت مدينة نابضة بالحياة والثقافة. التراث الفينيقي شكل التجارة والملاحة القديمة. المطبخ اللبناني مشهور عالميًا. المهرجانات والموسيقى تحتفل بالتقاليد. الأدب والفنون العربية محل تقدير. السياحة جزء مهم من الاقتصاد.`,
‏  "Syria": `سوريا بها مدن قديمة مثل دمشق وحلب. تاريخها يمتد لحضارات الأراميين والرومان. الهندسة والفن السوري محل إعجاب. الحرف والموسيقى التقليدية مزدهرة. المطبخ يعكس التراث الثقافي الغني. طرق التجارة التاريخية عززت أهميتها. سوريا الحديثة تحافظ على الهوية الثقافية الفريدة.`,
‏  "Iraq": `العراق، موطن بلاد ما بين النهرين، يسمى مهد الحضارات. عاش فيه السومريون والأكاديون والبابليون. نهري دجلة والفرات شكلوا أراضي خصبة. بغداد مركز تاريخي للتعلم. الفن والأدب والعلوم ازدهرت. المطبخ والتقاليد ما زالت قوية. التراث الأثري يجذب العلماء والسياح.`,
‏  "Palestine": `فلسطين بها مواقع تاريخية مثل القدس وبيت لحم. كانت موطن الحضارة الكنعانية. أشجار الزيتون والحرف التقليدية كثيرة. التراث الثقافي محفوظ من خلال الموسيقى والشعر. المطبخ يعكس التقاليد المحلية. الأحداث التاريخية شكلت الهوية. السياحة وعلم الآثار مهمان.`,
‏  "Morocco": `المغرب به مدن نابضة بالحياة مثل مراكش وفاس. له تراث أمازيغي وعربي. جبال الأطلس والصحراء تشكل المناظر الطبيعية. المطبخ والموسيقى والحرف المغربية مشهورة. المدن القديمة تجذب السياح. الهندسة المعمارية تمزج الطراز الإسلامي والتقليدي. المهرجانات الثقافية تحتفل بالتراث.`,
‏  "Algeria": `الجزائر لها تراث أمازيغي غني ومناظر طبيعية متنوعة. الصحراء الكبرى تغطي معظم البلاد. الجزائر العاصمة حديثة وتاريخية. المطبخ والموسيقى والفنون تعكس التقليد. آثار رومانية قديمة محفوظة. المهرجانات الثقافية تسلط الضوء على التاريخ والفنون. السياحة تتطور جنبًا إلى جنب مع الموارد الطبيعية.`,
‏  "Tunisia": `تونس لها ثقافة وتاريخ متوسطي غني. قرطاج كانت حضارة قديمة مهمة. تونس العاصمة حديثة وتاريخية. الشواطئ والمواقع الأثرية تجذب السياح. المطبخ والموسيقى مشهورة. الحرف التقليدية مستمرة. التعليم والتراث الثقافي مهمان.`,
‏  "Libya": `ليبيا بها مواقع يونانية ورومانية قديمة. طرابلس وبنغازي مراكز ثقافية. الصحراء تغطي معظم البلاد. الموسيقى والحرف التقليدية قوية. الساحل يدعم الصيد والتجارة. النفط يدعم الاقتصاد. المواقع التاريخية تعكس التراث المتنوع.`,
‏  "Sudan": `السودان له تراث نوبى وحضارات قديمة. نهر النيل شكل التاريخ. الخرطوم تجمع الحداثة والتقاليد. الموسيقى والفن والحرف مهمة. الأهرامات تعكس الثقافة القديمة. الزراعة تدعم المعيشة. المهرجانات الثقافية تحافظ على التراث.`,
‏  "Oman": `عمان تحافظ على التراث البحري والصحراوي. مسقط تجمع الحداثة والهندسة التقليدية. الحصون والقصور تعكس التاريخ. المهرجانات تحتفل بالموسيقى والحرف والمطبخ. الاقتصاد يعتمد على النفط والتجارة والسياحة. المناظر الطبيعية متنوعة. الحفاظ على الثقافة أولوية.`,
‏  "Qatar": `قطر دولة صغيرة لها ثقافة غنية. الدوحة حديثة ومتعددة الثقافات. الحرف والتراث محفوظة. الاقتصاد قائم على النفط والغاز والتجارة. الأحداث الدولية تجذب العالم. المتاحف ومراكز الفن تعزز الثقافة. التعليم والابتكار مهمان.`,
‏  "Bahrain": `البحرين جزيرة لها أهمية تاريخية. المنامة عاصمة حديثة. الحرف والموسيقى محفوظة. النفط والتجارة يدعمون الاقتصاد. المواقع الأثرية محفوظة. المهرجانات تحتفل بالتراث. السياحة تتطور جنبًا إلى جنب مع الثقافة.`,
‏  "Kuwait": `الكويت دولة خليجية بها مدن حديثة. لها تاريخ وتراث بحري. المطبخ والموسيقى والفنون مهمة. النفط يدعم النمو الاقتصادي. المهرجانات الثقافية تعزز التقاليد. الهندسة المعمارية تمزج الحداثة والتقليد. التعليم والتطوير مهمان.`,
‏  "Yemen": `اليمن له حضارات قديمة مثل سبأ وحمير. صنعاء تاريخية. الجبال والصحراء تشكل المناظر الطبيعية. الحرف والهندسة التقليدية محفوظة. المطبخ والموسيقى يعكس التراث. طرق التجارة شكلت الماضي. المهرجانات الثقافية تحافظ على التقاليد.`,
‏  "Djibouti": `جيبوتي لها موقع استراتيجي على البحر الأحمر. لها تراث ثقافي قديم. المناظر الطبيعية تشمل صحاري وبحيرات. الموسيقى والحرف محفوظة. الاقتصاد يعتمد على التجارة والموانئ. التأثير الفرنسي والعربي موجود. السياحة تركز على الطبيعة.`,
‏  "Somalia": `الصومال بها حضارات قديمة على الساحل. مقديشو مدينة تاريخية. الرعي والتجارة شكلوا الثقافة. الموسيقى والشعر قيمة عالية. المطبخ يعكس التقاليد. الموانئ الساحلية تدعم الاقتصاد. التراث التاريخي محفوظ.`,
‏  "Comoros": `جزر القمر دولة جزيرة لها ثقافة فريدة. تاريخها يعكس تأثير العرب وأفريقيا. الموسيقى والرقص التقليدي مزدهر. تجارة الفانيليا والتوابل شكلت الاقتصاد. الجزر مشهورة بالتنوع البيولوجي. التراث محفوظ من خلال المهرجانات. الحرف والمطبخ المحلي مهمان.`,
‏  "Mauritania": `موريتانيا بها صحراء وتراث غني. مرت بها طرق التجارة القديمة. الموسيقى والحرف والسرد مهمة. الثقافات العربية والأفريقية تمتزج. الاقتصاد يعتمد على التعدين والتجارة والثروة الحيوانية. الآثار التاريخية محفوظة. الهوية الثقافية قيمة مهمة.`
  
};

// دائرة الدول
‏const circle = document.getElementById("country-circle");
‏const centerX = 300;
‏const centerY = 300;
‏const radius = 220;

‏countries.forEach((country,index)=>{
‏  const angle = (index / countries.length) * 2 * Math.PI;
‏  const x = centerX + radius*Math.cos(angle)-60;
‏  const y = centerY + radius*Math.sin(angle)-60;

‏  const btn = document.createElement("button");
‏  btn.className = "country-btn";
‏  btn.innerText = country;
‏  btn.style.left=`${x}px`;
‏  btn.style.top=`${y}px`;
‏  circle.appendChild(btn);

‏  setTimeout(()=>{
‏    btn.style.opacity="1";
‏    btn.style.transform="scale(1)";
‏  },index*100);

‏  btn.addEventListener("click",()=>{
‏    showCountry(country);
  });
});

// عرض الدولة
‏function showCountry(country){
‏  document.getElementById("main-page").classList.add("hidden");
‏  document.getElementById("country-page").classList.remove("hidden");

‏  const nameEl = document.getElementById("country-name");
‏  const textEl = document.getElementById("country-text");

‏  nameEl.innerHTML="";
‏  textEl.innerHTML="";

  // كتابة اسم الدولة
‏  let j=0;
‏  function typeName(){
‏    if(j<country.length){
‏      nameEl.innerHTML+=country[j];
‏      j++;
‏      setTimeout(typeName,100);
    }
  }
‏  typeName();

  // كتابة النص
‏  const words = countryTextsEn[country].split(" ");
‏  let k=0;
‏  function typeWords(){
‏    if(k<words.length){
‏      textEl.innerHTML+=words[k]+" ";
‏      k++;
‏      setTimeout(typeWords,60);
    }
  }
‏  typeWords();

‏  // Translate
‏  const translateBtn=document.getElementById("translate-btn");
‏  translateBtn.dataset.translated="no";

‏  translateBtn.onclick=()=>{
‏    textEl.innerHTML="";
‏    if(translateBtn.dataset.translated==="no"){
‏      const words = countryTextsAr[country].split(" ");
‏      let k=0;
‏      function typeWordsAr(){
‏        if(k<words.length){
‏          textEl.innerHTML+=words[k]+" ";
‏          k++;
‏          setTimeout(typeWordsAr,60);
        }
      }
‏      typeWordsAr();
‏      translateBtn.dataset.translated="yes";
‏    }else{
‏      const words = countryTextsEn[country].split(" ");
‏      let k=0;
‏      function typeWordsEn(){
‏        if(k<words.length){
‏          textEl.innerHTML+=words[k]+" ";
‏          k++;
‏          setTimeout(typeWordsEn,60);
        }
      }
‏      typeWordsEn();
‏      translateBtn.dataset.translated="no";
    }
  };
}

‏// Back
‏document.getElementById("back-btn").addEventListener("click",()=>{
‏  document.getElementById("country-page").classList.add("hidden");
‏  document.getElementById("main-page").classList.remove("hidden");
});

// زر Ask
‏document.getElementById("main-ask-btn").addEventListener("click",()=>{
‏  document.getElementById("main-page").classList.add("hidden");
‏  document.getElementById("ask-page").classList.remove("hidden");
});

// رجوع من Ask
‏document.getElementById("ask-back-btn").addEventListener("click",()=>{
‏  document.getElementById("ask-page").classList.add("hidden");
‏  document.getElementById("main-page").classList.remove("hidden");
});

// الأسئلة (22)
‏const qaData={
  "ما هو اسم حضارة دولة مصر؟":"الحضارة الفرعونية",
  "ما هو اسم حضارة دولة العراق؟":"حضارة بلاد الرافدين",
  "ما هو اسم حضارة دولة سوريا؟":"الحضارة الآرامية",
  "ما هو اسم حضارة دولة لبنان؟":"الحضارة الفينيقية",
  "ما هو اسم حضارة دولة الأردن؟":"الحضارة النبطية",
  "ما هو اسم حضارة دولة فلسطين؟":"الحضارة الكنعانية",
  "ما هو اسم حضارة دولة السعودية؟":"حضارة شبه الجزيرة العربية",
  "ما هو اسم حضارة دولة اليمن؟":"حضارة سبأ وحمير",
  "ما هو اسم حضارة دولة عمان؟":"حضارة مجان",
  "ما هو اسم حضارة دولة الإمارات؟":"حضارة أم النار",
  "ما هو اسم حضارة دولة قطر؟":"حضارة دلمون",
  "ما هو اسم حضارة دولة البحرين؟":"حضارة دلمون",
  "ما هو اسم حضارة دولة الكويت؟":"حضارة دلمون",
  "ما هو اسم حضارة دولة المغرب؟":"الحضارة الأمازيغية",
  "ما هو اسم حضارة دولة الجزائر؟":"الحضارة الأمازيغية",
  "ما هو اسم حضارة دولة تونس؟":"الحضارة القرطاجية",
  "ما هو اسم حضارة دولة ليبيا؟":"الحضارة الليبية القديمة",
  "ما هو اسم حضارة دولة السودان؟":"الحضارة النوبية",
  "ما هو اسم حضارة دولة الصومال؟":"حضارة بلاد بونت",
  "ما هو اسم حضارة دولة جيبوتي؟":"حضارة بلاد بونت",
  "ما هو اسم حضارة دولة جزر القمر؟":"الحضارة السواحلية",
  "ما هو اسم حضارة دولة موريتانيا؟":"حضارة شنقيط"
};

// البحث
‏document.getElementById("search-btn").addEventListener("click",()=>{
‏  const q=document.getElementById("question-input").value.trim();
‏  const ans=document.getElementById("answer-text");

‏  if(qaData[q]){
‏    ans.innerText=qaData[q];
‏  }else{
‏    ans.innerText="لا يوجد جواب لهذا السؤال.";
  }
});