const colors = ["#f8e0dc", "#f2c6b4", "#efb5a5", "#e29a8a", "#d47f70", "#f4d3c4", "#e8b9ac", "#e5a699", "#d78a7d", "#c96f63"];
const messages = [
"ضحكتك تشرح القلب، لا تطفيها!",
"ماكو شي يستاهل زعلك كبر راسك وعيش",
"ربي يرزقك راحة البال ",
"إنت ذهب، وماكو مثلك!",
"وجهك منور وكل الناس تحبك",
"ماكو مثل روحك الحلوة، لا تتغير",
"العالم يحتاج ضحكتك خليها  دائما موجوده",
"كل شيء يصير لسبب، وإذا ما ربحت اليوم، فباجر  تربح",
"ما دام اكو امل بداخلك كل شي راح يتحقق",
"الفرح موجود بالتفاصيل الصغيرة، ركز بيها   ",
"المستقبل احسن مما تتصور، بس اوثق بنفسك  ",
"لا تخاف  تغير مرات  هو الطريق حتى تلكى نسخة افضل ",   
"الحياة حلوة بس لازم  تتعلم شون  تشوفها بالطريقه الصح ",
"الفرصة  موجودة، لازم بس تفتح كلبك الها",
"شوكت متتعب اعرف  حتبدع بس استمر ",
"أنت تكدر  على كلشي  ، بس شد حيلك",
"كل شيء  بالدنياا اله معنى، حتى من تكون تعبان ",
"المستقبل كدامك لا تخاف جيت وهي تصفى ",
"كل لحظة بيها فرصة جديدة حتى تصير  أفضل",
"النجاح  بأصرارك وهمتك   وانت تكدر",
"من تفتح كلبك للأمل، تلكى الفرص الي جانت مضمومة",
"الحياة مو  تنتظر الفرص كوم واخلقها للفرصه",
"كل خطوة صغيرة تقربك  من النجاح، فلا تستعجل"
];

const jar = document.getElementById("jar");
const jarLid = document.querySelector(".jar-lid");
const messageBox = document.getElementById("messageBox");
let hearts = [];

for (let i = 0; i < 60; i++) {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.setProperty("--color", colors[i % colors.length]);
    heart.style.top = `${Math.random() * 240 + 10}px`;
    heart.style.left = `${Math.random() * 140 + 5}px`;
    hearts.push(heart);
    jar.appendChild(heart);
}

function releaseHeart() {
    jar.classList.add("shake");
    jarLid.classList.add("shake");

    hearts.forEach((heart, index) => {
        setTimeout(() => {
            const randomX = Math.random() * 20 - 10;
            heart.style.transform = `translateX(${randomX}px)`;
        }, index * 50);
    });

    setTimeout(() => {
        jar.classList.remove("shake");
        jarLid.classList.remove("shake");
        showHeartMessage();
    }, 1500);
}

function showHeartMessage() {
    let index = Math.floor(Math.random() * messages.length);
    messageBox.innerText = messages[index];
    messageBox.style.display = "flex";
    messageBox.style.border="4px solid "
    messageBox.style.width = "500px";  
    messageBox.style.height = "500px";  
    messageBox.style.transform = "translate(-50%, -50%) scale(1)";

    setTimeout(() => {
        messageBox.style.transform = "translate(-50%, -50%) scale(0)";
        resetHearts();
    }, 150000);
}

function resetHearts() {
    hearts.forEach(heart => {
        heart.style.transform = "translateX(0)";
    });
}
