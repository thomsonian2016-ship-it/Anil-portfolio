const skills = [
  {
    name: "JavaScript",
    description: "Logic, State Management, DOM manipulation"
  },
  {
    name: "HTML & Semantic Markup",
    description: "Accessible, Structured, SEO-friendly markup"
  },
  {
    name: "CSS Layout (Flexbox & Grid)",
    description: "Responsive layouts with clean spacing"
  },
  {
    name: "API Integration",
    description: "Async/await and logic-driven data handling"
  }
];
let skillHTML ='';
skills.forEach((skill)=>{
    skillHTML += `
    <article class="skill-card">
        <h3>${skill.name}</h3>
        <p>${skill.description}</p>
    </article>
    `;
});

document.querySelector('.skills-container').innerHTML=skillHTML;

