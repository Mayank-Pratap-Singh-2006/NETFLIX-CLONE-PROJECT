const translations = {
  English: {
    tagline: "Unlimited movies,<br>shows and more",
    price: "Starts at ₹149. Cancel at any time.",
    subscription:
      "Ready to watch? Enter your email to create or restart your membership.",
    getStartedBtn: "Get Started >",
  },

  Hindi: {
    tagline: "अनलिमिटेड फ़िल्में,<br>शो और बहुत कुछ",
    price: "₹149 से शुरू। कभी भी कैंसिल करें।",
    subscription:
      "देखने के लिए तैयार हैं? अपनी सदस्यता शुरू करने या दोबारा चालू करने के लिए ईमेल दर्ज करें।",
    getStartedBtn: "शुरू करें >",
  },
};

const languageSelect = document.getElementById("language");

languageSelect.addEventListener("change", function () {
  const selected = languageSelect.value;
  const data = translations[selected];

  document.getElementById("tagline").innerHTML = data.tagline;
  document.getElementById("price").innerText = data.price;
  document.getElementById("subscription").innerText = data.subscription;
  document.getElementById("getStartedBtn").innerText = data.getStartedBtn;
});
