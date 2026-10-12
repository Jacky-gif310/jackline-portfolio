const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle?.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});
mainNav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded", "false");
}));

const chatMessages = document.getElementById("chatMessages");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const clearChat = document.getElementById("clearChat");

const answers = [
  { keys: ["project", "work", "built", "portfolio", "case study"], answer: "Jackline’s featured work includes:\n• Content Opportunity Scoring — exploring search metrics to prioritise pages for review.\n• SHOPPULSE — a customer feedback analytics concept with visual summaries.\n• Weekly Research Scout — a draft-only AI/SEO research workflow concept.\n• Data analysis and dashboard experiments.\nUse the project links on this page to explore the available demos and repositories." },
  { keys: ["skill", "technical", "technology", "languages", "stack", "tools"], answer: "The portfolio lists Python, SQL, JavaScript, PHP, HTML and CSS, along with data analysis, data visualisation, machine-learning fundamentals, AI-assisted workflow design, and database-backed web applications. The exact tools used vary by project." },
  { keys: ["role", "job", "career", "opportunity", "hire", "intern", "position"], answer: "Jackline is interested in internships, entry-level opportunities, and collaborative projects involving data analysis, machine learning, AI-assisted automation, and web development. For a specific role, share the job description and compare its requirements with the projects and skills shown here." },
  { keys: ["education", "graduate", "degree", "study", "qualification"], answer: "Jackline is a Statistics and IT graduate. Her portfolio focuses on applying analytical thinking and technical skills to practical projects." },
  { keys: ["approach", "process", "method", "how do you work"], answer: "Her approach is to clarify the decision first, inspect and validate the evidence, build a practical tool or analysis, and explain both what the result suggests and its limitations." },
  { keys: ["contact", "email", "linkedin", "github", "reach", "connect"], answer: "You can connect through the GitHub and LinkedIn links in the Contact section. The email link is a placeholder and should be updated by Jackline with her preferred professional email before publishing." },
  { keys: ["search", "seo", "ranking", "content opportunity", "discoverability"], answer: "The Content Opportunity Scoring case study explores signals such as clicks, impressions, click-through rate, average position, position trends, and content age to help prioritise pages for human review. Any displayed scores are illustrative, and a model score does not guarantee ranking improvements." },
  { keys: ["shoppulse", "customer", "feedback", "dashboard"], answer: "SHOPPULSE is a customer feedback analytics concept for comparing shopping experiences across online and retail channels. It highlights topics such as delivery, pricing, product quality, and customer support. The live demo and source repository are linked in its project card." },
  { keys: ["ai", "assistant", "artificial intelligence", "automation"], answer: "Jackline is interested in AI-assisted automation and practical workflows. The Weekly Research Scout is described as draft-only: it organises findings for human review rather than automatically publishing content. This on-page assistant itself is a simple FAQ matcher, not a generative AI model." }
];

function answerQuestion(question) {
  const q = question.toLowerCase().replace(/[^\p{L}\p{N}\s-]/gu, " ");
  let best = null, bestScore = 0;
  for (const item of answers) {
    const score = item.keys.reduce((n, key) => n + (q.includes(key) ? Math.max(1, key.split(" ").length) : 0), 0);
    if (score > bestScore) { best = item; bestScore = score; }
  }
  if (best) return best.answer;
  return "I can help with questions about Jackline’s projects, skills, education, approach, search-intelligence work, or career interests. Try asking “What projects has Jackline built?” or use the Contact section to connect directly.";
}
function addMessage(text, type) {
  const node = document.createElement("div");
  node.className = `chat-message ${type === "user" ? "user-message" : "assistant-message"}`;
  node.textContent = text;
  chatMessages.appendChild(node);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}
function ask(question) {
  const clean = question.trim();
  if (!clean) return;
  addMessage(clean, "user");
  addMessage(answerQuestion(clean), "assistant");
}
chatForm?.addEventListener("submit", event => {
  event.preventDefault();
  ask(chatInput.value);
  chatInput.value = "";
  chatInput.focus();
});
document.getElementById("suggestionList")?.addEventListener("click", event => {
  const button = event.target.closest("button[data-question]");
  if (button) ask(button.dataset.question);
});
clearChat?.addEventListener("click", () => {
  chatMessages.replaceChildren();
  addMessage("Hi! I can help you explore Jackline’s portfolio. What would you like to know?", "assistant");
});
