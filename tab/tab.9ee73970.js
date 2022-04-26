const topic = [
    "Content 1",
    "Content 2",
    "Content 3"
];
const content = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nulla at saepe facilis optio, id corrupti quidem, quos expedita inventore tempore, reiciendis nobis? Laudantium, ex ratione odio amet inventore perferendis.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cum maxime nam voluptatem illum accusantium minus dolorum, fugit cumque voluptas alias similique impedit quo earum vero illo aliquam optio veniam?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint possimus voluptatum, obcaecati ut illo voluptas vero, fugit ipsam consectetur exercitationem eius deserunt, harum provident cupiditate non voluptatem corrupti neque dolore."
];
const topic1_1 = document.getElementById("topic1-1");
const topic1_2 = document.getElementById("topic1-2");
const topic1_3 = document.getElementById("topic1-3");
const description1 = document.getElementById("description1");
const topicID1 = document.getElementById("topic1");
topic1_1.addEventListener("click", function() {
    description1.innerHTML = content[0];
    topicID1.innerHTML = topic[0];
    topic1_1.style.borderBottom = "solid 4px #808080";
    topic1_2.style.borderBottom = "";
    topic1_3.style.borderBottom = "";
});
topic1_2.addEventListener("click", function() {
    description1.innerHTML = content[1];
    topicID1.innerHTML = topic[1];
    topic1_1.style.borderBottom = "";
    topic1_2.style.borderBottom = "solid 4px #808080";
    topic1_3.style.borderBottom = "";
});
topic1_3.addEventListener("click", function() {
    description1.innerHTML = content[2];
    topicID1.innerHTML = topic[2];
    topic1_1.style.borderBottom = "";
    topic1_2.style.borderBottom = "";
    topic1_3.style.borderBottom = "solid 4px #808080";
});
///////////tap 2//////////////////////////////////////////////////////////////
const topic2_1 = document.getElementById("topic2-1");
const topic2_2 = document.getElementById("topic2-2");
const topic2_3 = document.getElementById("topic2-3");
const description2 = document.getElementById("description2");
const topicID2 = document.getElementById("topic2");
topic2_1.addEventListener("click", function() {
    description2.innerHTML = content[0];
    topicID2.innerHTML = topic[0];
    topic2_1.style.backgroundColor = "#808080";
    topic2_2.style.backgroundColor = "";
    topic2_3.style.backgroundColor = "";
});
topic2_2.addEventListener("click", function() {
    description2.innerHTML = content[1];
    topicID2.innerHTML = topic[1];
    topic2_1.style.backgroundColor = "";
    topic2_2.style.backgroundColor = "#808080";
    topic2_3.style.backgroundColor = "";
});
topic2_3.addEventListener("click", function() {
    description2.innerHTML = content[2];
    topicID2.innerHTML = topic[2];
    topic2_1.style.backgroundColor = "";
    topic2_2.style.backgroundColor = "";
    topic2_3.style.backgroundColor = "#808080";
});

//# sourceMappingURL=tab.9ee73970.js.map
