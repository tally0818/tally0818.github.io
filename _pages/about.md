---
layout: editorial
permalink: /
title: "About"
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<section class="profile-hero" aria-labelledby="profile-name">
  <div class="hero-copy">
    <h1 id="profile-name">Chanuk Lee</h1>
    <div class="hero-bio">
      <p>Hi, I’m Chanuk, a junior undergraduate at <a href="https://cs.kaist.ac.kr">KAIST</a>, advised by Prof. <a href="http://www.sungjuhwang.com">Sung Ju Hwang</a> at the <a href="https://www.mlai-kaist.com">MLAI Lab</a>.</p>
      <p>My research focuses on building intelligent systems that make effective use of limited resources. I study how to improve reasoning performance while reducing the computation and supervision required for post-training [<a href="{{ '/publications/' | relative_url }}#paper-sage" aria-label="Publication 1: SAGE">1</a>, <a href="{{ '/publications/' | relative_url }}#paper-nudgerl" aria-label="Publication 2: NudgeRL">2</a>, <a href="{{ '/publications/' | relative_url }}#paper-surprising-success-repeated-failure" aria-label="Publication 3: Surprising Success, Repeated Failure">3</a>], and how models can recognize when their own capabilities are insufficient and selectively leverage external resources at inference time <a href="{{ '/publications/' | relative_url }}#paper-knowing-when-thinking-is-not-enough" aria-label="Publication 4: Knowing When Thinking Is Not Enough">[4]</a>.</p>
      <p>More broadly, I am interested in learning and inference systems that allocate computation, information, and external resources where they are most useful. This includes efficient post-training, test-time scaling, tool-augmented reasoning, and self-improving agents that learn through interaction.</p>
    </div>
    <nav class="contact-links" aria-label="Contact and academic profiles">
      <a href="mailto:{{ site.author.email }}">Email</a>
      <a href="{{ site.author.googlescholar | escape }}">Google Scholar</a>
      <a href="https://github.com/{{ site.author.github }}">GitHub</a>
      <a href="https://www.linkedin.com/in/{{ site.author.linkedin }}">LinkedIn</a>
    </nav>
  </div>
  <figure class="hero-portrait">
    <div class="portrait-frame"><img src="{{ '/images/profile-outdoors.jpeg' | relative_url }}" alt="Chanuk Lee" width="750" height="1000" fetchpriority="high"></div>
  </figure>
</section>

<section class="news-strip" aria-labelledby="news-heading">
  <h2 id="news-heading">News</h2>
  <ul>
    <li><time datetime="2026-09">Sep 2026</time><span><a href="https://arxiv.org/pdf/2609.34327">FlyBy</a> and <a href="https://arxiv.org/pdf/2609.33781">EAPO</a> are now on arXiv.</span></li>
    <li><time datetime="2026-09">Sep 2026</time><span><a href="https://arxiv.org/pdf/2605.15726">NudgeRL</a> has been accepted to the <strong>MATH-AI@NeurIPS 2026</strong> workshop! <span aria-label="celebration">🎉</span></span></li>
    <li><time datetime="2026-05">May 2026</time><span><a href="https://arxiv.org/pdf/2605.15726">NudgeRL</a> is now on arXiv.</span></li>
    <li><time datetime="2026-05">May 2026</time><span><a href="https://arxiv.org/pdf/2605.18864">SAGE</a> has been accepted to <strong>ICML 2026</strong>! <span aria-label="celebration">🎉</span></span></li>
  </ul>
</section>

<section class="research-section" aria-labelledby="research-heading">
  <div class="section-heading"><h2 id="research-heading">Selected publications</h2><a class="text-link" href="{{ '/publications/' | relative_url }}">All publications</a></div>
  <p class="section-note">* denotes equal contribution · † denotes corresponding authors / equal advising</p>
  {% assign selected_publications = site.data.publications | where: 'selected', true %}
  <div class="paper-list">{% for paper in selected_publications %}{% assign selected_number = forloop.index | prepend: 'S' %}{% include editorial-paper.html paper=paper number=selected_number %}{% endfor %}</div>
</section>

<div class="background-grid">
  <section aria-labelledby="experience-heading">
    <div class="section-heading"><h2 id="experience-heading">Experience</h2></div>
    <div class="background-entry"><p class="entry-date">Oct 2025 — Present</p><h3>KAIST MLAI Lab</h3><p>Undergraduate Research Intern</p></div>
  </section>
  <section aria-labelledby="education-heading">
    <div class="section-heading"><h2 id="education-heading">Education</h2></div>
    <div class="background-entry"><p class="entry-date">Mar 2022 — Present</p><h3>KAIST</h3><p>B.S. in Computer Science<br>Minor in Mathematics</p><p class="entry-note">Expected graduation 2028. Mandatory military service in the ROK Air Force, 2024–2025.</p></div>
    <div class="background-entry"><p class="entry-date">Mar 2020 — Feb 2022</p><h3>Hansung Science High School</h3><p>Early graduation (2 years)</p></div>
  </section>
  <section aria-labelledby="service-heading">
    <div class="section-heading"><h2 id="service-heading">Academic Service</h2></div>
    <div class="service-entry">
      <h3>Reviewer</h3>
      <ul>
        <li>MATH-AI@NeurIPS 2026</li>
      </ul>
    </div>
  </section>
</div>
