---
permalink: /
title: "Rubin Wei"
excerpt: "Rubin Wei — Research Homepage"
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<div class="rubin-home">
  <section class="rubin-hero" id="about">
    <aside class="rubin-profile" aria-label="Rubin Wei profile">
      <div class="rubin-profile__portrait">
        <img src="{{ '/images/profile.png' | relative_url }}" alt="Rubin Wei" width="360" height="360">
        <span aria-hidden="true"></span>
      </div>
      <h1 class="rubin-profile__name">Rubin Wei</h1>
      <p class="rubin-profile__caption">Ph.D. Student · SJTU</p>
    </aside>

    <div class="rubin-hero__copy">
      <p class="rubin-hero__lead">
        I’m a first-year Ph.D student in Computer Science at the
        <a href="https://soai.sjtu.edu.cn/">School of Artificial Intelligence, Shanghai Jiao Tong University (SJTU)</a>,
        advised by Prof. <a href="https://hantek.github.io/">Zhouhan Lin</a> in the
        <a href="https://github.com/LUMIA-Group">Language Understanding and Machine Intelligence Algorithms (LUMIA) Group</a>.
        Previously, I received my B.E. in Information Security from <a href="https://www.whu.edu.cn/">Wuhan University</a>.
      </p>
      <p class="rubin-hero__research">
        My research centers on <strong>memory, pretraining, and architectures</strong> for large language models and agents.
      </p>
    </div>

    <div class="research-thread" aria-label="Research interests">
      <article>
        <div><strong>Long-Term Memory</strong><p>Training memory modules to internalize and retain knowledge from large-scale training corpora.</p></div>
      </article>
      <article>
        <div><strong>Memory-Augmented Architectures</strong><p>Designing memory-augmented models and pretraining paradigms for efficient and adaptive knowledge access.</p></div>
      </article>
      <article>
        <div><strong>Pretraining &amp; Model Architectures</strong><p>Advancing pretraining methods and model architectures for foundation models.</p></div>
      </article>
    </div>

    <div class="rubin-links" aria-label="Profiles and contact">
      <a href="mailto:weirubinn@gmail.com" aria-label="Email" title="Email"><i class="fa-solid fa-envelope" aria-hidden="true"></i></a>
      <a href="https://scholar.google.com/citations?user=ryJdVf4AAAAJ&amp;hl=zh-CN" aria-label="Google Scholar" title="Google Scholar"><i class="fa-solid fa-graduation-cap" aria-hidden="true"></i></a>
      <a href="https://github.com/Rubin-Wei" aria-label="GitHub" title="GitHub"><i class="fa-brands fa-github" aria-hidden="true"></i></a>
      <a href="https://www.linkedin.com/in/rubin-wei-41122737b/" aria-label="LinkedIn" title="LinkedIn"><i class="fa-brands fa-linkedin-in" aria-hidden="true"></i></a>
      <a href="https://twitter.com/binnn1102" aria-label="X" title="X"><i class="fa-brands fa-x-twitter" aria-hidden="true"></i></a>
    </div>
  </section>

  <section class="rubin-section rubin-news" id="news">
    <header class="rubin-section__header rubin-section__header--compact">
      <h2>News</h2>
    </header>
    <div class="news-list news-list--selected">
      <article class="news-list__opportunity"><time>Open</time><p>I am currently seeking <em>research internship opportunities</em> with <strong>foundation model teams</strong>, especially in pretraining.</p></article>
      <article><time>2026.08</time><p><em>Intern-S2-Preview</em> technical report released.</p></article>
      <article><time>2026.07</time><p><em>Memory Decoder at Scale</em> released.</p></article>
      <article><time>2026.07</time><p><em>MemSFT</em> released.</p></article>
      <article><time>2026.01</time><p><em>MLP Memory</em> accepted to <strong>ICLR 2026</strong>.</p></article>
      <article><time>2025.09</time><p><em>Memory Decoder</em> accepted to <strong>NeurIPS 2025</strong>.</p></article>
    </div>
  </section>

  <section class="rubin-section rubin-work" id="research">
    <header class="rubin-section__header">
      <h2>Selected Publications</h2>
    </header>

    <p class="all-publications">All publications on <a href="https://scholar.google.com/citations?user=ryJdVf4AAAAJ&amp;hl=en">Google Scholar</a>.</p>

    <div class="project-list" id="publications">
      <h3 class="publication-year">2026</h3>
      <article class="project-card project-card--intern">
        <a class="project-card__visual" href="https://arxiv.org/abs/2608.13505" aria-label="Read Intern-S2-Preview on arXiv">
          <span class="project-card__badge project-card__badge--report">Technical Report · 2026</span>
          <img src="{{ '/images/publications/intern-s2-memory.svg' | relative_url }}" alt="Memory Decoder extension architecture for Intern-S2-Preview-397B" loading="lazy">
        </a>
        <div class="project-card__copy">
          <h3>Intern-S2-Preview: Scientific Agentic Foundation Model</h3>
          <p class="project-card__authors">Intern-S2-Preview Team, Shanghai AI Laboratory</p>
          <p class="project-card__venue">Technical Report, 2026</p>
          <div class="project-card__links">
            <a class="project-link project-link--paper" href="https://arxiv.org/abs/2608.13505">arXiv</a>
            <a class="project-link project-link--hf" href="https://huggingface.co/internlm/Intern-S2-Preview">Hugging Face</a>
          </div>
        </div>
      </article>

      <article class="project-card project-card--scale">
        <a class="project-card__visual" href="https://rubin-wei.github.io/memory-decoder-at-scale/" aria-label="Open the Memory Decoder at Scale project page">
          <span class="project-card__badge project-card__badge--preprint">Preprint · 2026</span>
          <img src="{{ '/images/publications/memory-decoder-scale-overview.png' | relative_url }}" alt="Training and inference overview for Memory Decoder at Scale" loading="lazy">
        </a>
        <div class="project-card__copy">
          <h3>Memory Decoder at Scale: A Pretrained, Parametric Long-Term Memory</h3>
          <p class="project-card__authors"><strong>Rubin Wei</strong>, Jiaqi Cao, Jiarui Wang, Junming Zhang, Qipeng Guo, Bowen Zhou, Zhouhan Lin</p>
          <p class="project-card__venue">Preprint, 2026</p>
          <div class="project-card__links">
            <a class="project-link project-link--paper" href="https://arxiv.org/abs/2607.27919">arXiv</a>
            <a class="project-link project-link--code" href="https://github.com/LUMIA-Group/MemoryDecoder-at-Scale">Code</a>
            <a class="project-link project-link--hf" href="https://huggingface.co/collections/Rubin-Wei/memorydecoder-at-scale">Hugging Face</a>
            <a class="project-link project-link--web" href="https://rubin-wei.github.io/memory-decoder-at-scale/">Webpage</a>
          </div>
        </div>
      </article>

      <article class="project-card project-card--memsft">
        <a class="project-card__visual" href="https://arxiv.org/abs/2607.25614" aria-label="Read MemSFT on arXiv">
          <span class="project-card__badge project-card__badge--preprint">Preprint · 2026</span>
          <img src="{{ '/images/publications/memsft-overview.svg' | relative_url }}" alt="Overview of the MemSFT architecture" loading="lazy">
        </a>
        <div class="project-card__copy">
          <h3>MemSFT: Mitigating Alignment Tax with an External Parametric Memory</h3>
          <p class="project-card__authors">Jiarui Wang*, Xiang Shi*, Jiaqi Cao, <strong>Rubin Wei</strong>, Xiquan Wang, Hao Sun, Jingzhi Wang, Zhiqi Yang, Qipeng Guo, Bowen Zhou, Zhouhan Lin</p>
          <p class="project-card__venue">Preprint, 2026</p>
          <div class="project-card__links">
            <a class="project-link project-link--paper" href="https://arxiv.org/abs/2607.25614">arXiv</a>
            <a class="project-link project-link--code" href="https://github.com/LUMIA-Group/MemSFT">Code</a>
            <a class="project-link project-link--hf" href="https://huggingface.co/collections/Jiarui-Wang/memsft">Hugging Face</a>
          </div>
          <p class="project-card__note">* Equal Contribution</p>
        </div>
      </article>

      <article class="project-card project-card--mlp">
        <a class="project-card__visual" href="https://arxiv.org/abs/2508.01832" aria-label="Read MLP Memory on arXiv">
          <span class="project-card__badge project-card__badge--iclr">ICLR 2026</span>
          <img src="{{ '/images/publications/mlp-memory-overview.png' | relative_url }}" alt="Overview of the MLP Memory architecture" loading="lazy">
        </a>
        <div class="project-card__copy">
          <h3>MLP Memory: A Retriever-Pretrained Memory for Large Language Models</h3>
          <p class="project-card__authors"><strong>Rubin Wei</strong>*, Jiaqi Cao*, Jiarui Wang, Jushi Kai, Qipeng Guo, Bowen Zhou, Zhouhan Lin</p>
          <p class="project-card__venue">International Conference on Learning Representations (ICLR), 2026</p>
          <div class="project-card__links">
            <a class="project-link project-link--paper" href="https://arxiv.org/abs/2508.01832">arXiv</a>
            <a class="project-link project-link--code" href="https://github.com/LUMIA-Group/MLPMemory">Code</a>
            <a class="project-link project-link--hf" href="https://huggingface.co/collections/Rubin-Wei/mlpmemory">Hugging Face</a>
          </div>
          <p class="project-card__note">* Equal Contribution</p>
        </div>
      </article>

      <h3 class="publication-year">2025</h3>

      <article class="project-card project-card--decoder">
        <a class="project-card__visual" href="https://arxiv.org/abs/2508.09874" aria-label="Read Memory Decoder on arXiv">
          <span class="project-card__badge project-card__badge--neurips">NeurIPS 2025</span>
          <img src="{{ '/images/publications/memory-decoder-overview.png' | relative_url }}" alt="Overview of the Memory Decoder architecture" loading="lazy">
        </a>
        <div class="project-card__copy">
          <h3>Memory Decoder: A Pretrained, Plug-and-Play Memory for Large Language Models</h3>
          <p class="project-card__authors">Jiaqi Cao*, Jiarui Wang*, <strong>Rubin Wei</strong>, Qipeng Guo, Kai Chen, Bowen Zhou, Zhouhan Lin</p>
          <p class="project-card__venue">Annual Conference on Neural Information Processing Systems (NeurIPS), 2025</p>
          <div class="project-card__links">
            <a class="project-link project-link--paper" href="https://arxiv.org/abs/2508.09874">arXiv</a>
            <a class="project-link project-link--code" href="https://github.com/LUMIA-Group/MemoryDecoder">Code</a>
            <a class="project-link project-link--hf" href="https://huggingface.co/collections/Clover-Hill/memorydecoder">Hugging Face</a>
          </div>
          <p class="project-card__note">* Equal Contribution</p>
        </div>
      </article>
    </div>

  </section>

</div>
