---
title: Questions Hub
outline: false
aside: false
sidebar: false
prev: false
next: false
---

# Questions Hub

Find answers to common questions about Gumnut and collaborative editing.

<div class="questions-page">

## Frequently Asked Questions

<div class="faq-container">
  <div class="faq-item">
    <button class="faq-question" @click="toggleFaq($event)">
      How does Gumnut integrate with my SaaS?
      <span class="faq-icon">+</span>
    </button>
    <div class="faq-answer" ref="answer1">
      <p>Gumnut hosts a 'global session' for each of your document which is joined behind-the-scenes via WebSocket.</p>
      <p>Add a React or similar library to your front-end, which acts a bit like React Hook Form but with collaborative superpowers. Your backend needs to provide a signed JWT, signed such that Gumnut can verify the end-user and they can join the session.</p>
    </div>
  </div>

  <div class="faq-item">
    <button class="faq-question" @click="toggleFaq($event)">
      What happens to my data?
      <span class="faq-icon">+</span>
    </button>
    <div class="faq-answer" ref="answer2">
      <p>Gumnut holds your data during a global session, and stores long-term snapshots over time to keep your audit trail ready. This is stored on AWS in a region of your choice (if Enterprise, wherever your data is hosted).</p>
      <p>Gumnut can also be self-hosted, connect to a database platform you provide for long-term storage, and even be fully-encrypted so even Gumnut cannot see it.</p>
    </div>
  </div>

  <div class="faq-item">
    <button class="faq-question" @click="toggleFaq($event)">
      How do you differ from other collaborative platforms?
      <span class="faq-icon">+</span>
    </button>
    <div class="faq-answer" ref="answer3">
      <p>Gumnut has a novel primitive; we host an edit session until your users commit. Other comparable platforms provide generic "collaborative rooms" that are not designed for the completion step of editing HTML forms.</p>
      <p>We go to where your technology is: you don't need to change your database, stack or swap to rich-text editors. Your site is brand-new? Great. Your site is a 10-yr old multi-page app using jQuery? We support you too.</p>
    </div>
  </div>
</div>

<div class="questions-cta">

## Still Have Questions?

If you can't find the answer you're looking for, [contact our support team](mailto:support@gumnut.dev) or join our [Discord community](https://discord.gg/yu3u87AUNR).

</div>

</div>

<script setup>
import { ref, onMounted } from 'vue'

const answer1 = ref(null)
const answer2 = ref(null)
const answer3 = ref(null)

function toggleFaq(event) {
  const button = event.currentTarget
  const answer = button.nextElementSibling
  const icon = button.querySelector('.faq-icon')
  
  if (answer.style.display === 'block') {
    answer.style.display = 'none'
    icon.textContent = '+'
    button.classList.remove('active')
  } else {
    answer.style.display = 'block'
    icon.textContent = '−'
    button.classList.add('active')
  }
}
</script>

<style>
.questions-page {
  max-width: 800px;
  margin: 0 auto;
}

.faq-container {
  margin: 2rem 0;
}

.faq-item {
  margin-bottom: 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  overflow: hidden;
}

.faq-question {
  width: 100%;
  padding: 1.5rem;
  background: var(--vp-c-bg);
  border: none;
  text-align: left;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.2s ease;
}

.faq-question:hover {
  background: var(--vp-c-bg-soft);
}

.faq-question.active {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-brand);
}

.faq-icon {
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--vp-c-brand);
  transition: transform 0.2s ease;
}

.faq-answer {
  display: none;
  padding: 0 1.5rem 1.5rem;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

.faq-answer p {
  margin-bottom: 1rem;
}

.faq-answer p:last-child {
  margin-bottom: 0;
}

.questions-cta {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1.5rem;
  margin: 2rem 0;
  text-align: center;
}

.questions-cta h2 {
  margin-top: 0;
  padding-top: 0;
  border-top: none;
  color: var(--vp-c-text-1);
}

.questions-cta p {
  color: var(--vp-c-text-2);
}

.questions-cta a {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-weight: 600;
}

.questions-cta a:hover {
  color: var(--vp-c-brand-2);
}
</style>
